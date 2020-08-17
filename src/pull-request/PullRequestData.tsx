import React from "react";
import { usePrDataState } from "../context/use-pr-data";
import Fetching from "../shared/Fetching";
import Finished from "../shared/Finished";

const PullRequestData = () => {
  const prData = usePrDataState();
  if (!prData) {
    return <Fetching label="Fetching Pull Request data" />;
  }
  return <Finished />;
};

export default PullRequestData;
