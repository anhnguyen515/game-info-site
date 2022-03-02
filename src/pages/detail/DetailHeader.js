import React from "react";
import {
  DateFormatter,
  GetPlatformIcon,
  OverallRatingColor,
} from "../../common/utils";

export default function DetailHeader({ game }) {
  return (
    <>
      <div className="detail--date-platform">
        <span className="detail--date">{DateFormatter(game.released)}</span>
        <span className="detail--platform">
          {game.parent_platforms.map((item, index) => (
            <span key={index}>{GetPlatformIcon(item.platform.name)}</span>
          ))}
        </span>
      </div>
      <h2 style={{ fontSize: 72 }}>{game.name}</h2>
      <div className="detail--score-container">
        <div className="detail--score">
          <h3>Overall:</h3>
          <h3
            className="detail--overall-rating"
            style={{
              backgroundColor: OverallRatingColor(game.rating, 5),
            }}
          >
            {game.rating}
          </h3>
          <h4>/5</h4>
        </div>
        <p>{game.reviews_count} RATINGS</p>
      </div>
    </>
  );
}
