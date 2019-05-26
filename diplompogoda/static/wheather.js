// Список городов
cities_names = ["Азов", "Александров", "Алексин", "Альметьевск", "Анапа", "Ангарск", "Анжеро-Судженск", "Апатиты", "Арзамас", "Армавир", "Арсеньев", "Артем", "Архангельск", "Асбест", "Астрахань", "Ачинск", "Балаково", "Балахна", "Балашиха", "Балашов", "Барнаул", "Батайск", "Белгород", "Белебей", "Белово", "Белогорск (Амурская область)", "Белорецк", "Белореченск", "Бердск", "Березники", "Березовский (Свердловская область)", "Бийск", "Биробиджан", "Благовещенск (Амурская область)", "Бор", "Борисоглебск", "Боровичи", "Братск", "Брянск", "Бугульма", "Буденновск", "Бузулук", "Буйнакск", "Великие Луки", "Великий Новгород", "Верхняя Пышма", "Видное", "Владивосток", "Владикавказ", "Владимир", "Волгоград", "Волгодонск", "Волжск", "Волжский", "Вологда", "Вольск", "Воркута", "Воронеж", "Воскресенск", "Воткинск", "Всеволожск", "Выборг", "Выкса", "Вязьма", "Гатчина", "Геленджик", "Георгиевск", "Глазов", "Горно-Алтайск", "Грозный", "Губкин", "Гудермес", "Гуково", "Гусь-Хрустальный", "Дербент", "Дзержинск", "Димитровград", "Дмитров", "Долгопрудный", "Домодедово", "Донской", "Дубна", "Евпатория", "Егорьевск", "Ейск", "Екатеринбург", "Елабуга", "Елец", "Ессентуки", "Железногорск (Красноярский край)", "Железногорск (Курская область)", "Жигулевск", "Жуковский", "Заречный", "Зеленогорск", "Зеленодольск", "Златоуст", "Иваново", "Ивантеевка", "Ижевск", "Избербаш", "Иркутск", "Искитим", "Ишим", "Ишимбай", "Йошкар-Ола", "Казань", "Калининград", "Калуга", "Каменск-Уральский", "Каменск-Шахтинский", "Камышин", "Канск", "Каспийск", "Кемерово", "Керчь", "Кинешма", "Кириши", "Киров (Кировская область)", "Кирово-Чепецк", "Киселевск", "Кисловодск", "Клин", "Клинцы", "Ковров", "Когалым", "Коломна", "Комсомольск-на-Амуре", "Копейск", "Королев", "Кострома", "Котлас", "Красногорск", "Краснодар", "Краснокаменск", "Краснокамск", "Краснотурьинск", "Красноярск", "Кропоткин", "Крымск", "Кстово", "Кузнецк", "Кумертау", "Кунгур", "Курган", "Курск", "Кызыл", "Лабинск", "Лениногорск", "Ленинск-Кузнецкий", "Лесосибирск", "Липецк", "Лиски", "Лобня", "Лысьва", "Лыткарино", "Люберцы", "Магадан", "Магнитогорск", "Майкоп", "Махачкала", "Междуреченск", "Мелеуз", "Миасс", "Минеральные Воды", "Минусинск", "Михайловка", "Михайловск (Ставропольский край)", "Мичуринск", "Москва", "Мурманск", "Муром", "Мытищи", "Набережные Челны", "Назарово", "Назрань", "Нальчик", "Наро-Фоминск", "Находка", "Невинномысск", "Нерюнгри", "Нефтекамск", "Нефтеюганск", "Нижневартовск", "Нижнекамск", "Нижний Новгород", "Нижний Тагил", "Новоалтайск", "Новокузнецк", "Новокуйбышевск", "Новомосковск", "Новороссийск", "Новосибирск", "Новотроицк", "Новоуральск", "Новочебоксарск", "Новочеркасск", "Новошахтинск", "Новый Уренгой", "Ногинск", "Норильск", "Ноябрьск", "Нягань", "Обнинск", "Одинцово", "Озерск (Челябинская область)", "Октябрьский", "Омск", "Орел", "Оренбург", "Орехово-Зуево", "Орск", "Павлово", "Павловский Посад", "Пенза", "Первоуральск", "Пермь", "Петрозаводск", "Петропавловск-Камчатский", "Подольск", "Полевской", "Прокопьевск", "Прохладный", "Псков", "Пушкино", "Пятигорск", "Раменское", "Ревда", "Реутов", "Ржев", "Рославль", "Россошь", "Ростов-на-Дону", "Рубцовск", "Рыбинск", "Рязань", "Салават", "Сальск", "Самара", "Санкт-Петербург", "Саранск", "Сарапул", "Саратов", "Саров", "Свободный", "Севастополь", "Северодвинск", "Северск", "Сергиев Посад", "Серов", "Серпухов", "Сертолово", "Сибай", "Симферополь", "Славянск-на-Кубани", "Смоленск", "Соликамск", "Солнечногорск", "Сосновый Бор", "Сочи", "Ставрополь", "Старый Оскол", "Стерлитамак", "Ступино", "Сургут", "Сызрань", "Сыктывкар", "Таганрог", "Тамбов", "Тверь", "Тимашевск", "Тихвин", "Тихорецк", "Тобольск", "Тольятти", "Томск", "Троицк", "Туапсе", "Туймазы", "Тула", "Тюмень", "Узловая", "Улан-Удэ", "Ульяновск", "Урус-Мартан", "Усолье-Сибирское", "Уссурийск", "Усть-Илимск", "Уфа", "Ухта", "Феодосия", "Фрязино", "Хабаровск", "Ханты-Мансийск", "Хасавюрт", "Химки", "Чайковский", "Чапаевск", "Чебоксары", "Челябинск", "Черемхово", "Череповец", "Черкесск", "Черногорск", "Чехов", "Чистополь", "Чита", "Шадринск", "Шали", "Шахты", "Шуя", "Щекино", "Щелково", "Электросталь", "Элиста", "Энгельс", "Южно-Сахалинск", "Юрга", "Якутск", "Ялта", "Ярославль", 
"Нью-Йорк", "Дели", "Tokyo", "Апиа", "Веллингтон", "Канберра", "Маджуро", "Нгерулмуд", "Нукуалофа", "Паликир", "Порт", "Порт", "Сува", "Фунафути", "Хониара", "Южная", "Асунсьон", "Бастер", "Бельмопан", "Богота", "Бразилиа", "Бриджтаун", "Буэнос", "Вашингтон", "Гавана", "Гватемала", "Джорджтаун", "Каракас", "Кастри", "Кингстаун", "Кингстон", "Кито", "Лима", "Манагуа", "Мехико", "Монтевидео", "Нассау", "Оттава", "Панама", "Парамарибо", "Порт", "Порт", "Розо", "Сан", "Сан", "Санто", "Сантьяго", "Сент", "Сент", "Сукре", "Тегусигальпа", "Абуджа", "Аддис", "Аккра", "Алжир", "Антананариву", "Асмэра", "Бамако", "Банги", "Банжул", "Бисау", "Браззавиль", "Виктория", "Виндхук", "Габороне", "Гитега", "Дакар", "Джибути", "Джуба", "Додома", "Каир", "Кампала", "Кигали", "Киншаса", "Конакри", "Либревиль", "Лилонгве", "Ломе", "Луанда", "Лусака", "Малабо", "Мапуту", "Масеру", "Мбабане", "Могадишо", "Монровия", "Морони", "Найроби", "Нджамена", "Ниамей", "Нуакшот", "Порт", "Порто", "Прая", "Претория", "Рабат", "Сан", "Триполи", "Тунис", "Уагадугу", "Фритаун", "Хараре", "Хартум", "Ямусукро", "Яунде", "Абу", "Амман", "Анкара", "Ашхабад", "Багдад", "Баку", "Бангкок", "Бандар", "Бейрут", "Бишкек", "Вьентьян", "Дакка", "Дамаск", "Дели", "Джакарта", "Дили", "Доха", "Душанбе", "Ереван", "Иерусалим", "Исламабад", "Кабул", "Катманду", "Куала", "Мале", "Манама", "Манила", "Маскат", "Нейпьидо", "Никосия", "Нур", "Пекин", "Пномпень", "Пхеньян", "Сана", "Сеул", "Сингапур", "Ташкент", "Тбилиси", "Тегеран", "Токио", "Тхимпху", "Улан", "Ханой", "Шри", "Эль", "Эр", "Амстердам", "Андорра", "Афины", "Белград", "Берлин", "Берн", "Братислава", "Брюссель", "Будапешт", "Бухарест", "Вадуц", "Валлетта", "Варшава", "Ватикан", "Вена", "Вильнюс", "Дублин", "Загреб", "Киев", "Кишинёв", "Копенгаген", "Лиссабон", "Лондон", "Любляна", "Люксембург", "Мадрид", "Минск", "Монако", "Москва", "Осло", "Париж", "Подгорица", "Прага", "Рейкьявик", "Рига", "Рим", "Сан", "Сараево", "Скопье", "София", "Стокгольм", "Таллин", "Тирана", "Хельсинки", 
"Ватикан", "Сан-Марино", "Вадуц", "Лобамба", "Люксембург", "Паликир", "Маджуро", "Фунафути", "Мелекеок", "Бир-Лелу", "Монако", "Тарава", "Морони", "Андорра-ла-Велья", "Порт-оф-Спейн", "Кигали", "Мбабане", "Джуба", "Гаага", "Любляна", "Братислава", "Доха", "Подгорица", "Шри-Джаяварденепура-Котте", "Багио", "Додома", "Берн", "Эль-Аюн", "Приштина", "Розо", "Джибути", "Путраджая", "Киото", "Банжул", "Скопье", "Бриджтаун", "Порто-Ново", "Бужумбура", "Кингстаун", "Кастри", "Бастер", "Порт-Луи", "Сент-Джорджес", "Манама", "Сент-Джонс", "Монтевидео", "Ломе", "Тунис", "Абу-Даби", "Ашхабад", "Лусака", "Хараре", "Дили", "Порт-Вила", "Тегусигальпа", "Джорджтаун", "Рейкьявик", "Порт-о-Пренс", "Кампала", "Парамарибо", "Ниамей", "Душанбе", "Асунсьон", "Манагуа", "Фритаун", "Исламабад", "Катманду", "Блумфонтейн", "Претория", "Порт-Морсби", "Хониара", "Панама", "Рабат", "Кишинёв", "Мапуту", "Могадишо", "Маскат", "Коломбо", "Улан-Батор", "Виндхук", "Абуджа", "Бисау", "Амман", "Вильнюс", "Рига", "Бишкек", "Масеру", "Антананариву", "Кито", "Сан-Хосе", "Сан-Сальвадор", "Кингстон", "Нджамена", "Малабо", "Асмэра", "Загреб", "Таллин", "Лилонгве", "Гватемала", "Либревиль", "Сува", "Вальпараисо", "Нуакшот", "Бамако", "Бейрут", "Тбилиси", "Астана", "Вьентьян", "Браззавиль", "Конакри", "Ямусукро", "Оттава", "Белград", "Бандар-Сери-Бегаван", "Сукре", "Бельмопан", "Банги", "Яунде", "Тирана", "Ереван", "Баку", "Пномпень", "Ла-Пас", "Котону", "София", "Минск", "Тхимпху", "Габороне", "Канберра", "Уагадугу", "Сараево", "Нейпьидо", "Нукуалофа", "Харгейса", "Виктория", "Сан-Томе", "Апиа", "Валлетта", "Мале", "Иерусалим", "Прая", "Нассау", "Никосия", "Веллингтон", "Ханой", "Анкара", "Будапешт", "Сана", "Бухарест", "Дамаск", "Лиссабон", "Хартум", "Осло", "Варшава", "Пхеньян", "Дар-эс-Салам", "Дублин", "Монровия", "Куала-Лумпур", "Гавана", "Прага", "Эль-Кувейт", "Санто-Доминго", "Аккра", "Триполи", "Тель-Авив", "Хельсинки", "Копенгаген", "Абиджан", "Бразилиа", "Брюссель", "Дакка", "Луанда", "Алжир", "Янгон", "Сан-Франциско", "Денвер", "Хьюстон", "Майами", "Атланта", "Чикаго", "Каракас", "Киев", "Дубай", "Ташкент", "Мадрид", "Женева", "Стокгольм", "Бангкок", "Лима", "Дакар", "Йоханнесбург", "Амстердам", "Касабланка", "Сеул", "Манила", "Монтеррей", "Берлин", "Урумчи", "Чэнду", "Осака", "Киншаса", "Нью-Дели", "Бангалор", "Афины", "Багдад", "Аддис-Абеба", "Тегеран", "Ванкувер", "Торонто", "Буэнос-Айрес", "Кабул", "Вена", "Мельбурн", "Тайбэй", "Окленд", "Лос-Анджелес", "Вашингтон", "Нью-Йорк", "Лондон", "Стамбул", "Эр-Рияд", "Кейптаун", "Москва", "Мехико", "Лагос", "Рим", "Пекин", "Найроби", "Джакарта", "Богота", "Каир", "Шанхай", "Токио", "Мумбаи", "Париж", "Сантьяго", "Калькутта", "Рио-де-Жанейро", "Сан-Паулу", "Сидней", "Сингапур", "Гонконг" ]; 

