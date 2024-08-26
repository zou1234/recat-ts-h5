import {https} from "../utils";
import { ResType } from "../utils/base-ts-type.ts";

export type swiperListItem = {
    clickType: number
    click_url: string
    client: number
    createTime: string
    id: number
    img_url: string
    status: number
    type: number
    weigh: number
}

export type searchListItem = {
    backgroundPicture: string
    showMark: string
    showName: string
    remark: string
    type: string
    director: string
    leadingRole: string
}

export type navListItem = {
    "name": string,
    "imgUrl": string
}

// 请求轮播图
export function getSwiperListAPI(){
    return https.request<ResType<swiperListItem[]>>({
        url: "http://localhost:8089/swiper-data"
    })
}

// 请求导航菜单
export function getNavListAPI(){
    return https.request<ResType<navListItem[]>>({
        url: "http://localhost:8089/get-nav-list"
    })
}

// 请求影票列表
export function getSearchListAPI(){
    return https.request<ResType<searchListItem[]>>({
        url: "http://localhost:8089/get-search-list"
    })
}