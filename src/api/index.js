/* 
包含n个接口请求函数的模块
接口请求函数的返回值：promise对象
*/

import ajax from '/ajax'

// 1、根据经纬度获取位置详情
export const reqAddress = (geohash) => ajax(`/position/${geohash}`)

// 2、获取食品分类列表
export const reqFoodTypes = () => ajax('/index_category')

// 3、根据经纬度获取商铺列表
export const reqShops = (longitude,latitude) => ajax('/shops',{longitude,latitude})

// 4、根据经纬度和关键字搜索商铺列表
export const reqKeywords = (geohash,keyword) => ajax('/search_shops',{geohash,keyword})

// 5、获取一次性验证码
export const reqCodes = () => ajax('/captcha')

// 6、用户名密码登陆
export const reqLogin = (name,pwd,captcha) => ajax('/login_pwd',{name,pwd,captcha},'POST')

// 7、发送短信验证码
export const reqSendCodes = (phone) => ajax('/sendcode',{phone})

// 8、手机号验证码登陆
export const reqLoginSms = (phone,code) => ajax('/login_sms',{phone,code})

// 9、根据会话获取用户信息
export const reqUserInfo = () => ajax('/userinfo')

// 10、用户登出
export const reqLogout = () => ajax('/logout')


