const player = document.querySelector("#player");

player.addEventListener("click", () => {
	let playerState = document.querySelector("[data-playerstate]");

	const playBtn = player.querySelector(".fa-play");
	const pauseBtn = player.querySelector(".fa-pause");

	switch (playerState.dataset.playerstate) {
		case "paused":
			music.play();
			console.log("Playing a song...");
			playerState.dataset.playerstate = "playing";

			// Hide the Play Button
			playBtn.style.display = "none";

			// Display the Pause Button
			pauseBtn.style.display = "inline";

			break;

		case "playing":
			music.pause();
			console.log("Paused a song...");
			playerState.dataset.playerstate = "paused";

			// Display the Play Button
			playBtn.style.display = "inline";

			// Hide the Pause Button
			pauseBtn.style.display = "none";

			break;
	}
});
