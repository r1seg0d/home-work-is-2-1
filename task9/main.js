const calculate = () => {
    const inputTilesCost = parseInt(document.querySelector('#tilesCost').value);
    const inputWallsCost = parseInt(document.querySelector('#wallsCost').value);
    const inputPlunbingCost = parseInt(document.querySelector('#plumbingCost').value);

    const inputTiles = parseInt(document.querySelector('#tiles').value);
    const inputWalls = parseInt(document.querySelector('#walls').value);
    const inputPlunbing = parseInt(document.querySelector('#plumbing').value);
    
    const Nan = isNaN(inputTilesCost) || isNaN(inputWallsCost) || isNaN(inputPlunbingCost) || isNaN(inputPlunbing) || isNaN(inputTilesCost) || isNaN(inputWallsCost);
    const Zero = inputTilesCost <= 0 || inputWallsCost <= 0 || inputPlunbingCost <= 0;
    if (Nan)
    {
        alert("Заполните все поля");
        return;
    }
    if (Zero)
    {
        alert("Цена не может быть меньше либо равна 0");
        return;
    }

    let sum = inputTiles + inputWalls + inputPlunbing;

    const cost = {
        'tiles': (inputTiles * inputTilesCost),
        'walls': (inputWalls * inputWallsCost),
        'plumbing': (inputPlunbing * inputPlunbingCost),
    }

    const totalCost = cost["tiles"] + cost["walls"] + cost["plumbing"];

    const resultDiv = document.querySelector("#result");
    resultDiv.innerHTML = `
        <p>Стоимость укладки плитки: ${cost["tiles"].toFixed(2)}</p>
        <p>Стоимость покраски стен: ${cost["walls"].toFixed(2)}</p>
        <p>Стоимость установки сантехники: ${cost["plumbing"].toFixed(2)}</p>
        <p>Общая стоимость: ${totalCost.toFixed(2)}</p>
    `;
}