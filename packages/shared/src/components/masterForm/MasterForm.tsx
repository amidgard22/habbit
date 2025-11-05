import { Button, Form, Input, Typography } from "antd";
import { FormTypes } from "./types";
import type { FormProps } from "antd";

const { Title }: any = Typography;

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
  const onFinish: FormProps["onFinish"] = (values) => {
    onSubmit(values);
  };

  const onFinishFailed: FormProps["onFinishFailed"] = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
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
        {inputs &&
          inputs.map(({ inputName, inputType, placeholder, isRequired }) => (
            <Form.Item
              key={inputName}
              label={inputName}
              name={inputName}
              rules={[
                {
                  required: isRequired,
                  message: `Please input your ${inputName}!`,
                },
              ]}
            >
              {inputType === "password" ? (
                <Input.Password
                  className={`${className}__input`}
                  placeholder={placeholder}
                  visibilityToggle={true}
                />
              ) : (
                <Input
                  className={`${className}__input`}
                  placeholder={placeholder}
                />
              )}
            </Form.Item>
          ))}
      </div>
      <Button className={`${className}__button`} htmlType="submit">
        {buttonText}
      </Button>

      <div>{bottomText}</div>

      {agreementText}
    </Form>
  );
};

export default MasterForm;
