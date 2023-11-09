import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  place-items: center;

  .main {
    margin-top: 2rem;
    width: 50%;
    background: #121212;
    border-radius: 0.5rem;
    border: 1px solid #2b2d31;
  }
  .main-header {
    display: grid;
    grid-template-columns: 2fr 1fr;
    border-bottom: 1px solid #2b2d31;
    padding: 1rem;
  }
  .col-1 {
  }
  .col-2 {
    display: flex;
    place-items: center;
  }
  .friend-container {
    display: grid;
    grid-template-columns: 5fr 1fr;
    padding: 1rem;
  }
  .buttons {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    place-items: center;
  }
  .message-btn {
    border: 1px solid #000000;
    border-radius: 1rem;
    background: #2b2d31;
    color: white;

    padding: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 1rem;

    cursor: pointer;
    transition: var(--transition);
  }

  .message-btn:hover {
    background: darkgrey;
    color: black;
  }
  .point {
    cursor: pointer;
  }
  .dot-button {
    position: relative;
  }
  .closed {
    display: none;
  }

  .open {
    display: grid;
    grid-template-columns: 4fr 1fr;
    place-items: center;
    position: absolute;
    bottom: -3rem;
    left: -10rem;
    background: white;
    column-gap: 1rem;
    color: black;
    padding: 0.5rem;
    padding-left: 0.5rem;
    padding-right: 2rem;
    border-top-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }
  .icon {
    display: grid;
    place-items: center;
    font-size: 1.5rem;
    cursor: pointer;
  }
  .profile-icon {
    display: grid;
    place-items: center;
    padding: 1rem;
    font-size: 2rem;
  }
  .info-container {
    display: flex;
    grid-template-columns: 1fr 8fr;
    place-items: center;
  }
  .follow-btn {
    padding: 2rem;
  }

  @media screen and (max-width: 1300px) {
    .main {
      width: 80%;
    }
  }
  @media screen and (max-width: 900px) {
    .main {
      width: 95%;
    }
  }
`;

export default Wrapper;
