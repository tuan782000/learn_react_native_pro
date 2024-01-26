/* eslint-disable prettier/prettier */
import React from 'react';
import TextComponent from './TextComponent';
import { fontFamilies } from '../constants/fontFamilies';

interface Props {
    text: string;
    font?: string;
    size?: number;
    color?: string;
}

const TitleComponent = (props: Props) => {
    const {text, font, size, color} = props;
  return (
    <TextComponent
        size={size ?? 20} // truyền thì lấy size, ko có mặc định là 20
        font={font ?? fontFamilies.semiBold} //font truyền, nếu ko có lấy font mặc định
        text={text} color={color}
    />
  );
};

export default TitleComponent;
