import { redirect } from '@sveltejs/kit';

const PERMANENT_REDIRECT_CODE = 308;
const subdomains = ['multi-domains.vercel.app', ]

export function load({ url }) {
    
    const { host } = url;
    const subdomain = subdomains.find((subdomain) => host.includes(subdomain));

    Object.entries(url).forEach(([key, value]) => {
        console.log('root', key, value)
    })

    return {
        domain: url.host
    }
}