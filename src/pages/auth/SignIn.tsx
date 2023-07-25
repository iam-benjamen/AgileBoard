import { FormEvent, useState } from "react";
import Spinner from "../../components/common/Spinner";
import "../../styles/auth/signin.scss";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSignIn = (e: FormEvent) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div className="signin-container">
      <form onSubmit={handleSignIn}>
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
          <button type="submit">{!loading ? "Sign In" : <Spinner/>}</button>
        </div>
      </form>
      <div className="signup-link">
        <span>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </span>
      </div>
    </div>
  );
};

export default SignIn;
