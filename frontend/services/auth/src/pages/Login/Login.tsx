import { MasterForm } from "@packages/shared/src/components/masterForm/MasterForm";
import { InputsData } from "@packages/shared/src/components/masterForm/types";
import { Link, useNavigate } from "react-router-dom";
import { authRoutes } from "@packages/shared/src/routes/auth";
import styles from "../../shared/auth.module.scss";
import loginStyles from "./Login.module.scss";
import { useDispatch } from "react-redux";
import { setUser } from "@packages/shared/src/store/slices/userSlice";
import { useLoginMutation } from "@packages/shared/src/store/api/auth/authAPI";
import { LoginRequest } from "@packages/shared/src/store/api/auth/types";

const loginInputs: InputsData[] = [
  {
    inputName: "email",
    placeholder: "you@example.com",
    inputType: "email",
    isRequired: true,
  },
  {
    inputName: "password",
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
  const [login, { isLoading, error }] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (values: Record<string, any>) => {
    const credentials: LoginRequest = {
      email: values.email,
      password: values.password,
    };

    try {
      const result = await login(credentials).unwrap();

      dispatch(
        setUser({
          token: result.accessToken,
          user: result.user,
        })
      );
      navigate("/", { replace: true });
    } catch (err) {
      console.log("login is failed", err);
    }
  };

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
