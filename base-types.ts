//dev分支123123

let isDone: boolean = false;

let age:number = 12;
let binaryNumber:number = 0b1111;

let firstName:string = 'viking';
let message:string = `Hello,${firstName},age is ${age}`

let u:undefined = undefined;
let n:null = null;

let num:number = undefined;

let notSure:any = 4;//任意一种类型

let numberOrString:number|string = 123;//联合类型

let arrOfNumbers:number[] = [1,2,3,4]//数组中如果存在string,就会报错

//类数组
function test(){
    console.log(arguments)//arguments就是类数组,有length,取第几项，但是没有数组上的方法
    arguments.length;
    arguments[0];
}

let user:[string,number] = ["viking",20]//元组：限制每一项，多一项少一项都会报错
