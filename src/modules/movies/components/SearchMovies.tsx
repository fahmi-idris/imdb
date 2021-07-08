import * as React from 'react';
import styled from 'styled-components';

import { Box, colors } from 'components/ui-provider';
import { IconSearch } from 'components/ui-icons';
import { Field } from 'components/form';

interface SearchTransactionProps {
  onSearch: (value: string) => void;
  query: string;
}

const SearchTransaction: React.FC<SearchTransactionProps> = ({ onSearch, query }) => (
  <Box display="flex">
    <FieldStyled
      name="search"
      type="text"
      placeholder="Cari nama atau bank"
      value={query}
      onChange={(e) => onSearch(e.target.value)}
      icon={() => <IconSearch fill={colors.muted} />}
    />
  </Box>
);

const FieldStyled = styled(Field)`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right: none;
`;

export default SearchTransaction;
