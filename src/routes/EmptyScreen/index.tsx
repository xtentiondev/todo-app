import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text } from 'native-base';

import Layout from '~/components/Layout';

const EmptyScreen = () => {
  return (
    <Layout title='Empty'>
      <Text>This is an empty screen.</Text>
      <StatusBar style='auto' />
    </Layout>
  );
};

export default EmptyScreen;
