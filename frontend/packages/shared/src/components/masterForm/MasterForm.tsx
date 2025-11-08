import { Button, Form, Input, Typography } from "antd";
import type { FormProps } from "antd";
import { FormTypes } from "./types";
import { Rule, RuleObject } from "antd/es/form";

const { Title } = Typography;

export const MasterForm: React.FC<FormTypes> = ({
  title,
  description,
  inputs = [],
  buttonText,
  bottomText,
  agreementText,
  onSubmit,
  className,
}) => {
  const [form] = Form.useForm();

  const onFinish: FormProps["onFinish"] = (values) => {
    onSubmit(values);
  };

  const onFinishFailed: FormProps["onFinishFailed"] = (
    errorInfo,
    e?: React.FormEvent
  ) => {
    if (e) e.preventDefault();
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      form={form}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      layout="vertical"
      className={className}
      requiredMark={false}
    >
      <Title className={`${className}__title`} level={1}>
        {title}
      </Title>
      <Title className={`${className}__description`}>{description}</Title>

      <div className={`${className}__inputsWrapper`}>
        {inputs.map(({ inputName, inputType, placeholder, isRequired }) => {
          const rules: Rule[] = [
            {
              required: isRequired,
              message: `Please input your ${inputName}!`,
            },
          ];

          // Проверка для confirmPassword
          if (inputName === "confirmPassword") {
            rules.push({
              validator: (_rule: RuleObject, value: any) => {
                if (!value || form.getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("Passwords do not match!"));
              },
            });
          }

          return (
            <Form.Item
              key={inputName}
              label={inputName}
              name={inputName}
              rules={rules}
            >
              {inputType === "password" ? (
                <Input.Password placeholder={placeholder} visibilityToggle />
              ) : (
                <Input placeholder={placeholder} />
              )}
            </Form.Item>
          );
        })}
      </div>

      <Button className={`${className}__button`} htmlType="submit">
        {buttonText}
      </Button>

      {bottomText && <div>{bottomText}</div>}
      {agreementText}
    </Form>
  );
};

export default MasterForm;
