class Animal {
    readonly name:string;//修饰符：默认public，加不加都可以。private只能在类中访问，子类也不能访问，如果想要子类能够访问用protected。readonly:只读
    static categoies:string[] = ["mammal","bird"];//静态属性,和类没有多大的关系，用静态属性
    static isAnimal(a){//静态方法，和类没有多大的关系，用静态方法
        return a instanceof Animal
    }
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
console.log(Animal.categoies);
console.log(Animal.isAnimal(snake))

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




//当创建两个不同的类，但是有相同的属性或者方法的时候，可以将这个属性或者方法提取成接口
interface Radio{
    switchRadio():void;//：void返回值是什么都不返回，：number返回number类型的值
}
interface Battery{
    checkBatteryStatus();
}
interface RadioWithBattery extends Radio{//这样接口就能够继承Radio的属性和方法
    checkBatteryStatus();
}

class Car1 implements RadioWithBattery{//implements实现接口
    switchRadio(){

    }
    checkBatteryStatus(){

    }
}

class Car implements Radio,Battery{//implements实现接口
    switchRadio(){

    }
    checkBatteryStatus(){

    }
}

class CellPhone {
    switchRadio(){

    }
}