import { Link, Navigate, useNavigate } from "react-router-dom";
import "../../styles/auth/signin.scss";
import { useState } from "react";
import { auth } from "../../main";

import {
  browserLocalPersistence,
  // browserSessionPersistence,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";
import Spinner from "../../components/common/Spinner";
import Toast from "../../components/common/Toast";
import "../../styles/auth/signup.scss";
import useAuth from "../../hooks/useAuth";

const SignIn = () => {
  const [toastType, setToastType] = useState<"success" | "error">("success");
  const [toastMessage, setToastMessage] = useState<string>("");
  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("demo@user.com");
  const [password, setPassword] = useState("password");

  const navigate = useNavigate();
  const { user } = useAuth();

  const handleSignIn = async function (e: React.FormEvent): Promise<void> {
    e.preventDefault();

    try {
      setLoading(true);
      await setPersistence(auth, browserLocalPersistence);
      await signInWithEmailAndPassword(auth, email, password);

      setShowToast(true);
      setToastMessage("Signed up successfully");
      setToastType("success");
      navigate("/dashboard");

    } catch (error: unknown) {
      let errorMessage = "unknown error";
      if (typeof error === "string") {
        errorMessage = errorMessage.toUpperCase();
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }

      setShowToast(true);
      setToastType("error");
      setToastMessage(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  if (user) {
    return <Navigate to={"/dashboard"} replace />;
  }

  return (
    <>
      <div className="signin-container">
        <form onSubmit={(e: React.FormEvent) => void handleSignIn(e)}>
          <div className="signin-form">
            <h2>Sign In</h2>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">{!loading ? "Sign In" : <Spinner />}</button>
          </div>
        </form>
        <div className="signup-link">
          <span>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </span>
        </div>
      </div>
      {showToast && (
        <Toast
          onClose={() => setShowToast(false)}
          duration={2000}
          message={toastMessage}
          type={toastType}
        />
      )}
    </>
  );
};

export default SignIn;
