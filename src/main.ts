// 布尔
const isOk:boolean = false;

// 数字
const num:number = 3;

// 字符串
const str:string = "str";

// 数组
const arr:Array<number> = [1,23,4];
const arr1:string[] = ['1','2']

// 元组 表示一个已经知道元素类型的数组
let arr3:[string,number];
arr3 = ['2',2];
// arr3 = [2,2]; 报错

// 枚举
enum Books {a=4,b,c};
const d:Books = Books.a;
const e:string = Books[3];

// any
let any:any = '1';
any = 2;

// void
const vd:void = null;
const vd1:void = undefined;
function getvd():void{
  console.log("This is my warning message");
}

// 类型断言
let strd:any = 2;
let len:number =(strd as string).length;

function identity<T>(arg: T): T {
  return arg;
}

let myIdentity: <U>(arg: U) => U = identity;