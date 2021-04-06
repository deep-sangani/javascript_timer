let sec = 00;
let min = 00;

/*
m = 1 s = 1

*/
var timer = document.getElementById("main-watch")
var time = document.getElementById("time")
var btn = document.getElementById("submit-btn")
var clr_btn = document.getElementById("clr-btn")

clr_btn.addEventListener("click", () => {
    sec = 00;
    min = 00;
    timer.innerText = `00 : 00`
})

btn.addEventListener("click", () => {
    let time_value = time.value
    if (time_value) {
        let arr = time_value.split(":");
        console.log(arr[0], arr[1]);
        min = arr[0];
        sec = arr[1];
        gettime()
    }
})

function gettime () {
    var inid = setInterval(() => {

        if (min >= 0) {
            if (min == 0 && sec == 1) {
                clearInterval(inid)
            }
            if (sec > 0) {
                timer.innerText = `${min.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })} : ${sec.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })}`
                sec--;
                console.log(`m : ${min} sec : ${sec}`);





            } else if (sec == 0) {
                min--;
                sec = 59;
                console.log(`m : ${min} sec : ${sec}`);


            }
        } else {
            clearInterval(inid)

        }
    }, 1200)

}

