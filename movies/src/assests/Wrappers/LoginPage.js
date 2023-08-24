import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed; /* Position the div relative to the viewport */
  top: 0;
  left: 0;
  width: 100%; /* Cover the entire width of the viewport */
  height: 100%; /* Cover the entire height of the viewport */
  background: #f2f2f2;
  z-index: 10;
  display: grid;
  place-items: center;
  color: black;
  .home-btn {
    position: absolute;
    top: 1rem;
    right: 2rem;
    background-color: #121212; /* Yellow */
    color: white; /* Text color */
    padding: 12px 24px; /* Add some padding to the button */
    border: none; /* Remove default border */
    border-radius: 4px; /* Add border radius */
    font-size: 16px; /* Set font size */
    cursor: pointer; /* Change cursor on hover */
    transition: background 0.3s;
    font-weight: 500;
  }
  .form {
    background: white;
    padding: 3rem;
    border-radius: 0.5rem;
    box-shadow: var(--shadow-1);
    display: grid;
    place-items: center;
  }
  .center {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  .login-btn {
    cursor: pointer;

    font-weight: 500;
  }
  .text {
    margin-top: 1rem;
  }
  .login-button {
    background-color: #121212; /* Yellow */
    color: white; /* Text color */
    padding: 12px 24px; /* Add some padding to the button */
    border: none; /* Remove default border */
    border-radius: 4px; /* Add border radius */
    font-size: 16px; /* Set font size */
    cursor: pointer; /* Change cursor on hover */
    transition: background 0.3s;
    margin-top: 1rem; /* Add smooth transition on background change */
  }

  /* Darken the button on hover */
  .login-button:hover {
    background-color: #ffa000;
    color: black; /* Darkened yellow on hover */
  }
  .home-btn:hover {
    background-color: #ffa000;
    color: black; /* Darkened yellow on hover */
  }
`;

export default Wrapper;
