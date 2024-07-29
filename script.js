let putcaptcha=document.querySelector(".capta");
const entercapta = document.querySelector(".entercapta");
//console.log(entercapta);
let chars="1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let captcha;
generate();
function generate(){
    captcha="";
    for(i=0;i<6;i++)
    {
        let number=Math.floor(Math.random()*chars.length);
        //console.log(number)
        captcha=captcha+chars[number];
    }
    putcaptcha.textContent = captcha;
}
console.log(captcha);
function checking() {
    if (captcha === entercapta.value) {
        alert("Captcha verified successfully....");
        generate();
    } else {
        alert("Invalid captcha!!");
        entercapta.value = "";
    }
}