const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  # This "Task" type defines the queryable fields for every task.
  type Task {
    id: Int
    title: String
    highPriority: Boolean
    tags: [String]
    completed: Boolean
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "tasks" query returns an array of zero or more Tasks (defined above).
  type Query {
    tasks: [Task]
  }

  type Mutation {
    toggleCompletion(id: Int): Task
  }
`;

const tasks = [
  {
    id: 1,
    title: 'Call carpenter to fix kitchen pipe',
    highPriority: true
  },
  {
    id: 2,
    title: 'Pick Melanie from football game',
    tags: ['home', 'celebration', 'chores']
  },
  {
    id: 3,
    title: 'Help Andreas with homework',
    highPriority: true
  },
  {
    id: 4,
    title: 'Pick Melanie from football game',
    highPriority: true,
    tags: ['home', 'celebration', 'chores'],
    completed: true
  }
];

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves tasks from the "tasks" array above.
const resolvers = {
  Query: {
    tasks: () => tasks,
  },
  Mutation: {
    toggleCompletion: (context, { id }) => {
      const task = tasks.find(t => t.id === id);
      return {
        ...task,
        completed: !task.completed
      };
    }
  }
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
