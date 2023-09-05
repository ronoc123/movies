import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TierList from "./TierList";
import WatchList from "./WatchList";
import { useAppContext } from "../Context/appContext";

import UserCard from "./UserCard";

const tabPanelStyle = {
  background: "#2B2D31", // Set the background color to grey
  color: "white", // Set the text color to white
};

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      style={tabPanelStyle} // Apply the custom style
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const { user } = useAppContext();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          bgcolor: "#2B2D31",
          color: "white",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            label={user.firstname + " " + user.lastname}
            {...a11yProps(0)}
            style={{
              backgroundColor: "#2B2D31",
              color: "white", // Text color for the tabs
            }}
          />
          <Tab
            label="Favorites"
            {...a11yProps(1)}
            style={{
              backgroundColor: "#2B2D31",
              color: "white", // Text color for the tabs
            }}
          />
          <Tab
            label="Tier List"
            {...a11yProps(2)}
            style={{
              backgroundColor: "#2B2D31",
              color: "white", // Text color for the tabs
            }}
          />
          <Tab
            label="Watch List"
            {...a11yProps(3)}
            style={{
              backgroundColor: "#2B2D31",
              color: "white", // Text color for the tabs
            }}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <UserCard />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <WatchList />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <TierList />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        Item Three
      </CustomTabPanel>
    </Box>
  );
}
