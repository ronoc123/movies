import Wrapper from "../assests/Wrappers/Header";
import { RiMovieFill } from "react-icons/ri";
import { BiCameraMovie } from "react-icons/bi";

const Header = () => {
  return (
    <Wrapper>
      <div className="icon">
        <RiMovieFill />
      </div>
      <div className="title scroll" onClick={() => window.scroll(0, 0)}>
        Movie Hub
      </div>
      <div className="icon">
        <BiCameraMovie />
      </div>
    </Wrapper>
  );
};

export default Header;
