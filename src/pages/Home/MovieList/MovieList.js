import React from "react";
import { Card, Button } from "antd";
const IMAGE_PATH = "https://image.tmdb.org/t/p/w200/";

const { Meta } = Card;

const MovieList = props => {
  const { movies, onRemoveMovie } = props;
  return movies.map(movie => {
    return (
      <Card
        key={movie.id}
        cover={
          <img
            src={IMAGE_PATH + movie.poster_path}
            alt={`Poster of ${movie.title}`}
          />
        }
        actions={[
          <Button type="danger" onClick={() => onRemoveMovie(movie.id)}>
            Remove
          </Button>
        ]}
      >
        <Meta title={movie.title} description={movie.overview} />
      </Card>
    );
  });
};

export default MovieList;
