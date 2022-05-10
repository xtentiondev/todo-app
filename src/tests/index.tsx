import React, { ReactNode } from 'react';
import renderer from 'react-test-renderer';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { ApolloProvider } from '@apollo/client';

import client from '~/graphql/test-client';

export const wrapped = (children: ReactNode) => (
  <ApolloProvider client={client}>
    <NavigationContainer>
      <NativeBaseProvider
        initialWindowMetrics={{
          frame: {
            width: 320,
            height: 640,
            x: 0,
            y: 0
          },
          insets: {
            left: 0,
            right: 0,
            bottom: 0,
            top: 0
          }
        }}
      >
        {children}
      </NativeBaseProvider>
    </NavigationContainer>
  </ApolloProvider>
);

export const render = (children: ReactNode) => {
  return renderer.create(
    wrapped(children)
  );
};
