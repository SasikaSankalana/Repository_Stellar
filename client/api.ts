const API_KEY = "401d99613457b207ed11170ac072437a";
const genres: Record<number, string> = {
  // ... genres data ...
};

const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`;
const getImagePath = (path: string): string =>
  `https://image.tmdb.org/t/p/w440_and_h660_face${path}`;
const getBackdropPath = (path: string): string =>
  `https://image.tmdb.org/t/p/w370_and_h556_multi_faces${path}`;

export interface Movie {
  key: number;
  title: string;
  poster: string;
  backdrop: string;
  rating: number;
  description: string;
  releaseDate: string;
  genres: string[];
}

export interface EmptyItem {
  key: string;
}

export const getMovies = async (): Promise<Movie[]> => {
  const { results } = await fetch(API_URL).then((response) => response.json());
  const movies: Movie[] = results.map(
    ({
      id,
      original_title,
      poster_path,
      backdrop_path,
      vote_average,
      overview,
      release_date,
      genre_ids,
    }: {
      id: number;
      original_title: string;
      poster_path: string;
      backdrop_path: string;
      vote_average: number;
      overview: string;
      release_date: string;
      genre_ids: number[];
    }) => ({
      key: id,
      title: original_title,
      poster: getImagePath(poster_path),
      backdrop: getBackdropPath(backdrop_path),
      rating: vote_average,
      description: overview,
      releaseDate: release_date,
      genres: genre_ids.map((genre) => genres[genre]),
    })
  );
console.log(movies);

  return movies;
};



export interface Planet {
  title: string;
  poster: string;
  backdrop: string;
  tagline: string;

}



export const Planets = [
  {

      title: "VENUS",
      poster: "https://i.ibb.co/SKHtZp0/0-3-1.png",
      backdrop: "https://i.ibb.co/SKHtZp0/0-3-1.png",
      tagline: "test"
  },
  {

      title: "VENUS",
      poster: "https://i.ibb.co/SKHtZp0/0-3-1.png",
      backdrop: "https://i.ibb.co/pnmbvV1/1.png",
      tagline: "test"
    
  },
  {

      title: "VENUS",
      poster: "https://i.ibb.co/SKHtZp0/0-3-1.png",
      backdrop: "https://i.ibb.co/L5GK46b/sasika-sankalana-Create-a-realistic-image-of-a-bustling-spacepo-c1470f5a-c9d7-4dd9-8589-47fc1d76047b.png",
      tagline: "test"
  },
  {

      title: "VENUS",
      poster: "https://i.ibb.co/SKHtZp0/0-3-1.png",
      backdrop: "https://i.ibb.co/XWyF0NB/3.png",
      tagline: "test"
  },
  {

      title: "VENUS",
      poster: "https://i.ibb.co/SKHtZp0/0-3-1.png",
      backdrop: "https://i.ibb.co/SKHtZp0/0-3-1.png",
      tagline: "test"
    
  },

]

