import * as React from 'react';

import { MovieType } from 'interfaces/movies';

import { Box } from 'components/ui-provider';
import { Message } from 'components/message';
import { Circle } from 'components/loading';
import { InfiniteScroll } from 'components/infinite-scroll';

import getLoading from 'stores/app/loadings/selectors';
import { getMoviesIndex, getMoviesData, getMoviesPagination, getMoviesErrors } from 'stores/movies/selectors';
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
  const errors = useAppSelector(({ movies }) => getMoviesErrors(movies));
  const { total } = useAppSelector(({ movies }) => getMoviesPagination(movies));
  const isLoading = useAppSelector(({ app: { loadings } }) =>
    getLoading(loadings, MoviesActionTypes.MOVIES_FETCH_REQUEST),
  );

  const [query, setQuery] = React.useState<string>('');
  const [sorting, setSorting] = React.useState<MovieType>('');
  const [page, setPage] = React.useState<number>(1);

  const search = query && query.length > 2 ? query : defaultMovieTitle;
  const hasMoreData = page < total;
  const debouncedValue = useDebounce<string>(query, 750);

  const handleSearch = (value: string) => {
    setQuery(value);
  };

  const loadData = (nextPage: number, isInfiniteScroll?: boolean) => {
    dispatch(fetchMoviesRequest({ s: search, page: nextPage, type: sorting, isInfiniteScroll }));
  };

  const loadInfiniteScroll = () => {
    const nextPage = page + 1;
    loadData(nextPage, true);
    setPage(nextPage);
  };

  React.useEffect(() => {
    loadData(1);
    setPage(1);
  }, [debouncedValue, sorting]);

  const renderList = () => {
    if (errors) {
      return <Message message={errors} mt="20px" state="warning" />;
    }

    return (
      <InfiniteScroll
        hasMoreData={hasMoreData}
        isLoading={isLoading}
        onBottomHit={loadInfiniteScroll}
        loadOnMount={false}
      >
        <MoviesItemList index={index} data={data} />
        {isLoading && (
          <Box display="flex" alignItems="center" justifyContent="center" my="20px">
            <Circle />
          </Box>
        )}
      </InfiniteScroll>
    );
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
