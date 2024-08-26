import { createSlice } from "@reduxjs/toolkit"

const userStore = createSlice({
    name: "userInfo",
    // 初始状态数据
    initialState:{
        count: 1
    },
    //修改数据的同步方法
    reducers:{
        increment(state){
            state.count++
        },
        decrement (state) {
            state.count--
        },
        addToNum(state, action){
            state.count = action.payload
        }
    }
})

// 解构出创建action对象的函数
const { increment, decrement, addToNum } = userStore.actions
//获取reducer函致
const userReducer = userStore.reducer

//导出创建action对象的函数和reducer函数
export {
    increment,
    decrement,
    addToNum
}

export default userReducer