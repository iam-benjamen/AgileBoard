import { Link } from "react-router-dom";
import "../../styles/auth/signup.scss";
import { FormEvent, useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (e: FormEvent) => {
    e.preventDefault();
    console.log("signed up");
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSignUp}>
        <div className="signup-form">
          <h2>Sign Up</h2>
          <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Sign Up</button>
        </div>
      </form>

      <div className="signin-link">
        <span>
          Already have an account? <Link to="/signin">Sign In</Link>
        </span>
      </div>
    </div>
  );
};

export default SignUp;
