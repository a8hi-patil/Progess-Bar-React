
let key = 0
let id = setInterval(() => {

    yes()
}, 1000);

function yes() {
    key++
    console.log("Hio");
    if (key == 5) clearInterval(id)

}