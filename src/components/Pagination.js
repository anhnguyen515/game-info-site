import React from "react";
import { Button } from "react-bootstrap";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

export default function Pagination({
  gotoNextPage,
  gotoPrevPage,
  currentPage,
}) {
  return (
    <div className="pagination">
      {gotoPrevPage && (
        <Button variant="light" onClick={gotoPrevPage}>
          <GrLinkPrevious />
        </Button>
      )}
      <span>Page {currentPage}</span>
      {gotoNextPage && (
        <Button variant="light" onClick={gotoNextPage}>
          <GrLinkNext />
        </Button>
      )}
    </div>
  );
}
