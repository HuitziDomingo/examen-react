const API = 'http://localhost:4000/fields'

export const getFields = async () => {
    let res = await fetch(API)
    return await res.json()
}