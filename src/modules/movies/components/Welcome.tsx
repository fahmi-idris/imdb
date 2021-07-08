import * as React from 'react';

import { Box, Heading } from 'components/ui-provider';

const Welcome: React.FC = () => (
  <Box my="20px">
    <Heading textAlign="center" m="0" scale={500}>
      IMDB Apps
    </Heading>
  </Box>
);

export default Welcome;
