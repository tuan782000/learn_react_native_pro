/* eslint-disable prettier/prettier */
import {StyleProp, TouchableOpacity, View, ViewStyle} from 'react-native';
import React, {ReactNode} from 'react';
import {globalStyles} from '../styles/globalStyles';

interface Props {
  children: ReactNode;
  justify?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | undefined;
  onPress?: () => void; // này định nghĩa function (người dùng bấm vào thực hiện hành động gì đó)
  styles?: StyleProp<ViewStyle>
}

const RowComponent = (props: Props) => {
  const {children, justify, onPress, styles} = props;
  const localStyle = [
    globalStyles.row,
    {
      justifyContent: justify ?? 'center',
    },
    styles,
  ];
  return onPress ? (
    <TouchableOpacity
      onPress={onPress ? () => onPress : undefined}
      style={localStyle}>
      {children}
    </TouchableOpacity>
  ) : (
    <View style={localStyle}>{children}</View>
  );
};

export default RowComponent;
