document.querySelector("#btn").addEventListener("click",getFormvalue)
function getFormvalue() {
    let input = document.getElementsByClassName("data");
	let fullName=input[0].value+" "+input[1].value;
alert(fullName);
}
