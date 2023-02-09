
    const pwd = document.getElementById("pwd_text")
    const gerador = document.getElementById("gerador")
    const clipboard = document.getElementById("clipboard")
    let pwd_length = document.getElementById("slider")
    let copy_text = document.getElementById("copiarsenha")
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    gerador.addEventListener("click",() => {
        let password = ""
        let checked = document.getElementById("checkbox").checked
        let final_string = string
        if(checked){
            final_string += "@#$%^&*/=+?"
        }
        for (let i = 0; i < pwd_length.value; i++) {
            password += final_string[Math.floor(Math.random() * final_string.length)];
        }
        pwd.innerText = password;
        final_string = string;
    });

    clipboard.addEventListener("click", () => {
        navigator.clipboard.writeText(pwd.innerText)
        copy_text.textContent = "Senha copiada"
        copy_text.style.display = "block"
        setTimeout( () => {
            copy_text.style.display = "none";
        } , 2000)
    })

