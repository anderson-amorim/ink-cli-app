import { atom, useRecoilState, useRecoilValue } from "recoil";
import { get } from "../lib/request";
import { parsePREnvVar } from "../shared/parse-pr-url";

type PRData = {
  currentBranch: string;
  baseBranch: string;
};

const prData = atom<PRData>({
  key: "pr-data",
  default: undefined,
});

export const usePrData = () => useRecoilValue(prData);

export const usePrDataState = () => {
  const [data, setData] = useRecoilState(prData);
  if (!data) {
    getPRData().then(setData);
  }
  return data;
};

const getPRData = async () => {
  const { owner, repo, number } = parsePREnvVar();
  const url = getUrl(owner, repo, number);
  const data = await get(url);
  const currentBranch: string = data.head.ref;
  const baseBranch: string = data.base.ref;
  return { baseBranch, currentBranch };
};

const getUrl = (owner, repo, number) =>
  `https://api.github.com/repos/${owner}/${repo}/pulls/${number}`;
