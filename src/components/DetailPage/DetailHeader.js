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
        {game.released && (
          <span className="detail--date">{DateFormatter(game.released)}</span>
        )}
        <span className="detail--platform">
          {game.parent_platforms.map((item, index) => (
            <span key={index}>{GetPlatformIcon(item.platform.name)}</span>
          ))}
        </span>
      </div>
      <h2 className="page--heading">{game.name}</h2>
      <div className="detail--score-container">
        {game.rating_top !== 0 && (
          <div className="detail--score">
            <h3>Overall:</h3>

            <h3
              className="detail--overall-rating"
              style={{
                borderColor: OverallRatingColor(game.rating),
                color: OverallRatingColor(game.rating),
              }}
            >
              {game.rating}
            </h3>

            <h4>/5</h4>
          </div>
        )}

        <p>
          {game.reviews_count} {game.reviews_count > 1 ? "RATINGS" : "RATING"}
        </p>
      </div>
    </>
  );
}
