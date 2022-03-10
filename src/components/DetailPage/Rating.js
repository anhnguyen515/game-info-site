import React from "react";
import { ProgressBarVariant, UpperCaseFirstLetter } from "../../common/utils";
import { Badge, ProgressBar } from "react-bootstrap";

export default function Rating({ game }) {
  return (
    <>
      <ProgressBar
        style={{
          height: 50,
          border: "1px solid rgba(0, 0, 0, 0.3)",
        }}
      >
        {game.ratings.map((rating) => (
          <ProgressBar
            key={rating.id}
            variant={ProgressBarVariant(rating.title)}
            now={rating.count}
            max={game.reviews_count}
          />
        ))}
      </ProgressBar>
      <div className="detail--graph-description">
        {game.ratings.map((rating) => (
          <span key={rating.id} className="detail--badge-container">
            <Badge
              className="detail--badge"
              bg={ProgressBarVariant(rating.title)}
            >
              {" "}
            </Badge>
            {UpperCaseFirstLetter(rating.title)}
            <span className="detail--badge-rating">{rating.count}</span>
          </span>
        ))}
      </div>
    </>
  );
}
