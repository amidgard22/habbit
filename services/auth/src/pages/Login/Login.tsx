import { MasterForm } from "@packages/shared/src/components/masterForm/MasterForm";
import { InputsData } from "@packages/shared/src/components/masterForm/types";
import { Link } from "react-router-dom";
import { authRoutes } from "@packages/shared/src/routes/auth";
import styles from "./Login.module.scss";
const loginInputs: InputsData[] = [
  {
    inputName: "Email Address",
    placeholder: "you@example.com",
    inputType: "email",
    isRequired: true,
  },
  {
    inputName: "Password",
    placeholder: "Enter your password",
    inputType: "password",
    isRequired: true,
  },
];

const createAccount: React.ReactNode = (
  <p>
    Don’t have an account? <Link to={authRoutes.registration}>Sign Up</Link>
  </p>
);

const Login = () => {
  const onSubmit = (values: Record<string, any>) => console.log(values);

  return (
    <MasterForm
      title="Welcome back"
      description="Sign in to continue to your dashboard.
"
      inputs={loginInputs}
      buttonText="Sign In"
      bottomText={createAccount}
      onSubmit={onSubmit}
      className={styles.loginWrapper}
    />
  );
};

export default Login;
