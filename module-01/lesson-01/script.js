//1
const myName = "Viktoria";
console.log(myName);

//2
const birthMonth = 6;
console.log(birthMonth);

//3
const str = " Ласкаво " + "просимо " + "на курс";
console.log(str);

//4  alert(2019);

//5
const operation = 2019 - 200;
console.log(operation);

//6
const containerEl = document.getElementById("six");
console.log(containerEl);
containerEl.textContent = "Hello World";

//7
const wrapperEl = document.getElementById("seven");
console.log(wrapperEl);
wrapperEl.textContent = 12 * 12;

//8
const out8 = document.querySelector(".out-8");
console.log(out8);
out8.textContent = "task-8";

//9
const out9 = document.querySelector(".out-8");
console.log(out9);
out9.textContent += "World";
//out9.texyContent = ""; 

//10
const out10 = document.querySelector(".out-10");
console.log(out10);
out10.innerHTML = '&#x3C;h2&#x3E;Hi&#x3C;/h2&#x3E;';
// elementOut10.textContent = "<h2>Hi</h2>";

//11
const out11 = document.querySelector(".out-11");
console.log(out11);
out11.innerHTML = "123";
out11.innerHTML += "456";
//out11.innerHTML = out11.innerHTML + "456";

//12
const a = document.querySelector(".out-12");
console.log(a);
a.innerHTML = 3.1415;
// a.innerHTML = Math.ceil(3.1415);


//13
const out13 = document.querySelector(".out-13");
console.log(out13);
out13.innerHTML = 
'<img src="https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a" alt="js" width="400">'


//14
const z1 = 6;
const z2 = 3;
const multiplication = z1 * z2;
console.log(multiplication);
const out14 = document.querySelector(".out-14");
out14.innerHTML = multiplication;

//15
const y1 = 6;
const y2 = 3;
const out15 = document.querySelector(".out-15");
const divition = y1 / y2;
console.log(divition);
out15.innerHTML = divition;

//16
const x1 = "Hello";
const x2 = 5;
const out16 = document.querySelector(".out-16");
const summ = x1 + x2;
console.log(summ);
out16.innerHTML = summ;

//17
const out17 = document.querySelector(".out-17");
console.dir(out17);
//виводить в console як об'єкт і всі його дані як об'єкта джави

//18
let out18 = document.querySelector(".out-18");
out18 = 5;
console.log(out18);

//19
let out19 = document.querySelector(".out-19");
console.log(out19);
out19 = document.querySelector(".out-19-test");
console.log(out19);

//20
const out20 = document.querySelector(".out-20");
out20.textContent = "&#x27;&#x3C;h2&#x3E;Hi&#x3C;/h2&#x3E;&#x27;";
console.log(out20);