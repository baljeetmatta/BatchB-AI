// // class Data
// // {
// //     _name="test";
// //     _age=20;
// //     get name(){
// //         return this._name;
// //     }
// //     set name(value){
// //         this._name=value.toUpperCase();
// //     }
// //     /*getName=()=>{
// //         return this.name;
// //     }
// //     setName=(value)=>{
// //         this.name=value;
// //     }

// //     getAge=()=>{
// //         this.age;
// //     }
// //     setAge=(value)=>{
// //         this.age=value;
// //     }*/
   
// //     read=(name,age)=>{
// //         this.name=name;
// //         this.age=age;


// //     }
    
// //     print(){
// //         console.log(this.name,this.age)
// //     }
// //     printName=()=>{
// //         this.age=20;
// //         console.log(this.name);

// //     }
// //     printAge=()=>{
// //         console.log(this.age);
// //     }

// // }
// // /*
// // C++
// //     Data d;//Object compile time
// //     Data *d=new Data();//run-time
// // Java
// //     Data d=new Data();
// //     Data x;==Refrence
// //     x=new Data()->Object

// // */
// // // let d=new Data();

// // // //console.log(d.name);
// // // //console.log(d.print())
// // // d.printName();
// // // d.printAge();
// // let d=new Data();
// // console.log(d.name) //get
// // d.name="Code"; //set
// // console.log(d.name) //get

// // //d.setName("Demo Name");
// // //d.setAge(40);
// // //let age=d.getAge();
// // //d.read("DemoName",20);
// // //d.print();

// class Test{
//     ini=(name,age)=>{
//         this._name=name;
//         this._age=age;
//     }
//     constructor(name,age)
//     {
//         this._name=name;
//         this._age=age;
//     }
// }
// let t=new Test("Code",10);
// //t.ini("Code",20);
// console.log(t._name);

// class Base
// {
//     print=()=>{
//         console.log("Print called");
//     }
// }
// class Derived extends Base
// {

// }
// let d=new Derived();
// d.print();
// //super.variable
// //super.function
// //super(34,4)
   function Test(name,age)
   {
        this._name=name;
        this._age=age;
        Object.defineProperty(this,"name",{
          get:function()
          {
            return this._name;
          },
          set:function(value)
          {
            this._name=value;
          }
        })
   }
   //Test();
   let d=new Test("Name",23)
   console.log(d.name);
