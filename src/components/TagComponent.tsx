/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleProp, TextStyle, TouchableOpacity, ViewStyle} from 'react-native';
import {globalStyles} from '../styles/globalStyles';
import TextComponent from './TextComponent';
import {colors} from '../constants/colors';

interface Props {
  text: string;
  color?: string;
  tagStyles?: StyleProp<ViewStyle>;
  textStyles?: StyleProp<TextStyle>;
  onPress?: () => void;
}

const TagComponent = (props: Props) => {
  const {text, tagStyles, textStyles, color, onPress} = props;
  return (
    <TouchableOpacity
      onPress={onPress} // truyền xuống để nhấn được
      disabled={!onPress} // nếu như không truyền onPress thì nút bị disable
      style={[
        globalStyles.tag,
        tagStyles,
        {backgroundColor: color ?? colors.blue}, // Nếu như mà không có color mặc định màu xanh
      ]}>
      <TextComponent text={text} styles={textStyles} />
    </TouchableOpacity>
  );
};

export default TagComponent;
