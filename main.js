

setInterval(()=>{
    let fisrtRandomNumb = Math.trunc(Math.random()*99);
    let fisrtRandomNumbs = Math.trunc(Math.random()*999);
    let secondRandomNumb = Math.trunc(Math.random()*15);
    let secondRandomNumbb = Math.trunc(Math.random()*15);
    let sekondRandomNumbb = Math.trunc(Math.random()*999);
    let sekondRandomNum = Math.trunc(Math.random()*999);
    let sekondRandomNums = Math.trunc(Math.random()*999);
    let fisrtRandomNumbad = Math.trunc(Math.random()*999999);

    let fisrtRandomNumbada = Math.trunc(Math.random()*99);
    let fisrtRandomNumbadas = Math.trunc(Math.random()*9999);
    let fisrtRandomNumbadad = Math.trunc(Math.random()*99);
    let secondNumadada = document.querySelector(".minuss").value = fisrtRandomNumbadad;
    

    let secondNumadadaf = Math.trunc(Math.random()*9999);
    let secondNumadadg = document.querySelector(".minus22").value = secondNumadadaf;


    let secondNumadadafa = Math.trunc(Math.random()*99);
    let secondNumadadga = document.querySelector(".piluss").value = secondNumadadafa;
    

    let secondNumadadafaf = Math.trunc(Math.random()*9999);
    let secondNumadadgag = document.querySelector(".pilus22").value = secondNumadadafaf;

    let secondNumadad = document.querySelector(".kard22").value = secondNumadada;
    let secondNumada = document.querySelector(".kardd").value = fisrtRandomNumbada;

let secondNumad = document.querySelector(".rand").value = fisrtRandomNumbad;
let firstNumb = document.querySelector(".kard").value = fisrtRandomNumb;
let secondNumb = document.querySelector(".minus").value = secondRandomNumb;
let secondNumbb = document.querySelector(".pilus").value = secondRandomNumbb;
let secondNumbbc = document.querySelector(".kard2").value = sekondRandomNumbb;
let secondNumbs = document.querySelector(".minus2").value = sekondRandomNum;
let secondNums = document.querySelector(".pilus2").value = sekondRandomNums;
},2000)





 

document.querySelector("button").addEventListener("click", ()=>{
    answer = document.querySelector(".answer").value*1;
    additional = fisrtRandomNumb+secondRandomNumb
    if(additional==answer){
        document.querySelector(".answer").setAttribute("class" , "correct")
        setTimeout(() => {
            location.href = "index2.html"
        }, 1500);
    }else{
        document.querySelector(".answer").setAttribute("class" , "error")
        setTimeout(()=>{
            location.reload()
        }, 1500)
    }


})











































    
 setInterval(() => {

    
   myChart.data.datasets[0].data = Array.from({length: 5}, () => Math.floor(Math.random() * 100));
   myChart.update();
  },1000)
 const ctx = document.getElementById('myChart');
 const myChart =   new Chart(ctx,{
     type: 'line',
     data: {
       labels: [
         'Red',
         'Green',
         'Yellow',
         'Grey',
         'Blue'
       ],
       datasets: [{
         label: '# of Votes',
         data:[10,12,4,9,16],
         borderWidth: 1
       }]
     },
    
     options: {
       scales: {
         y: {
           beginAtZero: true
         }
       }
     }
   });
    