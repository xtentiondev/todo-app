import React, { PropsWithChildren, ReactNode } from 'react';
import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Flex, ScrollView, Text } from 'native-base';

import { COLORS } from '~/constants';

export type LayoutProps = PropsWithChildren<{
  actions?: ReactNode;
  title?: string;
}>;

const Layout = ({ children, title, actions }: LayoutProps) => {
  return (
    <Flex align='center' justify='center' style={styles.container} >
      <StatusBar style='light' />
      <Flex align='center' justify='space-between' direction='row' style={styles.header}>
        <Text style={styles.headerTitle}>{title}</Text>
        <Flex direction='row' align='center'>{actions}</Flex>
      </Flex>
      <ScrollView style={styles.content}>
        {children}
      </ScrollView>
    </Flex>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY
  },
  header: {
    marginTop: 50,
    height: 50,
    marginBottom: 10,
    width: '100%',
    paddingHorizontal: 15
  },
  headerTitle: {
    color: COLORS.WHITE,
    fontSize: 19,
    fontWeight: 'bold'
  },
  content: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    width: '100%',
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    padding: 15
  }
});

export default Layout;
