//capture the board element in to a variable called boardElem
let boardElem = document.querySelector("#board");
//Create an object for the initial state
let state = {};
let nameplayer = {one:"",two:"",three:"",four:"",current:""}
let nameplayerone = {}
let nameplayertwo = {}
let nameplayerthree = {}
let nameplayerfour ={}
let currentplayer = {}
let winner = [""]




function buildInitialState() {
    //create 9 sections for the board within an array
    //within the state object
    state.board = ["","","","","","","","","",];

}

function renderBoard(){
  //  take the board element and set the 
  //inner text to an empty string
    boardElem.innerHTML = "";
    
   // loop through the state.board array and create
   // a div for each section
    for (let i=0; i <state.board.length; i++){
    // create a card variable for each index of state.board
        let card = state.board[i];
    // create a div for each section
        let cellElem = document.createElement("div");
    // create a new class for each div   
        cellElem.classList.add("cell");
    // create an index for each new cellElem
        cellElem.dataset.index = i;
    //  set the innerText of the divisions  to equal the
    // values of the state.board array
       cellElem.innerText = card;
    // append all the new cellElem's to the boardElem
        boardElem.appendChild(cellElem);
       
    }
}


let onePlayerGame = document.getElementById("One Player")
let twoPlayerGame = document.getElementById("Two Player")

let button1 = document.querySelector("#input1")

button1.addEventListener("click", function(){

    let name1 = document.getElementById("playerOne").value;
nameplayer.one = name1

    let listName1= document.getElementById("namePlayerOne");
    listName1.innerText = listName1.innerText + " " + name1 ;
    ;
    
})

let button2 = document.querySelector("#input2")

button2.addEventListener("click", function(){

    let name2 = document.getElementById("playerTwo").value;
nameplayer.two = name2

    let listName2= document.getElementById("namePlayerTwo");
    listName2.innerText = listName2.innerText + " " + name2;
    
 
    let roundRandom = Math.floor(Math.random()*10);
    if (roundRandom % 2 === 0){
      nameplayer.current = nameplayer.two
      let turn= document.getElementById("turn");
      turn.innerText = ""
    
      turn.append(nameplayer.current + "'s Turn");


      
    }
    else {
      nameplayer.current = nameplayer.one
      let turn= document.getElementById("turn");
      turn.innerText = ""
    
      turn.append(nameplayer.current + "'s Turn");

    
    }
})


let button3 = document.querySelector("#input3")

button3.addEventListener("click", function(){

    let name3 = document.getElementById("playerThree").value;
nameplayer.three = name3
nameplayer.four = "Computer"
    let listName1= document.getElementById("namePlayerOne");
    listName1.innerText = listName1.innerText + " " + name3;
    let listName2= document.getElementById("namePlayerTwo");
    listName2.innerText = listName2.innerText + " " + "Computer";
    
 
   // let roundRandom = Math.floor(Math.random()*10);
   // if (roundRandom % 2 === 0){
        nameplayer.current = nameplayer.three;
        
        let turn= document.getElementById("turn");
        turn.innerText = ""
    
        turn.append(nameplayer.current + "'s Turn");

    //}
   // else {
    //  nameplayer.current = nameplayer.four;
        
    //    let turn= document.getElementById("turn");
    //    turn.innerText = ""
    
    //    turn.append(nameplayer.current + "'s Turn");

    
   // }
})



buildInitialState();
renderBoard();


boardElem.addEventListener("click", function (event){

  if (winner[0] !== ""){
    return
  }
  if (event.target.className !== "cell") {
    return
  }

let cellIndex = event.target.dataset.index;
    
  if (state.board[cellIndex] === "X"){
      return
    }
    
  if (state.board[cellIndex] === "O") {
      return
    }
  
  if (nameplayer.one === "" && nameplayer.two === "" && nameplayer.three === ""){
    return
  }
  
  changeBoard(cellIndex);

  })




  function changeBoard(index){

if (nameplayer.current !== nameplayer.one && nameplayer.current !== nameplayer.three &&
  nameplayer.current !== nameplayer.four){
  state.board[index] = "O"
  renderBoard()
  checkWin()
  }

else if (nameplayer.current !== nameplayer.four) {
    state.board[index] = "X";
    renderBoard()
  checkWin()
    
    }


if (nameplayer.current === nameplayer.three){
  renderBoard()
  checkWin()
  nameplayer.current = nameplayer.current === nameplayer.three ? nameplayer.four : nameplayer.three;
turn= document.getElementById("turn");
turn.innerText = "";
turn.append(nameplayer.current + "'s Turn");
  setTimeout (computerMove,2000);
  
}
  

if (nameplayer.one !== "") {
  nameplayer.current = nameplayer.current === nameplayer.one ? nameplayer.two : nameplayer.one;

  let turn= document.getElementById("turn");
turn.innerText = "";
turn.append(nameplayer.current + "'s Turn");
}

 

}



