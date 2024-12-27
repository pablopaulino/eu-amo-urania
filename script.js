

// Array de objetos com as notícias
const noticias = [
    {
        titulo: "Prefeito Eleito",
        categoria: "Política",
        descricao: "Ivan Vitorelli foi eleito prefeito de Urânia."
    },
    {
        titulo: "Onda de Calor",
        categoria: "Clima",
        descricao: "A temperatura máxima deve alcançar 41°C , mantendo a cidade sob alerta laranja para onda de calor."
    },
    {
        titulo: "Chuva",
        categoria: "Clima",
        descricao: "O clima permanece instável, com temperaturas variando de 22°C a 35°C e 67% de possibilidade de chuvas."
    }
];

// Função para gerar o HTML das notícias
function carregarNoticias() {
    const newsContainer = document.getElementById('news-container');

    // Iterar sobre o array de notícias e criar os elementos HTML
    noticias.forEach(noticia => {
        // Criar o elemento da notícia
        const newsCard = document.createElement('div');
        newsCard.classList.add('news-card');
        
        // Adicionar o título
        const titleElement = document.createElement('h3');
        titleElement.textContent = noticia.titulo;
        newsCard.appendChild(titleElement);
        
        // Adicionar a categoria
        const categoryElement = document.createElement('p');
        categoryElement.innerHTML = `<strong>Categoria:</strong> ${noticia.categoria}`;
        newsCard.appendChild(categoryElement);
        
        // Adicionar a descrição
        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = noticia.descricao;
        newsCard.appendChild(descriptionElement);
        
        // Adicionar o card ao container
        newsContainer.appendChild(newsCard);
    });
}

// Chamar a função para carregar as notícias
window.onload = carregarNoticias;










// Obtém o ano atual
const currentYear = new Date().getFullYear();
// Insere o ano atual no elemento com id "year"
document.getElementById('year').textContent = currentYear;

document.addEventListener("DOMContentLoaded", () => {
    // Verificar se o usuário já aceitou os cookies
    const cookieConsent = localStorage.getItem("cookieConsent");

    if (!cookieConsent) {
        // Se não houver consentimento, mostrar o banner
        const cookieBanner = document.getElementById("cookie-banner");
        cookieBanner.style.display = "block";
    }

    // Quando o usuário clicar no botão "Aceitar"
    document.getElementById("accept-cookies").addEventListener("click", () => {
        // Armazenar o consentimento no localStorage
        localStorage.setItem("cookieConsent", "true");

        // Ocultar o banner de cookies
        const cookieBanner = document.getElementById("cookie-banner");
        cookieBanner.style.display = "none";
    });
});
