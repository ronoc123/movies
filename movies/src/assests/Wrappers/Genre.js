import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;

  place-content: center;
  margin-top: 1rem;
  .genre-container {
    display: flex;
    flex-wrap: wrap;
    /* border: 2px solid yellow; */
    margin-top: 1rem;
    gap: 0.5rem;
    max-width: 40vw;
    font-size: 0.8rem;
    justify-content: center;
  }
  .genre-name {
    display: grid;
    place-items: center;
    background: #c3dadf;
    color: black;
    padding: 0.5rem;
    border-radius: 0.5rem;
    cursor: pointer;
  }
  .active-genre {
    position: relative;
    background: white;
  }
  .hide {
    display: none;
  }
  .show {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    color: red;
  }

  @media screen and (max-width: 1000px) {
    .genre-container {
      font-size: 0.65rem;
      font-weight: 600;
      max-width: 80vw;
    }
  }
`;

export default Wrapper;
