import React, { Fragment } from "react";
import { Card, Button, Icon } from "antd";
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
          <Button
            key="delete"
            type="danger"
            onClick={() => onRemoveMovie(movie.id)}
          >
            <Icon type="delete" theme="filled" />
            Remove
          </Button>
        ]}
      >
        <Meta
          title={movie.title}
          description={
            <Fragment>
              <div style={{ fontSize: 13, marginBottom: 15, color: "#000000" }}>
                {movie.genres}
              </div>
              <div>{movie.overview}</div>
            </Fragment>
          }
        />
      </Card>
    );
  });
};

export default MovieList;
