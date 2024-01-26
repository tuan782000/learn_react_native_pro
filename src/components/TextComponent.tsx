/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';
import {globalStyles} from '../styles/globalStyles';
import {fontFamilies} from '../constants/fontFamilies';
import { colors } from '../constants/colors';

interface Props {
  text: string;
  size?: number;
  font?: string;
  color?: string;
  flex?: number;
}

const TextComponent = (props: Props) => {
  const {text, font, size, color, flex} = props;
  return (
    <View>
      <Text
        style={[
          globalStyles.text,
          {
            flex: flex ?? 1, // mặc định là 1 nếu như không truyền flex (1 thì chiếm hết chiều ngang)
            fontFamily: font ?? fontFamilies.regular,
            fontSize: size ?? 14, // nếu có truyền size thì lấy size đó, không truyền thì mặc định 14
            color: color ?? colors.desc,
          },
        ]}>
        {text}
      </Text>
    </View>
  );
};

export default TextComponent;
