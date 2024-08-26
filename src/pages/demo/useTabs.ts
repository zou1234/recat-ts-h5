import {useEffect, useState} from "react";
import {fetchChanelAPI} from "../../apis/list.ts";
import {ChannelItem} from "@/apis/list.ts";

// 获取 tab 数据
export function useTabs(){
    const [list, setList]  = useState<ChannelItem[]>();

    useEffect(()=>{
        const getListData = async() => {
            try {
                const res = await fetchChanelAPI();
                setList(res.data.data.channels)
                // debugger
            }catch (err){
                throw new Error("get channels err")
            }
        }
        getListData()
    }, [])

    return{ list }
}