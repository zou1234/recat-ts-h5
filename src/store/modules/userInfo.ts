import { createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const userStore = createSlice({
    name: "userInfo",
    // 初始状态数据
    initialState:{
        userInfo: {}
    },
    //修改数据的同步方法
    reducers:{
        setUserInfo(state, action){
            state.userInfo = action.payload
        }
    }
})

// 解构出创建action对象的函数
const { setUserInfo } = userStore.actions;

//获取reducer函致
const userInfoReducer = userStore.reducer

// 获取数据
const getUserInfo = () => {
    return async (dispatch:any)=>{
        const res = await axios('http://localhost:8089/userInfo')
        dispatch(setUserInfo(res.data.data))
        sessionStorage.setItem("token", JSON.stringify(res.data.data))
    }
}

//导出创建action对象的函数和reducer函数
export { getUserInfo, setUserInfo }

export default userInfoReducer