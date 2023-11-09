import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  .fav-icon {
    display: none;
  }

  .list-container {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .icons-container {
    /* display: flex; */
  }
  .icon {
    cursor: pointer;
    color: black;
  }
  /* .icon:hover {
    transition: var(--transition);
    color: white;
  } */

  img {
    width: 12rem;
    border-radius: 0.5rem;
    width: 100%;
    height: 100%;
  }
  .list-container:hover {
    .fav-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      position: absolute;
      font-size: 2rem;
      border-radius: 0.5rem;
      width: 100%;
      height: 100%;
      background: rgba(128, 128, 128, 0.5);
    }
  }
  .rating {
    position: absolute;
    bottom: 0;
    cursor: pointer;
  }
  .rating-popup {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .yellow {
    color: gold;
  }
  .black {
    color: black;
  }
  @media screen and (max-width: 900px) {
    img {
      width: 8rem;
    }
  }
`;

export default Wrapper;
