import { SearchBar } from 'antd-mobile'
import CinemaCard from "@/components/cinema-card"
import "./index.scss"
import {useEffect, useState} from "react";

import {
    cinemaListItem,
    getBrandListAPI,
    getCinemaListAPI,
    getCityListAPI
} from "../../../apis/movie.ts";
import BaseDropdown from "../../../components/base-dropdown";

interface item {
    name: string
    code: number
}

interface dropDataType {
    title: string,
    key: string,
    data: item[]
}

function HeaderFilter() {
  const [cinemaList, setCinemaList] = useState<cinemaListItem[]>();
  const [dropData, setDropData] = useState<dropDataType[]>([
      {
          title: "全城",
          key: "1",
          data: []
      },
      {
          title: "品牌",
          key: "2",
          data: []
      }
  ]);

    useEffect(()=>{
        const getCinemaList = async ()=>{
            const res = await getCinemaListAPI()
            setCinemaList(res.data.data)
        }

        const getDropData = async () => {
           const resCity = await getCityListAPI()
           const resBrand = await getBrandListAPI()

            setDropData(dropData.map((item:any) => {
                if(item.title === "全城"){
                    return{
                        ...item,
                        data: resCity.data.data
                    }
                }
                if(item.title === "品牌"){
                    return{
                        ...item,
                        data: resBrand.data.data
                    }
                }
                return item
            }))
        }

        getDropData()
        getCinemaList()
    }, [])

    const CinemaCardDom = cinemaList?.map((item, index) => (
        <CinemaCard key={index} data={item}/>
    ))

  return (
      <div className="header-filter">
        <div className="header-filter__top">
          <div className="header-filter__city">厦门 <span></span></div>
          <SearchBar
              placeholder='搜影院'
              style={{ '--background': '#ffffff' }}
          />
        </div>
        <BaseDropdown data={dropData}/>
        <div className="header-filter__card">
            {CinemaCardDom}
        </div>

      </div>

  );
}

export default HeaderFilter;
