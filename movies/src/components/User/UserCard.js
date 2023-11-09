import React from "react";
import Wrapper from "../../assests/Wrappers/User";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import { FaUserCircle } from "react-icons/fa";
import { useAppContext } from "../../Context/appContext";
import ModeIcon from "@mui/icons-material/Mode";
import { useState } from "react";

const UserCard = () => {
  const { user, friend, updateUserInfo, updateUserImage } = useAppContext();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [firstName, setFirstName] = useState(user?.firstname);
  const [lastName, setLastName] = useState(user?.lastname);
  const [selectedImage, setSelectedImage] = useState(null);
  const [motto, setMotto] = useState(user?.motto);

  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Call your updateUserProfile function to make the API request
    updateUserImage(selectedImage);

    // Close the modal
    handleClose();
  };
  return (
    <Wrapper>
      <div className="img-con">
        {user?.profilePicture ? (
          <img
            src={`/api/users/${user.id}/profile-picture/${user.profilePicture}`}
            alt="picture"
          />
        ) : (
          <FaUserCircle />
        )}
      </div>
      <div className="info-con">
        <div className="capitalize">
          {user.firstname} {user.lastname}
        </div>
        <div>{user.motto ? user.motto : "Add Motto"}</div>
      </div>
      <div className="stat-con">
        <div className="stacked-item">
          <span className="number">{user.followers}</span>
          <span className="title">followers</span>
        </div>
        <div className="stacked-item">
          <span className="number">{user.following}</span>
          <span className="title">following</span>
        </div>
        <div className="stacked-item end">
          <span className="number">{user.favorites}</span>
          <span className="title">favorites</span>
        </div>
      </div>
      <Button
        onClick={handleOpen}
        style={{
          color: "white",
        }}
      >
        Edit{" "}
        <ModeIcon
          style={{
            fontSize: ".8rem",
          }}
        />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "1rem",
            boxShadow: 24,
            p: 4,
            background: "white",
          }}
        >
          <div
            style={{
              display: "grid",
              placeItems: "center",
              padding: "3rem",
            }}
          >
            <TextField
              id="outlined-multiline-flexible"
              label="First Name"
              multiline
              maxRows={4}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
              id="outlined-multiline-flexible"
              label="Last Name"
              multiline
              maxRows={4}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <input type="file" onChange={handleImageChange} />
            <TextField
              id="outlined-multiline-static"
              label="Motto"
              multiline
              rows={4}
              value={motto}
              onChange={(e) => setMotto(e.target.value)}
            />
            <button onClick={handleFormSubmit}>submit</button>
          </div>
        </Box>
      </Modal>
    </Wrapper>
  );
};

export default UserCard;
