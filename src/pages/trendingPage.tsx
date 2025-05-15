import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from "react-query";
import { getTrendingMovies } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";
import { DiscoverMovies } from "../types/interfaces";

const TrendingPage: React.FC = () => {
  const { data, error, isLoading, isError } = useQuery<DiscoverMovies, Error>(
    "trending",
    getTrendingMovies
  );

  if (isLoading) return <Spinner />;
  if (isError) return <h1>{error.message}</h1>;

  const movies = data ? data.results : [];

  return (
    <PageTemplate
      title="Trending Movies"
      movies={movies}
      action={(movie) => <AddToFavouritesIcon {...movie} />}
    />
  );
};

export default TrendingPage;
