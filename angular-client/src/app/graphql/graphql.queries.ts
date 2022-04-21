import { gql } from 'apollo-angular';

const PARTS_LIST = gql`
  query {
    parts {
      name
      quantity
      weight
      criticalPart
      createdDate
    }
  }
`;

export { PARTS_LIST };
