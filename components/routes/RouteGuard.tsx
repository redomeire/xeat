import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export { RouteGuard };

function RouteGuard({ children }: Props) {
    const router = useRouter();
    const [authorized, setAuthorized] = useState(false);

    useEffect(() => {
        // on initial load - run auth check 
        authCheck(router.asPath);

        // on route change start - hide page content by setting authorized to false  
        const hideContent = () => setAuthorized(false);
        router.events.on('routeChangeStart', hideContent);

        // on route change complete - run auth check 
        router.events.on('routeChangeComplete', authCheck)

        // unsubscribe from events in useEffect return function
        return () => {
            router.events.off('routeChangeStart', hideContent);
            router.events.off('routeChangeComplete', authCheck);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function authCheck(url: string) {
        // redirect to login page if accessing a private page and not logged in 

        console.log(router.query)

        const publicPaths = ['/login', '/register'];
        const privatePaths = ['/concert', `/concert/${router.query.id}/details`];

        const path = url.split('?')[0];
        if (!publicPaths.includes(path) && !localStorage.getItem('Authorization')) {
            setAuthorized(false);
            router.push({
                pathname: '/login',
                query: { returnUrl: router.asPath }
            });
        } else if(privatePaths.includes(path) && localStorage.getItem('Authorization')) {
            setAuthorized(true);
        } else if(publicPaths.includes(path) && localStorage.getItem('Authorization')){
            router.push({
                pathname: '/home',
            })
        }
    }

    return (authorized && children);
}

interface Props {
    children: any
}