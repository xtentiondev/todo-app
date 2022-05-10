import { gql } from '@apollo/client';

export const FETCH_TASK_LIST = gql`
  query {
    tasks {
      id
      title
      tags
      highPriority
      completed
    }
  }
`;

export const TOGGLE_COMPLETION = gql`
  mutation ToggleCompletion($id: Int) {
    toggleCompletion(id: $id) {
      id
      title
      tags
      highPriority
      completed
    }
  }
`;