// Установка обработчика события готовности веб-страницы
//document.addEventListener("DOMContentLoaded", ready);

// Подпрограмма отображения погодных данных 
function view(wheather_data) {
    console.log(wheather_data);
    // Текст с информацией
    var info = "";
    city = wheather_data["city"] || Object.keys(wheather_data)[0];

    info += "Прогноз ";
    info += "<br/>";

    //for (var i=1; i < wheather_data[city]["forecasts"].length-1; i++) {
    for (var i=1; i < 4; i++) { // на 3 дня
        cast = wheather_data[city]["forecasts"][i];
        parts = cast['parts'];
        info += parts['day']['temp_avg'] + "°";
        // morning evening night
        info += "<br/>";
    }

    // Вывод информации на страницу
    var info_div = document.getElementById("wheather");
    info_div.innerHTML = info;
	
	$("#city_name").text(city);
	$("#time").text(timeConverter(wheather_data[city]["time"]));
	$("#temp").text(human_temp(wheather_data[city]["temp"]) + "°");
	$("#feel").text(human_temp(wheather_data[city]["feels_like"]) + "°");
	$("#wind").text(human_wind(wheather_data[city]["wind_dir"], wheather_data[city]["wind_speed"]));
	$("#pressure").text(wheather_data[city]["pressure_mm"] + " мм рт. ст.");
	$("#condition").text(human_condition(wheather_data[city]["condition"]));
	$("#humidity").text(wheather_data[city]["humidity"] + "%")
    if (wheather_data[city]["temp_water"]) {
		$("#temp_water_tr").css("display", "table-row");
		$("#temp_water").text(human_temp(wheather_data[city]["temp_water"]) + "°");
	} else {
		$("#temp_water_tr").css("display", "none");
	}
	if (wheather_data[city]["forecasts"][0]["sunrise"]) {
		$("#rise").text(wheather_data[city]["forecasts"][0]["sunrise"]);
	}
	if (wheather_data[city]["forecasts"][0]["sunset"]) {
		$("#sunset").text(wheather_data[city]["forecasts"][0]["sunset"]);
		$("#day_long").text(daylong(wheather_data[city]["forecasts"][0]["sunrise"], wheather_data[city]["forecasts"][0]["sunset"]));
	}

	$("#moon").text(human_moon(wheather_data[city]["forecasts"][0]["moon_text"]));
	
}


