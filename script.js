function myFunction() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const randomColor = `rgb(${r}, ${g}, ${b})`;

    console.log(randomColor);
    document.body.style.backgroundColor = randomColor;
    document.getElementById("color").innerHTML = randomColor;
}



document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
    
        const randomColor = `rgb(${r}, ${g}, ${b})`;

        document.body.style.backgroundColor = randomColor;
        document.getElementById("color").innerHTML = randomColor;
    }
});
