import { geolocation, rewrite } from '@vercel/edge';



export default function middleware(request) {
    let url = new URL(request.url);
    let pathname = url.pathname;
    if (pathname === '/api') {
        return new Response('Hello from the API!');
    }

    const country = geolocation(request);

    return rewrite(new URL('/allow', request.url))
}