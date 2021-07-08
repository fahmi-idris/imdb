import * as React from 'react';
import { useHistory, useParams } from 'react-router';

import { Box } from 'components/ui-provider';
import { Button } from 'components/button';
import { ScreenLoading } from 'components/loading';

import getLoading from 'stores/app/loadings/selectors';
import { fetchMoviesDetailRequest } from 'stores/movies/actions';
import { getMoviesDetail } from 'stores/movies/selectors';
import { MoviesActionTypes } from 'stores/movies/types';

import { useAppSelector, useAppDispatch } from 'utils/redux';

import { Title, MoviesDetailItem } from '../components';

const MoviesDetail: React.FC = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const data = useAppSelector(({ movies }) => getMoviesDetail(movies));
  const isLoading = useAppSelector(({ app: { loadings } }) =>
    getLoading(loadings, MoviesActionTypes.MOVIES_FETCH_DETAIL_REQUEST),
  );
  const { movieId } = useParams<{ movieId: string }>();

  React.useEffect(() => {
    dispatch(fetchMoviesDetailRequest(movieId));
  }, [movieId, dispatch]);

  if (isLoading) {
    return <ScreenLoading />;
  }

  if (data) {
    return (
      <Box margin="0 auto" maxWidth="800px" padding={['20px', '20px 0']}>
        <Title title="Movie Detail" />
        <Box my="20px">
          <MoviesDetailItem {...data} />
        </Box>
        <Button onClick={() => history.push('/')} variant="outline" size="small">
          Back
        </Button>
      </Box>
    );
  }

  return null;
};

export default MoviesDetail;
