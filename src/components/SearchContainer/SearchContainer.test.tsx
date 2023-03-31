import React from 'react';
import { render, screen } from '@testing-library/react';
import { SearchContainer } from "./index";

describe('SearchContainer tests', () => {
  const Component = (props: any) => (
    <SearchContainer
      {...props}
    />
  );

  const getHeader = () => screen.queryByTestId("search-container-header");

  beforeEach(() => {
    render(<Component/>);
  });

  it("should display search container title", () => {
    expect(getHeader()).toHaveTextContent("Search Container");
  });
});
