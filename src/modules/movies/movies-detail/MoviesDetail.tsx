import * as React from 'react';
import { useHistory, useParams } from 'react-router';

import { Box } from 'components/ui-provider';
import { Button } from 'components/button';
import { ScreenLoading } from 'components/loading';
import { Message } from 'components/message';

import getLoading from 'stores/app/loadings/selectors';
import { fetchMoviesDetailRequest } from 'stores/movies/actions';
import { getMoviesDetail, getMoviesErrors } from 'stores/movies/selectors';
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
  const errors = useAppSelector(({ movies }) => getMoviesErrors(movies));
  const { movieId } = useParams<{ movieId: string }>();

  React.useEffect(() => {
    dispatch(fetchMoviesDetailRequest(movieId));
  }, [movieId, dispatch]);

  if (isLoading) {
    return <ScreenLoading />;
  }

  const renderDetail = () => {
    if (data) {
      return <MoviesDetailItem {...data} />;
    }
    return <Message message={errors} state="error" />;
  };

  return (
    <Box margin="0 auto" maxWidth="800px" padding={['20px', '20px 0']}>
      <Title title="Movie Detail" />
      <Box my="20px">{renderDetail()}</Box>
      <Button onClick={() => history.push('/')} variant="outline" size="small">
        Back
      </Button>
    </Box>
  );
};

export default MoviesDetail;
