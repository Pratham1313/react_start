export default function app() {
  async function getadvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    let advice = data.slip.advice;

    document.getElementById("butt").onclick = function () {
      document.getElementById("hello").innerHTML = advice;
    };
  }

  return (
    <div>
      <h1 id="hello">Hello World</h1>
      <button onClick={getadvice} id="butt">
        Get Advice
      </button>
    </div>
  );
}
