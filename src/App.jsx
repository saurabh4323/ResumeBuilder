import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import Header from "./pages/Header";

function App() {
  const { user, isSignedIn, isLoaded } = useUser();

  if (!isSignedIn && isLoaded) {
    return <Navigate to={"/sign"}> </Navigate>;
  }
  // if (isSignedIn || isLoaded) {
  //   return <Navigate to={"/i"}> </Navigate>;
  // }

  return (
    <>
      <Header></Header>
      <Outlet />
    </>
  );
}

export default App;
