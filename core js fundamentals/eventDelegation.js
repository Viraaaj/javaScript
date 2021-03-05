//1. it is depend upon concept of event bubbling

//2. when we have lot of event handlers in out website and we want to avoid it 
// then we can use event delegation

// 3. e commerce website
// instead of attaching event handlers to html elemnts we can assign event handlers
// to parent of elements

// 4. create single event handler and using concept of event bubbling  
// child elements is bubbling out to the parent element



// adding single event handler rather than assigning to each one:
document.querySelector("#category").addEventListener('click', (e) => {
    console.log("Clicked on items in id:category");
    console.log(e); //will give info about click event when we click on items
    console.log(e.target.id);

    if(e.target.tagName == "LI"){
        window.location.href = "/" + e.target.id //it will navigate to that particular id
    }
})


document.querySelector("#form").addEventListener('keyup', (e) => {
    console.log(e);

    if(e.target.dataset.uppercase != undefined){
        e.target.value = e.target.value.toUpperCase(); //it will check if data-upparase is present or not for particular input and if present then convert lowercase to upparcase.
    }
})




// pros of event delegation:
// 1. it saves lot of memory cause we are attaching event only to main div rather than its childs.
// 2. less code
// 3. DOM manipulation

// limitations of event delegation:
// 1. all events not bubbled up: scroll, blur, focus, resizing window
// 2. stop propagation won't work when using event delegation (might).