import { Newline, Text } from "ink";
import React from "react";
import { useBranchStatusState } from "../context/use-branch-status";
import { usePrData } from "../context/use-pr-data";
import BranchStatus from "./BranchStatus";
import PullRequestData from "./PullRequestData";

const PullRequest = () => {
  const prData = usePrData();
  const baseBranch = prData?.baseBranch;
  const currentBranch = prData?.currentBranch;
  const branchStatus = useBranchStatusState(baseBranch, currentBranch);
  return (
    <Text>
      <PullRequestData />
      <Newline />
      <BranchStatus baseBranch={baseBranch} currentBranch={currentBranch} />
      <Newline />
      {branchStatus && (
        <Text color="magenta">
          {JSON.stringify(
            { baseBranch, currentBranch, ...branchStatus },
            null,
            2
          )}
        </Text>
      )}
    </Text>
  );
};

export default PullRequest;
