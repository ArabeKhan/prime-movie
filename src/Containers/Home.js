import React from "react";
//Hooks
import { useHomeFetch } from "../hooks/useHomeFetch";
//config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";
//components
import HeroImage from "../components/HeroImage";
import Grid from "../components/Grid";
import Spinner from "../components/Spinner";
//images
import NoImage from "../images/no_image.jpg";
import Thumb from "../components/Thumb";
import SearchBar from "../components/SearchBar";
import Button from "../components/Button";

export default function Home() {
  const { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore } =
    useHomeFetch();

  if (error) return <div>Something went wrong ...</div>;

  return (
    <>
      {!searchTerm && state.results[0] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      ) : null}

      <SearchBar setSearchTerm={setSearchTerm} />

      <Grid header={searchTerm ? "Search Result" : "Popular Movies"}>
        {state.results.map((movie) => (
          <Thumb
            title={movie.original_title}
            clickable={true}
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : NoImage
            }
            movieId={movie.id}
            key={movie.id}
          />
        ))}
      </Grid>
      {loading && <Spinner />}
      {state.page < state.total_pages && !loading && (
        <Button text="Load More" callback={() => setIsLoadingMore(true)} />
      )}
    </>
  );
}
