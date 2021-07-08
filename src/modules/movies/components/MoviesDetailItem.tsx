import * as React from 'react';

import { Movies } from 'interfaces/movies';

import { Box, Text, Stack, colors, radii } from 'components/ui-provider';
import { Badge } from 'components/badge';

import { toCapitalize } from 'utils/formatter';

type MoviesDetailItemProps = Partial<Movies>;

const MoviesDetailItem: React.FC<MoviesDetailItemProps> = ({
  Title,
  Year,
  Released,
  Runtime,
  Genre,
  Director,
  Plot,
  Poster,
  Metascore,
  imdbRating,
  Production,
  Ratings,
  Type,
}) => (
  <Box position="relative" background={colors.white} padding="20px" borderRadius={radii.sm} display="flex">
    <Box position="absolute" right="15px" top="20px">
      <Badge variant="primary" badgeColor={Type === 'series' ? colors.green : colors.orange}>
        {toCapitalize(Type as string)}
      </Badge>
    </Box>
    <Box flex="1 1 30%">
      <Box as="img" src={Poster} />
      <Stack spacing="md">
        <Box mt="20px">
          <Text display="block" fontWeight="600" mb="4px">
            Ratings
          </Text>
          {Ratings?.map((item) => (
            <Text key={item.Source} display="block" mb="4px">{`${item.Source} - ${item.Value}`}</Text>
          ))}
        </Box>
      </Stack>
    </Box>
    <Box flex="1 1 70%" padding="0 20px">
      <Stack spacing="md">
        <Box>
          <Text display="block" fontWeight="600" mb="4px">
            Title
          </Text>
          <Text display="block">{`${Title} - ${Year}`}</Text>
        </Box>
        <Box>
          <Text display="block" fontWeight="600" mb="4px">
            Released
          </Text>
          <Text display="block">{Released}</Text>
        </Box>
        <Box>
          <Text display="block" fontWeight="600" mb="4px">
            Genre
          </Text>
          <Text display="block">{`${Genre} (${Runtime})`}</Text>
        </Box>
        <Box>
          <Text display="block" fontWeight="600" mb="4px">
            Director
          </Text>
          <Text display="block">{Director}</Text>
        </Box>
        <Box>
          <Text display="block" fontWeight="600" mb="4px">
            Metascore
          </Text>
          <Text display="block">{Metascore}</Text>
        </Box>
        <Box>
          <Text display="block" fontWeight="600" mb="4px">
            Production
          </Text>
          <Text display="block">{Production}</Text>
        </Box>
        <Box>
          <Text display="block" fontWeight="600" mb="4px">
            IMDB Rating
          </Text>
          <Text display="block">{imdbRating}</Text>
        </Box>
        <Box>
          <Text display="block" fontWeight="600" mb="4px">
            Plot
          </Text>
          <Text display="block">{Plot}</Text>
        </Box>
      </Stack>
    </Box>
  </Box>
);

export default MoviesDetailItem;
