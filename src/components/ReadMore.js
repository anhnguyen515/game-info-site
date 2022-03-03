import React, { useState } from "react";

export default function ReadMore({ children }) {
  const text = children;
  const character = 240;
  const [isReadMore, setIsReadMore] = useState(true);

  function toggleReadMore() {
    setIsReadMore((prev) => !prev);
  }
  return (
    <>
      <p className="detail--description">
        {isReadMore ? text.slice(0, character) : text}
        <span
          onClick={toggleReadMore}
          className="detail--date"
          style={{
            marginLeft: 10,
            opacity: 0.3,
            cursor: "pointer",
          }}
        >
          {isReadMore ? "Read more" : "Show less"}
        </span>
      </p>
    </>
  );
}
