import * as React from 'react';

import { Box, Heading } from 'components/ui-provider';

interface TitleProps {
  title: string;
}

const Welcome: React.FC<TitleProps> = ({ title }) => (
  <Box my="20px">
    <Heading textAlign="center" m="0" scale={500}>
      {title}
    </Heading>
  </Box>
);

export default Welcome;
