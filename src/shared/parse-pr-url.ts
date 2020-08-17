const pr = process.env.PULL_REQUEST;

export const parsePREnvVar = () => {
  const [info, prNumber] = pr
    .split("https://github.com/")
    .pop()
    .split("/pull/");
  const [owner, repo] = info.split("/");
  const number = Number(prNumber);
  return { owner, repo, number };
};
