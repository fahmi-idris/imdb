import * as React from 'react';
import styled from 'styled-components';

import { MovieType } from 'interfaces/movies';

import { Box, colors } from 'components/ui-provider';
import { IconSearch } from 'components/ui-icons';
import { DropdownSelector, DropdownItem } from 'components/dropdown';
import { Field } from 'components/form';

interface SearchMoviesProps {
  onSort: (value: MovieType) => void;
  onSearch: (value: string) => void;
  sortedBy: MovieType;
  query: string;
}

const SearchMovies: React.FC<SearchMoviesProps> = ({ onSearch, onSort, query, sortedBy }) => (
  <Box display="flex">
    <Box flex="0 1 70%">
      <FieldStyled
        name="search"
        type="text"
        placeholder="Cari nama film"
        value={query}
        onChange={(e) => onSearch(e.target.value)}
        icon={() => <IconSearch fill={colors.muted} />}
      />
    </Box>
    <Box flex="0 1 30%">
      <DropdownStyled onSelect={(item) => onSort(item)} value={sortedBy} placeholder="Filter" block>
        <DropdownItem value="movie">Movie</DropdownItem>
        <DropdownItem value="series">Series</DropdownItem>
        <DropdownItem value="episode">Episode</DropdownItem>
      </DropdownStyled>
    </Box>
  </Box>
);

const FieldStyled = styled(Field)`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right: none;
`;

const DropdownStyled = styled(DropdownSelector)`
  button {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

export default SearchMovies;
