import {useEffect, useState} from "react";
import {https} from "../utils";
import {ResType} from "./base-ts-type.ts";


// 请求封装, 统一请求
export function getRequestData<T>(param:any){
    const [data, setData] = useState<T>();

    useEffect(()=>{
        const getListData = async() => {
            try {
                const res = await https.request<ResType<T>>({
                    ...param
                })

                if(res.data.code === 200){
                    setData(res.data.data)
                }else {
                    console.log("接口失败!!!");
                }

            }catch (err){
                throw new Error("get channels err")
            }
        }
        getListData()
    }, [])

    return { data }
}