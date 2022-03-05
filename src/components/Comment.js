import React from "react";
import Disqus from "disqus-react";

export default function Comment({ game }) {
  // DISQUS config
  const disqusShortname = "rawgr";
  const disqusConfig = {
    url: `http://localhost:3000/games/${game.slug}`,
    identifier: `${game.id}`,
    title: `${game.name}`,
  };

  return (
    <>
      <Disqus.DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </>
  );
}
