const string1 = "<div class=\"col-md-4\"><a class=\"lightbox\" href=\"./images/img/img_";
const string2 = ".JPG\"><img src=\"./images/thumbnails/img_";
const string3 = ".JPG\"></a></div>";

let code = "";
for (let i = 1; i <= 591; i++) {

    if (i != 413) {
        let n = i.toLocaleString('en-US', {
            minimumIntegerDigits: 3,
            useGrouping: false
        })
        code += string1 + n + string2 + n + string3;
    }
}
console.log(code);

document.getElementById("input").innerHTML = code;