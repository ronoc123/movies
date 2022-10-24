import React from "react";
import Wrapper from "../assests/Wrappers/Footer";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { GoFlame } from "react-icons/go";
import { RiMovie2Line } from "react-icons/ri";
import { BiMoviePlay } from "react-icons/bi";
import { useState } from "react";

const MainNav = () => {
  const [active, setActive] = useState();
  return (
    <Wrapper>
      <div className="nav-container">
        <Link
          to={"/"}
          className={active === 0 ? "link active" : "link"}
          onClick={() => setActive(0)}
        >
          <span>
            <GoFlame />
          </span>
          <span>Trending</span>
        </Link>
        <Link
          to={"/tv"}
          className={active === 1 ? "link active" : "link"}
          onClick={() => setActive(1)}
        >
          <span>
            <RiMovie2Line />
          </span>
          <span>TV Series</span>
        </Link>
        <Link
          to={"/movie"}
          className={active === 2 ? "link active" : "link"}
          onClick={() => setActive(2)}
        >
          <span>
            <BiMoviePlay />
          </span>
          <span>Movies</span>
        </Link>
        <Link
          to={"/search"}
          className={active === 3 ? "link active" : "link"}
          onClick={() => setActive(3)}
        >
          <span>
            <BsSearch />
          </span>
          <span>Search</span>
        </Link>
      </div>
    </Wrapper>
  );
};

export default MainNav;
