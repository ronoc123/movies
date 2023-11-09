import React from "react";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../Context/appContext";

const SearchItem = ({ id, firstname, lastname }) => {
  const navigate = useNavigate();
  const { user } = useAppContext();
  const handleClick = () => {
    if (user.id === id) {
      navigate("/profile");
    } else {
      navigate(`/user/${id}`);
    }
  };
  return (
    <button className="person-container" onMouseDown={handleClick}>
      <div className="icon">
        <CgProfile />
      </div>
      <div className="text-container">
        {firstname} {lastname}
      </div>
    </button>
  );
};

export default SearchItem;
