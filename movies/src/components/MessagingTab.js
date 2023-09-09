import React, { useState } from "react";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Wrapper from "../assests/Wrappers/MessagingTab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const buttonStyle = {
  backgroundColor: "#2B2D31", // Charcoal grey background
  color: "#fff",
  borderTop: "1px solid grey",
  borderRight: "1px solid grey",
  borderLeft: "1px solid grey",
  borderBottom: "4px solid #2B2D31",
  borderRadius: "0rem",
  borderTopRightRadius: ".5rem",
  borderTopLeftRadius: ".5rem",
};

function MessagingTab() {
  const [isExtended, setIsExtended] = useState(false);

  const handleToggleExtended = () => {
    setIsExtended(!isExtended);
  };

  return (
    <Wrapper>
      {/* <ThemeProvider theme={theme}> */}
      <div className={`messaging-tab ${isExtended ? "extended" : ""}`}>
        <Button
          variant="outlined"
          onClick={handleToggleExtended}
          className="toggle-button"
          style={buttonStyle}
        >
          {isExtended ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
        </Button>
        <div className="content">
          <List>
            <ListItem>
              <ListItemText primary="Friend 1" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Friend 2" />
            </ListItem>
            {/* Add more friends here */}
          </List>
        </div>
      </div>
      {/* </ThemeProvider> */}
    </Wrapper>
  );
}

export default MessagingTab;