// Подпрограмма определения места работы сервера (тестовый или продуктивный)
function where_am_i() {
    if (location.host == "ksilenomen.pythonanywhere.com") return 1;
    if (location.host == "127.0.0.1:5000") return 0;
    return 0;
}

// Подпрограмма отправки API запроса Яндекс.Погоды и обработки результата
function send(wheather_data, city, lat, lon, f) {
    var query = '';
    // Определение базового URL сервера (тестовый или продуктивный)
    if (where_am_i()) {
        query = 'http://ksilenomen.pythonanywhere.com/pogoda/'
    } else {
        query = 'http://127.0.0.1:5000/pogoda/'
    }
    // Формирование параметров запроса
    //query += lat;
    //query += "/" + lon;
    // Создание объекта для AJAX запроса
    var xhr = new XMLHttpRequest();
    // Конфигурация объекта запроса
    var params = "lat=" + lat + "&lon=" + lon;
    xhr.open('POST', query, false);
    //xhr.open('GET', query, false);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    
    // Установка функции обработки результата запроса
    xhr.onload = function() {
        //console.log(this.responseText);
        // Парсинг ответа в JSON формате
        data = JSON.parse(this.responseText);
		console.log(data);
        // Формирование результирующих данных на основе ответа
        wheather_data[city] = {
			"time": data['fact']['obs_time'],
			"wind_dir": data['fact']['wind_dir'],
            "temp": data['fact']['temp'],
            "condition": data['fact']['condition'],
            "humidity": data['fact']['humidity'],
            "info": data['info']['url'],
            "feels_like": data['fact']['feels_like'],
            "temp_water": data['fact']['temp_water'],
            "wind_speed": data['fact']['wind_speed'],
            "pressure_mm": data['fact']['pressure_mm'],
            "season": data['fact']['season'],
            "forecasts": data['forecasts'],

        };
        // Вызов функции обработки результата
        if (f) f(wheather_data);
        //console.log(wheather_data);
        return data;
    }
  
    // Выполение AJAX запроса к Яндекс.Погоде
    xhr.send(params); 
}

