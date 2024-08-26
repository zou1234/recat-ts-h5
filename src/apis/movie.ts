import {https} from "../utils";

export type ResType<T> = {
    message: string,
    code: number,
    success:string,
    data: T,
}

export type cityListItem = {
    name: string
    code: number
}

export type brandListItem = {
    name: string
    code: number
}

export type cinemaListItem = {
    "name": string,
    "price": number,
    "priceMuch": number,
    "address": string,
    "distance": string
}

// 请求城市
export function getCityListAPI(){
    return https.request<ResType<cityListItem[]>>({
        url: "http://localhost:8089/get-city-list"
    })
}

// 请求导航菜单
export function getBrandListAPI(){
    return https.request<ResType<brandListItem[]>>({
        url: "http://localhost:8089/get-brand-list"
    })
}


// 请求影院列表
export function getCinemaListAPI(){
    return https.request<ResType<cinemaListItem[]>>({
        url: "http://localhost:8089/get-cinema-list"
    })
}