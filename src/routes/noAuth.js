import VerifyPage from "../pages/verify";
import LoginPage from "../pages/login";
import RegisterPage from "../pages/register";
import ForgotPassword from "../pages/forgotPassword";
import ResetPasswordPage from "../pages/resetPassword";

const routes = {
  path: "/",
  element: "",
  children: [
    {
      path: "login",
      element: LoginPage,
    },
    {
      path: "register",
      element: RegisterPage,
    },
    {
      path: "forgot-password",
      element: ForgotPassword,
    },
    {
      path: "reset-password",
      element: ResetPasswordPage,
    },
    {
      path: "verify",
      element: VerifyPage,
    },
  ],
};
export default routes;
