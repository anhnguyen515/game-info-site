import React from "react";
import { Spinner } from "react-bootstrap";

export default function Loading() {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <Spinner animation="border" variant="light" size="sm" />
      <span>Loading...</span>
    </div>
  );
}
