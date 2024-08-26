import {Tabs, SearchBar, InfiniteScroll} from 'antd-mobile'
import "./index.scss"
import {useEffect, useState} from "react";
import {getSearchListAPI, searchListItem} from "../../../apis/home.ts";
import BusinessCardOne from "../../../components/business-card-one";

function ContentCard() {
    const [list, setList] = useState<searchListItem[]>([])
    const [hasMore, setHasMore] = useState<boolean>(true)

    const getListName = async () => {
        const res:any = await getSearchListAPI();
        console.log(res);
        setList(list.concat(res.data.data.list))
    }

    useEffect(()=>{
        getListName();
    }, [])

    const loadMore = async () => {
        console.log('滚动加载');
        getListName();
        if(list.length > 40){
            setHasMore(false)
        }
    }

    const cardItems = list.map((item, index) =>
        <BusinessCardOne data={item} key={index}/>
    )

  return (
      <div className="content-card">
          <div className="content-card__top">
              <div className="content-card__tabs">
                  <Tabs>
                      <Tabs.Tab title='正在热映' key='fruits'>
                      </Tabs.Tab>
                      <Tabs.Tab title='即将上线' key='vegetables'>
                      </Tabs.Tab>
                  </Tabs>
              </div>
              <div className="content-card__search">
                  <SearchBar placeholder='搜索影片' />
              </div>
          </div>
          {cardItems}
          <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
      </div>
  )
}

export default ContentCard;
