// 动态路由 匹配，后端接口拿权限清单筛选

import {useRoutes} from "react-router-dom"
import {routes} from "../../router";

function DynamicRouter(){
    return useRoutes(routes)
}

export default DynamicRouter
