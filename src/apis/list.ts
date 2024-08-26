import {https} from "../utils";
import { ResType } from "../utils/base-ts-type.ts";

export type ChannelItem = {
    id: number,
    name: string
}

type ChannelRes = {
    channels:ChannelItem[]
}

// 请求频道
export function fetchChanelAPI(){
    return https.request<ResType<ChannelRes>>({
        url: "http://geek.itheima.net/v1_0/channels"
    })
}

// 请求文章
export type ListItem = {
    art_id: string,
    title: string,
    aut_id: string,
    com_count: number,
    pubdate: number,
    aut_name: number,
    is_top: number,
    cover: {
        type: number,
        images: string[]
    },
}

export type listRes = {
    results: ListItem[],
    pre_timestamp: string
}

type ReqParams = {
    channel_id: string,
    timestamp: string
}

export function fetchListAPI(params:ReqParams){
    return https.request<ResType<listRes>>({
        url: "http://geek.itheima.net/v1_0/articles",
        params
    })
}