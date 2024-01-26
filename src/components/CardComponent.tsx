/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {View, StyleProp, ViewStyle} from 'react-native';
import React, {ReactNode} from 'react';
import {globalStyles} from '../styles/globalStyles';

interface Props {
  children: ReactNode;
  bgColor?: string;
  styles?: StyleProp<ViewStyle>;
}

const CardComponent = (props: Props) => {
  const {children, styles} = props;
  return (
    <View style={[globalStyles.inputContainer, {padding: 12}, styles]}>
      {children}
    </View>
  );
};

export default CardComponent;
