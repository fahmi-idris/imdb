import * as React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { DataMap } from 'interfaces/common';
import { Movies } from 'interfaces/movies';

import { Box, Text, colors, radii } from 'components/ui-provider';
import { Badge } from 'components/badge';
import { Button } from 'components/button';
import { Popup } from 'components/popup';

import useOnClickOutside from 'utils/hooks/useClickOutside';

interface MoviesItemListProps {
  index: string[];
  data: DataMap<Movies>;
}

const MoviesItemList: React.FC<MoviesItemListProps> = ({ index, data }) => {
  const ref = React.useRef(null);
  const history = useHistory();
  const [selectedPoster, setSelectedPoster] = React.useState<string>('');

  const handleClosePopup = () => setSelectedPoster('');

  const handleClickOutside = () => {
    handleClosePopup();
  };

  useOnClickOutside(ref, handleClickOutside);

  return (
    <Box margin="20px 0" display="grid" gridTemplateColumns="1fr 1fr" gridGap="20px">
      {index.map((item) => {
        const { imdbID, Title, Poster, Type, Year } = data[item];
        return (
          <Box key={imdbID} background={colors.white} padding="20px" borderRadius={radii.sm}>
            <ImagePoster src={Poster} onClick={() => setSelectedPoster(Poster)} />
            <Box display="flex" alignItems="flex-start" minHeight="75px">
              <Box flex="1" pr="10px">
                <Text mb="5px" fontWeight="600" display="block">
                  {Title}
                </Text>
                <Text mb="5px" display="block">
                  {Year}
                </Text>
              </Box>
              <Box flex="0" pt="10px">
                <Badge variant="primary" badgeColor={Type === 'series' ? colors.green : colors.orange}>
                  {Type}
                </Badge>
              </Box>
            </Box>
            <Button block variant="link" buttonSize="small" onClick={() => history.push(`/${imdbID}/movie`)}>
              Lihat selengkapnya
            </Button>
          </Box>
        );
      })}
      <Popup ref={ref} isOpen={selectedPoster !== ''} handleClose={handleClosePopup} width="20%">
        <Box textAlign="center">
          <Box as="img" src={selectedPoster} />
        </Box>
      </Popup>
    </Box>
  );
};

const ImagePoster = styled('img')`
  margin-bottom: 24px;
  width: 100%;
  height: 250px;
  object-fit: cover;
  max-width: initial;
  cursor: pointer;
`;

export default MoviesItemList;
