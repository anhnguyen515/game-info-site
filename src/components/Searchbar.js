import React from "react";
import { BsSearch } from "react-icons/bs";

export default function Searchbar() {
  return (
    <div className="nav--search">
      <BsSearch className="nav--searchIcon" />
      <input
        className="nav--searchBar"
        type="search"
        placeholder="Search your games"
      />
    </div>
  );
}
