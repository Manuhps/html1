window.onload = () => {
    document.querySelector("#submit").addEventListener("click", function () {
        document.querySelector("#result").innerHTML = document.querySelector("textarea").value
    })
}	