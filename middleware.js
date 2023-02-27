import { geolocation, rewrite } from '@vercel/edge';



export default function middleware(request) {
    let url = new URL(request.url);
    let pathname = url.pathname;
    if (pathname === '/api') {
        return new Response('Hello from the API!');
    }

    console.log('request', request)
    console.log('url', request.url)
    let test = rewrite('/allow')
    console.log('test', test)
    return test
}