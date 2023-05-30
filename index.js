const main = document.getElementById("main")
const startBtn = document.getElementById("start")


startBtn.addEventListener("click", firstWindow)

function firstWindow() {
    startBtn.style.display = "none"
    main.innerHTML = `
        <div class="container">
            <h2>How much do you love me?</h2>
            <p>(Scale from 1-10)</p>
            <input id="input-first" class="input" type="text" value="">
            <button id="submit">SUBMIT</button>
        </div>
    `
    const inputFirst = document.getElementById("input-first")
    document.getElementById("submit").addEventListener("click", evaluateValue)
    
    function evaluateValue() {
        const myValue = Number(inputFirst.value) + 1
        if (inputFirst.value <= 10) {
            main.innerHTML = `
            <div class="container">
                <h1>This is not enough!</h1>
                <button id="try-again">Try again</button>
            </div>
            `
            document.getElementById("try-again").addEventListener("click", firstWindow)
        } else {
            main.innerHTML = `
            <div class="container">
                <iframe src="https://giphy.com/embed/26FLdmIp6wJr91JAI" width="280" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/spongebob-26FLdmIp6wJr91JAI"></a></p>
                <h2>You passed the test! I Love u mi Maj <3</h2>
                <h4>I love you ${myValue}! Immer einen mehr als du!</h4>
                <button id="try-again">Try again</button>
            </div>
            `
            document.getElementById("try-again").addEventListener("click", firstWindow)
        }
    }
}




    


