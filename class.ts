class Animal {
    name:string;
    constructor(name:string){
        this.name = name;
    }
    run(){
        return `${this.name} is running`
    }
}

//实例化类
const snake = new Animal("lily");
console.log(snake.run());

//继承
class Dog extends Animal {
    bark(){
        return `${this.name} is barking`
    }
}
const xiaobao = new Dog('xiaobao');
console.log(xiaobao.run())
console.log(xiaobao.bark())

class Cat extends Animal {
    constructor(name){//重写构造函数，在子类的构造函数中必须使用super去调用父类的方法，不然会报错
        super(name);
        console.log(this.name)
    }
    run(){//重写run方法
        return 'Meow,' + super.run()
    }
}
const maomao = new Cat('maomao');
console.log(maomao.run())