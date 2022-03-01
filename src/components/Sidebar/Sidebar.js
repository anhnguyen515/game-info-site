import React from "react";
import { Navbar } from "react-bootstrap";
import Navigation from "./Navigation";

export default function Sidebar() {
  return (
    <Navbar variant="dark" className="sidebar">
      <Navigation />
    </Navbar>
  );
}
