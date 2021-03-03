function a() {
  console.log("event bubbling");
}
a();

document.querySelector("#grandParent").addEventListener("click", () => {
  console.log("clicked on grandParent div");
}, false); //if we put false here then it will work as a event bubbling and if we dont put anything then also it will work as event bubbling
//here if we click on any div it will log above statement


document.querySelector("#parent").addEventListener("click", () => {
  console.log("clicked on parent div");
}, false); //if we put false here then it will work as a event bubbling and if we dont put anything then also it will work as event bubbling
//here if we click grandparent div we will log grandparent div statement
//but if we click on parent div  it will log parent div first then grandparent div


document.querySelector("#child").addEventListener("click", () => {
  console.log("clicked on child div");
}, false); //if we put false here then it will work as a event bubbling and if we dont put anything then also it will work as event bubbling
//here if we click grandparent div we will log grandparent div statement
//but if we click on parent div  it will log parent div first then grandparent div
//but if we click on child div  it will log child div first then parent div then grandparent div



// ---------------------------------------------------------------------------------------


function a() {
    console.log("event capturing/trickling");
  }
  a();
  
  document.querySelector("#grandParent").addEventListener("click", () => {
    console.log("clicked on grandParent div");
  }, true); //if we put true here then it will work as a event capturing/trickling and if we dont put anything then it will work as event bubbling
  //here if we click on any div it will log above statement
  
  
  document.querySelector("#parent").addEventListener("click", () => {
    console.log("clicked on parent div");
  }, true); //if we put true here then it will work as a event capturing/trickling and if we dont put anything then it will work as event bubbling
  //here if we click grandparent div we will log grandparent div statement
  //but if we click on parent div  it will log grandparent div first then parent div
  
  
  document.querySelector("#child").addEventListener("click", () => {
    console.log("clicked on child div");
  }, true); //if we put true here then it will work as a event capturing/trickling and if we dont put anything then it will work as event bubbling
  //here if we click grandparent div we will log grandparent div statement
  //but if we click on parent div  it will log grandparent div first then parent div
  //but if we click on child div  it will log grandparent div first then parent div then child div
  






//   if we have mixed cases (true or false) then capturing/trickling(true) will be called first and then
//   event bubbling(false) will be called.

// 1st case:
document.querySelector("#grandParent").addEventListener("click", () => {
    console.log("clicked on grandParent div");
  }, false); //third (if clicked child div)
  
  
  document.querySelector("#parent").addEventListener("click", () => {
    console.log("clicked on parent div");
  }, true); //first (if clicked child div)
   
  
  document.querySelector("#child").addEventListener("click", () => {
    console.log("clicked on child div");
  }, true); //second (if clicked child div)




// 2nd case:
  document.querySelector("#grandParent").addEventListener("click", () => {
    console.log("clicked on grandParent div");
  }, true); //first (if clicked child div)
  
  
  document.querySelector("#parent").addEventListener("click", () => {
    console.log("clicked on parent div");
  }, false); //third (if clicked child div)
   
  
  document.querySelector("#child").addEventListener("click", () => {
    console.log("clicked on child div");
  }, false); //second (if clicked child div)





  //how to stop propogation of certain event? event bubbling
//   1st case:
  document.querySelector("#grandParent").addEventListener("click", () => {
    console.log("clicked on grandParent div");
  }, false); //if we click on child or parent div then this event will not be printed cause its bublling and we put e.stopPropagation() in parent div
  
  
  document.querySelector("#parent").addEventListener("click", (e) => {
    console.log("clicked on parent div");
    e.stopPropagation(); //execution will stop here if click on child div or parent div
  }, false);
   
  
  document.querySelector("#child").addEventListener("click", () => {
    console.log("clicked on child div");
  }, false); 



//   2nd case:
    document.querySelector("#grandParent").addEventListener("click", () => {
        console.log("clicked on grandParent div");
    }, false); //if we click on child div then this event will not be printed cause its bublling and we put e.stopPropagation() in child div
  
  
  document.querySelector("#parent").addEventListener("click", (e) => {
    console.log("clicked on parent div");
  }, false);//if we click on child div then this event will not be printed cause its bublling and we put e.stopPropagation() in child div
   
  
  document.querySelector("#child").addEventListener("click", (e) => {
    console.log("clicked on child div");
    e.stopPropagation(); //execution will stop here if click on child div
  }, false); 






    //how to stop propogation of certain event? event capturing/trickling
    // 1st case:
    document.querySelector("#grandParent").addEventListener("click", () => {
        console.log("clicked on grandParent div");
      }, true); //if we click on child or parent div it this event will not be printed cause its bublling and we put e.stopPropagation() in parent div
      
      
      document.querySelector("#parent").addEventListener("click", (e) => {
        console.log("clicked on parent div");
        e.stopPropagation(); //execution will stop here if click on child div or parent div
      }, true);
       
      
      document.querySelector("#child").addEventListener("click", () => {
        console.log("clicked on child div");
      }, true); 



      //2nd case:
    document.querySelector("#grandParent").addEventListener("click", (e) => {
        console.log("clicked on grandParent div");
        e.stopPropagation(); //execution will stop here if click on child div or parent div
      }, true);
      
      
      document.querySelector("#parent").addEventListener("click", (e) => {
        console.log("clicked on parent div");
      }, true);
       
      
      document.querySelector("#child").addEventListener("click", () => {
        console.log("clicked on child div");
      }, true); 
    
