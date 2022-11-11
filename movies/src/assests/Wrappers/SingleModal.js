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
    width: 80%;
    max-width: 80rem;
    background: white;
    /* min-height: 70%; */
    color: black;
    display: grid;
    grid-template-columns: 1fr 2fr;
    border-radius: 1rem;
    position: relative;
    overflow: hidden;
  }
  .close-icon {
    position: absolute;
    top: 0.2rem;
    right: 0.2rem;
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
  .heading-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
  }

  .rating {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .star {
    display: grid;
    align-self: center;
    justify-self: right;
    color: #f6ca2a;
    font-size: 3rem;
  }
  .nums {
    display: grid;
    align-self: center;
    /* place-items: center; */
    font-size: 2rem;
  }
  .genres {
    margin-top: 0.5rem;
    display: flex;
    gap: 0.5rem;

    flex-wrap: wrap;
  }
  .single-genre {
    background: #add8e6;
    border-radius: 1rem;
    padding: 0.5rem;
  }
  .end {
    margin-top: 2rem;
    font-size: 1.3rem;

    padding-bottom: 2rem;
  }
  .description {
    margin-top: 1rem;
  }
  .release {
    margin-top: 0.5rem;
  }
  .episode {
    margin-top: 1rem;
    span {
      background: #d3d3d3;
      padding: 0.5rem;
      border-radius: 0.5rem;
    }
  }
  .season {
    span {
      background: #d3d3d3;
      padding: 0.5rem;
      border-radius: 0.5rem;
    }
    margin-bottom: 1rem;
  }
  .video-link {
    background: #add8e6;
    color: black;
    padding: 0.5rem;
    border-radius: 0.5rem;
  }
  .rec {
    font-weight: 500;
    cursor: pointer;
  }
  .rec-container {
    /* margin-top: 2rem; */
    display: flex;
    flex-wrap: wrap;
    font-size: 1.2rem;
  }

  @media screen and (max-width: 1100px) {
  }

  @media screen and (max-width: 800px) {
    .info-container {
      /* min-height: 60%; */
      grid-template-columns: 1fr;
    }
    .image {
      display: none;
    }
    .text-title {
      font-size: 1.5rem;
    }
    .star {
      font-size: 1.8rem;
    }
    .nums {
      font-size: 1rem;
      justify-self: left;
    }
    .rec-container {
      font-size: 0.8rem;
    }
    .episode,
    .season,
    .end {
      font-size: 1rem;
    }
    .single-genre,
    .video-link {
      font-size: 0.7rem;
      padding: 0.3rem;
      border-radius: 0.3rem;
    }
    .description {
      font-size: 0.8rem;
    }
    .text-title {
      font-size: 1rem;
    }
  }
`;

export default Wrapper;
