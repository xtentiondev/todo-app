import React from 'react';
import { Text, Badge } from 'native-base';
import { startCase } from 'lodash';

import { COLORS } from '~/constants';

export type TagType = 'home' | 'celebration' | 'chores';

const Tag = ({ children }: { children: TagType }) => {
  let color = '';
  switch (children) {
    case 'celebration':
      color = COLORS.TAG2;
      break;
    case 'chores':
      color = COLORS.TAG3;
      break;
    case 'home':
    default:
      color = COLORS.TAG1;
      break;
  }
  return (
    <Badge
      style={{
        backgroundColor: color,
        color: COLORS.BLACK,
        paddingHorizontal: 8,
        paddingVertical: 4
      }}>
      <Text
        style={{
          fontSize: 12,
          borderRadius: 5
        }}
      >
        {startCase(children)}
      </Text>
    </Badge>
  );
};

export default Tag;
