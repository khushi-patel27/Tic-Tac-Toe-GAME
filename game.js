let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turno = true;
const winpatterns = [                                 
     [0, 1,2],
     [3,4,5],
     [6,7,8],
     [0,3,6],
     [1,4,7],
     [2,5,8],
     [0,4,8],
     [2,4,6]                                                 
        ];

       const resetGame = () =>{
          turno = true;
          enableBoxes();
          msgContainer.classList.add("hide");
      };

        boxes.forEach((box) => {
            box.addEventListener("click", () => {
                
               if(turno)
                {
                  box.innerText="o";
                  turno=false;
                 }
                else{
                    box.innerText="x";
                    turno=true;
                }    
                 box.disabled=true;
                 checkWinner();
             });

        });
          const disableBoxes = () => {
             for(let box of boxes){
             box.disabled = true;
            }
         };
         const enableBoxes = () => {
          for(let box of boxes){
          box.disabled = false;
          box.innerText = "";
         }
      };
        






        const showWinner = (Winner) =>{
                 msg.innerText = `congratulations,Winner is ${Winner}`;
                 msgContainer.classList.remove("hide");
                  disableBoxes();  
        };
 

        const checkWinner= () =>{
          for(let pattern of winpatterns)
            { 
                let pos1Val = boxes[pattern[0]].innerText;
                let pos2Val = boxes[pattern[1]].innerText;
                let pos3Val = boxes[pattern[2]].innerText;

                if(pos1Val != "" && pos2Val != "" && pos3Val != "")
                    {
                      if(pos1Val === pos2Val  && pos2Val=== pos3Val)
                        {
                            
                            showWinner(pos1Val);
                        }

                    }
            
             } 
            };
            newGameBtn.addEventListener("click", resetGame);
            resetBtn.addEventListener("click",resetGame);
