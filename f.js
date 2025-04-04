
let cm=document.querySelector(".d");
let turn=1;
const win=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

let cells = document.querySelectorAll(".a");

cells.forEach(function(a) {
  a.addEventListener("click", function() {
    if (a.innerText !== "") return; 
    if (turn == 1) {
      a.innerText = "X";
      turn = 0;
    } else {
      a.innerText = "O";
      turn = 1;
    }
    checkwin(); });
 
});
let am=document.querySelector(".winner");
let x=document.querySelector(".b");
let y=document.querySelector(".winn");
function checkwin(){
  for (i of win){
    let p1=cells[i[0]].innerText;
    let p2=cells[i[1]].innerText;
    let p3=cells[i[2]].innerText;
    if(p1!="" && p2!="" && p3!=""){
        if(p1===p2 && p2===p3){
            am.innerText="The winner is "+p1;
           
          
          
        }
    }

  }
}


cm.addEventListener("click", function () {
    cells.forEach(cell => cell.innerText = "");
    am.innerText = "";
    turn = 1;
    gameOver = false;
  });
  

