import * as React from 'react';

import { Text, TextProps } from './Themed';

export function MonoText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />;
}
export function SFText(props: TextProps) {

  return <Text {...props} style= {[props.style, {fontFamily:'SF-pro'}]}/>;
}