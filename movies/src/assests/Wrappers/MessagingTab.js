import styled from "styled-components";

const Wrapper = styled.div`
  .messaging-tab {
    position: fixed;
    bottom: 5rem;
    right: 1rem;
    transition: bottom 0.3s;
    background-color: #fff;
    border-top: 1px solid #ccc;
    box-shadow: 0px -2px 5px 0px rgba(0, 0, 0, 0.2);
    width: 300px;
    transform: translate(0, 100%);
    transform-origin: right top;
  }

  .messaging-tab.extended {
    bottom: 0;
    transform: translate(0, 0);
  }

  .toggle-button {
    position: absolute;
    top: -40px;
    right: 0;
    width: 100%;
  }

  .content {
    padding: 16px;
  }
`;

export default Wrapper;
