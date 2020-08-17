import { Text } from "ink";
import Spinner from "ink-spinner";
import React from "react";

const Loading = () => (
  <Text color="green">
    <Spinner type="dots" />
  </Text>
);

export default Loading;
