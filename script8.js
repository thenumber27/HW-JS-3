
let Name = prompt('ВВедите ваше имя?').toLowerCase().trim();

    if (Name == 'денис') {
        alert ( 'Добрый день, учитель' );
    } else if (Name == 'алиса' || Name == 'иван' || Name == 'анастасия' || Name == 'андрей') {
        alert( 'Привет, одногрупник' );
    } else { 
        alert( 'Ты не из нашей песочницы!' );
    }
