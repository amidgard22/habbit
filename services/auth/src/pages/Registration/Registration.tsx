import MasterForm from "@packages/shared/src/components/masterForm/MasterForm";
import styles from "../../shared/auth.module.scss";
import { InputsData } from "@packages/shared/src/components/masterForm/types";
import { Link } from "react-router-dom";
import { authRoutes } from "@packages/shared/src/routes/auth";
import registrationStyles from "./registration.module.scss";

const RegistrationInputs: InputsData[] = [
  {
    inputName: "Email Address",
    placeholder: "Enter your email",
    inputType: "email",
    isRequired: true,
  },
  {
    inputName: "Password",
    placeholder: "Enter your password",
    inputType: "password",
    isRequired: true,
  },
  {
    inputName: "Confirm Password",
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
  const onSubmit = (values: Record<string, any>) => console.log(values);

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
