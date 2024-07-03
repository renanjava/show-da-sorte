const lista = document.getElementById("lista-premios")
for(let i = 1; i < 11; i++){
    const item = document.createElement("li")
    item.classList.add("col-xl-3", "col-lg-4" ,"col-md-6")
    const galleryItem = document.createElement("div")
    galleryItem.classList.add("gallery-item", "h-100")
    const imagem = document.createElement("img")
    imagem.classList.add("img-fluid")
    imagem.alt = ""
    imagem.src = `assets/img/gallery/gallery-${i}.jpg`
    const galleryLinks = document.createElement("div")
    galleryLinks.classList.add("gallery-links", "d-flex", "align-items-center", "justify-content-center")
    const imagemPreview = document.createElement("a")
    imagemPreview.href = `assets/img/gallery/gallery-${i}.jpg`
    imagemPreview.title = `Gallery ${i}`
    imagemPreview.classList.add("glightbox", "preview-link")
    const expandirAngulo = document.createElement("i")
    expandirAngulo.classList.add("bi", "bi-arrows-angle-expand")
    const gallerySingle = document.createElement("a")
    gallerySingle.href = "gallery-single.html"
    gallerySingle.classList.add("details-link")
    const detalhes = document.createElement("i")
    detalhes.classList.add("bi", "bi-link-45deg")
    gallerySingle.appendChild(detalhes)
    imagemPreview.appendChild(expandirAngulo)
    galleryLinks.appendChild(imagemPreview)
    galleryLinks.appendChild(gallerySingle)
    galleryItem.appendChild(imagem)
    galleryItem.appendChild(galleryLinks)
    item.appendChild(galleryItem)
    lista.appendChild(item)
}