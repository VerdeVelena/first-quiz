const quizData = [
	{
		question: "Which fruit contains mor sugar than strawberry?",
		a: "lemon",
		b: "apple",
		c: "banan",
		d: "plum",
		correct: "a",
	},
	{
		question: "At what distance can you hear the cry of the whale?",
		a: "200km",
		b: "500km",
		c: "300km",
		d: "800km",
		correct: "d",
	},
	{
		question: "How many times hedgehog's heart beats in a minute?",
		a: "80",
		b: "120",
		c: "300",
		d: "220",
		correct: "c",
	},
	{
		question: "How many hours per day does koala sleep?",
		a: "12h",
		b: "4h",
		c: "20h",
		d: "18h",
		correct: "d",
	},
];

const questionEl = document.querySelector(".question-quiz");
const progresEl = document.querySelector(".score");
const progresBarEl = document.querySelector(".progres");
const erorEl = document.querySelector(".answers-input");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

const submitBtn = document.querySelector(".submit-btn");

let currentQuiz = 0;

const widthLoading = 200;

loadingQuiz();

function updateProgres() {
	const total = quizData.length;
	const current = currentQuiz;
	const loadingUnit = widthLoading / total;
	progresBarEl.style.width = loadingUnit * current + "px";
	progresEl.innerText = current + "/" + total;
}

function loadingQuiz() {
	updateProgres();
	const checked = document.querySelector("input:checked");
	if (checked) {
		checked.checked = false;
	}

	const currentQuizDate = quizData[currentQuiz];
	questionEl.innerText = currentQuizDate.question;
	a_text.innerText = currentQuizDate.a;
	b_text.innerText = currentQuizDate.b;
	c_text.innerText = currentQuizDate.c;
	d_text.innerText = currentQuizDate.d;
}

submitBtn.addEventListener("click", () => {
	const checked = document.querySelector("input:checked");
	if (!checked) {
		// return;
		alert("You need to check the answer!");
	}
	checked.classList.remove("error");
	// console.log(checked.id);
	if (checked.id === quizData[currentQuiz].correct) {
		currentQuiz++;

		if (quizData[currentQuiz]) {
			loadingQuiz();
		} else {
			alert("You finished quis! :) Cangratulations!");
		}
	} else {
		checked.classList.add("error");
		alert("This answer is not corect :(");
	}
});
