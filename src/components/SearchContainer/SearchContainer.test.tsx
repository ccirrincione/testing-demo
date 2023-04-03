import React from 'react';
import {act, cleanup, render, screen} from '@testing-library/react';
import {getSearchResults} from "../../clients/searchClient";
import {SearchResult} from "../../models/searchResult";
import {SearchComponent} from "../SearchComponent";
import {SearchResultComponent} from "../SearchResultComponent";
import { SearchContainer } from "./index";

jest.mock("../../clients/searchClient")

jest.mock("../SearchComponent", () => {
  return {
    SearchComponent: jest.fn((props: any) => {
      return (
        <div>
          <button
            onClick={() => props.onSearch("some-search-value")}
            data-testid="mock-search-component-button"
          />
        </div>
      );
    }),
  };
});
const getMockSearchComponentButton = (): HTMLElement => screen.getByTestId("mock-search-component-button");

jest.mock("../SearchResultComponent", () => {
  return {
    SearchResultComponent: jest.fn(() => {
      return (
        <div/>
      );
    })
  }
});

describe('SearchContainer tests', () => {
  const getHeader = () => screen.queryByTestId("search-container-header");

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  describe("component loaded", () => {
    beforeEach(() => {
      render(<SearchContainer/>);
    });

    it("should display search container title", () => {
      expect(getHeader()).toHaveTextContent("Search Container");
    });

    // TODO: it should render search component

    // TODO: it should render search result component

    // TODO: when onSearch, it should render search result component with search results
  });
});
