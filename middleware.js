import { geolocation, rewrite } from '@vercel/edge';



export default function middleware(request) {
    let url = new URL(request.url);
    let pathname = url.pathname;
    if (pathname === '/api') {
        return new Response('Hello from the API!');
    }

    const country = geolocation(request);

    console.log('country', country)
    console.log(new URL('/allow', request.url))
    return rewrite('/allow')
}