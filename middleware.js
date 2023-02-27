import { geolocation, rewrite } from '@vercel/edge';



export default function middleware(request) {
    let url = new URL(request.url);
    let pathname = url.pathname;
    if (pathname === '/api') {
        return new rewrite(new URL('/blocked', request.url))
    }

    console.log('url', request.url)
    console.log('pathname', pathname)

    if (pathname === '/') {
        return rewrite(new URL('/allow', request.url))
    }
}