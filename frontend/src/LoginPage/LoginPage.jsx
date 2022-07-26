import { Button } from "@mui/material";
import { Link } from "react-router-dom";
export default function Login() {
  const googleAuth = () => {
    window.open(
      `${process.env.REACT_APP_API_URL}/auth/google/callback`,
      "_self"
    );
  };
  return (
    <>
      <Button onClick={googleAuth}>Login with google</Button>
    </>
  );
}
