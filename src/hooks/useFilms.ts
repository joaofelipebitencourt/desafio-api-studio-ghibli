import { useEffect, useState } from "react";
import type { Film } from "../types";
import { fetchFilms } from "../services/ghibliApi";

export function useFilms(){
  const [films, setFilms] = useState<Film[]>([]);
  const [visibleCount, setVisibleCount] = useState(10);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


 useEffect(() => {
    async function loadFilms() {
      try {
        const data = await fetchFilms();
        const orderedFilms = data.sort((a, b) =>
          a.title.localeCompare(b.title)
        );
        setFilms(orderedFilms);
      } catch (error) {
        setError('Could not load the film list.')
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    loadFilms();
  }, []);

  const visibleFilms = films.slice(0, visibleCount);
  const hasMore = visibleCount < films.length;

  function showMore() {
    setVisibleCount((prev) => prev + 10);
  }

return { visibleFilms, hasMore, showMore, isLoading, error };
}