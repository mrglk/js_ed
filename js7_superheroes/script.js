const favouriteHeroes = [];
const superHeroes = [
    {
        name: "Бэтмен",
        photo: "img/batman.jpeg",
        universe: "DC Comics",
        alter: "Брюс Уэйн",
        occupation: "борец с преступностью, филантроп, миллиардер",
        friends: "Робин, Бэтгерл",
        power: "интеллект, обширные познания, знания боевых искусств, ловкость",
        about: "по популярности человек-летучая мышь может сравниться только с Суперменом. Его образ кажется очень мистическим и мрачным: черный костюм с развевающимся плащом, устрашающий Бэтмобиль, штаб-квартира в сырой пещере. Его биография настолько же темна, как и образ. В детстве у него на глазах убили родителей, и юный Брюс поклялся всеми силами защищать родной Готэм от преступности. \n\nБрюс знаменит, несмотря на пожилой возраст: первый выпуск с его участием вышел аж в 1939 году. С каждым годом популярность только крепнет. Большую роль в этом сыграли экранизации: «Темный рыцарь», сериал «Готэм» и несколько одноименных картин. Главная причина такой любви среди фанатов — мысль, что каждый может стать Бэтменом."
    },
    {
        name: "Супермен",
        photo: "img/superman.jpeg",
        universe: "DC Comics",
        alter: "Кларк Кент",
        occupation: "борец за справедливость",
        friends: "собака Крипто",
        power: "непробиваемость, суперсила, полет, самоисцеление, суперзрение и суперслух, классный костюм",
        about: "полная противоположность своему противнику Бэтмену. Если Брюс Уэйн был простым человеком и стал героем, то Супермен героем родился, но вынужден был изображать выходца из бедной канзасской семьи. Последний представитель планеты Криптон был отправлен на Землю прямо перед тем, как его родина была уничтожена. \n\nСупермен — некий хамелеон от мира комиксов. В своем первом выпуске в 1938 году он был просто человек-огромный мускул, который умел только разбивать стены и выбивать двери. Позднее к его умениям добавилась способность летать. Дальше у многочисленных воплощений Кларка, от подростка в «Тайнах Смоллвиля» до величественного «Человека из стали», разный уровень и количество суперспособностей. Неизменным остается его слабое место — уязвимость к Криптониту, радиоактивному веществу с родной планеты."
    },
    {
        name: "Железный человек",
        photo: "img/ironman.jpeg",
        universe: "Marvel Comics",
        alter: "Тони Старк",
        occupation: "гений, миллиардер, плейбой, филантроп",
        friends: "Мстители",
        power: "высокий уровень интеллекта, широкие познания науки и техники, связь со всемирной паутиной, бронекостюмы",
        about: "пожалуй, самый популярный современный супергерой. У него много общего с мрачной птицей ночи Бэтменом: оба потеряли родителей в детстве, стали борцами с преступностью без особых сверхсил, невероятно богатые. Только если Бэтменом восхищаются, то Тони Старка — обожают. То ли дело в шикарной актерской игре Роберта Дауни мл., который выбил роль у Николаса Кейджа и Тома Круза, то ли в хорошо прописанном персонаже. Прототипом для героя послужили Илон Маск и изобретатель Говард Хьюз. Железный Человек не всегда ходил в красном модном костюме: в своих первых версиях 1963 года он был скромного серого цвета. Увы, в киновоплощении бронекостюм даже не из металла — его делали из пластика и стекловолокна."
    },
    {
        name: "Человек-паук",
        photo: "img/spiderman.jpeg",
        universe: "Marvel Comics",
        alter: "Питер Паркер",
        occupation: "борец за справедливость, студент, фотограф",
        friends: "Мстители, Фантастическая четверка, Люди Икс",
        power: "сверхчеловеческие рефлексы, «паучье чутье», способность прилепляться к твердым поверхностям, производство паутины",
        about: "Человек-паук родился от потребности Marvel Comics создать героя-подростка. Другие супергерои вроде Бэтмена и Супермена — взрослые мужчины, и целевая аудитория не видела в них примеры для подражания. Пятнадцатилетний Питер Паркер дал понять всем тинейджерам Земли, что можно и злодеев уничтожить, и на красавице жениться. Для этого даже не обязательно быть суперкрасавчиком! Всего лишь нужен укус паучка:)\n\nПитер не сразу использовал свои силы во благо людей: изначально он хотел делать на них деньги, участвуя в нелегальных боях без правил. Затем его любимый дядя Бен умер от рук грабителя, и подросток поклялся, что очистит свой родной Нью-Йорк ото зла. Однако спустя время подросток понял, что одной клятвы недостаточно и что «с великой силой приходит великая ответственность».\n\nКстати, не все суперсилы у Питера появились за счет мутации: парень самостоятельно взломал технологию Тони Старка, после чего заслужил его признание."
    }
];

// document.addEventListener("DOMContentLoaded", function () {
//     getHeroes();
// })


// const getHeroes = () => {
//     // let collection = localStorage.getItem("favouriteHeroes");
//     // if (collection) {
//     //     favouriteHeroes = JSON.parse(localStorage.getItem("favouriteHeroes"));
//     // } else {
//     //     localStorage.setItem("favouriteHeroes", JSON.stringify([]));
//     // }

//     for (i = 0; i < superHeroes.length; i++) {
//         createHero(superHeroes[i]);
//     }
// }

// const createHero = (data) => {
//     const container = document.querySelector(".superSection__inner")

//     const div = document.createElement("div");
//     div.classList.add("superSection__item");

//     const header = div.appendChild(document.createElement("h2"));
//     header.classList.add("superSection__header");
//     header.innerHTML = data.name;

//     const imgWrapper = div.appendChild(document.createElement("div"));
//     imgWrapper.classList.add("superSection__imgWrapper");
//     const img = imgWrapper.appendChild(document.createElement("img"));
//     img.classList.add("superSection__img");
//     img.src = data.photo;

//     const universe = div.appendChild(document.createElement("p"));
//     universe.innerHTML =`<strong>Вселенная:</strong> ${data.universe}`;

//     const alter = div.appendChild(document.createElement("p"));
//     alter.innerHTML =`<strong>Альтер эго:</strong> ${data.alter}`;

//     const occupation = div.appendChild(document.createElement("p"));
//     occupation.innerHTML =`<strong>Род деятельности:</strong> ${data.occupation}`;

//     const friends = div.appendChild(document.createElement("p"));
//     friends.innerHTML =`<strong>Друзья:</strong> ${data.friends}`;

//     const power = div.appendChild(document.createElement("p"));
//     power .innerHTML =`<strong>Суперсилы:</strong> ${data.power }`;

//     const about = div.appendChild(document.createElement("p"));
//     about.innerHTML =`<strong>Подробнее:</strong> ${data.about}`;

//     const rating = div.appendChild(document.createElement("div"));
//     rating.classList.add("rating-area");

//     const input1 = document.createElement("input");
//     input1.setAttribute("type", "radio");
//     input1.setAttribute("name", "rating");
//     const input2 = document.createElement("input");
//     input2.setAttribute("type", "radio");
//     input2.setAttribute("name", "rating");
//     rating.appendChild(input1)
//     rating.appendChild(input2)

//     container.appendChild(div)
// }