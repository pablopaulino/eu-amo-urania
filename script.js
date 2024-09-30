

// Array de objetos com as notícias
const noticias = [
    {
        titulo: "Eleições 06/10",
        categoria: "Política",
        descricao: "Nesse domingo das 7h às 16h, é dia de votar na Deise da Saúde e no Dr Orlando 55."
    },
    {
        titulo: "Onda de Calor",
        categoria: "Clima",
        descricao: "A temperatura máxima deve alcançar 41°C , mantendo a cidade sob alerta laranja para onda de calor."
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