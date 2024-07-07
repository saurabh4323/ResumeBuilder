import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import Header from "./pages/Header";
import Footer from "./pages/Footer";

function App() {
  const { user, isSignedIn, isLoaded } = useUser();

  if (!isSignedIn && isLoaded) {
    return <Navigate to="/sign" />;
  }

  return (
    <>
      <Header />

      <Outlet />
    </>
  );
}

export default App;
