import { FC, Suspense } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {
  loadQuery,
  PreloadedQuery,
  usePreloadedQuery,
  graphql,
} from 'react-relay';
import RepositoryName from './RepositoryName';
import RelayEnvironment from './RelayEnvironment';
import { AppRepositoryNameQuery } from './__generated__/AppRepositoryNameQuery.graphql';
import UserInfo from './UserInfo';

const RepositoryNameQuery = graphql`
  query AppRepositoryNameQuery {
    repository(owner: "facebook", name: "relay") {
      ...RepositoryNameRepositoryFragment_repository
    }
  }
`;

const preloadedQuery: PreloadedQuery<AppRepositoryNameQuery> = loadQuery(
  RelayEnvironment,
  RepositoryNameQuery,
  {}
);

const App: FC = () => {
  const data = usePreloadedQuery(RepositoryNameQuery, preloadedQuery);

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <div>
        {data.repository && <RepositoryName repository={data.repository} />}
      </div>
      <div>
        <Suspense fallback={<p>loading userinfo...</p>}>
          <UserInfo />
        </Suspense>
      </div>
    </div>
  );
};

export default App;
