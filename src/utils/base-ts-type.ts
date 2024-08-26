// 通用基础ts类型

// 接口请求最外层，基础类型
export type ResType<T> = {
    message: string,
    code: number,
    success:string,
    data: T,
}