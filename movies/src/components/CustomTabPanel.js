import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TierList from "./TierList";
import WatchList from "./WatchList";
import { useAppContext } from "../Context/appContext";
import FavoriteList from "./FavoriteList";

const tabPanelStyle = {
  background: "#121212", // Set the background color to grey
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
  const { user, movieWatchList, tierList } = useAppContext();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ width: "100%" }}
      style={{
        marginBottom: "10rem",
      }}
    >
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
            label="Favorites"
            {...a11yProps(1)}
            style={{
              backgroundColor: "#2B2D31",
              color: "white",
              fontSize: ".6em", // Text color for the tabs
              // Text color for the tabs
            }}
          />
          <Tab
            label="Tier List"
            {...a11yProps(2)}
            style={{
              backgroundColor: "#2B2D31",
              color: "white",
              fontSize: ".6em", // Text color for the tabs
              // Text color for the tabs
            }}
          />
          <Tab
            label="Watch List"
            {...a11yProps(3)}
            style={{
              backgroundColor: "#2B2D31",
              color: "white",
              fontSize: ".6em", // Text color for the tabs

              // Text color for the tabs
            }}
          />
          {/* {user && (
            <Tab
              label="Recommended"
              {...a11yProps(4)}
              style={{
                backgroundColor: "#2B2D31",
                color: "white",
                fontSize: ".6em",
                // Text color for the tabs
                // Text color for the tabs
              }}
            />
          )} */}
        </Tabs>
      </Box>

      <CustomTabPanel value={value} index={0}>
        <FavoriteList movieWatchList={movieWatchList} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <TierList tierList={tierList} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <WatchList movieWatchList={movieWatchList} />
      </CustomTabPanel>
      {/* {user && (
        <CustomTabPanel value={value} index={3}>
          Recommended
        </CustomTabPanel>
      )} */}
    </Box>
  );
}
