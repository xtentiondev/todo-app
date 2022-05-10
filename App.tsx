import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import { useFonts } from 'expo-font';
import { LogBox } from 'react-native';
import ErrorBoundary from 'react-native-error-boundary';
import {
  ApolloClient,
  ApolloProvider,
  NormalizedCacheObject
} from '@apollo/client';

import Routes from '~/routes';
import getClient from '~/graphql/client';

LogBox.ignoreAllLogs();

const customFonts = {
  IcoMoon: require('./src/assets/fonts/IcoMoon/icomoon.ttf')
};

export default function App() {
  const [client, setClient] = useState<ApolloClient<NormalizedCacheObject>>();
  useEffect(() => {
    async function initializeCache() {
      setClient(await getClient());
    }
    initializeCache();
  }, []);

  const [isLoaded] = useFonts(customFonts);

  if (!isLoaded || !client) {
    return <></>;
  }
  return (
    <ErrorBoundary>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <NativeBaseProvider>
            <Routes />
          </NativeBaseProvider>
        </NavigationContainer>
      </ApolloProvider>
    </ErrorBoundary>
  );
}
