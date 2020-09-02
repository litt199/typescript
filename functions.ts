//函数声明
function add1(x:number,y:number,z?:number):number{//可选参数必须放在确定参数后面，可选参数可以添加默认值
    return x+y;
}
let result = add1(2,3,3)

//函数表达式
const add = function(x:number,y:number,z:number = 10):number{
    if(typeof z === 'number'){
        return x+y+z;
    }else{
        return x+y;
    }  
}
//typescript在没有声明明确类型的时候会推断类型
const add2:(x:number,y:number,z?:number) => number = add;//箭头不是es6中箭头函数，而是ts中声明函数类型返回的方法和实际代码逻辑没有关系