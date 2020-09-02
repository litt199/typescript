function echo<T>(arg:T):T{
    return arg
}
const result1 = echo(true);


//在元组上使用泛型
function swap<T,U>(tuple:[T,U]):[U,T]{
    return [tuple[1] , tuple[0]]
}
const result2 = swap(["string",123]);


/*****************************************************约束泛型***************************************************/
//未使用约束泛型出现的问题
function echoWithArr<T>(arg:T[]):T[]{
    console.log(arg.length);//问题：上面必须指定是数组，才能使用length属性,这个时候使用约束泛型
    return arg;
}
const result3  =echoWithArr([1,2,3,4]);

//使用约束泛型解决以上问题
interface IWithLength{
    length:number;
}
function echoWithLength<T extends IWithLength>(arg:T):T{//用extends来约束传入的泛型,只要传入的值有length属性就不会报错
    console.log(arg.length);
    return arg
}
const str = echoWithLength("str");
const obj = echoWithLength({length:10,width:10});
const arr = echoWithLength([1,2,3,4]);


/*****************************************************泛型在类和接口上的使用***************************************************/
class Queue<T>{
    private data = [];
    push(item:T){
        return this.data.push(item);
    };
    pop():T{
        return this.data.pop();
    }
}
const queue = new Queue<number>();
queue.push(1);
console.log(queue.pop().toFixed());

const queue2 = new Queue<string>();
queue2.push("str");
console.log(queue2.pop().length);

interface KeyPari<T,U>{
    key:T;
    value:U;
}
let KP1:KeyPari<number,string> = {key:123,value:"str"}
let KP2:KeyPari<string,number> = {key:"str1",value:123}
