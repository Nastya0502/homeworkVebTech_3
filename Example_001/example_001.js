function FavoriteFilm(){
    for (let i=0; i<3; i++){
        let film = prompt("Какой мой любимый фильм? Угадай с 3 раз!");
        if (film=="Пираты карибского моря"){
            alert("Все верно!");  
            break;      
        }
        else{
            alert(`Неверно! Попробуйте еще раз. Количество оставшихся попыток: ${3-i-1}.`);
        }
    }   
}

FavoriteFilm();