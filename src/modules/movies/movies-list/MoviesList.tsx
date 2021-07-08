import * as React from 'react';

import { MovieType } from 'interfaces/movies';

import { Box } from 'components/ui-provider';
import { Message } from 'components/message';
import { ScreenLoading } from 'components/loading';

import getLoading from 'stores/app/loadings/selectors';
import { getMoviesIndex, getMoviesData } from 'stores/movies/selectors';
import { fetchMoviesRequest } from 'stores/movies/actions';
import { MoviesActionTypes } from 'stores/movies/types';
import { useAppSelector, useAppDispatch } from 'utils/redux';
import { useDebounce } from 'utils/hooks';

import { Title, MoviesItemList, SearchMovies } from '../components';

const MoviesList: React.FC = () => {
  const defaultMovieTitle = 'Avengers';
  const dispatch = useAppDispatch();
  const index = useAppSelector(({ movies }) => getMoviesIndex(movies));
  const data = useAppSelector(({ movies }) => getMoviesData(movies));
  const isLoading = useAppSelector(({ app: { loadings } }) =>
    getLoading(loadings, MoviesActionTypes.MOVIES_FETCH_REQUEST),
  );

  const [query, setQuery] = React.useState<string>('');
  const [sorting, setSorting] = React.useState<MovieType>('');
  const debouncedValue = useDebounce<string>(query, 750);

  const handleSearch = (value: string) => {
    setQuery(value);
  };

  React.useEffect(() => {
    const search = query && query.length > 3 ? query : defaultMovieTitle;
    dispatch(fetchMoviesRequest({ s: search, page: 1, type: sorting }));
  }, [debouncedValue, sorting]);

  const renderList = () => {
    if (isLoading) {
      return <ScreenLoading />;
    }

    if (!index.length) {
      return <Message message={`Data tidak ditemukan`} mt="20px" state="warning" />;
    }

    return <MoviesItemList index={index} data={data} />;
  };

  return (
    <Box margin="0 auto" maxWidth="550px" padding={['20px', '20px 0']}>
      <Title title="IMDB Apps" />
      <SearchMovies onSearch={handleSearch} query={query} onSort={setSorting} sortedBy={sorting} />
      {renderList()}
    </Box>
  );
};

export default MoviesList;
