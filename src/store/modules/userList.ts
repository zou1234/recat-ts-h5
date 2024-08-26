import { createSlice } from "@reduxjs/toolkit"

const userStore = createSlice({
    name: "userList",
    // 初始状态数据
    initialState:{
        list: []
    },
    //修改数据的同步方法
    reducers:{
        setList(state, action){
            state.list = action.payload
        }
    }
})

// 解构出创建action对象的函数
const { setList } = userStore.actions
//获取reducer函致
const userListReducer = userStore.reducer

// 获取数据
const getList = () => {
    return async (dispatch:any)=>{
        fetch('http://geek.itheima.net/v1_0/channels').then(()=>{
            dispatch(setList([
                {name:1},
                {name:2}
            ]))
        })
    }
}

//导出创建action对象的函数和reducer函数
export { getList, setList }

export default userListReducer