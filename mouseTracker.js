let main = document.querySelector(".main");
let cursor = document.querySelector(".cursor");
let container = document.querySelector(".container");

main.addEventListener("mousemove", function (cordinates) {
  cursor.style.left = cordinates.x + "px";
  cursor.style.top = cordinates.y + "px";

  let containerRect = container.getBoundingClientRect();

  if (
    cordinates.x >= containerRect.left && cordinates.x <= containerRect.right &&
    cordinates.y >= containerRect.top && cordinates.y <= containerRect.bottom
  ) {
    cursor.style.backgroundColor = 'white';
    cursor.style.transform = 'scale(2.5)';
  }
  else{
    cursor.style.transform = 'scale(1)';
    cursor.style.backgroundColor = 'red';
  }
});
