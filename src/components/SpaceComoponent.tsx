/* eslint-disable prettier/prettier */
import {View} from 'react-native';
import React from 'react';

interface Props {
  width?: number;
  height?: number;
}

const SpaceComoponent = (props: Props) => {
  const {width, height} = props;
  return (
    <View style={{ width, height }} />
  );
};

export default SpaceComoponent;