function computerMove(){

if (winner[0] !== ""){
    return
  }
let Cindex;
let turn;

let roundRandom
for (let i=0; i<1000; i++) {
 
roundRandom= Math.floor(Math.random()*9);
Cindex =roundRandom
if (state.board[Cindex] === "X" || state.board[Cindex] === "O"){
continue
}
else{
  Cindex = roundRandom;
  break
}
}

state.board[Cindex] = "O"
renderBoard()
checkWin()

nameplayer.current = nameplayer.current === nameplayer.three ? nameplayer.four : nameplayer.three;
turn= document.getElementById("turn");
turn.innerText = "";
turn.append(nameplayer.current + "'s Turn");



}


  







//addeventlistener to reset the initial state and reset the user inputs

let startover= document.getElementById("startover")
      startover.addEventListener("click", function(){
          
         let namePlayerOne = document.getElementById("namePlayerOne")
          namePlayerOne.innerText = "Player One (X's):"
         let namePlayerTwo = document.getElementById("namePlayerTwo")
          namePlayerTwo.innerText = "Player Two (O's):"
         let playerOne = document.getElementById("playerOne")
          playerOne.value = ""
          let playerTwo = document.getElementById("playerTwo")
          playerTwo.value = ""
          let playerThree = document.getElementById("playerThree")
          playerThree.value = ""
          let turn= document.getElementById("turn");
          let oWins=document.getElementById("O's Win")
          let xWins=document.getElementById("X's Win")
          turn.innerText = ""
          state.innerText = ""
          nameplayer.one= ""
          nameplayer.two = ""
          nameplayer.three= ""
          nameplayer.four = ""
          nameplayer.current = ""
          xWins.innerText = ""
          oWins.innerText = ""
          winner[0]= ""

      
          buildInitialState()
          renderBoard()
      return
      })





      function checkWin(){
        let oWins=document.getElementById("O's Win")
        let xWins=document.getElementById("X's Win")

          if (state.board[0] === "O" && state.board[1] === "O" && state.board[2] === "O"){
            oWins.innerText = nameplayer.current + " WINS!!!"
            winner[0] = "O"
            return
          }
          if (state.board[3] === "O" && state.board[4] === "O" && state.board[5] === "O"){
            oWins.innerText = nameplayer.current + " WINS!!!"
            winner[0] = "O"
            return
          }
          if (state.board[6] === "O" && state.board[7] === "O" && state.board[8] === "O"){
            oWins.innerText = nameplayer.current + " WINS!!!"
            winner[0] = "O"
            return
          }
          if (state.board[0] === "O" && state.board[3] === "O" && state.board[6] === "O"){
            oWins.innerText = nameplayer.current + " WINS!!!"
            winner[0] = "O"
            return
          }
          if (state.board[1] === "O" && state.board[4] === "O" && state.board[7] === "O"){
            oWins.innerText = nameplayer.current + " WINS!!!"
            winner[0] = "O"
            return
          }
          if (state.board[2] === "O" && state.board[5] === "O" && state.board[8] === "O"){
            oWins.innerText = nameplayer.current + " WINS!!!"
            winner[0] = "O"
            return
          }
          if (state.board[0] === "O" && state.board[4] === "O" && state.board[8] === "O"){
            oWins.innerText = nameplayer.current + " WINS!!!"
            winner[0] = "O"
            return
          }
          if (state.board[6] === "O" && state.board[4] === "O" && state.board[2] === "O"){
            oWins.innerText = nameplayer.current + " WINS!!!"
            winner[0] = "O"
            return
          }
          if (state.board[0] === "X" && state.board[1] === "X" && state.board[2] === "X"){
            xWins.innerText = nameplayer.current + " WINS!!!"
            winner[0] = "X"
            return
          }
          if (state.board[3] === "X" && state.board[4] === "X" && state.board[5] === "X"){
            xWins.innerText = nameplayer.current + " WINS!!!"
            winner[0] = "X"
            return
          }
          if (state.board[6] === "X" && state.board[7] === "X" && state.board[8] === "X"){
            xWins.innerText = nameplayer.current + " WINS!!!"
            winner[0] = "X"
            return
          }
          if (state.board[0] === "X" && state.board[3] === "X" && state.board[6] === "X"){
            xWins.innerText = nameplayer.current + " WINS!!!"
            winner[0] = "X"
            return
          }
          if (state.board[1] === "X" && state.board[4] === "X" && state.board[7] === "X"){
            xWins.innerText = nameplayer.current + " WINS!!!"
            winner[0] = "X"
            return
          }
          if (state.board[2] === "X" && state.board[5] === "X" && state.board[8] === "X"){
            xWins.innerText = nameplayer.current + " WINS!!!"
            winner[0] = "X"
            return
          }
          if (state.board[0] === "X" && state.board[4] === "X" && state.board[8] === "X"){
            xWins.innerText = nameplayer.current + " WINS!!!"
            winner[0] = "X"
            return
          }
          if (state.board[6] === "X" && state.board[4] === "X" && state.board[2] === "X"){
            xWins.innerText = nameplayer.current + " WINS!!!"
            winner[0] = "X"
            return
          }
          if (state.board[0] !== "" && state.board[1] !== "" && state.board[2] !== "" && 
          state.board[3] !== "" && state.board[4] !== "" && state.board[5] !== "" && 
          state.board[6] !== "" && state.board[7] !== "" && state.board[8] !== "") {
            xWins.innerText = "It's a DRAW!!"
            return
          }


          }

      