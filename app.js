const adviceRes = document.querySelector("#adviceRes");
const adviceId = document.querySelector("#adviceId");
const adviceBtn = document.querySelector("#getData");

adviceBtn.addEventListener("click", () => {
  getAdvice();
});

window.onload = () => {
  getAdvice();
};

function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => {
      return response.json();
    })
    .then((adviceData) => {
      const AdviceObj = adviceData.slip;
      adviceId.innerHTML = `${AdviceObj.id}`;
      adviceRes.innerHTML = `<p>"${AdviceObj.advice}"</p>`;
    })
    .catch((error) => {
      console.log(error);
    });
}
