const likeIconBtn = document.querySelector(".fa-thumbs-up");

likeIconBtn.addEventListener("click", () => {
	console.log("You just clicked the like Button");

	likeIconBtn.classList.toggle("clicked");
});
console.log(likeIconBtn);
