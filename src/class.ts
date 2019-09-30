class Hello {
  // 私有变量只能在当前类中访问
  // private name: string;
  public name: string;
  public age: number;
  constructor(name: string, age: number) {
    this.age = age;
    this.name = name;
  }
  public tell(): string {
    return `${this.name}${this.age}`
  }
}

let hello:Hello;
hello = new Hello('iwme',100);

// 继承
class Phello extends Hello{
  public syr:string;
  public sdd:number;
  constructor(syr:string,sdd:number,age:number,name:string){
    super(name,age);
    this.syr = syr;
    this.sdd = sdd;
  }
  public tell(): string {
    return `${this.name}${this.age}${this.syr}${this.sdd}`
  }
}

// get set
class KOL {
  private _k:number;
  get k(){
    return this._k;
  }
  set k(newk:number){
    this._k = newk
  }
}
let kol:KOL = new KOL();
kol.k = 3;
