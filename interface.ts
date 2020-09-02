interface Person {
    readonly id:number;//只读属性，类似const。readonly用在属性上面，const用在变量上面
    name:string;
    age?:number;//可选属性，用的时候不写也可以
}
let viking: Person = {
    id:123,
    name:'viking',
    age:20,
}