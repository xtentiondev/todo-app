import React from 'react';
import { StyleSheet } from 'react-native';
import { createIconSet } from '@expo/vector-icons';

import { COLORS } from '~/constants';
import unicodesMap from '~/assets/fonts/IcoMoon/unicodesMap.json';

const IconSet = createIconSet(unicodesMap, 'IcoMoon', 'icomoon.ttf');

export type IconProps = {
  name: keyof typeof unicodesMap,
  color?: string,
  size?: number
};

const Icon = ({ name, color = COLORS.WHITE, size = 19 }: IconProps) => {
  return (
    <IconSet
      style={styles.icon}
      name={name}
      color={color}
      size={size}
    />
  );
};

const styles = StyleSheet.create({
  icon: {
    fontFamily: 'IcoMoon'
  }
});

export default Icon;
