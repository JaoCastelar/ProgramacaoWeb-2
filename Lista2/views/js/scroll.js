const indexLinks = document.querySelectorAll("#index a");

indexLinks.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault(); // Impede o comportamento padrão do link
        const targetId = link.getAttribute("href").substring(1); // Obtém o ID do alvo
        const targetElement = document.getElementById(targetId);
        
        // Verifica se o elemento de destino existe
        if (targetElement) {
            // Calcula a posição do elemento de destino
            const targetPosition = targetElement.offsetTop;
            
            // Anima o scroll suave até a posição do elemento de destino
            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });
        }
    });
});