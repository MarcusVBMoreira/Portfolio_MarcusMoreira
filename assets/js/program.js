/* !TROCA DE ICONES! */
/* !WhatsApp! */
function mouseEmCimaWhatsApp(imagem) {
    imagem.src='assets/img/icons/whatsapp_colorido.png'
}
 function mouseForaWhatsApp(imagem) {
    imagem.src='assets/img/icons/whatsapp.png'
}

/* !Linkedin! */
function mouseEmCimaLinkedin(imagem) {
    imagem.src='assets/img/icons/linkedin_colorido.png'
}
 function mouseForaLinkedin(imagem) {
    imagem.src='assets/img/icons/linkedin.png'
}

/* !Email! */
function mouseEmCimaEmail(imagem) {
    imagem.src='assets/img/icons/email_colorido.png'
}
 function mouseForaEmail(imagem) {
    imagem.src='assets/img/icons/o-email.png'
}

/* !Instagram! */
function mouseEmCimaInstagram(imagem) {
    imagem.src='assets/img/icons/instagram_colorido.png'
}
 function mouseForaInstagram(imagem) {
    imagem.src='assets/img/icons/instagram.png'
}


/* Menu responsivo */
function menu_clicou(){
    document.getElementById('menu-icon').classList.toggle('bx-x');
    document.getElementById('menu_responsivo').classList.toggle('active');
    document.getElementById('menu').classList.toggle('active');
    document.getElementById('nav_menu').classList.toggle('active');
}