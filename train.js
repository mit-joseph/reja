/* console.log("Jack Ma maslahatlari");
const list = [ 
"yaxshi talaba boling",  // 20
"togri boshliq tanlang va koproq hato qiling", // 20-30
"ozingizga ishlashni boshlang", // 30-40
"siz kuchli bolgan narsalarni qiling", // 40-50
"yoshlarga investitsiya qiling", // 50-60
"endi dam oling, foydasi yoq", // 60
];

function maslahatBering(a, callback) {
    if (typeof a !== "number") callback ("insert a number", null);
    else if (a <= 20) callback (null, list[0]);
    else if (a > 20 && a <= 30) callback(null, list[1]);
    else if (a > 30 && a <= 40) callback(null, list[2]);
    else if (a > 40 && a <= 50) callback(null, list[3]);
    else if (a > 50 && a <= 60) callback(null, list[4]);
    else {
        setInterval( function() {
        callback(null, list[5]);            
        }, 1000);     
    }
}
console.log("passed here 0")
maslahatBering(70, (err, data) =>{
    if(err) console.log("ERROR:", err);
    else{
    console.log("javob:", data)
    }
});
console.log("passed here 1") */




/*
//// ASYNC function
async function maslahatBering(a) {
    if (typeof a !== "number") throw new Errow("insert a number");
    else if (a <= 20) return list[0];
    else if (a > 20 && a <= 30)  return list[1];
    else if (a > 30 && a <= 40)  return list[2];
    else if (a > 40 && a <= 50)  return list[3];
    else if (a > 50 && a <= 60)  return list[4];
    else {
        return new Promise((resolve, reject) => {
             setInterval(() => {
          resolve (list[5]);            
        }, 1000);

        });     
    }
}
 // call via then//catch
console.log("passed here 0")
maslahatBering(25).then((data) => {
    console.log("javob:", data);
})
.catch((err) => {
   console.log("ERROR:", err);
})
console.log("passed here 1");

// cal via async // await
async function run () {
    let javob = await maslahatBering(65);
    console.log(javob);      
}
run(); */

/* function countLetter(letter, word) {
    let count = 0;
    if (word[0] === letter) count = count + 1;
    if (word[1] === letter) count = count + 1;
    if (word[2] === letter) count = count + 1;
    if (word[3] === letter) count = count + 1;
    if (word[4] === letter) count = count + 1;
    // bu yerda soz uzunligiga qarab indexlarni kopaytirishimizga togri keladi

    return count;
}

console.log(countLetter("p", "apple")); */



// MIT TASK B

/* function countDigits(word) {
    let count = 0;

    for (let n = 0; n < word.length; n++) {
        if (word[n] >= "0" && word[n] <= "9") {
            count ++;
        }
    }
    return count;
}

console.log(countDigits("ad2a54y79wet0sfgb9csdf8cdf57cds1e8")); */


// MIT TASK C


/* class Shop {  
  constructor(non, lagmon, cola){
    this.non =  non;
    this.lagmon = lagmon;
    this.cola = cola;
  }
  
  // method
   vaqt() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    return `${h}:${m}`;
   }
   qoldiq() {
  console.log(`hozir ${this.vaqt()}da ${this.non}ta non, ${this.lagmon}ta lagmon va ${this.cola}ta cola mavjud!`);
}
  
  sotish(nomi, soni) {
    this[nomi] -= soni;
  }

  qabul(nomi, soni) {
    this[nomi] += soni;
  }
  
}

const shop = new Shop (4, 5, 2);
shop.qoldiq();
shop.sotish('non', 3);
shop.qoldiq()
shop.qabul('cola', 5)
shop.qoldiq() */
  
  
// MIT TASK D

function checkContent(a, b) {
  return a.split("").sort().join("") === b.split("").sort().join("");
}
// sort qilmasak agar ikkala string bir hil tartibda bolgandagina true qaytaradi holos
console.log(checkContent("mitgroup", "gmtiprou"));
console.log(checkContent("hello", "oleh"));        
console.log(checkContent("true", "false")); 
