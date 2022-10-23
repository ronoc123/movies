import styled from "styled-components";

const Wrapper = styled.div`
  height: 5rem;
  width: 100%;
  position: fixed;
  background: #121212;
  color: white;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;
  font-size: 3rem;
  z-index: 2;

  .scroll {
    cursor: pointer;
  }
  .icon {
    color: var(--icon-clr);
  }
  .title {
    color: var(--icon-clr);
  }

  @media screen and (max-width: 1100px) {
    font-size: 1.6rem;
  }
`;

export default Wrapper;
