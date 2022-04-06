import React, { createContext, useContext, useState } from "react";

const ResultContext = createContext();
const baseUrl = "http://stapi.co/api/v1/rest/season/search";

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("Starstrek SpaceCraft");

  const getResults = async (url) => {
    setIsLoading(true);

    const response = await fetch(`${baseUrl}`, {
      method: "POST",
    });
    const data = await response.json();
    console.log(data);

    setResults(data);
    setIsLoading(false);
  };

  return (
    <ResultContext.Provider
      value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
