import { MasterForm } from "@packages/shared/src/components/masterForm/MasterForm";
import { InputsData } from "@packages/shared/src/components/masterForm/types";
import { Link } from "react-router-dom";
import { authRoutes } from "@packages/shared/src/routes/auth";
import styles from "../../shared/auth.module.scss";
import loginStyles from "./Login.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@packages/shared/src/store/slices/userSlice";
import { useEffect } from "react";

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
  <p className={loginStyles.textWrapper}>
    Don’t have an account? {""}
    <Link className={loginStyles.link} to={authRoutes.registration}>
      Sign Up
    </Link>
  </p>
);

const Login = () => {
  const dispatch = useDispatch();

  const onSubmit = (values: Record<string, any>) => {
    console.log("Form values:", values);

    const fakeToken = "fake-token-123";
    dispatch(setUser(fakeToken));

    console.log("User authorized!");
  };

  useEffect(() => {}, []);
  return (
    <MasterForm
      title="Welcome back"
      description="Sign in to continue to your dashboard.
"
      inputs={loginInputs}
      buttonText="Sign In"
      bottomText={createAccount}
      onSubmit={onSubmit}
      className={styles.authWrapper}
    />
  );
};

export default Login;
