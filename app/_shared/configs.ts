


export function EncryptionKey(){
    return process.env.NEXT_PUBLIC_ENC_KEY || 
        '199645ca1769c86b243dae5ae0af755fe8b9a84af295418b992a65d9411d99552f361cbc4e9d3fd681ff617a2800c8d0fd6a19dea46ca78e3d9b341dbf0ccd50'
}


export function APIKey(){
    return process.env.NEXT_PUBLIC_API_KEY ||
        'sHop1nas_aPi_k3y_r4nDomt3Xt_M3owmEow'
}


export function BrandCode(){
    return process.env.NEXT_PUBLIC_BRAND_CODE ||
        'DEVELOPMENTCODE'
}


/**
 * 
 * @param env environment value, undefined = .env
 */
export function APIBaseURL(env?: 'DEVELOPMENT' | 'STAGING' | 'PRODUCTION'){
    const e = env || process.env.NEXT_PUBLIC_ENVIRONMENT

    if(e === 'STAGING') return 'https://staging.api.shopinas.com/api'
    else if(e === 'PRODUCTION') return 'https://api.shopinas.com/api'
    else return 'http://localhost:3001/api'
}