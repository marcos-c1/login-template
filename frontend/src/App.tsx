import { GoogleOAuthProvider } from "@react-oauth/google";
import Home from "./pages/LoginPage";

function App() {
  return (
    <GoogleOAuthProvider
      clientId={
        process.env.REACT_APP_CLIENT_ID_GOOGLE ?? "Client ID App not defined"
      }
    >
      <Home />
    </GoogleOAuthProvider>
  );
}

export default App;
