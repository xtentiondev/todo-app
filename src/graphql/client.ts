import {
  ApolloLink,
  ApolloClient,
  InMemoryCache,
  HttpLink
} from '@apollo/client';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistCache } from 'apollo-cache-persist';
import OfflineLink from 'apollo-link-offline';

const serverLink = new HttpLink({
  uri: 'http://localhost:4000/'
});

const offlineLink = new OfflineLink({
  storage: AsyncStorage
});

const cache = new InMemoryCache({
  addTypename: false
});

const getClient = async () => {
  const client = new ApolloClient({
    link: ApolloLink.from([offlineLink, serverLink]),
    cache,
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-first',
        errorPolicy: 'all'
      },
      query: {
        fetchPolicy: 'cache-first',
        errorPolicy: 'all'
      },
      mutate: {
        errorPolicy: 'all'
      }
    }
  });
  await persistCache({
    cache,
    storage: AsyncStorage,
    maxSize: false,
    debug: false
  });
  return client;
};

export default getClient;
