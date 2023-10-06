import React from "react";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../Context/appContext";

const SearchItem = ({ id, firstname, lastname }) => {
  const navigate = useNavigate();
  const { user } = useAppContext();

  const handleClick = () => {
    if (id === user?.id) {
      navigate("/profile");
    } else {
      navigate(`/user/${id}`);
    }
  };
  return (
    <div className="person-container">
      <div className="icon">
        <CgProfile />
      </div>
      <div className="text-container">
        {firstname} {lastname}
      </div>
      <button onMouseDown={handleClick} className="profile-button">
        View Profile
      </button>
    </div>
  );
};

export default SearchItem;
