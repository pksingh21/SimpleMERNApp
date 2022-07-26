import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
import HomePage from "./HomePage/homePage.jsx";
import Login from "./LoginPage/LoginPage";
import reportWebVitals from "./reportWebVitals";
function App() {
  const [user, setUser] = useState(null);
  const getUser = async () => {
    try {
      const url = `${process.env.REACT_APP_API_URL}/auth/login/success`;
      console.table(url)
      const { data } = await axios.get(url, { withCredentials: true });
      setUser(data.user._json);
      console.log(data)
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getUser();
    console.log(user)
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                user ? <HomePage user={user} /> : <Navigate to="/login" />
              }
            />
            <Route
              exact
              path="/login"
              element={user ? <Navigate to="/" /> : <Login />}
            />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
