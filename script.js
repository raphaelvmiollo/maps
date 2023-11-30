

var data = {
    "estados": {
        "ACRE": "Acre",
        "ALAGOAS": "Alagoas",
        "AMAPA": "Amapá",
        "AMAZONAS": "Amazonas",
        "BAHIA": "Bahia",
        "CEARA": "Ceará",
        "BRASILIA": "Distrito Federal",
        "ESPIRITO_SANTO": "Espírito Santo",
        "GOIAS": "Goiás",
        "MARANHAO": "Maranhão",
        "MATO_GROSSO": "Mato Grosso",
        "MATO_GROSSO_SUL": "Mato Grosso do Sul",
        "MINAS_GERAIS": "Minas Gerais",
        "PARA": "Pará",
        "PARAIBA": "Paraíba",
        "PARANA": "Paraná",
        "PERNAMBUCO": "Pernambuco",
        "PIAUI": "Piauí",
        "RIO_DE_JANEIRO": "Rio de Janeiro",
        "RIO_GRANDE_DO_NORTE": "Rio Grande do Norte",
        "RIO_GRANDE_DO_SUL": "Rio Grande do Sul",
        "RONDONIA": "Rondônia",
        "RORAIMA": "Roraima",
        "SANTA_CATARINA": "Santa Catarina",
        "SAO_PAULO": "São Paulo",
        "SERGIPE": "Sergipe",
        "TOCANTINS": "Tocantins"
    },
    "siglas": ["ACRE", "ALAGOAS", "AMAPA", "AMAZONAS", "BAHIA", "CEARA", "BRASILIA", "ESPIRITO_SANTO", "GOIAS", "MARANHAO", "MATO_GROSSO", "MATO_GROSSO_SUL", "MINAS_GERAIS", "PARA", "PARAIBA", "PARANA", "PERNAMBUCO", "PIAUI", "RIO_DE_JANEIRO", "RIO_GRANDE_DO_NORTE", "RIO_GRANDE_DO_SUL", "RONDONIA", "RORAIMA", "SANTA_CATARINA", "SAO_PAULO", "SERGIPE", "TOCANTINS"]
}



data.siglas.forEach(element => {
    document.getElementById(element).addEventListener("click", function (event) {
        event.target.style.fill = "#FFF";
        document.getElementById("estado_nome").textContent = data.estados[element];
        resetMap();
    });
});


function resetMap() {
    data.siglas.forEach(sigla => {
        document.getElementById(sigla).style.fill = "red";
    });
}


