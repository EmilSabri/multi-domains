import { geolocation, rewrite } from '@vercel/edge';



export default function middleware(request) {
    let url = new URL(request.url);
    let pathname = url.pathname;
    if (pathname === '/api') {
        return new Response('Hello from the API!');
    }

    console.log('url', request.url)
    console.log('pathname', pathname)

    return rewrite(new URL('/allow', 'https://multi-domains.vercel.app'))
}