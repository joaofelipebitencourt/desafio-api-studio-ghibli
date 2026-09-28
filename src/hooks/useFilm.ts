import { useState, useEffect } from "react";
import type { Film } from "../types";
import { fetchFilmById } from "../services/ghibliApi";

export function useFilm(id: string | undefined) {
  const [film, setFilm] = useState<Film | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setError("Film ID not provided.");
      setIsLoading(false);
      return;
    }

    async function fetchFilm(filmId: string) {
      try {
        const data = await fetchFilmById(filmId);
        setFilm(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred.");
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchFilm(id);
  }, [id]);

  return { film, isLoading, error };
}
