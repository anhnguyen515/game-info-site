import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function Searchbar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function handleChange(event) {
    setSearch(event.target.value);
  }

  function handleKeyPress(event) {
    if (event.target.value === "") {
      return;
    } else {
      if (event.key === "Enter") {
        navigate(`/search/${search.split(" ").join("-")}`);
        setSearch("");
      }
    }
  }

  return (
    <div className="nav--search">
      <BsSearch className="nav--searchIcon" />
      <input
        className="nav--searchBar"
        type="search"
        value={search}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        placeholder="Search your games"
      />
    </div>
  );
}
