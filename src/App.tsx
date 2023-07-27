import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import React from "react";
import useAuth from "./hooks/useAuth";
import { User } from "firebase/auth";
import PageLoader from "./components/others/PageLoader";

interface PrivateRouteProps {
  user: User | null;
  redirectPath: string;
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<PrivateRouteProps> = ({
  user,
  redirectPath,
  children,
}) => {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }
  return <>{children}</>;
};

function App() {
  const { user, loading } = useAuth();

  if (loading) {
    return <PageLoader />;
  }
  
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute user={user} redirectPath="/signin">
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
