import { Text } from "ink";
import React from "react";
import Loading from "../shared/Loading";

type Props = {
  label: string;
};

const Fetching: React.FC<Props> = ({ label }) => (
  <Text>
    <Loading /> {label}
  </Text>
);

export default Fetching;
