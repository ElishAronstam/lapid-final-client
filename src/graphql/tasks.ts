import { gql } from '@apollo/client';

export const ALL_TASKS=gql`
query Tasks {
  tasks {
    id
    title
    description
    estimatedTime
    status
    priority
    review
    timeSpent
    endTime
  }
}
  `