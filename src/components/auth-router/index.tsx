// 路由权限拦截，是否有token；

import {Navigate} from "react-router-dom"

function RouterAuth({children}:any){
    const token = sessionStorage.getItem('token')

    if(token){
        return <>{children}</>
    }else {
        return <Navigate to='/login'/>
    }
}

export default RouterAuth
