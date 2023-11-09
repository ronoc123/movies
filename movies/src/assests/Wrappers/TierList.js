import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  border-radius: 0.3rem;
  background: var(--clr-grey);

  .rows {
    display: grid;
  }
  .tier-bracket {
    display: grid;
    grid-template-columns: 7rem auto;
  }
  .children {
    display: flex;
    flex-wrap: wrap;
  }

  .tier {
    display: grid;
    place-items: center;
    min-height: 7rem;
    min-width: 7rem;
    border-bottom: 1px solid black;

    color: black;
  }
  .s {
    background: #ff7f7f;
  }
  .a {
    background: #ffbf7f;
  }
  .b {
    background: #ffdf7f;
  }
  .c {
    background: #ffff7f;
  }
  .d {
    background: #bfff7f;
  }
  .f {
    background: #7fff7f;
  }

  .movie {
    height: 10rem;
    width: 6.74rem;
  }
  .img {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 1200px) {
    .movie {
      height: 7rem;
      width: 5rem;
    }
  }
`;

export default Wrapper;
