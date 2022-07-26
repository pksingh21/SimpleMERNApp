import React from "react";
import {
  Zoom,
  Button,
  Grid,
  Stack,
  ListItem as Item,
  Card,
} from "@mui/material";
import axios from "axios";
import User from "./request.jsx";
import { useDebugValue } from "react";
export default function HomePage(ucserDetails) {
  const user = ucserDetails.user;
  const logout = () => {
    console.log("log out button pressed")
    window.open(`${process.env.REACT_APP_API_URL}/auth/logout`, "_self");
  };
  const [checked, setChecked] = React.useState(false);
  const [smVal, setsmVal] = React.useState(12);
  const [RenderData, setRenderData] = React.useState([]);
  const GetGeneralData = async () => {
    const Data = await axios.get("http://localhost:8000/api/v1/users");
    const FinalData = Data.data;
    console.log(FinalData);
    setRenderData(FinalData.result);
  };
  const GetSpecificData = async () => {
    const Data = await axios.get("http://localhost:8000/api/v1/users/iitbbs");
    const FinalData = Data.data;
    console.log(FinalData);
    setRenderData(FinalData.data);
  };
  function handleClick() {
    setChecked(true);
    if (!checked) setsmVal(6);
    else setsmVal(12);
    GetGeneralData();
  }

  function BBShandleClick() {
    GetSpecificData();
  }
  function handleClear() {
    setChecked(false);
    setRenderData([]);
    setsmVal(12);
  }
  function CallBackFunc(elem) {
    const Name = elem.name ? elem.name : "Not Available";
    const PhoneNumber = elem.phoneNumber ? elem.phoneNumber : "Not Available";
    const Branch = elem.branch ? elem.branch : "Not Available";
    const City = elem.city ? elem.city : "Not Available";
    const Year = elem.year ? elem.year : "Not Available";
    const EmailId = elem.email ? elem.email : "Not Available";
    const Id = elem.id ? elem.id : "Not Available";
    const GoogleId = elem.googleid ? elem.googleid : "Not Available";
    const AccessToken = elem.accesstoken ? elem.accesstoken : "Not Available";
    const Institute = elem.institute ? elem.institute : "Not Available";
    return (
      <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
        <User
          Name={Name}
          PhoneNumber={PhoneNumber}
          Branch={Branch}
          City={City}
          Year={Year}
          EmailId={EmailId}
          Id={Id}
          GoogleId={GoogleId}
          AccessToken={AccessToken}
          Institute={Institute}
        />
      </Grid>
    );
  }
  React.useEffect(() => {}, [RenderData]);
  return (
    <>
      <Stack spacing={2}>
        <Item>
          <Grid
            container
            spacing={3}
            style={{
              alignItems: "center",
              display: "flex",
              justifyItems: "center",
              justifyContent: "center",
            }}
          >
            <Grid
              style={{
                marginTop: "20px",
                alignItems: "center",
                display: "flex",
                justifyItems: "center",
                justifyContent: "center",
              }}
              item
              xs={12}
              sm={smVal}
            >
              <Button onClick={handleClick} variant="outlined">
                {" "}
                Click to see all the Users
              </Button>
            </Grid>
            <Grid
              style={{
                marginTop: "20px",
                alignItems: "center",
                display: "flex",
                justifyItems: "center",
                justifyContent: "center",
              }}
              item
              xs={12}
              sm={6}
            >
              <Zoom in={checked}>
                <Button
                  style={{ width: "320px" }}
                  onClick={BBShandleClick}
                  variant="outlined"
                >
                  {" "}
                  Click to see only IITBBS peeps
                </Button>
              </Zoom>
            </Grid>
            <Grid
              style={{
                marginTop: "20px",
                alignItems: "center",
                display: "flex",
                justifyItems: "center",
                justifyContent: "center",
              }}
              item
              xs={12}
              sm={6}
            >
              <Zoom in={checked}>
                <Button
                  style={{}}
                  onClick={handleClear}
                  color="error"
                  variant="outlined"
                >
                  Clear all
                </Button>
              </Zoom>
            </Grid>
          </Grid>
        </Item>
        <Item>
          <Grid
            container
            style={{
              alignItems: "center",
              display: "flex",
              justifyItems: "center",
              justifyContent: "center",
            }}
          >
            {RenderData.map(CallBackFunc)}
          </Grid>
        </Item>
    {user.name} , {user.email}
    <Button onClick={logout}>Logout</Button>
      </Stack>
    </>
  );
}
