import { atom, useRecoilState, useRecoilValue } from "recoil";
import { get } from "../lib/request";
import { parsePREnvVar } from "../shared/parse-pr-url";

type BranchStatus = {
  status: string;
  ahead_by: number;
  behind_by: number;
};

const branchStatus = atom<BranchStatus>({
  key: "branch-status",
  default: undefined,
});

export const useBranchStatus = () => useRecoilValue(branchStatus);

export const useBranchStatusState = (
  baseBranch: string,
  currentBranch: string
) => {
  const [status, setStatus] = useRecoilState(branchStatus);
  if (!status && baseBranch && currentBranch) {
    getBranchStatus(baseBranch, currentBranch).then(setStatus);
  }
  return status;
};

const getBranchStatus = async (baseBranch: string, currentBranch: string) => {
  const { owner, repo } = parsePREnvVar();
  const url = getUrl(owner, repo, baseBranch, currentBranch);
  const { status, ahead_by, behind_by } = await get(url);
  return { status, ahead_by, behind_by };
};

const getUrl = (
  owner: string,
  repo: string,
  baseBranch: string,
  currentBranch: string
) =>
  `https://api.github.com/repos/${owner}/${repo}/compare/${baseBranch}...${currentBranch}`;
