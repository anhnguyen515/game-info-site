import React, { useState } from "react";

export default function ReadMore({ children }) {
  const text = children;
  const showButton = text.length >= 400;
  const [isReadMore, setIsReadMore] = useState(showButton);

  function toggleReadMore() {
    setIsReadMore((prev) => !prev);
  }
  return (
    <>
      <p className="detail--description">
        {isReadMore ? text.slice(0, 200) : text}{" "}
      </p>
      {showButton && (
        <span
          onClick={toggleReadMore}
          className="detail--date"
          style={{
            cursor: "pointer",
            fontSize: "14px",
            opacity: 0.4,
          }}
        >
          {isReadMore ? "Read more" : "Show less"}
        </span>
      )}
    </>
  );
}
