import Banner from "../components/Banner";
import * as Sentry from "@sentry/react";
import LoginForm from "../components/LoginForm";

const Login = () => {

    return (
        <Sentry.ErrorBoundary>
            <Banner headline="Login" />
            <LoginForm />
        </Sentry.ErrorBoundary>
    );
}
 
export default Login;