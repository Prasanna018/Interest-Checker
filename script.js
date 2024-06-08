// let principle = document.querySelector(".principle");
let rate = document.querySelector(".rate1");
let time = document.querySelector(".time1");
let display = document.querySelector(".display");
let input_value = document.querySelector(".input-value");

const submit = document.querySelector("#submit");
const reset = document.querySelector("#reset");



submit.addEventListener("click", () => {

    let val1 = parseInt(input_value.value);
    let val2 = parseInt(rate.value);
    let val3 = parseInt(time.value);
    const final = eval(val1 * val2 * val3 / 100);
    display.innerText = final;
})


reset.addEventListener("click", () => {
    input_value.value = "";
    rate.value = "";
    time.value = "";
    display.innerText = "";

})