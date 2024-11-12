document.getElementById("form-pix").addEventListener("submit", function(event) {
    event.preventDefault();
    const senha = document.getElementById("senha").value;
    if (senha === "1234") { // Substitua por uma senha dinâmica
        window.location.href = "conteudo_exclusivo.html"; // Página de conteúdo restrito
    } else {
        alert("Senha incorreta.");
    }
});
