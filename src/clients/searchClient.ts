import {SearchResult} from "../models/searchResult";

const searchResultsMap = {
  golang: [
    {
      id: 1,
      text: "10 reasons why golang is not the right choice",
    },
    {
      id: 2,
      text: "golang is behind the recent rain storms in california, here is what you need to know!"
    },
    {
      id: 3,
      text: "take this quiz to find out what programming language you are... hope it's not golang"
    },
  ],
  dog: [
    {
      id: 1,
      text: "dogs are great"
    }
  ],
  cat: [
    {
      id: 1,
      text: "cats are also great"
    }
  ]
}

export const getSearchResults = (query: string): SearchResult[] => {
  switch (true) {
    case query.toLowerCase().includes("golang"):
      return searchResultsMap["golang"];
    case query.toLowerCase().includes("dog"):
      return searchResultsMap["dog"];
    case query.toLowerCase().includes("cat"):
      return searchResultsMap["cat"];
    default:
      return [];
  }
}