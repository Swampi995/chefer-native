import React from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';
import * as basicStyle from '../basic/styles'

export default function Screen(props: React.ComponentProps<any>) {
  return (
    <View style={style}>
        {props.children}
    </View>
  );
}

const style: StyleProp<ViewStyle> = {
  flex: 1,
  backgroundColor: basicStyle.BACKGROUND_LIGHT
};
