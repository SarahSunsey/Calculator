const buttons = document.getElementById("buttons");
buttons.style.display = "grid";
buttons.style.gridTemplateColumns = "repeat(4, 1fr)";
buttons.style.gridTemplateRows = "repeat(5, 1fr)";
let array=["AC","NEG","%","/",7,8,9,"X",4,5,6,"-",1,2,3,"+","DEl",0,".","="]
for (let i = 0; i < 20; i++) {
  let square = document.createElement("button");
  square.classList.add("square");
  buttons.appendChild(square);
  square.id="square"+i
  square.innerHTML=array[i]
}
const squares = document.querySelectorAll('.square');


const light =document.getElementById("Light")
const dark = document.getElementById("dark")

const calcul = document.getElementById("calcul");
Light.addEventListener("click", () => {
  calcul.style.backgroundColor = "White";
  squares.forEach(square => {
    square.style.backgroundColor = 'white';
    square.style.color = 'black';
  });
  
});


dark.addEventListener('click',()=>{
    calcul.style.backgroundColor="rgb(50, 48, 48)"
    document.body.style.backgroundColor="grey"
    buttons.style.backgroundColor="black"
    squares.forEach(square => {
        square.style.backgroundColor = 'black';
        square.style.color = 'white';
      });
      
   
});