function upper_first(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
  return time;
}

function human_temp(t) {
	if (t > 0) { t = "+" + t; }
	return t;	
}

function human_wind(w, val) {
	table =  {
		"nw": "СЗ",
		"n":  "С",
		"ne": "СВ",
		"e":  "В",
		"sw": "ЮЗ",
		"s":  "Ю",
		"se": "ЮВ",
		"w":  "З",
		"с":  "штиль"
		};
		if (w != "c")
			return val  + " м/с " + table[w];
		return table[w];
}

function human_condition(c) {
	table = {
		"clear": "ясно",
		"partly-cloudy": "малооблачно",
		"cloudy": "облачно с прояснениями",
		"overcast": "пасмурно",
		"partly-cloudy-and-light-rain": "небольшой дождь",
		"partly-cloudy-and-rain": "дождь",
		"overcast-and-rain": "сильный дождь",
		"overcast-thunderstorms-with-rain": "сильный дождь, гроза",
		"cloudy-and-light-rain": "небольшой дождь",
		"overcast-and-light-rain": "небольшой дождь",
		"cloudy-and-rain": "дождь",
		"overcast-and-wet-snow": "дождь со снегом",
		"partly-cloudy-and-light-snow": "небольшой снег",
		"partly-cloudy-and-snow": "снег",
		"overcast-and-snow": "снегопад",
		"cloudy-and-light-snow": "небольшой снег",
		"overcast-and-light-snow": "небольшой снег",
		"cloudy-and-snow": "снег"
		};
		return table[c];
}

function prec_null(n) {
	if (n < 10) {
		return "0" + n;
	}
	else return String(n);
}

function daylong(d1, d2) {
	var d1_m = Number(d1.split(":")[0]) * 60  + Number(d1.split(":")[1]);
	var d2_m = Number(d2.split(":")[0]) * 60  + Number(d2.split(":")[1]);
	if (d2_m > d1_m) {
		var diff = d2_m - d1_m;
	} else {
		var diff = 24*60 - d2_m + d1_m;
	}
	diff = ~~(diff / 60) + ":" + prec_null(diff - ~~(diff / 60)*60);
	return diff;
}

function human_moon(m) {
	moon_phase = {
		"full-moon": "полнолуние",
		"decreasing-moon": "убывающая Луна",
		"last-quarter": "последняя четверть",
		"new-moon": "новолуние",
		"growing-moon": "растущая Луна",
		"first-quarter": "первая четверть",    
	};
	return moon_phase[m];
}
