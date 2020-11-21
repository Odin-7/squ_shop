/* 
ajax 请求函数模块
返回值：promise对象（异步返回的数据是：response.data）
*/
import axios from 'axios'


export default function ajax(url, data = {}, type = 'GET') {

    return new Promise(function (resolve, reject) {
        // 执行异步Ajax请求
        // 成功了调用resolve（）
        // 失败了调用reject（）

    let promise
    if (type === 'GET') {
        // 准备 url query 参数数据
        let dataStr = '' //数据拼接字符串
        Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
        })
        if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
        }
        // 发送 get 请求
        promise = axios.get(url)
        } else {
        // 发送 post 请求
        promise = axios.post(url, data)
        }   
        // axios返回的是response

        promise.then(function(response){
            resolve(response.data)    // 直接得到想要的数据data，简化外部调用
        })
            .catch(function(error){
                reject(error)
            })
    })
    
    
}