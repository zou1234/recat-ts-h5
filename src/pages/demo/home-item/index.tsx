import { List, Image, InfiniteScroll } from 'antd-mobile'
import "./index.css"
import {useEffect, useState} from "react";
import {listRes} from "@/apis/list.ts";
import {fetchListAPI} from "../../../apis/list.ts";

type Props = {
    channelId: string
}

const HomeItem = (props:Props)=>{
    const {channelId} = props
    const [hasMore, setHasMore] = useState(true)
    const [listRes, setListRes] = useState<listRes>({
        results: [],
        pre_timestamp: '' + new Date().getTime()
    })

    const loadMore = async () => {
        console.log('滚动加载');
        setHasMore(false)
    }

    useEffect(()=>{
        const getList = async () => {
            const res = await fetchListAPI({
                channel_id: channelId,
                timestamp: '' + new Date().getTime()
            })
            setListRes({
                results: res.data.data.results,
                pre_timestamp: res.data.data.pre_timestamp,
            })
        }
        getList()
    }, [channelId])

    return (
        <div>
            <List>
                {listRes.results.map(item => (
                    <List.Item
                        key={item.art_id}
                        prefix={
                            <Image
                                src={item.cover.images?.[0]}
                                style={{ borderRadius: 20 }}
                                fit='cover'
                                width={40}
                                height={40}
                            />
                        }
                        description={item.pubdate}
                    >
                        {item.title}
                    </List.Item>
                ))}
            </List>
            <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
        </div>
    )
}

export default HomeItem