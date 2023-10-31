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

export const CREATE_TASK = gql`
  mutation createTask(
    $title: String!
    $description: String!
    $estimatedTime: String!
    $status: String!
    $priority: String!
    $review: String
    $timeSpent:String
    $endTime: String

  ) {
    createTask(
      taskInput: {
        title: $title
        description: $description
        estimatedTime: $estimatedTime
        status: $status
        priority: $priority
        review: $review
        timeSpent: $timeSpent
        endTime: $endTime
      }
    ) {
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
`;

export const DELETE_TASK=gql`
   mutation deleteTask($taskId:String!){
     deleteTask(taskId:$taskId)
     }
  `;

export const FILTER_TASKS = gql`
  query FilterTasks(
     $statusFilter:Boolean
     $priorityFilter:Boolean
     $searchWord:String
  ) {
    filterTasks(
      filters: {
          statusFilter:$statusFilter
          priorityFilter:$priorityFilter
          searchWord:$searchWord
      }
    ) {
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
`;
