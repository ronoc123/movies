import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  display: grid;
  place-items: center;
  right: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 4;
  /* opacity: 0.2; */
  .info-container {
    opacity: 1;
    width: 80%;
    max-width: 80rem;
    background: white;
    height: 70%;
    color: black;
    display: grid;
    grid-template-columns: 1fr 2fr;
    border-radius: 1rem;
    position: relative;
    overflow: hidden;
  }
  .close-icon {
    position: absolute;
    top: 0.5rem;
    right: 1rem;
    font-size: 2rem;
    color: darkred;
    cursor: pointer;
  }
  .image {
    width: 100%;
    height: 100%;
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
  }

  .text-container {
    padding: 1rem;
  }

  @media screen and (max-width: 1100px) {
    .info-container {
      height: 45%;
    }
  }

  @media screen and (max-width: 800px) {
    .info-container {
      height: 60%;
      grid-template-columns: 1fr;
    }
    .image {
      display: none;
    }
  }
`;

export default Wrapper;
