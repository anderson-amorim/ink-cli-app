import React from "react";
import { RecoilRoot } from "recoil";
import PullRequest from "./pull-request/PullRequest";

const App = () => (
  <RecoilRoot>
    <PullRequest />
  </RecoilRoot>
);

export default App;
