import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

export default function NavigationTab() {
  const navigate = useNavigate("/home");
  const [value, setValue] = React.useState("/home");

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
    navigate("/"+newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
        textColor="white"
      >
        <Tab value="home" label="home page" />
        <Tab value="recipes" label="recipes" />
        <Tab value="save" label="save" />
      </Tabs>
    </Box>
  );
}
