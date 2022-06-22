const q1Btn = document.querySelectorAll(".q1-btn");
const q2Btn = document.querySelectorAll(".q2-btn");

const q1 = document.getElementById("q1");
const q2 = document.getElementById("q2");

const formAnswers = document.getElementById("form-answers");
const load1 = document.getElementById("load-1");
const load2 = document.getElementById("load-2");
const load3 = document.getElementById("load-3");
const qualify = document.getElementById("qualify");

const countTimer = document.getElementById("count-time");

let isEnrolled = true;
let residentUSA = true;

q1Btn.forEach((el) => {
	el.addEventListener("click", () => {
		isEnrolled = el.innerHTML === "Yes" ? true : false;
		q1.classList.add("fade-out");
		setTimeout(() => {
			q1.classList.remove("active");
			q1.classList.add("hidden");
			q2.classList.remove("hidden");
			q2.classList.add("fade-in");
			q2.classList.add("active");
		}, 500);
	});
});

q2Btn.forEach((el) => {
	el.addEventListener("click", () => {
		residentUSA = el.innerHTML === "Yes" ? true : false;
		q2.classList.add("fade-out");
		setTimeout(() => {
			q2.classList.remove("active");
			q2.classList.add("hidden");
			formAnswers.classList.add("active");
			formAnswers.classList.remove("hidden");
			load1.classList.add("active");
			load1.classList.remove("hidden");
			load1.classList.add("fade-in");
		}, 500);
		setTimeout(() => {
			load1.classList.add("fade-out");
		}, 2000);
		setTimeout(() => {
			load1.classList.add("hidden");
			load1.classList.remove("active");
			load2.classList.add("active");
			load2.classList.remove("hidden");
			load2.classList.add("fade-in");
		}, 2500);
		setTimeout(() => {
			load2.classList.add("fade-out");
		}, 3500);
		setTimeout(() => {
			load2.classList.add("hidden");
			load2.classList.remove("active");
			load3.classList.add("active");
			load3.classList.remove("hidden");
			load3.classList.add("fade-in");
		}, 4000);
		setTimeout(() => {
			load3.classList.add("fade-out");
		}, 5500);
		setTimeout(() => {
			load3.classList.add("hidden");
			load3.classList.remove("active");
			qualify.classList.add("active");
			qualify.classList.remove("hidden");
			qualify.classList.add("fade-in");
			startTimer();
		}, 6000);
	});
});

const startTimer = () => {
	let timer = 120;
	const countDownTimer = setInterval(() => {
		timer = timer - 1;
		let min = Math.floor(timer / 60);
		let sec = Math.floor(timer % 60);
		let minutes = `0${min}`;
		let seconds = sec;
		if (sec < 10) {
			seconds = `0${sec}`;
		}

		countTimer.innerHTML = `${minutes}:${seconds}`;

		if (timer < 2) {
			clearInterval(countDownTimer);
		}
	}, 1000);
};
