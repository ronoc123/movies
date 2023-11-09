import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  .user-container {
  }
  .profile-container {
    margin-top: 3rem;
    width: 65%;
    display: grid;
    gap: 1rem;
    /* grid-template-columns: 1fr 4fr 1fr; */
  }
  .rating-main {
    position: fixed;
    display: grid;
    place-items: center;
    right: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: 4;
  }
  .close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    color: darkred;

    cursor: pointer;
  }

  .form-input {
    position: relative;
    background: #121212;
    width: 30rem;
    min-height: 15rem;
    border-radius: 1rem;
    display: grid;
    place-items: center;
    background: white;
  }

  @media screen and (max-width: 900px) {
    .profile-container {
      width: 95%;
    }
  }
`;

export default Wrapper;
