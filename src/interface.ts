// 使用接口
interface Ponit {
  x: number,
  y?: number // y设置为可选参数
}
declare const point: Ponit;

point.x = 1;
point.y = 10;

// 使用内联注解
declare const myPoint: { x: string, y: number };

// 类实现接口
class Dj implements Ponit {
  x: number;
  y: number
}

function setPonit(point:Ponit){
  console.log(point.x);
  console.log(point.y);
}
const obj = {
  x:1,
  //y:2
}
setPonit(obj);

// 接口控制函数类型
interface Myfun {
  (x:number,y:string):string;
}
const fun:Myfun =function(x:number,y:string){
    return `${x}___${y}`
}
fun(1,'1');

// 接口控制数组类型
interface MyArray {
  [index:number]:string
}
const myarr:MyArray = ['1','2'];

// 规范类
interface MyClass {
  curn:Date;
  setTime(x:number):void;
}
class MyClassIM implements MyClass{
  public curn:Date;
  setTime(x:number){
    console.log(x);
  }
}

// 接口继承
interface Inf1{
  x:string
}
interface Inf2{
  y:boolean
}
interface Inf3 extends Inf1,Inf2{
  m:number
}
const p ={} as Inf3;
p.x = '1';

// 泛型
function func<T>(arg:T):T{
    return arg;
}
func<string>('333');