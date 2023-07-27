import {
//   browserSessionPersistence,
  browserLocalPersistence,
  createUserWithEmailAndPassword,
  setPersistence,
} from "firebase/auth";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth } from "../../main";
import Spinner from "../../components/common/Spinner";
import Toast from "../../components/common/Toast";
import "../../styles/auth/signup.scss";
import useAuth from "../../hooks/useAuth";

const SignUp = () => {
  const [toastType, setToastType] = useState<"success" | "error">("success");
  const [toastMessage, setToastMessage] = useState<string>("");
  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const { user } = useAuth();


  const handleSignUp = async function (e: React.FormEvent): Promise<void> {
    e.preventDefault();

    try {
      setLoading(true);
      await setPersistence(auth, browserLocalPersistence);
      await createUserWithEmailAndPassword(auth, email, password);

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
      <div className="signup-container">
        <form onSubmit={(e: React.FormEvent) => void handleSignUp(e)}>
          <div className="signup-form">
            <h2>Sign Up</h2>
            <input
              placeholder="Email"
              type="email"
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
            <button type="submit">{loading ? <Spinner /> : "Sign Up"}</button>
          </div>
        </form>

        <div className="signin-link">
          <span>
            Already have an account? <Link to="/">Sign In</Link>
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

export default SignUp;
