function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar-me.png")
  }

  if (html.classList.contains("light")) {
    img.setAttribute(
      "alt",
      "imagem de mayk brito com fundo azul claro e roxo, óculos escuros e sorrindo",
    )
  } else {
    img.setAttribute("alt", "imagem de um homem pardo de óculos e rosto sério")
  }
}
