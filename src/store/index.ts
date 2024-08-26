import { configureStore } from "@reduxjs/toolkit"
import userStoreReducer from "./modules/userStore"
import userListReducer from "./modules/userList"
import userInfoReducer from "./modules/userInfo"

// 创建根store组合子模块
const store = configureStore({
    reducer:{
        userStore: userStoreReducer,
        userList: userListReducer,
        userInfo: userInfoReducer,
    }
})

export default store