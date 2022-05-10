import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Box, Flex, HStack, Text } from 'native-base';
import { noop } from 'lodash';

import { COLORS } from '~/constants';
import Icon from '~/components/Icon';
import Tag from '~/components/Tag';

export type Tag = 'home' | 'celebration' | 'chores';

export type TaskProps = {
  id: number;
  title: string;
  highPriority?: boolean;
  completed?: boolean;
  tags?: Tag[];
  onComplete?: Function;
};

const Task = ({ title, completed, highPriority, tags, onComplete = noop }: TaskProps) => {
  return (
    <Flex style={styles.container}>
      <Flex align='center' justify='space-between' direction='row' style={styles.header}>
        <Flex align='center' direction='row'>
          {highPriority && (
            <Box style={styles.highPriority} />
          )}
          <Text
            textDecorationLine={completed ? 'line-through' : 'none'}
            style={styles.title}
          >
            {title}
          </Text>
        </Flex>
        <TouchableOpacity onPress={() => onComplete()}>
          <Icon
            name={completed ? 'status-completed' : 'status-select'}
            color={completed ? COLORS.SECONDARY : COLORS.GRAY3}
            size={22}
          />
        </TouchableOpacity>
      </Flex>
      {Boolean(tags?.length) && (
        <HStack space={1} alignSelf='flex-start' marginTop={2}>
          {tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
        </HStack>
      )}
    </Flex>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 9,
    borderColor: COLORS.GRAY1,
    borderWidth: 1,
    borderStyle: 'solid',
    padding: 15,
    marginBottom: 9
  },
  header: {
    width: '100%'
  },
  highPriority: {
    width: 8.5,
    height: 8.5,
    backgroundColor: COLORS.SECONDARY,
    transform: [{ rotateZ: '45deg' }],
    marginRight: 7
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.BLACK
  }
});

export default Task;
