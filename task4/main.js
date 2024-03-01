console.log("|-------------------------|\n 1 Задание");
// 1
const points = [[1, 2], [4, 5], [177, 1]];

for (let point of points)
{
    for (let num of point)
    {
        console.log(`num: ${num}`);
        sum += num;
    }
}
console.log(`sum: ${sum}`);

console.log("|-------------------------|\n 2 Задание");
// 2

const players = [   {name: "GROG1", nickname: "GROG123"},
                    {name: "GROG2", nickname: "GROG223"},
                    {name: "GROG3", nickname: "GROG323"} ];

for (let player of players)
{
    console.log(`Name ${player["name"]}.`);
}

for (let player of players)
{
    player["nickname"] += "GROG";
    console.log(`nick: ${player["nickname"]}`);
}

console.log("|-------------------------|\n 3 Задание");
// 3

const library =     {
                    books: [{name: "DEVILBOOK", description: "Don't open me, please."},
                            {name: "DEVILBOOK2", description: "Open me, please."},
                            {name: "DEVILBOOK3", description: "DOOM 1 GUIDE!."},],
                    librarian:{name: "Don", cost: 9999999999}};

for (let book of library["books"])
{
    console.log(`Book name is ${book["name"]} and description: ${book["description"]}`);
    
}

console.log(`Librerian is ${library["librarian"]["name"]}!!!`);

console.log("|-------------------------|");



