let txt = document.getElementById("input-text");
let btn = document.getElementById("btn");
let result = document.getElementById("result");

btn.addEventListener("click", () => {
    let txt_new = txt.value.toLowerCase();
    let txtreverse = txt_new.split('');
    let txtreversed = txtreverse.reverse();
    let txtjoin = txtreversed.join('');

    if (txtjoin == txt_new) {
        result.textContent = "Palindrome";
    } else {
        result.textContent = "Not a palindrome";
    }
})
