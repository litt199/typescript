//数字枚举
enum Direction {//枚举成员从0开始
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}
const value = "UP"
if(value === Direction.Up){
    console.log("go up!")
}


//常量枚举
const enum Direction1 {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}