/* eslint-disable prettier/prettier */
import CircularProgress from 'react-native-circular-progress-indicator';
import {colors} from '../constants/colors';
import {fontFamilies} from '../constants/fontFamilies';
import React = require('react');

interface Props {
  color: string;
  value: number;
  maxValue?: number;
}

const CiculaComponent = (props: Props) => {
  const {color, value} = props;
  return (
    <CircularProgress
      value={value}
      title={`${value}%`}
      showProgressValue={false}
      activeStrokeColor={color ?? colors.blue}
      inActiveStrokeColor={colors.gray2}
      titleColor={colors.text}
      titleFontSize={32}
      titleStyle={{
        fontFamily: fontFamilies.semiBold,
      }}
    />
  );
};

export default CiculaComponent;
