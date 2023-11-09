import React from "react";
import Wrapper from "../assests/Wrappers/SearchComponent";
import { useAppContext } from "../Context/appContext";
import SearchItem from "./SearchItem";
const SearchComponent = () => {
  const { currentSearchResults } = useAppContext();

  return (
    <Wrapper>
      <div className="main">
        {currentSearchResults?.map((item) => {
          return <SearchItem {...item} key={item.id} />;
        })}
      </div>
    </Wrapper>
  );
};

export default SearchComponent;
