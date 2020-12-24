import { TmdbCollection } from '../api/themoviedb';
import Media from '../entity/Media';
import { Genre } from './common';
import { mapMovieResult, MovieResult } from './Search';

export interface Collection {
  id: number;
  name: string;
  overview?: string;
  posterPath?: string;
  backdropPath?: string;
  genres: Genre[];
  parts: MovieResult[];
}

export const mapCollection = (
  collection: TmdbCollection,
  media: Media[]
): Collection => ({
  id: collection.id,
  name: collection.name,
  overview: collection.overview,
  posterPath: collection.poster_path,
  backdropPath: collection.backdrop_path,
  genres: collection.genres,
  parts: collection.parts.map((part) =>
    mapMovieResult(
      part,
      media?.find((req) => req.tmdbId === part.id)
    )
  ),
});
