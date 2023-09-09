import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  border-radius: 0.3rem;
  background: var(--clr-grey);
  border-top: 1px solid black;
  border-right: 1px solid black;
  border-left: 1px solid black;
  .rating {
    display: grid;
  }
  .rows {
    display: grid;
    grid-auto-rows: 7rem;
  }
  .tier-bracket {
    border-bottom: 1px solid black;
  }

  .tier {
    display: grid;
    place-items: center;
    height: 7rem;
    width: 7rem;
    border-bottom: 1px solid black;
    border-right: 1px solid black;
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
`;

export default Wrapper;
