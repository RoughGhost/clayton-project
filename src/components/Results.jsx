import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useResultContext } from "../contexts/ResultContextProvider";
import Loading from "./Loading";

const Results = () => {
  const { results, isLoading, getResults, searchTerm } = useResultContext();
  const location = useLocation();
  useEffect(() => {
    if (searchTerm) {
      getResults(`${location.pathname}/q=${searchTerm}&num=50`);
    }
  }, [searchTerm, location.pathname]);
  if (isLoading) return <Loading />;
  console.log(location.pathname);
  switch (location.pathname) {
    case "/search":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56 ">
          {results?.seasons?.map(
            ({ uid, title, series, seasonNumber, numberOfEpisodes }, index) => (
              <div key={index} className="md:w-2/5 w-full">
                <h2 className="text-blue-500">UID:{uid}</h2>
                <h2 className="text-blue-500">TITLE:{title}</h2>
                <h3 className="text-blue-500">
                  STARTREK SERIES: {series?.title}
                </h3>
                <p className="text-blue-500">SERIES:{series?.uid}</p>
                <h3 className="text-blue-500">SEASON NUMBER: {seasonNumber}</h3>
                <h3 className="text-blue-500">
                  NUMBER OF EPISODE: {numberOfEpisodes}
                </h3>
              </div>
            )
          )}
        </div>
      );
    default:
      return "ERROR";
  }
};

export default Results;
