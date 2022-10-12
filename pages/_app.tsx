import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { RouteGuard } from '../components/routes/RouteGuard'
import React from 'react'

interface User {
  token: string | null
}

const UserContext = React.createContext<User | null>(null);

function MyApp({ Component, pageProps }: AppProps) {

  const [token, setToken] = React.useState<User>({token: ''});

  React.useEffect(() => {
    if(typeof window !== undefined) {
      setToken({token: window.localStorage.getItem('Authorization')})
    }
  }, [])

  return (
    // <RouteGuard>
      <UserContext.Provider value={token}>
        <Component {...pageProps} />
      </UserContext.Provider>

    // </RouteGuard>
  )
}

export default MyApp
