import React from "react";
import { Input, Icon } from 'semantic-ui-react';

function Search({ setSearchTerm }) {
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Input
      icon={<Icon name="search" link />}
      iconPosition="left"
      placeholder="Search your Recent Transactions"
      onChange={handleSearch}
      fluid
      size="large"
    />
  );
}

export default Search;