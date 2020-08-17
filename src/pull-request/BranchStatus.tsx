import React from "react";
import { useBranchStatusState } from "../context/use-branch-status";
import Fetching from "../shared/Fetching";
import Finished from "../shared/Finished";
import Starting from "../shared/Starting";

type Props = {
  baseBranch: string;
  currentBranch: string;
};

const BranchStatus: React.FC<Props> = ({ baseBranch, currentBranch }) => {
  const status = useBranchStatusState(baseBranch, currentBranch);
  if (!baseBranch) {
    return <Starting label="Waiting..." />;
  }
  if (!status) {
    return <Fetching label="Fetching Pull Request data" />;
  }
  return <Finished />;
};

export default BranchStatus;
