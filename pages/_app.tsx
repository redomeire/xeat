import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { RouteGuard } from '../components/routes/RouteGuard'
import React from 'react'
import Router from 'next/router'
import { PageLoader } from '../components/loader/SkeletonLoader';

interface User {
  token: string | null
}

const UserContext = React.createContext<User | null>(null);

function MyApp({ Component, pageProps }: AppProps) {

  const [token, setToken] = React.useState<User>({token: ''});
  const [loading, setLoading] = React.useState(false);

  Router.events.on("routeChangeStart", () => {
    setLoading(true);
  })
  
  Router.events.on("routeChangeComplete", () => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  })

  React.useEffect(() => {
    if(typeof window !== undefined) {
      setToken({token: window.localStorage.getItem('Authorization')})
    }
  }, [])

  return (
    // <RouteGuard>
      <UserContext.Provider value={token}>
        {
          loading ? <PageLoader/> : <Component {...pageProps} />
        }
      </UserContext.Provider>

    // </RouteGuard>
  )
}

export default MyApp
