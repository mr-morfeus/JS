const gameStore = {
    name: "GameZone",
    games: [
        {
            id: 1,
            title: "Cyberpunk 2077",
            price: 1999,
            genres: ["RPG", "Sci-fi"],
            platform: ["PC", "PS5"],
            rating: 4.5,
            inStock: true,
            features: ["open-world", "story-rich"]
        },
        {
            id: 2, 
            title: "The Witcher 3",
            price: 899,
            genres: ["RPG", "Fantasy"],
            platform: ["PC", "Switch", "PS4"],
            rating: 4.9,
            inStock: false,
            features: ["open-world", "choices-matter"]
        }
    ],
    customers: [
        {
            id: 1,
            name: "Алексей",
            balance: 5000,
            wishlist: [1, 3],
            purchased: [2]
        }
    ]
};

// ЗАДАЧИ:
// 1. Найти игры по жанру
// 2. Показать игры которые есть в наличии
// 3. Найти игры для конкретной платформы
// 4. Рекомендовать игры по бюджету (до 1000 руб)
// 5. Найти игры с определенными фичами



function search_game_genres(genres){
let game_ok = 0;
    for(let i=0;i<gameStore.games.length;i++){  
        if(gameStore.games[i].genres.indexOf(genres) >= 0){
             
             console.log(`Игра подходит по жанру: ${gameStore.games[i].title}`);
             game_ok = game_ok + 1;
        }
    }
    if(game_ok === 0){
       console.log(`Игра с таким жанром не найдено: ${genres}`);
    }
}
search_game_genres("RPG");

function games_vision(){
console.log(`Список всех игр:`);
    for(let i=0;i<gameStore.games.length;i++){  
        let j = i+1;
        console.log(`${j}) ${gameStore.games[i].title}`);
        
    }
}
games_vision()

function games_platforms(platform){


const foundGames = gameStore.games.filter(game => 
        game.platform.includes(platform)
    );
if(foundGames.length <= 0){
    console.log(`Игры с платформой ${platform} не найдены:`);
    }else{   
        console.log(`Список игр по требуемым платформам:`);
        foundGames.forEach(game => {
        console.log(`🎮 ${game.title} Платформы - ${game.platform} Цена - ${game.price} руб.`);
        });
        }
return foundGames;
}
games_platforms("PC")

function games_pricec1000(){
console.log(`Список игр до 1000 руб.:`);
const Games_price1000 = gameStore.games.filter(game => 
        game.price < 1000);
    
    Games_price1000.forEach(game => {
        console.log(`🎮 ${game.title} Платформы - ${game.platform} Цена - ${game.price} руб.`);
    });
    
    return Games_price1000;
}
games_pricec1000()

function games_features(features){

const foundGames = gameStore.games.filter(game => 
        game.features.includes(features)
    );
if(foundGames.length <= 0){
    console.log(`Игры с платформой ${features} не найдены:`);
    }else{
        console.log(`Список игр с определенными фичами:`);    
        foundGames.forEach(game => {
        console.log(`🎮 ${game.title} Платформы - ${game.platform} Цена - ${game.price} руб.`);
        });
    }
    return foundGames;
}

games_features("story-rich")

function addgame(title, price, genres, platform, rating, inStock, features){

    let id = gameStore.games.length + 1;
    console.log(`Игра ${title} добавлена`);

    add = gameStore.games.push({id: id, title: title, price: price, genres: genres, platform: platform, rating: rating, inStock: inStock, features: features});
    console.log(`Игра в магазине всего ${gameStore.games.length}`);

}
addgame("Дальнобойщики", 5999, "Гонки на грузовиках", "PC", "9,9", true, "")


games_vision()