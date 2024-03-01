let product = {
    name: "poco ICH PACH MAK", 
    price: 30000, // На самом деле он бесценен, оригинальные версии массоны украли.
    inStock: true,
    brand: "XiaomI",
    specifications: { //ОЗУ И ПЗУ в ГБ
        ram: 4,
        pam: 128,
        cpu: "Snapdrgon XD",
        gpu: "Adreno 510",
        display: "Amoled",
        protection: "IP57"
    },
    discount: {
        percentage: 0.5, // это 50%
        expirationDate: "05.05.2027",
    }
}

let customer = {
    name: "GROG",
    budget: 1000000,
}

const customerName = customer["name"];

const productPrice = product["price"];
const productName = product["name"];
const productBrand = product["brand"];
const productSpecs = product["specifications"];

const productProcentage = product["discount"]["percentage"];
const productExpDate = product["discount"]["expirationDate"];

if (customer["budget"] < productPrice)
{
    console.log(`Бюджет ${customerName} слишком мал для покупки ${productName}.`);
}
else
{
    if (product["inStock"])
    {
        console.log(`Бюджет ${customerName} позволяет купить ${productBrand} ${productName}.`);

        console.log("Вот характеристики товара:");
        console.log(`ОЗУ: ${productSpecs["ram"]}.`);
        console.log(`ПЗУ: ${productSpecs["pam"]}.`);
        console.log(`ЦПУ: ${productSpecs["cpu"]}.`);
        console.log(`ГПУ: ${productSpecs["gpu"]}.`);
        console.log(`Тип экрана: ${productSpecs["display"]}.`);
        console.log(`Уровень защиты: ${productSpecs["protection"]}.`);

        if (productProcentage > 0.0 && productProcentage <= 1.0)
        {
            console.log(`На этот товар есть скидка в ${productProcentage * 100} до ${productExpDate}.`);
            let resultPrice = productPrice - (productPrice * productProcentage);
            console.log(`Цена ${productBrand} ${productName} с учетом скидки равна ${resultPrice} рублей.`);
        }
        else
        {
            console.log(`Цена ${productBrand} ${productName} равна ${productPrice} рублей.`);
        }
        console.log(`Приятной покупки ${customerName}!`);

    }
    else
    {
        console.log(`Хоть бюджет ${customerName} позволяет купить ${productBrand} ${productName} за ${productPrice}, но товара нет на складе.`);
    }
    
}

