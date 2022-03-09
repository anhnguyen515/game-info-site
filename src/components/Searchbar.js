import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function Searchbar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function handleChange(event) {
    setSearch(event.target.value);
  }

  function handleClick() {
    if (search === "") {
      return;
    } else {
      navigate(`/search/${search.split(" ").join("-")}`);
      setSearch("");
    }
  }

  function handleKeyPress(event) {
    if (event.target.value === "") {
      return;
    } else {
      if (event.key === "Enter") {
        navigate(`/search/${search.replaceAll(" ", "-")}`);
        setSearch("");
      }
    }
  }

  return (
    <>
      <div className="nav--search">
        <BsSearch
          className="nav--searchIcon"
          onClick={handleClick}
          style={{ cursor: "pointer" }}
        />
        <input
          className="nav--searchBar"
          type="search"
          value={search}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          placeholder="Search your games"
        />
      </div>
    </>
  );
}
