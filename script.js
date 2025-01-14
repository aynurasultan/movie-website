const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, index) => {
  let clickCounter = 0;

  arrow.addEventListener("click", () => {
    const imageItemCount = movieLists[index].querySelectorAll("img").length;
    const itemWidth = 300; 
    const totalWidth = itemWidth * imageItemCount;

  
    const maxClicks =
      Math.ceil(totalWidth / itemWidth) -
      Math.floor(window.innerWidth / itemWidth);

    if (clickCounter < maxClicks) {
      clickCounter++;
      movieLists[index].style.transform = `translateX(-${
        itemWidth * clickCounter
      }px)`;
    } else {
      clickCounter = 0;
      movieLists[index].style.transform = `translateX(0)`;
    }
  });
});



const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container,.navbar,.siderbar,.siderbar i,.toggle,.toggle-ball,.movie-list-filter select")

ball.addEventListener('click', function(){
    items.forEach((item) => item.classList.toggle("active"))
})
