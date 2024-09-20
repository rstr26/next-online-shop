import { APIBaseURL, APIKey, BrandCode } from "../_shared/configs"
import { EncryptStr } from "../_shared/functions"


export function Login(credentials: { uname: string, pword: string }){
    return new Promise((resolve, reject) => {
        fetch(`${APIBaseURL()}/shared/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                key: EncryptStr(APIKey()),
                uname: credentials.uname,
                pword: EncryptStr(credentials.pword),
                brandcode: EncryptStr(BrandCode())
            })
        })
        .then(async (res) => {
            const data = await res.json()

            // catch any http errors
            if(!res.ok){
                throw new Error(data.message)
            }
            else return data
        })
        .then(data => {
            // if credentials are matched, resolve
            if(data.success){
                resolve(data)
            }

            // if credentials fails, reject
            else reject('Invalid username or password, please try again.')
        })
        .catch(err => reject(err.message))
    })
}