import { config } from 'next-apollo-hoc';

config.add({
  endpoint: process.env.GRAPHQL_ENDPOINT,
  link: {
    credentials: 'include'
  }
})

export * from 'next-apollo-hoc'