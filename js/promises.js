
let number=6;
let prom=new Promise((resolve,reject)=>{

    setTimeout(()=>{
        if(number%2==0)
            //resolve(`Even ${number}`);
        resolve({msg:"Even",data:number})
        else
            reject("Not an Even");
    },4000);

})
console.log(prom);

///pending,fullfilled,rejected
prom.then((data)=>{
    console.log(data.msg, data.data)
}).catch((data)=>{
    console.log(data)
})
Promise.all([
    Promise.resolve("Promise 1 resolved"),
    Promise.resolve("Promise 2 Rejected"),
    Promise.resolve("Promise 3 Resolved")
]).then((data)=>{
    console.log(data);
}).catch((data)=>{
console.log(data);
});
