import { TextField } from '@mui/material';
import { ChangeEvent, FC, Suspense, useState } from 'react';
import { graphql, useLazyLoadQuery } from 'react-relay';
import {
  UserInfoQuery,
  UserInfoQueryResponse,
  UserInfoQueryVariables,
} from './__generated__/UserInfoQuery.graphql';

const query = graphql`
  query UserInfoQuery($login: String!) {
    user(login: $login) {
      name
      createdAt
      login
      url
    }
  }
`;

const useUserInfo = (
  variables: UserInfoQueryVariables
): UserInfoQueryResponse['user'] => {
  const data = useLazyLoadQuery<UserInfoQuery>(query, variables);

  return data.user;
};

interface UserInfoViewerProps {
  login: string;
}

const UserInfoViewer: FC<UserInfoViewerProps> = ({
  login,
}: UserInfoViewerProps) => {
  const user = useUserInfo({ login });

  if (user) {
    const { name } = user;
    return (
      <div>
        <p>User Info:</p>
        <p>name: {name}</p>
      </div>
    );
  }
  return (
    <div>
      <h2>User not found</h2>
    </div>
  );
};

const UserInfo: FC = () => {
  const [login, setLogin] = useState('');
  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setLogin(ev.target.value);
  };

  return (
    <div>
      <div>
        <TextField value={login} onChange={handleChange} />
      </div>
      <Suspense fallback={<p>loading {login}...</p>}>
        <UserInfoViewer login={login} />
      </Suspense>
    </div>
  );
};

export default UserInfo;
