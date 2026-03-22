document.addEventListener('DOMContentLoaded', () => {

    // Seleciona o checkbox do menu e todos os links dentro do nav
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelectorAll('nav ul li a');

    // Para cada link, adiciona um evento de clique
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Se o menu estiver aberto (checked), ele desmarca para fechar
            if (menuToggle.checked) {
                menuToggle.checked = false;
            }
        });
    });

    // ... restante do seu código (FAQ, etc)
});

    // ... restante do seu código (FAQ, Smooth Scroll)

    // 1. FAQ Accordion Logic
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            // Se clicar em um, fecha os outros (opcional, para organização)
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });

            // Alterna a classe active no item clicado
            item.classList.toggle('active');
        });
    });


    // 2. Smooth Scroll for Nav Links (Opcional, pois o CSS já faz)
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    console.log("🚀 Landing Page 'Profissão Reiki' carregada com sucesso.");
