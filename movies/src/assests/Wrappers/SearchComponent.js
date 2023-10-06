import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  background: #2b2d31;
  color: white;
  min-width: 15rem;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  z-index: 30;

  .person-container {
    padding: 1rem;
    display: grid;
    grid-template-columns: 3rem 15rem 4rem;
    align-items: center;
    transition: var(--transition);
  }
  .icon {
    font-size: 1.5rem;
  }
  .text-container {
    display: grid;
    align-items: center;
    text-transform: capitalize;
  }

  .profile-button {
    background-color: #000000; /* Dark grey background color */
    color: #fff; /* White text color */
    border: 1px solid #333; /* Dark grey border */
    padding: 5px 10px; /* Adjust padding as needed */
    border-radius: 4px; /* Rounded corners */
    cursor: pointer; /* Cursor style on hover */
    transition: background-color 0.3s, color 0.3s; /* Smooth transition on hover */
  }
`;

export default Wrapper;
