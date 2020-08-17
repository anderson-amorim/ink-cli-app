import { Text } from "ink";
import React from "react";
import Loading from "./Loading";

type Props = {
  label: string;
};

const Starting: React.FC<Props> = ({ label }) => (
  <Text>
    <Loading /> {label}
  </Text>
);

export default Starting;
