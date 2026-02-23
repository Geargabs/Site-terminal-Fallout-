function showVault(vault) {

    const descriptions = {

        "111": "Vault 111\n\nLocalização: Boston.\nExperimento: Criogenia humana involuntária.\nResultado: Sobrevivente único desperta 200 anos depois.",

        "13": "Vault 13\n\nIsolamento extremo.\nResponsável pelo início dos eventos do primeiro Fallout.\nExperimento: Dependência total de controle interno.",

        "76": "Vault 76\n\nVault de controle.\nAberto 25 anos após a guerra.\nMissão: Reconstruir os Estados Unidos.",

        "21": "Vault 21\n\nLocalizado em New Vegas.\nTodas as decisões resolvidas por jogos de azar.",

        "34": "Vault 34\n\nSuperpopulação e armamento excessivo.\nResultado: Rebelião interna e contaminação por radiação."
    };

    document.getElementById("vault-description").textContent = descriptions[vault];
}
