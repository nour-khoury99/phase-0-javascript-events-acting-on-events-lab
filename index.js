// Your code here
const dodger = document.getElementById("dodger");

dodger.style.backgroundColor = "#00215I";

dodger.style.backgroundColor = "#FF69B4";

dodger.style.bottom = "100px";

dodger.style.bottom = "0px";

dodger.style.left = "0px";


//document.addEventListener("keydown" , function(event){
  //  console.log(event);
//});



  function moveDodgerRight() {
    const rightNumbers = dodger.style.right.replace("px", "");
    const right = parseInt(rightNumbers, 10);
  
    if (left > 0) {
      dodger.style.right = `${right + 1}px`;
    }
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
        moveDodgerRight()
    }
  });