'use strict';

(function(){
    //массивы с данными
let filmsJson = `[
		{
			"title": "Мир Дикого запада",
			"tags": [
				"Драма",
				"Мистика",
				"Sci-Fi",
				"Роботы"
			]
		},
		{
			"title": "Доктор Кто",
			"tags": [
				"Приключение",
				"Драма",
				"Семейный",
				"Роботы"
			]
		},
		{
			"title": "Звёздные войны: Войны Клонов",
			"tags": [
				"Анимация",
				"Экшн",
				"Приключение",
				"Роботы"
			]
		},
		{
			"title": "Хан Соло: Звездные войны. Истории",
			"tags": [
				"Экшн",
				"Приключение",
				"Фэнтези",
				"Роботы"
			]
		},
		{
			"title": "Суперсемейка",
			"tags": [
				"Анимация",
				"Экшн",
				"Приключение",
				"Роботы"
			]
		},
		{
			"title": "Остров собак",
			"tags": [
				"Анимация",
				"Приключение",
				"Комедия",
				"Роботы"
			]
		},
		{
			"title": "Тау",
			"tags": [
				"Sci-Fi",
				"Триллер",
				"Роботы"
			]
		},
		{
			"title": "Бегущий по лезвию 2049",
			"tags": [
				"Драма",
				"Мистика",
				"Sci-Fi",
				"Роботы"
			]
		},
		{
			"title": "Затерянные в космосе",
			"tags": [
				"Приключение",
				"Драма",
				"Sci-Fi",
				"Роботы"
			]
		},
		{
			"title": "Тихоокеанский рубеж 2",
			"tags": [
				"Экшн",
				"Приключение",
				"Sci-Fi",
				"Роботы"
			]
		},
		{
			"title": "Kingsman: Золотое кольцо",
			"tags": [
				"Экшн",
				"Приключение",
				"Комедия",
				"Роботы"
			]
		},
		{
			"title": "Люди",
			"tags": [
				"Драма",
				"Sci-Fi",
				"Роботы"
			]
		},
		{
			"title": "Стражи Галактики. Часть 2",
			"tags": [
				"Экшн",
				"Приключение",
				"Sci-Fi",
				"Роботы"
			]
		},
		{
			"title": "Трансформеры: Последний рыцарь",
			"tags": [
				"Экшн",
				"Приключение",
				"Sci-Fi",
				"Роботы",
				"Динозавры"
			]
		},
		{
			"title": "Интерстеллар",
			"tags": [
				"Приключение",
				"Драма",
				"Sci-Fi",
				"Роботы"
			]
		},
		{
			"title": "Юные титаны, вперед!",
			"tags": [
				"Анимация",
				"Экшн",
				"Комедия",
				"Роботы"
			]
		},
		{
			"title": "Время приключений",
			"tags": [
				"Анимация",
				"Приключение",
				"Комедия",
				"Роботы"
			]
		},
		{
			"title": "Первый мститель: Противостояние",
			"tags": [
				"Экшн",
				"Приключение",
				"Sci-Fi",
				"Роботы"
			]
		},
		{
			"title": "Бамблби",
			"tags": [
				"Экшн",
				"Приключение",
				"Sci-Fi",
				"Роботы"
			]
		},
		{
			"title": "Мстители: Эра Альтрона",
			"tags": [
				"Экшн",
				"Приключение",
				"Sci-Fi",
				"Роботы"
			]
		},
		{
			"title": "Мстители",
			"tags": [
				"Экшн",
				"Приключение",
				"Sci-Fi",
				"Роботы"
			]
		},
		{
			"title": "Орвилл",
			"tags": [
				"Приключение",
				"Комедия",
				"Драма",
				"Роботы"
			]
		},
		{
			"title": "Untitled Terminator Reboot",
			"tags": [
				"Экшн",
				"Приключение",
				"Sci-Fi",
				"Роботы"
			]
		},
		{
			"title": "Мир будущего",
			"tags": [
				"Sci-Fi",
				"Роботы"
			]
		},
		{
			"title": "Аватар",
			"tags": [
				"Экшн",
				"Приключение",
				"Фэнтези",
				"Роботы"
			]
		},
		{
			"title": "Люди Икс: Апокалипсис",
			"tags": [
				"Экшн",
				"Приключение",
				"Sci-Fi",
				"Роботы"
			]
		},
		{
			"title": "Напряги извилины",
			"tags": [
				"Экшн",
				"Приключение",
				"Комедия",
				"Роботы"
			]
		},
		{
			"title": "Бегущий по лезвию",
			"tags": [
				"Sci-Fi",
				"Триллер",
				"Роботы"
			]
		},
		{
			"title": "Чужой: Завет",
			"tags": [
				"Хоррор",
				"Sci-Fi",
				"Триллер",
				"Роботы"
			]
		},
		{
			"title": "Скуби-Ду",
			"tags": [
				"Приключение",
				"Комедия",
				"Семейный",
				"Роботы"
			]
		},
		{
			"title": "Матрица",
			"tags": [
				"Экшн",
				"Sci-Fi",
				"Роботы"
			]
		},
		{
			"title": "Валериан и город тысячи планет",
			"tags": [
				"Экшн",
				"Приключение",
				"Фэнтези",
				"Роботы"
			]
		},
		{
			"title": "Тор",
			"tags": [
				"Экшн",
				"Приключение",
				"Фэнтези",
				"Роботы"
			]
		},
		{
			"title": "Изгой-один. Звёздные войны: Истории",
			"tags": [
				"Экшн",
				"Приключение",
				"Sci-Fi",
				"Роботы"
			]
		},
		{
			"title": "Могучие рейнджеры",
			"tags": [
				"Экшн",
				"Приключение",
				"Sci-Fi",
				"Роботы",
				"Динозавры"
			]
		},
		{
			"title": "Железный человек",
			"tags": [
				"Экшн",
				"Приключение",
				"Sci-Fi",
				"Роботы"
			]
		},
		{
			"title": "Тихоокеанский рубеж",
			"tags": [
				"Экшн",
				"Приключение",
				"Sci-Fi",
				"Роботы"
			]
		},
		{
			"title": "Звездный крейсер Галактика",
			"tags": [
				"Экшн",
				"Приключение",
				"Драма",
				"Роботы"
			]
		},
		{
			"title": "Хижина в лесу",
			"tags": [
				"Комедия",
				"Хоррор",
				"Роботы"
			]
		},
		{
			"title": "Трансформеры",
			"tags": [
				"Экшн",
				"Приключение",
				"Sci-Fi",
				"Роботы",
				"Анимация",
				"Динозавры"
			]
		},
		{
			"title": "Из машины",
			"tags": [
				"Драма",
				"Мистика",
				"Sci-Fi",
				"Роботы"
			]
		},
		{
			"title": "Призрак в доспехах",
			"tags": [
				"Экшн",
				"Драма",
				"Sci-Fi",
				"Роботы"
			]
		},
		{
			"title": "Звёздные войны: Пробуждение Силы",
			"tags": [
				"Экшн",
				"Приключение",
				"Фэнтези",
				"Роботы"
			]
		},
		{
			"title": "Звёздные войны",
			"tags": [
				"Экшн",
				"Приключение",
				"Фэнтези",
				"Роботы"
			]
		},
		{
			"title": "Звёздные войны: Повстанцы",
			"tags": [
				"Анимация",
				"Экшн",
				"Приключение",
				"Роботы"
			]
		},
		{
			"title": "Человек из стали",
			"tags": [
				"Экшн",
				"Приключение",
				"Фэнтези",
				"Роботы"
			]
		},
		{
			"title": "Чужие",
			"tags": [
				"Экшн",
				"Приключение",
				"Sci-Fi",
				"Роботы"
			]
		},
		{
			"title": "Город героев",
			"tags": [
				"Анимация",
				"Экшн",
				"Приключение",
				"Роботы"
			]
		},
		{
			"title": "Люди Икс: Дни минувшего будущего",
			"tags": [
				"Экшн",
				"Приключение",
				"Sci-Fi",
				"Роботы"
			]
		},
		{
			"title": "Гарри Поттер и философский камень",
			"tags": [
				"Приключение",
				"Семейный",
				"Фэнтези",
				"Магия"
			]
		},
		{
			"title": "Гарри Поттер и Дары смерти: Часть II",
			"tags": [
				"Приключение",
				"Драма",
				"Фэнтези",
				"Магия"
			]
		},
		{
			"title": "Гарри Поттер и кубок огня",
			"tags": [
				"Приключение",
				"Семейный",
				"Фэнтези",
				"Магия"
			]
		},
		{
			"title": "Фантастические твари и где они обитают",
			"tags": [
				"Приключение",
				"Семейный",
				"Фэнтези",
				"Магия"
			]
		},
		{
			"title": "Гарри Поттер и узник Азкабана",
			"tags": [
				"Приключение",
				"Семейный",
				"Фэнтези",
				"Магия"
			]
		},
		{
			"title": "Гарри Поттер и Дары смерти: Часть I",
			"tags": [
				"Приключение",
				"Семейный",
				"Фэнтези",
				"Магия"
			]
		},
		{
			"title": "Гарри Поттер и тайная комната",
			"tags": [
				"Приключение",
				"Семейный",
				"Фэнтези",
				"Магия"
			]
		},
		{
			"title": "Яркость",
			"tags": [
				"Экшн",
				"Криминал",
				"Фэнтези",
				"Магия"
			]
		},
		{
			"title": "Boлшебники из Bэйверли",
			"tags": [
				"Комедия",
				"Драма",
				"Семейный",
				"Магия"
			]
		},
		{
			"title": "Шрек 2",
			"tags": [
				"Анимация",
				"Приключение",
				"Комедия",
				"Магия"
			]
		},
		{
			"title": "Виллоу",
			"tags": [
				"Экшн",
				"Приключение",
				"Драма",
				"Магия"
			]
		},
		{
			"title": "Охотники на ведьм",
			"tags": [
				"Экшн",
				"Фэнтези",
				"Хоррор",
				"Магия"
			]
		},
		{
			"title": "Оз: Великий и Ужасный",
			"tags": [
				"Приключение",
				"Комедия",
				"Драма",
				"Магия"
			]
		},
		{
			"title": "Изумрудный город",
			"tags": [
				"Приключение",
				"Драма",
				"Фэнтези",
				"Магия"
			]
		},
		{
			"title": "Звёздная принцесса и силы зла",
			"tags": [
				"Анимация",
				"Приключение",
				"Комедия",
				"Магия"
			]
		},
		{
			"title": "Boлшебные покровители",
			"tags": [
				"Анимация",
				"Комедия",
				"Семейный",
				"Магия"
			]
		},
		{
			"title": "Пиноккио",
			"tags": [
				"Анимация",
				"Комедия",
				"Семейный",
				"Магия"
			]
		},
		{
			"title": "Супергёрл",
			"tags": [
				"Экшн",
				"Приключение",
				"Фэнтези",
				"Магия"
			]
		},
		{
			"title": "Спящая красавица",
			"tags": [
				"Анимация",
				"Семейный",
				"Фэнтези",
				"Магия"
			]
		},
		{
			"title": "Смурфики",
			"tags": [
				"Анимация",
				"Приключение",
				"Комедия",
				"Магия"
			]
		},
		{
			"title": "Золушка",
			"tags": [
				"Анимация",
				"Семейный",
				"Фэнтези",
				"Магия"
			]
		},
		{
			"title": "Повелитель страниц",
			"tags": [
				"Анимация",
				"Приключение",
				"Комедия",
				"Магия"
			]
		},
		{
			"title": "Меч в камне",
			"tags": [
				"Анимация",
				"Приключение",
				"Комедия",
				"Магия"
			]
		},
		{
			"title": "Золушка 3: Злые чары",
			"tags": [
				"Анимация",
				"Семейный",
				"Фэнтези",
				"Магия"
			]
		},
		{
			"title": "H.R. Pufnstuf",
			"tags": [
				"Приключение",
				"Семейный",
				"Фэнтези",
				"Магия"
			]
		},
		{
			"title": "Yолшебники из Yэйверли Плэйс: Полнометражный фильм",
			"tags": [
				"Приключение",
				"Комедия",
				"Драма",
				"Магия"
			]
		},
		{
			"title": "Простое желание",
			"tags": [
				"Комедия",
				"Семейный",
				"Фэнтези",
				"Магия"
			]
		},
		{
			"title": "Каспер встречает Венди",
			"tags": [
				"Анимация",
				"Приключение",
				"Комедия",
				"Магия"
			]
		},
		{
			"title": "Cinderella",
			"tags": [
				"Комедия",
				"Мюзикл",
				"Магия"
			]
		},
		{
			"title": "Золушка II: Мечты сбываются",
			"tags": [
				"Анимация",
				"Семейный",
				"Фэнтези",
				"Магия"
			]
		},
		{
			"title": "Изумление",
			"tags": [
				"Экшн",
				"Триллер",
				"Магия"
			]
		},
		{
			"title": "Страсти-мордасти во второй степени",
			"tags": [
				"Приключение",
				"Комедия",
				"Семейный",
				"Магия"
			]
		},
		{
			"title": "Высоты свободы",
			"tags": [
				"Драма",
				"Музыка",
				"Романтика",
				"Магия"
			]
		},
		{
			"title": "Сакура - собирательница карт",
			"tags": [
				"Анимация",
				"Экшн",
				"Приключение",
				"Магия"
			]
		},
		{
			"title": "Волшебник Даниэль",
			"tags": [
				"Комедия",
				"Криминал",
				"Фэнтези",
				"Магия"
			]
		},
		{
			"title": "Место на метле",
			"tags": [
				"Анимация",
				"Комедия",
				"Магия"
			]
		},
		{
			"title": "Убогие жизни",
			"tags": [
				"Комедия",
				"Романтика",
				"Магия"
			]
		},
		{
			"title": "Волшебная девочка",
			"tags": [
				"Драма",
				"Триллер",
				"Магия"
			]
		},
		{
			"title": "Розарио + Вампир",
			"tags": [
				"Анимация",
				"Комедия",
				"Фэнтези",
				"Магия"
			]
		},
		{
			"title": "Усталая смерть",
			"tags": [
				"Драма",
				"Фэнтези",
				"Триллер",
				"Магия"
			]
		},
		{
			"title": "Ослиная шкура",
			"tags": [
				"Драма",
				"Семейный",
				"Фэнтези",
				"Магия"
			]
		},
		{
			"title": "Рики",
			"tags": [
				"Комедия",
				"Драма",
				"Фэнтези",
				"Магия"
			]
		},
		{
			"title": "CardCaptors",
			"tags": [
				"Анимация",
				"Семейный",
				"Фэнтези",
				"Магия"
			]
		},
		{
			"title": "Harry Potter and the Philosopher's Stone",
			"tags": [
				"Экшн",
				"Приключение",
				"Фэнтези",
				"Магия"
			]
		},
		{
			"title": "Les cent et une nuits de Simon Cinéma",
			"tags": [
				"Комедия",
				"История",
				"Романтика",
				"Магия"
			]
		},
		{
			"title": "Fun2shh... Dudes in the 10th Century",
			"tags": [
				"Комедия",
				"Магия"
			]
		},
		{
			"title": "Sleeping Beauty",
			"tags": [
				"Семейный",
				"Фэнтези",
				"Мюзикл",
				"Магия"
			]
		},
		{
			"title": "La belle endormie",
			"tags": [
				"Драма",
				"Магия"
			]
		},
		{
			"title": "Harry Potter and the Chamber of Secrets",
			"tags": [
				"Приключение",
				"Фэнтези",
				"Магия"
			]
		},
		{
			"title": "The Hyrule fantasy: Zeruda no densetsu",
			"tags": [
				"Экшн",
				"Приключение",
				"Фэнтези",
				"Магия"
			]
		},
		{
			"title": "Удача Логана",
			"tags": [
				"Комедия",
				"Криминал",
				"Драма",
				"Гонки"
			]
		},
		{
			"title": "Тачки 3",
			"tags": [
				"Анимация",
				"Приключение",
				"Комедия",
				"Гонки"
			]
		},
		{
			"title": "Тачки",
			"tags": [
				"Анимация",
				"Комедия",
				"Семейный",
				"Гонки"
			]
		},
		{
			"title": "Форсаж 5",
			"tags": [
				"Экшн",
				"Криминал",
				"Триллер",
				"Гонки"
			]
		},
		{
			"title": "Драйв",
			"tags": [
				"Криминал",
				"Драма",
				"Гонки"
			]
		},
		{
			"title": "Форсаж 4",
			"tags": [
				"Экшн",
				"Криминал",
				"Триллер",
				"Гонки"
			]
		},
		{
			"title": "Трон: Наследие",
			"tags": [
				"Экшн",
				"Приключение",
				"Sci-Fi",
				"Гонки"
			]
		},
		{
			"title": "История игрушек 2",
			"tags": [
				"Анимация",
				"Приключение",
				"Комедия",
				"Гонки",
				"Динозавры"
			]
		},
		{
			"title": "Need for Speed: Жажда скорости",
			"tags": [
				"Экшн",
				"Криминал",
				"Триллер",
				"Гонки"
			]
		},
		{
			"title": "Гонка",
			"tags": [
				"Экшн",
				"Биография",
				"Драма",
				"Гонки"
			]
		},
		{
			"title": "Ангелы Чарли",
			"tags": [
				"Экшн",
				"Приключение",
				"Комедия",
				"Гонки"
			]
		},
		{
			"title": "Тачки 2",
			"tags": [
				"Анимация",
				"Приключение",
				"Комедия",
				"Гонки"
			]
		},
		{
			"title": "Придурки из Хаззарда",
			"tags": [
				"Приключение",
				"Комедия",
				"Гонки"
			]
		},
		{
			"title": "Казино Рояль",
			"tags": [
				"Комедия",
				"Гонки"
			]
		},
		{
			"title": "Спиди-Гонщик",
			"tags": [
				"Экшн",
				"Приключение",
				"Комедия",
				"Гонки"
			]
		},
		{
			"title": "Дни грома",
			"tags": [
				"Экшн",
				"Драма",
				"Спорт",
				"Гонки"
			]
		},
		{
			"title": "Спасибо за вашу службу",
			"tags": [
				"Биография",
				"Драма",
				"Война",
				"Гонки"
			]
		},
		{
			"title": "Фаворит",
			"tags": [
				"Драма",
				"История",
				"Спорт",
				"Гонки"
			]
		},
		{
			"title": "Пока не сыграл в ящик",
			"tags": [
				"Приключение",
				"Комедия",
				"Драма",
				"Гонки"
			]
		},
		{
			"title": "Возвращение героя",
			"tags": [
				"Экшн",
				"Криминал",
				"Триллер",
				"Гонки"
			]
		},
		{
			"title": "Мозговой штурм",
			"tags": [
				"Sci-Fi",
				"Триллер",
				"Гонки"
			]
		},
		{
			"title": "Сумасшедшие гонки",
			"tags": [
				"Приключение",
				"Комедия",
				"Семейный",
				"Гонки"
			]
		},
		{
			"title": "Такси",
			"tags": [
				"Экшн",
				"Комедия",
				"Криминал",
				"Гонки"
			]
		},
		{
			"title": "Тёмный рыцарь: Возрождение легенды. Часть 1",
			"tags": [
				"Анимация",
				"Экшн",
				"Приключение",
				"Гонки"
			]
		},
		{
			"title": "Grand Theft Auto: San Andreas",
			"tags": [
				"Экшн",
				"Приключение",
				"Комедия",
				"Гонки"
			]
		},
		{
			"title": "Смертельные гонки 2000 года",
			"tags": [
				"Экшн",
				"Комедия",
				"Sci-Fi",
				"Гонки"
			]
		},
		{
			"title": "Малибу-экспресс",
			"tags": [
				"Комедия",
				"Криминал",
				"Мистика",
				"Гонки"
			]
		},
		{
			"title": "Кто я?",
			"tags": [
				"Экшн",
				"Приключение",
				"Комедия",
				"Гонки"
			]
		},
		{
			"title": "Смертельные гонки 2050",
			"tags": [
				"Экшн",
				"Комедия",
				"Sci-Fi",
				"Гонки"
			]
		},
		{
			"title": "Пикник у моря",
			"tags": [
				"Комедия",
				"Мюзикл",
				"Гонки"
			]
		},
		{
			"title": "Смертельная гонка 3: Ад",
			"tags": [
				"Экшн",
				"Sci-Fi",
				"Триллер",
				"Гонки"
			]
		},
		{
			"title": "Гонщик",
			"tags": [
				"Экшн",
				"Драма",
				"Спорт",
				"Гонки"
			]
		},
		{
			"title": "Ле Ман",
			"tags": [
				"Экшн",
				"Приключение",
				"Драма",
				"Гонки"
			]
		},
		{
			"title": "Белая молния",
			"tags": [
				"Экшн",
				"Драма",
				"Криминал",
				"Гонки"
			]
		},
		{
			"title": "Девчонка-сорванец",
			"tags": [
				"Комедия",
				"Гонки"
			]
		},
		{
			"title": "Такер: Человек и его мечта",
			"tags": [
				"Биография",
				"Драма",
				"Гонки"
			]
		},
		{
			"title": "Сенна",
			"tags": [
				"Документальный",
				"Биография",
				"Спорт",
				"Гонки"
			]
		},
		{
			"title": "Крылья",
			"tags": [
				"Драма",
				"Романтика",
				"Война",
				"Гонки"
			]
		},
		{
			"title": "Любой ценой",
			"tags": [
				"Драма",
				"Спорт",
				"Триллер",
				"Гонки"
			]
		},
		{
			"title": "Гран при",
			"tags": [
				"Драма",
				"Спорт",
				"Гонки"
			]
		},
		{
			"title": "Да здравствует Лас-Вегас",
			"tags": [
				"Комедия",
				"Мюзикл",
				"Гонки"
			]
		},
		{
			"title": "На трезвую голову",
			"tags": [
				"Комедия",
				"Драма",
				"Гонки"
			]
		},
		{
			"title": "Красная черта",
			"tags": [
				"Анимация",
				"Экшн",
				"Романтика",
				"Гонки"
			]
		},
		{
			"title": "Гонщик Строкер",
			"tags": [
				"Экшн",
				"Комедия",
				"Романтика",
				"Гонки"
			]
		},
		{
			"title": "Sleeping Dogs",
			"tags": [
				"Экшн",
				"Приключение",
				"Криминал",
				"Гонки"
			]
		},
		{
			"title": "Пако - боевая машина смерти",
			"tags": [
				"Экшн",
				"Sci-Fi",
				"Гонки"
			]
		},
		{
			"title": "Экстремальные гонки",
			"tags": [
				"Экшн",
				"Комедия",
				"Драма",
				"Гонки"
			]
		},
		{
			"title": "Черные тигры",
			"tags": [
				"Экшн",
				"Гонки"
			]
		},
		{
			"title": "Армия одиночки",
			"tags": [
				"Экшн",
				"Приключение",
				"Криминал",
				"Гонки"
			]
		},
		{
			"title": "Жизнь взаймы",
			"tags": [
				"Драма",
				"Романтика",
				"Гонки"
			]
		},
		{
			"title": "Мир Юрского периода 2",
			"tags": [
				"Экшн",
				"Приключение",
				"Sci-Fi",
				"Динозавры"
			]
		},
		{
			"title": "Парк юрского периода",
			"tags": [
				"Приключение",
				"Sci-Fi",
				"Триллер",
				"Динозавры"
			]
		},
		{
			"title": "Мир Юрского периода",
			"tags": [
				"Экшн",
				"Приключение",
				"Sci-Fi",
				"Динозавры"
			]
		},
		{
			"title": "Затерянный мир: Парк Юрского периода",
			"tags": [
				"Экшн",
				"Приключение",
				"Sci-Fi",
				"Динозавры"
			]
		},
		{
			"title": "Парк юрского периода III",
			"tags": [
				"Экшн",
				"Приключение",
				"Sci-Fi",
				"Динозавры"
			]
		},
		{
			"title": "Головоломка",
			"tags": [
				"Анимация",
				"Приключение",
				"Комедия",
				"Динозавры"
			]
		},
		{
			"title": "История игрушек",
			"tags": [
				"Анимация",
				"Приключение",
				"Комедия",
				"Динозавры"
			]
		},
		{
			"title": "Годзилла",
			"tags": [
				"Экшн",
				"Приключение",
				"Sci-Fi",
				"Динозавры"
			]
		},
		{
			"title": "Путешествие к центру Земли",
			"tags": [
				"Экшн",
				"Приключение",
				"Семейный",
				"Динозавры"
			]
		},
		{
			"title": "Дикие предки",
			"tags": [
				"Анимация",
				"Приключение",
				"Комедия",
				"Динозавры"
			]
		},
		{
			"title": "Трансформеры: Эпоха истребления",
			"tags": [
				"Экшн",
				"Приключение",
				"Sci-Fi",
				"Динозавры"
			]
		},
		{
			"title": "Люси",
			"tags": [
				"Экшн",
				"Sci-Fi",
				"Триллер",
				"Динозавры"
			]
		},
		{
			"title": "Кинг Конг",
			"tags": [
				"Экшн",
				"Приключение",
				"Драма",
				"Динозавры",
				"Хоррор",
				"Sci-Fi"
			]
		},
		{
			"title": "Ледниковый период",
			"tags": [
				"Анимация",
				"Приключение",
				"Комедия",
				"Динозавры"
			]
		},
		{
			"title": "Миньоны",
			"tags": [
				"Анимация",
				"Экшн",
				"Приключение",
				"Динозавры"
			]
		},
		{
			"title": "Жаркое американское лето",
			"tags": [
				"Комедия",
				"Романтика",
				"Динозавры"
			]
		},
		{
			"title": "Семейка Крудс",
			"tags": [
				"Анимация",
				"Экшн",
				"Приключение",
				"Динозавры"
			]
		},
		{
			"title": "Удивительный мир Гамбола",
			"tags": [
				"Анимация",
				"Экшн",
				"Приключение",
				"Динозавры"
			]
		},
		{
			"title": "Флинтстоуны",
			"tags": [
				"Комедия",
				"Семейный",
				"Фэнтези",
				"Динозавры",
				"Анимация"
			]
		},
		{
			"title": "Jurassic World 3",
			"tags": [
				"Экшн",
				"Приключение",
				"Sci-Fi",
				"Динозавры"
			]
		},
		{
			"title": "Лемони Сникет: 33 несчастья",
			"tags": [
				"Приключение",
				"Комедия",
				"Семейный",
				"Динозавры"
			]
		},
		{
			"title": "Хороший динозавр",
			"tags": [
				"Анимация",
				"Приключение",
				"Комедия",
				"Динозавры"
			]
		},
		{
			"title": "Динозавр",
			"tags": [
				"Анимация",
				"Приключение",
				"Семейный",
				"Динозавры"
			]
		},
		{
			"title": "Ледниковый период 3: Эра динозавров",
			"tags": [
				"Анимация",
				"Экшн",
				"Приключение",
				"Динозавры"
			]
		},
		{
			"title": "Динозавры",
			"tags": [
				"Комедия",
				"Семейный",
				"Фэнтези",
				"Динозавры"
			]
		},
		{
			"title": "Древо жизни",
			"tags": [
				"Драма",
				"Фэнтези",
				"Динозавры"
			]
		},
		{
			"title": "Терра Нова",
			"tags": [
				"Приключение",
				"Мистика",
				"Sci-Fi",
				"Динозавры"
			]
		},
		{
			"title": "10 000 лет до н.э.",
			"tags": [
				"Экшн",
				"Приключение",
				"Драма",
				"Динозавры"
			]
		},
		{
			"title": "Ледниковый период 4: Континентальный дрейф",
			"tags": [
				"Анимация",
				"Приключение",
				"Комедия",
				"Динозавры"
			]
		},
		{
			"title": "Земля до начала времён",
			"tags": [
				"Анимация",
				"Приключение",
				"Драма",
				"Динозавры"
			]
		},
		{
			"title": "Последний киногерой",
			"tags": [
				"Экшн",
				"Приключение",
				"Комедия",
				"Динозавры"
			]
		},
		{
			"title": "Супербратья Марио",
			"tags": [
				"Приключение",
				"Комедия",
				"Семейный",
				"Динозавры"
			]
		},
		{
			"title": "Портал юрского периода",
			"tags": [
				"Экшн",
				"Приключение",
				"Мистика",
				"Динозавры"
			]
		},
		{
			"title": "The Jurassic Games",
			"tags": [
				"Экшн",
				"Sci-Fi",
				"Триллер",
				"Динозавры"
			]
		},
		{
			"title": "Адаптация.",
			"tags": [
				"Комедия",
				"Драма",
				"Динозавры"
			]
		},
		{
			"title": "Флинтстоуны в Рок-Вегасе",
			"tags": [
				"Комедия",
				"Семейный",
				"Романтика",
				"Динозавры"
			]
		},
		{
			"title": "Могучие Морфы Рейнджеры Силы",
			"tags": [
				"Экшн",
				"Приключение",
				"Семейный",
				"Динозавры"
			]
		},
		{
			"title": "Земля исчезнувших",
			"tags": [
				"Приключение",
				"Семейный",
				"Фэнтези",
				"Динозавры"
			]
		},
		{
			"title": "Губка Боб в 3D",
			"tags": [
				"Анимация",
				"Приключение",
				"Комедия",
				"Динозавры"
			]
		},
		{
			"title": "Турбо пацан",
			"tags": [
				"Экшн",
				"Комедия",
				"Хоррор",
				"Динозавры"
			]
		},
		{
			"title": "Затерянный мир",
			"tags": [
				"Экшн",
				"Sci-Fi",
				"Приключение",
				"Динозавры"
			]
		},
		{
			"title": "Небесный капитан и мир будущего",
			"tags": [
				"Экшн",
				"Приключение",
				"Мистика",
				"Динозавры"
			]
		},
		{
			"title": "Фантазия",
			"tags": [
				"Анимация",
				"Семейный",
				"Фэнтези",
				"Динозавры"
			]
		}
	]`;
let tagsJson = `[
		"Драма",
		"Мистика",
		"Sci-Fi",
		"Роботы",
		"Приключение",
		"Семейный",
		"Анимация",
		"Экшн",
		"Фэнтези",
		"Комедия",
		"Триллер",
		"Хоррор",
		"Магия",
		"Криминал",
		"Мюзикл",
		"Музыка",
		"Романтика",
		"История",
		"Гонки",
		"Биография",
		"Спорт",
		"Война",
		"Документальный",
		"Динозавры"
	]`;

let arrOfTags = [];
let arrOfFilms = [];
let tags = []; //сюда добавим флаги
let films = []; //сюда добавим id
let chosenTags = []; //Доп. массив для хранения выбранных тегов
let foundFilms = []; // будет обновляться только после каждого сабмита
let filteredFilms = []; //будет обновляться только после каждого клика по тегу
let selectedFilms = []; //будет обновляться только после каждого клика по вкладке "закладки"

//DOM-переменные
const listOfFilms = document.querySelector('.js-films-list');
const listOfBookmarks = document.querySelector('.js-bookmarks-list');
const containerOfFilms = document.querySelector('.js-films');
const containerOfTags = document.querySelector('.js-tags');
const containerOfBookmarks = document.querySelector('.js-bookmarks');
const tabsContainer = document.querySelector('.js-tabs'); 
const searchForm = document.querySelector('.js-search');
const buttons = Array.from(document.querySelectorAll('.js-btn'));

//Вспомогательные переменные для кнопки "показать еще"
let counterF = 0; // счетчики уже отрендеренных фильмов
let counterB = 0; // то же для закладок
let multF = 1; //множитель для фильмов
let multB = 1; //множитель для закладок
let quantity = 15; //количество фильмов, к-е рендерятся за раз

//после этого переменной arrOfFilms будет массив с фильмами
arrOfFilms = JSON.parse(filmsJson);
//после этого в переменной arrOfTags будет массив с тегами
arrOfTags = JSON.parse(tagsJson);

tags = addState(arrOfTags, 'chosen'); //преобразуем массив с тегами, добавив в каждый элемент состояние тега
films = addId(arrOfFilms);
foundFilms = copy(films); //эта переменная будет обновляться только после каждого сабмита!
filteredFilms = foundFilms; //этот массив будем постоянно менять после каждого клика, пока в нем просто ссылка

// сразу показать все на странице: и теги, и фильмы
renderTags(tags, containerOfTags);
renderFilms(foundFilms, listOfFilms);

// события
tabsContainer.addEventListener('click', createTabs);
searchForm.addEventListener('submit', updateFilmsForSearch);
containerOfTags.addEventListener('click', updateFilmsForTag);
buttons.forEach(button => button.addEventListener('click', renderFilmsDecorator));
buttons.forEach(button => button.addEventListener('click', isdisplayMoreDecorator));
listOfFilms.addEventListener('click', toggleBookmarks);
listOfBookmarks.addEventListener('click', toggleBookmarks);

// ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ
function removeChildren(elem) {
    while (elem.lastChild) {
      elem.removeChild(elem.lastChild);
    }
}

function copy(arr) {
	let output, v, key;

	output = Array.isArray(arr) ? [] : {};

	for (key in arr) {
		v = arr[key];
		output[key] = (typeof v === 'object') ? copy(v) : v;
	}

	return output;
}

function status(response) {  
	if (response.status >= 200 && response.status < 300) {  
		return Promise.resolve(response)  
	} else {  
		return Promise.reject(new Error(response.statusText))  
	}  
}
	
function json(response) {  
	return response.json()  
}

// ВСЕ ФУНКЦИИ
//добавление id
function addId(arr) {
	for (let i = 0; i < arr.length; i++) {
		arr[i].id = i;
	};
	return arr;
}

//копирование массива строк в массив с объектами с добавлением состояния
function addState(arr, stateName) {
	let arr2 = [];
	for (let i = 0; i < arr.length; i++) {
		arr2[i] = {};
		arr2[i].tagName = arr[i];
		arr2[i][stateName] = false;
	}

	return arr2;
}

//табы на заголовки
function createTabs(event) {
    if (event.target.classList.contains('js-tab-header')) {
        const tabsHeaders = Array.from(tabsContainer.querySelectorAll('.js-tab-header'));
        const tabIndex = tabsHeaders.indexOf(event.target);
        const panels = Array.from(document.querySelectorAll('.js-tab-panel'));

		containerOfTags.style.display = 'flex';
		searchForm.style.display = 'flex';

        tabsHeaders.map(tabHeader => tabHeader.classList.remove('headers-list__item--active'));
        event.target.classList.add('headers-list__item--active');
        
        for (let i = 0; i < panels.length; i++) {
            tabIndex === i ? panels[i].style.display = 'block' : panels[i].style.display = 'none';
		}
		
		if (event.target.classList.contains('js-bookmarks-header')) {
			updateFilmsForSelect();
			containerOfTags.style.display = 'none';
			searchForm.style.display = 'none';
		}
	}	
}

//фильтрует массив тегов tags после поиска по фильмам - вернет массив тегов
function updateTags() {
	const arr = [];
	const newTags = [];

	for (let film of foundFilms) {
		for (let tagEl of arrOfTags) {
			//если в подразделе tags у массива foundFilms нашли хоть одно совпадение с каждым элементом tags....
			if (film.tags.some(item => item === tagEl) 
				//и в нашем записываемом массиве результатов его тоже еще нет...
				&& arr.indexOf(tagEl) === -1) {
					arr.push(tagEl);
			}
		}
	}
	
	//преобразовали простой массив только с тегами в массив объектов с тегами и состояниями
	for (let i = 0; i < arr.length; i++) {
		newTags[i] = {};
		newTags[i].tagName = arr[i];
		newTags[i].chosen = false;
	}

	return newTags;
}

//обновляет переменные foundFilms, tags, обнуляет счетчик counter и multiplier, рендерит теги и фильмы
function updateFilmsForSearch(event) {
	event.preventDefault();
	const btn = containerOfFilms.querySelector('.js-btn');
	
	counterF = 0;
	multF = 1;
	foundFilms = searchForName(); // то же самое ф и возвращает, норм
	filteredFilms = foundFilms; //! передача по ссылке! (чтобы работала isdisplayMore)
	tags = updateTags();

	removeChildren(listOfFilms);
	renderFilms(foundFilms, listOfFilms);	
	isdisplayMore(counterF, foundFilms, btn);
	removeChildren(containerOfTags);
	renderTags(tags, containerOfTags);	
}

//обновляет переменные filteredFilms, chosenTags, рендерит фильмы
function updateFilmsForTag(event) {
	const btn = containerOfFilms.querySelector('.js-btn');
	
	counterF = 0;
	multF = 1;

	chooseTags(event);	
	//перезапишем массив с отфильтрованными фильмами filteredFilms, а foundFilms трогать не будем
	filteredFilms = searchForTag(foundFilms, chosenTags);
	
	removeChildren(listOfFilms);
	renderFilms(filteredFilms, listOfFilms);
	isdisplayMore(counterF, filteredFilms, btn);
}

//обновляет список закладок согласно новому массиву
function updateFilmsForSelect() {
	const btn = containerOfBookmarks.querySelector('.js-btn');
	
	counterB = 0;
	multB = 1;
	selectedFilms = selectFilms();
	
	removeChildren(listOfBookmarks);
		
	renderFilms(selectedFilms, listOfBookmarks);
	isdisplayMore(counterB, selectedFilms, btn);
}

//рендерит фильмы с нужными классами и т.п. 
//каждый вызов меняет переменные счетчика и множителя
function renderFilms(arr, parentEl) {
	let counter, multiplier;
	
	//всякие проверки
	if (parentEl === listOfFilms) {
		counter = counterF;
		multiplier = multF;
	}

	if (parentEl === listOfBookmarks) {
		counter = counterB;
		multiplier = multB;
	}

	//собственно рендеринг
	while(counter < arr.length && counter < quantity * multiplier) {
		let item = document.createElement('li');
        let name = document.createElement('div');
        let bookmark = document.createElement('div');
        
		item.classList.add('films__item');
		item.dataset.id = arr[counter].id; //в каждый отрендеренный элемент добавим id
        name.classList.add('films__name');    
		bookmark.classList.add('films__bookmark', 'bookmark', 'js-bookmark');

		if (parentEl === listOfBookmarks) bookmark.classList.add('bookmark--active');

        item.appendChild(name);
        item.appendChild(bookmark);    
        name.appendChild(document.createTextNode(arr[counter].title));
		parentEl.appendChild(item);
		
		counter++;
	}

	multiplier++;

	//обновление счетчиков (противодействие замыканию)
	if (parentEl === listOfFilms) {
		counterF = counter;
		multF = multiplier;
	}

	if (parentEl === listOfBookmarks) {
		counterB = counter;
		multB = multiplier;
	}
}

//рендерит теги
function renderTags(arr, parentEl) {
    for (let i = 0; i < arr.length; i++) {
        let item = document.createElement('li');

        item.classList.add('tags__item', 'js-tag');
		item.dataset.tag = arr[i].tagName;
		item.dataset.index = i;

        item.appendChild(document.createTextNode(arr[i].tagName));
        parentEl.appendChild(item);
    }
}

//обертки для вызова по клику
function renderFilmsDecorator(event) {
	if (containerOfBookmarks.contains(event.target)) {
		renderFilms(selectedFilms, listOfBookmarks);
	}

	if (containerOfFilms.contains(event.target)) {
		renderFilms(filteredFilms, listOfFilms);
	}
}

function isdisplayMoreDecorator(event) {
	if (containerOfBookmarks.contains(event.target)) {
		isdisplayMore(counterB, selectedFilms, event.target);
	}

	if (containerOfFilms.contains(event.target)) {
		isdisplayMore(counterF, filteredFilms, event.target);
	}	
}

//ищет строку в названиях фильмов - вернет foundFilms
function searchForName() {
    let str = document.querySelector('.js-search-field').value;
	let title;

	if (str === '') return foundFilms; //чтобы лишний раз не ходить по циклу, если строка пустая

	foundFilms = [];

    for (let i = 0; i < films.length; i++) {
		title = films[i].title;        
		title = title.toLowerCase(); //если надо, то можно все к нижнему регистру
		
		if (title.indexOf(str) === -1) continue;
		
        foundFilms.push(films[i]);
	}

    return foundFilms;
}

//проходит по массиву с выбранными тегами и возвращает массив с фильмами, где есть все эти теги
function searchForTag(arr, chsnTags) {
	filteredFilms = [];

	for (let chosenTag of chsnTags) {
		filteredFilms = [];
		for (let el of arr) {
			if (el['tags'].indexOf(chosenTag) === -1) continue;
			filteredFilms.push(el);	
		}

		arr = filteredFilms;
	}

	return arr;
}

//добавляет фильм в закладки и удаляет оттуда
function toggleBookmarks(event) {
	let id = event.target.parentElement.dataset.id;

	if (!event.target.classList.contains('js-bookmark')) return;
	
	if (event.target.classList.contains('bookmark--active')) {
		event.target.classList.remove('bookmark--active');
		localStorage.removeItem(id);
	} else {
		localStorage[id] = id;
		event.target.classList.add('bookmark--active');
	}
} 

//маркирует теги после клика и меняет массив с выбранными тегами
function chooseTags(event) {
	const tg = event.target;

	if (!tg.classList.contains('js-tag')) return;

	let i = tg.dataset.index;

	tg.classList.toggle('tags__item--active');	
	tags[i].chosen === true ? tags[i].chosen = false : tags[i].chosen = true;
	chosenTags = [];

	for (let elem of tags) {
		if (elem.chosen === false) continue;

		chosenTags.push(elem.tagName);
	}
}

//создает массив с закладками
function selectFilms() {
	if (localStorage.length === 0) return [];

	let ls = [];

	for (let i = 0; i < localStorage.length; i++){
		let key = localStorage.key(i);
		let value = localStorage.getItem(key);
		ls.push(+value);
	}

	selectedFilms = [];	

	for (let film of films) {
		if (~ls.indexOf(film["id"])) {
            selectedFilms.push(film);
        }
	}

	return selectedFilms;
}

//проверяет, показывать ли кнопку "Показать еще"
function isdisplayMore(count, arr, elem) {
	count < arr.length ? elem.style.display = "block" : elem.style.display = "none";
}
})()