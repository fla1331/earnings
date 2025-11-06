document.addEventListener("DOMContentLoaded", function() {
    // 1. Defina as referências usando as IDs
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptButton = document.getElementById('acceptCookies');
    const declineButton = document.getElementById('declineCookies');
    
    // Use uma chave única e limpa
    const consentKey = 'cookieConsentGiven';

    // 2. Verifica se o usuário já consentiu
    if (localStorage.getItem(consentKey) === 'true') {
        // Se sim, não faz nada (o CSS já o esconde)
        return; 
    } else {
        // 3. Se não, mostra o banner usando "flex"
        cookieBanner.style.display = "flex";
    }

    // 4. Lógica de Aceite
    acceptButton.addEventListener("click", () => {
        localStorage.setItem(consentKey, "true"); // Salva o aceite
        cookieBanner.style.display = "none";      // Esconde
        console.log('Cookies aceitos.');
        // Aqui entra a chamada para carregar o Google Analytics, etc.
    });

    // 5. Lógica de Recusa
    declineButton.addEventListener("click", () => {
        localStorage.setItem(consentKey, "true"); // Salva a escolha (para não incomodar mais)
        cookieBanner.style.display = "none";      // Esconde
        console.log('Cookies recusados.');
    });
});