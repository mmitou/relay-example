import { FC, useEffect, useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { fetchGraphQL } from './fetchGraphQL'

interface Repository {
  data: {
    repository: {
      name: string
    }
  }
}

export const App: FC = () => {
  const [name, setName] = useState('')

  useEffect(() => {
    let isMounted = true
    fetchGraphQL<Repository>(
      `
      query RepositoryNameQuery {
        # feel free to change owner/name here
        repository(owner: "facebook" name: "relay") {
          name
        }
      }
			`,
      {}
    )
      .then((response) => {
        if (!isMounted) {
          return
        }
        const data = response.data
        setName(data.repository.name)
      })
      .catch((err) => {
        console.error(err)
      })
    return () => {
      isMounted = false
    }
  }, [])

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
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
      </Box>
      <div>
        <p>{name != null ? `Repository: ${name}` : 'Loading'}</p>
      </div>
    </div>
  )
}
