function fnCarregarDados(){
    const url = "https://api.github.com/users/ClaudineiClemente48"

fetch(url)
  .then(response => {
    return response.json()
  })
  .then(dados => {
    
    fnMostrarDados(dados.avatar_url, dados.name, dados.bio, dados.email, dados.twitter_username, dados.html_url, dados.blog)
  })


}

function fnMostrarDados(fotos,nome, resumo,email,twitter,github, blog, ){
  document.getElementById("foto").src = fotos
  document.getElementById("nome").innerHTML = nome 
  document.getElementById("resumo").innerHTML = resumo + "<br> <strong class='email' id='email'></strong>"
  document.getElementById("email").innerHTML = email
  document.getElementById("twitter").href = twitter
  document.getElementById("github").href = github
  document.getElementById("blog").href = blog
}
let botao = document.getElementById("botao-carregar-dados")
botao.addEventListener("click", function(){

  fnCarregarDados()

})




