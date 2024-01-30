// const myBtn = document.getElementById("btn");
// console.log(myBtn);
// function btnHandler() {
//   console.log("the button is clicked ...");
// }

// function display2() {
//   console.log("also it is CLICKED HELLO");
// }

// myBtn.addEventListener("click", () => {
//   btnHandler();
//   //display2();
// });
//mouseEvenrs;
//myBtn.addEventListener("dblclick", btnHandler);
//myBtn.addEventListener("mousedown", btnHandler);
//myBtn.addEventListener("mouseup", btnHandler);
//myBtn.addEventListener('mousemove',btnHandler);
//myBtn.addEventListener("mouseover", btnHandler);
//myBtn.addEventListener('mouseout',btnHandler);
//myBtn.addEventListener('contextmenu',btnHandler); //rightClick
//myBtn.removeEventListener('click',btnHandler);
/****************************************************************************** */
//element.removeEventLisner(event,listner,[optional])

// //in the previous example the listner not removed because it was added as anomnous function
// myBtn.addEventListener('click',btnHandler);
// //myBtn.removeEventListener('click',btnHandler); //worked
// setTimeout(()=>{myBtn.removeEventListener('click',btnHandler)},3000); //worked
/****************************************************************************** */
// function myBtnHandler(event) {
//   console.log(event);
// }

// myBtn.addEventListener("mouseout",myBtnHandler);
/****************************************************************************** */
// const buttons = document.querySelectorAll("button");
// console.log(buttons);

// function isClicked() {
//   console.log("both buttons");
// }
// buttons.forEach((btn) => btn.addEventListener("click", isClicked));
// /****************************************************************************** */
// const myForm = document.querySelector("form");
// console.log(myForm);
// myForm.addEventListener("submit", (event) => {
//   event.preventDefault();
//   console.log(event);
// });
/******************************************************************************/
//understand event propgation: capturing and bubling:
const myBtn = document.getElementById("btn");
const myDiv = document.querySelector("div");
console.log(myBtn);
console.log(myDiv);

myDiv.addEventListener("click", (event) => {
  console.log("clicked Div", event);
});

myBtn.addEventListener("click", (event) => {
  //event.stopPropagation();
  event.stopImmediatePropagation();

  console.log("The button :", event);
});

myBtn.addEventListener("click", () => {
  console.log("Another eventLisner for the same button element"); //it shows the differnce between sopPropgation and immediateStopPropgation
});

/********************************************************************************* */
//event Delegtion
const list = document.querySelectorAll("li");
console.log(list);
// list.forEach((l) =>
//   l.addEventListener("click", (event) =>
//     event.target.classList.toggle("heighlight")
//   )
// );    #this is a bad approach so the best practice to use event delegtion

//# the idea is to set the eventListner on the whole list not indivual items of the list

// const myList = document.querySelector("ul");
// myList.addEventListener("click", (event) => {
//   event.target.classList.toggle("heighlight");
// });

// const myList = document.querySelector("ul");

// myList.addEventListener("click", (event) => {
//   event.target.closest('li').classList.toggle("heighlight");
// });

const myList = document.querySelector("ul");
myList.addEventListener("click", (event) => {
  event.target.closest("li").classList.toggle("heighlight");
  myBtn.click();
});
