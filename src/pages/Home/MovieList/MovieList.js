import React from "react";
import { Card } from "antd";
const IMAGE_PATH = "https://image.tmdb.org/t/p/w200/";

const { Meta } = Card;

const MovieList = props => {
  const { movies } = props;
  return movies.map(movie => {
    return (
      <Card
        key={movie.id}
        hoverable
        style={{ width: 240 }}
        cover={
          <img
            src={IMAGE_PATH + movie.poster_path}
            alt={`Poster of ${movie.title}`}
          />
        }
      >
        <Meta title={movie.title} description={movie.overview} />
      </Card>
    );
  });
};

export default MovieList;
