function sum(x:number,y:number):number{
    return x+y;
}
const sum1:(x:number,y:number)=>number = sum;//箭头指的是返回类型，不是箭头函数


/**********类型别名**********/
//将类型抽象出来
type PlusTpe = (x:number,y:number)=>number;
const sum2:PlusTpe = sum;

type NameResolver = ()=>string;
type NameOrResolver = string | NameResolver;
function getName(n:NameOrResolver):string {//如果传入的参数中是含有函数的联合类型，直接写在括号里面是会报错的，这时候就需要把这个传入的类型抽象出来
    if(typeof n ==="string"){
        return n;
    }else{
        return n();
    }
}

/**********类型断言**********/
function getLength(input:number|string):number{//这边input 只能用number和string公共的方法和属性
    // const str = input as String;//这时候可以手动去指定
    // if(str.length){
    //     return str.length;
    // }else{
    //     const number = input as Number;
    //     return number.toString().length;
    // }
    if((<string>input)){//断言：类型断言不是类型转换
        return (<string>input).length
    }else{
        return (<string>input).toString().length
    }
}