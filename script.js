function askpassword() {
    password = prompt("What is the password")
}
askpassword()
if (password == "folufela"){
alert("Password accepted")
location.replace("/website")
}
while (password != "folufela"){
alert("Wrong password")
askpassword()
}