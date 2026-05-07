const button = document.querySelector("#downloadBtn");
const statusParagraph = document.querySelector("#status");
const panel = document.querySelector(".panel");


function simulateDownload() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve();
		}, 3000);
	});
}

let loadingInterval;

button.addEventListener("click", () => {
	panel.classList.add("loading");
	let dots = 0;
	
	// Animație de puncte pentru loading
	loadingInterval = setInterval(() => {
		dots = (dots + 1) % 4;
		const dotsText = '.'.repeat(dots);
		statusParagraph.textContent = "Se descarcă fișierul" + dotsText;
	}, 300);
	
	statusParagraph.style.color = "blue";

	simulateDownload().then(() => {
		clearInterval(loadingInterval);
		statusParagraph.textContent = "Fișier descărcat!";
		statusParagraph.style.color = "green";
		panel.classList.remove("loading");
	});
});
