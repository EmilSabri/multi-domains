

export function load({ params }) {
    console.log('/[subdomain]', params)

    return {
        subdomain: params.subdomain
    }
}