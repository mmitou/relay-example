import { FC } from 'react';
import { graphql, useFragment } from 'react-relay';
import { RepositoryNameRepositoryFragment_repository$key } from './__generated__/RepositoryNameRepositoryFragment_repository.graphql';

const repositoryFragment = graphql`
  fragment RepositoryNameRepositoryFragment_repository on Repository {
    name
    createdAt
  }
`;

interface Props {
  repository: RepositoryNameRepositoryFragment_repository$key;
}

const RepositoryName: FC<Props> = ({ repository }: Props) => {
  const { name } = useFragment(repositoryFragment, repository);
  return (
    <div>
      <p>name: {name}</p>
    </div>
  );
};

export default RepositoryName;
