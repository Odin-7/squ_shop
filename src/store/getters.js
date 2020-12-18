/* 
 包含多个基于state的getter计算属性的对象
*/

export default {
    
    totalCount(state) {
        return state.cartFoods.reduce((preTotal,food)=>preTotal+food.count, 0)
    },
        // preTotal表示上一次调用回调时的返回值
    totalPrice(state) {
        return state.cartFoods.reduce((preTotal,food)=>preTotal+food.count*food.price, 0)
    },

    positiveSize(state) {
        return state.cartFoods.reduce((preTotal,ratings)=>preTotal+(ratings.rating.rateType===0?1:0), 0)
    }
}

