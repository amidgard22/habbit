import MasterForm from "@packages/shared/src/components/masterForm/MasterForm";
import styles from "../../shared/auth.module.scss";
import { InputsData } from "@packages/shared/src/components/masterForm/types";
import { Link, useNavigate } from "react-router-dom";
import { authRoutes } from "@packages/shared/src/routes/auth";
import registrationStyles from "./registration.module.scss";
import { useRegisterMutation } from "@packages/shared/src/store/api/auth/authAPI";
import { RegisterRequest } from "@packages/shared/src/store/api/auth/types";

const RegistrationInputs: InputsData[] = [
  {
    inputName: "email",
    placeholder: "Enter your email",
    inputType: "email",
    isRequired: true,
  },
  {
    inputName: "password",
    placeholder: "Enter your password",
    inputType: "password",
    isRequired: true,
  },
  {
    inputName: "confirmPassword",
    placeholder: "Confirm your password",
    inputType: "password",
    isRequired: true,
  },
];

const LoginText: React.ReactNode = (
  <p className={registrationStyles.textWrapper}>
    Already have an account?{" "}
    <Link className={registrationStyles.purpleLink} to={authRoutes.login}>
      Log In
    </Link>
  </p>
);

const PrivatPolicy: React.ReactNode = (
  <p className={registrationStyles.textWrapper}>
    By creating an account, you agree to our{" "}
    <Link className={registrationStyles.grayLink} to="/">
      Terms of Service
    </Link>{" "}
    and{" "}
    <Link className={registrationStyles.grayLink} to="/">
      Privacy Policy
    </Link>
    .
  </p>
);

const Registration = () => {
  const [register, { isLoading, error }] = useRegisterMutation();
  const navigate = useNavigate();

  const onSubmit = async (values: Record<string, any>) => {
    console.log(values);
    const credentials: RegisterRequest = {
      email: values.email,
      password: values.password,
    };

    try {
      const privet = await register(credentials).unwrap();
      console.log(privet);
      if (privet.status === 200) {
        navigate("/auth/login", { replace: true });
      }
    } catch (err) {
      console.log("reg is failed", err);
    }
  };

  return (
    <MasterForm
      title="Create your account"
      description="Start building better habits today."
      inputs={RegistrationInputs}
      buttonText="Create Account"
      bottomText={LoginText}
      onSubmit={onSubmit}
      className={styles.authWrapper}
      agreementText={PrivatPolicy}
    />
  );
};

export default Registration;
