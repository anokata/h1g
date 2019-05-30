// Список городов
cities_names = [];
cities_names_add = [];

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
        info += parts['day']['temp_avg'] + "°C";
        // morning evening night
        info += "<br/>";
    }

    // Вывод информации на страницу
    var info_div = document.getElementById("wheather");
    //info_div.innerHTML = info;
	
	$("#city_name").text(city);
	$("#time").text(timeConverter(wheather_data[city]["time"]));
	$("#temp").text(human_temp(wheather_data[city]["temp"]) + "°C");
	$("#feel").text(human_temp(wheather_data[city]["feels_like"]) + "°C");
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
	$("#icon img").attr("src", make_icon(wheather_data[city]["icon"]));
	$("#uv_index").text(wheather_data[city].forecasts[0].parts.day.uv_index);

    // TODO С текущего часа 12 часов, с учётом пересечения дня
    // Учитывать часовой пояс
    var hour = (new Date()).getHours();
    var j = 1;
    for (var i = hour; i < hour + 13; i++) {
        var h = i % 24;
        //console.log(h, j);
        $("#hour_" + j + "_time").text(h + ":00");
        $("#hour_" + j).text(human_temp(wheather_data[city].forecasts[0].hours[h].temp));
        $("#hour_" + j + "_icon").attr("src", make_icon(wheather_data[city].forecasts[0].hours[h].icon));
        j++;
    }
    for (var i = 0; i < 6; i++) {
        var date = new Date(wheather_data[city].forecasts[i].date);
        var date_str = date.getDate() + " " + date.toLocaleString('ru-ru', { month: 'long' });
        var weekday = upper_first(date.toLocaleString('ru-ru', { weekday: 'short' }));
        $("#day_" + i).text(date_str);
        $("#day_" + i + "_week").text(weekday);
        // TODO с какой части дня брать условия
        var part = wheather_data[city].forecasts[i].parts.day;
        var evn = wheather_data[city].forecasts[i].parts.evening;
        $("#day_" + i + "_img" + " img").attr("src", make_icon(part.icon));
        $("#day_" + i + "_cond").text(human_condition(part.condition));
        $("#day_" + i + "_temp").text(human_temp(part.temp_min) + "..." + human_temp(part.temp_max));
    }
	
}

function make_icon(code) {
    return "https://yastatic.net/weather/i/icons/blueye/color/svg/" + code + ".svg";
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
		//console.log(data);
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
			"icon": data['fact']['icon'],

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
  var months = ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = prec_null(a.getMinutes());
  var sec = prec_null(a.getSeconds());
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
			return val  + " м/с, " + table[w];
		return table[w];
}

function human_condition(c) {
	table = {
		"clear": "Ясно",
		"partly-cloudy": "Малооблачно",
		"cloudy": "Облачно с прояснениями",
		"overcast": "Пасмурно",
		"partly-cloudy-and-light-rain": "Небольшой дождь",
		"partly-cloudy-and-rain": "Дождь",
		"overcast-and-rain": "Сильный дождь",
		"overcast-thunderstorms-with-rain": "Сильный дождь, гроза",
		"cloudy-and-light-rain": "Небольшой дождь",
		"overcast-and-light-rain": "Небольшой дождь",
		"cloudy-and-rain": "Дождь",
		"overcast-and-wet-snow": "Дождь со снегом",
		"partly-cloudy-and-light-snow": "Небольшой снег",
		"partly-cloudy-and-snow": "Снег",
		"overcast-and-snow": "Снегопад",
		"cloudy-and-light-snow": "Небольшой снег",
		"overcast-and-light-snow": "Небольшой снег",
		"cloudy-and-snow": "Снег"
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
