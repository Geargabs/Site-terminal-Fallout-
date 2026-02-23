function showGame(game) {

    const descriptions = {

        "1": "Fallout 1 (1997)\n\nVocê é o Vault Dweller enviado do Vault 13 para encontrar um chip de água antes que o abrigo morra.",

        "2": "Fallout 2 (1998)\n\nDescendente do Vault Dweller busca o GECK para salvar sua tribo da fome e da extinção.",

        "3": "Fallout 3 (2008)\n\nVocê sai do Vault 101 e parte pelas ruínas de Washington D.C. em busca de seu pai.",

        "4": "Fallout 4 (2015)\n\nSobrevivente do Vault 111 procura seu filho sequestrado no Commonwealth devastado.",

        "76": "Fallout 76 (2018)\n\nPrimeiros habitantes a sair do Vault 76 exploram a Virgínia Ocidental reconstruindo a América."
    };

    document.getElementById("game-description").textContent = descriptions[game];
}
