setInterval(() => {
    let kun = new Date();
    let day = kun.getDay();
    let month = kun.getMonth();
    let year = kun.getFullYear();

    let nowDate = `${day}.${month}.${year}`;

    let dateElement = document.querySelector(".date");
    dateElement.textContent = nowDate;

}, 8460000);


// console.log(((1000 * 60) * 60) * 24);



setInterval(() => {
    let vaqt = new Date();
    let hour = vaqt.getHours();
    let minute = vaqt.getMinutes();
    let second = vaqt.getSeconds();
    let miliSecond = vaqt.getMilliseconds();
    
    let dateNow = `${hour} : ${minute} : ${second}` /*: ${miliSecond}`*/
    
    let timeElement = document.querySelector(".time")
    timeElement.textContent = dateNow;
    
}, 1000);


const deg = 6;
const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;
    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    mn.style.transform =  `rotateZ(${mm}deg)`;
    sc.style.transform =  `rotateZ(${ss}deg)`;
    
}, 1000);

