document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        {
            // 1-10 питання рівень: супер Легкий

            // 1 запитання
            question: "Де тут Марс",
            answers: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgf-D6ramokeUohQQWMpesGqUMSgXNMeq_XQ&s", 
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPWHr_08XKeMtvSdNsyvLrAFmAnSKjFC6aQw&s", 
                "https://upload.wikimedia.org/wikipedia/commons/d/d4/Saturn_in_natural_colors_%28captured_by_the_Hubble_Space_Telescope%29.jpg",  
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzrSyNtzDNOuzIqbkmnGLJIBabeD8kmhiNOw&s"  
            ],
            correct: 0,
            isImageQuiz: true
        },
           // 2 запитання
        {
            question: "Якого кольору Марс?",
            answers: [
                "Чорний",
                "червоний",
                "блакитний", 
                "зелений"  
            ],
            correct: 1,
            isImageQuiz: false
        },
        // 3 запитання 
        {
            question: "Яка за рахунком планета Марс від Сонця?",
            answers: [
                "4",
                "7", 
                "2", 
                "67"  
            ],
            correct: 0,
            isImageQuiz: false
        },
        // 4 запитання 
        {
            question: "Як ще називають Марс?",
            answers: [
               "жовта планета", 
                "блакитна планета", 
                "червона планета", 
                "зелена планета"  
            ],
            correct: 2,
            isImageQuiz: false
        },
        // 5 запитання
        {
            question: "Скільки супутників має Марс?",
            answers: [
               "0", 
                "3", 
                "4", 
                "2" 
            ],
            correct: 3,
            isImageQuiz: false
        },
        // 6 запитання
        {
            question: "Що є основним компонентом атмосфери Марса?",
            answers: [
               "вуглекислий газ", 
                "азот", 
                "кисень", 
                "гелій"  
            ],
            correct: 0,
            isImageQuiz: false
        },
        // 7 запитання
        {
            question: "Як називається більший місяць Марса?",
            answers: [
               "Деймос", 
                "Фобос", 
                "Каліпсо", 
                "Тритон"  
            ],
            correct: 1,
            isImageQuiz: false
        },
        // 8 запитання
        {
            question: "На честь якого бога названий Марс?",
            answers: [
               "Бога сонця", 
                "Бога війни", 
                "Бога моря", 
                "Бога землі"  
            ],
            correct: 1,
            isImageQuiz: false
        },
        // 9 запитання
        {
            question: "Які погодні явища трапляються на Марсі?",
            answers: [
               "Урагани з дощем", 
                "Пилові бурі", 
                "Снігопади", 
                "Торнадо з водою"  
            ],
            correct: 1,
            isImageQuiz: false
        },
        // 10 запитання
        {
            question: "Чи є на Марсі магнітне поле?",
            answers: [
               "однакове із земним", 
                "ні", 
                "так", 
                "Є слабкі локальні аномалії"  
            ],
            correct: 3,
            isImageQuiz: false
        },
        // 11-20 питання рівень: Легкий

        // 11 запитання
        {
            question: "Яка середня температура на поверхні Марса?",
            answers: [
               "0°C", 
                "+20°C", 
                "-60°C", 
                "-200°C"  
            ],
            correct: 2,
            isImageQuiz: false
        },
        // 12 запитання
        {
            question: "Чи є на Марсі атмосфера?",
            answers: [
               "Так, але дуже розріджена", 
                "Ні, повністю відсутня", 
                "Так, густа як на Землі", 
                "Тільки біля полюсів"  
            ],
            correct: 0,
            isImageQuiz: false
        },
        // 13 запитання
        {
            question: "Чи можна дихати атмосферою Марса без скафандра?",
            answers: [
               "Так", 
                "Ні", 
                "Тільки в певні часи", 
                "Не можна, але можна використовувати спеціальні пристрої"  
            ],
            correct: 3,
            isImageQuiz: false
        },
        // 14 запитання
        {
            question: "До якої висоти може підніматися пил під час марсіанської бурі?",
            answers: [
               "100 м", 
                "1 км", 
                "60 км", 
                "500 км"  
            ],
            correct: 2,
            isImageQuiz: false
        },
        // 15 запитання
        {
            question: "Яка мінімальна температура на полюсах Марса взимку?",
            answers: [
               "-100°C", 
                "-120°C", 
                "-125°C", 
                "-180°C"  
            ],
            correct: 2,
            isImageQuiz: false
        },
        // 16 запитання
        {
            question: "Чи є в атмосфері Марса водяна пара?",
            answers: [
               "Так", 
                "Ні", 
                "Так але дуже мало", 
                "Не можна визначити"  
            ],
            correct: 2,
            isImageQuiz: false
        },
        // 17 запитання
        {
            question: "Як називається одна марсіанська доба?",
            answers: [
               "Сол", 
                "Марс-день", 
                "Астродень", 
                "Фобос-цикл"  
            ],
            correct: 0,
            isImageQuiz: false
        },
        // 18 запитання
        {
            question: "Чи є на Марсі сезони?",
            answers: [
               "Так", 
                "Ні", 
                "Тільки в певні часи", 
                "Не можна визначити"  
            ],
            correct: 0,
            isImageQuiz: false
        },
        // 19 запитання
        {
            question: "Яка максимальна температура на екваторі Марса влітку?",
            answers: [
               "+70°C", 
                "+35°C", 
                "0°C", 
                "-20°C"  
            ],
            correct: 1,
            isImageQuiz: false
        },
        // 20 запитання
        {
            question: "Де найчастіше утворюються хмари на Марсі?",
            answers: [
               "На екваторі", 
                "Над вулканами і в полярних районах", 
                "Лише в кратерах", 
                "Лише вночі "  
            ],
            correct: 1,
            isImageQuiz: false
        },
        // 21-30 питання рівень: Середній
        // 21 запитання
        {
            question: "Яка найвища гора (вулкан) на Марсі та в усій Сонячній системі?",
            answers: [
               "Еверест", 
                "Гора Олімп", 
                "Мауна-Кеа", 
                "Гора Аскрійська"  
            ],
            correct: 1,
            isImageQuiz: false
        },
        // 22 запитання
        {
            question: "Як називається найбільша система каньйонів на Марсі?",
            answers: [
               "Великий каньйон", 
                "Каньйон Хеллас", 
                "Рівнина Утопія",
                "Долини Марінера"
            ],
            correct: 3,
            isImageQuiz: false
        },
        // 23 запитання
        {
            question: "Якого кольору небо на Марсі під час заходу сонця?",
            answers: [
                "Блакитного", 
                "Червоного",
                "Зеленого", 
                "Чорного"  
            ],
            correct: 0,
            isImageQuiz: false
        },
           // 24 запитання
        {
            question: "Як називається марсохід NASA, який приземлився у кратері Єзеро в 2021 році?",
            answers: [
               "Curiosity", 
                "Opportunity", 
                "Perseverance",
                "Spirit"  
            ],
            correct: 2,
            isImageQuiz: false
        },
           // 25 запитання
        {
            question: "Чому Марс має характерний червоний колір?",
            answers: [
               "Через високу температуру", 
                "Через червоні рослини",
                "Через оксид заліза (іржу) у ґрунті", 
                "Це віддзеркалення Сонця"  
            ],
            correct: 2,
            isImageQuiz: false
        },
           // 26 запитання
        {
            question: "Як називався перший маленький гелікоптер, що здійснив політ на Марсі?",
            answers: [
                "Ingenuity", 
                "Eagle",
                "Flyer", 
                "Dragonfly"  
            ],
            correct: 0,
            isImageQuiz: false
        },
           // 27 запитання
        {
            question: "Скільки триває один рік на Марсі (в земних добах)?",
            answers: [
               "365", 
                "225", 
                "88",
                "687"
            ],
            correct: 3,
            isImageQuiz: false
        },
           // 28 запитання
        {
            question: "Яка гравітація на Марсі порівняно із земною?",
            answers: [
               "Така сама", 
                "У два рази більша", 
                "Приблизно 38% від земної",
                "У три рази більша", 
                "Гравітації немає"  
            ],
            correct: 2,
            isImageQuiz: false
        },
           // 29 запитання
        {
            question: "Який перший марсохід успішно працював на поверхні планети (місія Mars Pathfinder)?",
            answers: [
               "Viking 1", 
                "Sojourner", 
                "Opportunity", 
                "Zhurong"  
            ],
            correct: 1,
            isImageQuiz: false
        },
        // 31-40 питання рівень: Важкий
           // 30 запитання
        {
            question: "Яка основна небезпека для майбутніх колоністів на поверхні Марса?",
            answers: [
                "Космічна радіація", 
                "Піщані черв'яки",
                "Зависока температура", 
                "Напад інопланетян"  
            ],
            correct: 0,
            isImageQuiz: false
        },
        // 31 запитання
        {
            question: "Скільки приблизно триває політ від Землі до Марса на сучасному космічному кораблі?",
            answers: [
               "3-4 тижні", 
                "2 роки", 
                "6-9 місяців",
                "5 років"  
            ],
            correct: 2,
            isImageQuiz: false
        },
        // 32 запитання
        {
            question: "Який середній атмосферний тиск на поверхні Марса порівняно із земним?",
            answers: [
                "Близько 10% від земного", 
                "Приблизно 1% від земного",
                "Такий самий, як на Землі", 
                "У два рази вищий"  
            ],
            correct: 1,
            isImageQuiz: false
        },
        // 33 запитання
        {
            question: "Як називається знаменита область на Марсі, де на знімках 1976 року побачили «Обличчя»?",
            answers: [
               "Рівнина Еллада", 
                "Плато Тарсис", 
                "Долина Арес",
                "Кідонія"
            ],
            correct: 3,
            isImageQuiz: false
        },
        // 34 запитання
        {
            question: "Який апарат першим здійснив успішну м'яку посадку на Марс у 1976 році?",
            answers: [
                "Viking 1", 
                "Mars 3",
                "Pathfinder", 
                "Opportunity"  
            ],
            correct: 0,
            isImageQuiz: false
        },
        // 35 запитання
        {
            question: "З чого в основному складаються полярні шапки Марса взимку, крім водяного льоду?",
            answers: [
               "Рідкий азот", 
                "Сухий лід (CO2)",
                "Замерзлий метан",
                "Вулканічний попіл"
            ],
            correct: 1, 
            isImageQuiz: false
        },
        // 36 запитання
        {
            question: "У якому році апарат Mariner 4 вперше успішно пролетів повз Марс і зробив фото?",
            answers: [
                "1957 рік", 
                "1972 рік", 
                "1965 рік"
            ],
            correct: 2,
            isImageQuiz: false
        },
        // 37 запитання
        {
            question: "Як називається найбільша ударна западина (кратер) на Марсі?",
            answers: [
                "Рівнина Еллада", 
                "Кратер Гейл",
                "Кратер Гусєва", 
                "Море Дощів"  
            ],
            correct: 0,
            isImageQuiz: false
        },
        // 38 запитання
        {
            question: "Які шкідливі хімічні сполуки містяться в марсіанському ґрунті?",
            answers: [
                "Перхлорати", 
                "Нітрати",
                "Силікати", 
                "Карбонати"  
            ],
            correct: 0,
            isImageQuiz: false
        },
        // 39 запитання
        {
            question: "Що заважає рідкій воді стабільно існувати на поверхні Марса сьогодні?",
            answers: [
                "Занадто яскраве сонце", 
                "Низький атмосферний тиск",
                "Відсутність водню", 
                "Магнітне поле"  
            ],
            correct: 1,
            isImageQuiz: false
        },
       
      
        // 41-50 питання рівень: Неможливо
   // 40 запитання
        {
            question: "Оберіть перший марсіанський гелікоптер Ingenuity:",
            answers: [
               "https://novyny.live/cdn-cgi/imagedelivery/4_JwVYxosZqzJ7gIDJgTLA/4cdcd34a-f942-42cc-50ad-49de1a248300/mobile", 
                "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/PIA24729_Mars_Science_Helicopter.jpg/330px-PIA24729_Mars_Science_Helicopter.jpg", 
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKajWkUECuJjBj93vZTTrVF0RNDbfvfAFNAw&s", 
                "https://i.ytimg.com/vi/Ys9HdqZzw4Q/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB7QVnZPhrtmf1AXnJSdZtJlJ8ZFQ"  
            ],
            correct: 2,
            isImageQuiz: true
        },  
         // 41 запитання
        {
            question: "На якому фото зображено марсохід Perseverance?",
            answers: [
               "https://bi.ua/uploaded-images/products/size_650/576058_1.jpg", 
                "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Sojourner_on_Mars_PIA01122.jpg/330px-Sojourner_on_Mars_PIA01122.jpg", 
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS14nmIf73i56NFuN1FsPj1qabJfL0J4tnxVA&s", 
                "https://static.dw.com/image/56471348_605.webp"  
            ],
            correct: 3,
            isImageQuiz: true
        },
           // 42 запитання
        {
            question: "Знайдіть гору Олімп (найвищий вулкан у Сонячній системі):",
            answers: [
               "https://discover.in.ua/uploads/illustrations-4/zgaslij-olimp-najvishha-gora-sonjachnoyi-sistemi-vijavilasja-ostrovom.jpg", 
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqzIS2Ao-ne2Gx-lsj2cSVNKCyLz0jq01fQQ&s", 
                "https://ichef.bbci.co.uk/ace/ws/640/amz/worldservice/live/assets/images/2014/12/09/141209124951__79600531_curiosity-at-kimberley-sol-613_1a_ken-kremer.jpg.webp", 
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPLbh6xS3mIuEFb2WYyfe9bwTrJspjm87Nhw&s"  
            ],
            correct: 0,
            isImageQuiz: true
        },
           // 43 запитання
        {
            question: "Яке фото показує супутник Марса — Фобос?",
            answers: [
               "https://static.ukrinform.com/photos/2016_11/thumb_files/630_360_1478786716-8084.jpg", 
                "https://ms.detector.media/doc/images/news/21506/i75_ArticleImage_21506.jpg", 
                "https://upload.wikimedia.org/wikipedia/commons/c/ce/Phobos_moon_%28large%29.jpg", 
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4aV-S4GuiMH1kOdOEoYBWp8N4VQea6VDnYw&s"  
            ],
            correct: 0,
            isImageQuiz: true
        },
           // 44 запитання
        {
            question: "Оберіть зображення гігантської системи каньйонів — Долини Марінера:",
            answers: [
               "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Valles_Marineris_NASA_World_Wind_map_Mars.jpg/500px-Valles_Marineris_NASA_World_Wind_map_Mars.jpg", 
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_pVdox_abu9VTO0JNlRjHd8FGOjEQSEB7Ag&s", 
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHnMYOtqpTO6egaYM9bqhwMc7CU20kZv33hw&s", 
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDrPTcgTLda-THodeSOHpCehrYg34iLffQ1A&s"  
            ],
            correct: 1,
            isImageQuiz: true
        },
           // 45 запитання
        {
            question: "Яким є справжній колір заходу сонця на Марсі?",
            answers: [
               "https://i.redd.it/rnjzfwsrw7ig1.png", 
                "https://thealphacentauri.net/wp-content/uploads/2023/10/image-5.jpeg", 
                "https://ukr.media/static/ba/aimg/4/1/9/419576_1.jpg", 
                "https://mors.in.ua/uploads/posts/2017-01/1483822125_148376654518078536.jpg"  
            ],
            correct: 0,
            isImageQuiz: true
        },
           // 46 запитання
        {
            question: "Знайдіть знамените «Обличчя на Марсі» (область Кідонія):",
            answers: [
               "https://cikavosti.com/wp-content/uploads/2023/01/600-336-27-01-23-01.webp", 
                "https://find-way.com.ua/components/com_jshopping/files/img_products/full_20672289_original.jpg", 
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKHUxAST5IkNB9DZexYKuteeRw_JQkzPKqOw&s", 
                "https://mukachevo.net/uploads/media/images/image/da/c6/dac62fc2987e477d88af83d3438bf599zhrt1eoqm9wzqop_image.jpg"  
            ],
            correct: 1,
            isImageQuiz: true
        },
           // 47 запитання
        {
            question: "Хто з цих видатних людей народився в Україні та був конструктором ракет для вивчення Марса?",
            answers: [
               "https://i0.wp.com/www.kovrkv.org/wp-content/uploads/2023/01/%D0%9F%D0%B0%D1%80%D0%BD%D1%8F%D0%BA%D0%BE%D0%B2.jpg?resize=678%2C381&ssl=1", 
                "https://kpi.ua/files/styles/story/public/images-story/nudelman.jpg?itok=058wHr-8", 
                "https://star-hub.kpi.ua/wp-content/uploads/2022/12/Sikorsky_Igor-1.jpg", 
                "https://mamabook.com.ua/wp-content/uploads/2018/10/image.jpg"  
            ],
            correct: 0,
            isImageQuiz: true
        },
           // 48 запитання
        {
            question: "Оберіть фото марсохода Opportunity (Оппортьюніті):",
            answers: [
               "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_pVdox_abu9VTO0JNlRjHd8FGOjEQSEB7Ag&s", 
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDrPTcgTLda-THodeSOHpCehrYg34iLffQ1A&s", 
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHnMYOtqpTO6egaYM9bqhwMc7CU20kZv33hw&s", 
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKHUxAST5IkNB9DZexYKuteeRw_JQkzPKqOw&s"  
            ],
            correct: 1,
            isImageQuiz: true
        },
           // 49 запитання
        {
            question: "Оберіть фото полярної шапки Марса:",
            answers: [
               "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEcuhZ5phLXrQEls9K4w3Y3ClJiL-FT9Srhg&s", 
                "https://upload.wikimedia.org/wikipedia/commons/c/cb/South_Polar_Cap_of_Mars_during_Martian_South_summer_2000.jpg", 
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTGmMR-seyYDjt9eF-fuIGfrSYzlsarwbqwQ&s", 
                "https://cdn1.komiz.io/38488457/share/data/p/shapka-beanie-3-0-polarheat-qs-oliva-copy91362-4716-2x2400x2400x0x0x0.png"  
            ],
            correct: 1,
            isImageQuiz: true
        },
           // 50 запитання
        {
            question: "Яке зображення правильно показує масштаб Марса відносно Землі?",
            answers: [
                "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Map_of_Mars.png/960px-Map_of_Mars.png", 
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfXMFLv7blBxihu3artqBwCt4KVeKwrw2_mw&s", 
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mars_Earth_Comparison.png/500px-Mars_Earth_Comparison.png", 
                    "https://fc.vseosvita.ua/000jlu-4ee2/00f.png"  
            ],
            correct: 4,
            isImageQuiz: true
        },
           
    ];
   // це всі змінні які потрібні
    const startScreen = document.querySelector('#start-screen');
    const quizScreen = document.querySelector('#quiz-screen');
    const resultScreen = document.querySelector('#result-screen');
    const startBtn = document.querySelector('#start-btn');
    const restartBtn = document.querySelector('#restart-btn');
    const resultText = document.querySelector('.result-text');
    const questionText = document.querySelector('#question-text');
    const answersContainer = document.querySelector('#answers-container');
    const timerDisplay = document.querySelector('#timer');
    const scoreL = document.querySelector('#score-display');
    const finalScoreDisplay = document.querySelector('#final-score');

    let questionIndex = 0;
    let score = 0;
    let timer = 15;
    let interval;
 // щоб показувало питання та варіанти відповідей
    function showQuestion(question) {
        clearInterval(interval);
        startTimer();

        answersContainer.innerHTML = '';
        questionText.innerText = question.question;

        question.answers.forEach((answer, i) => {
            const button = document.createElement('button');
            button.classList.add('answer-btn');

            if (question.isImageQuiz) {
                const img = document.createElement('img');
                img.src = answer;
                img.alt = "Варіант відповіді";
                img.referrerPolicy = "no-referrer"; 
                img.loading = "eager"; 
                button.appendChild(img);
                button.classList.add('image-option');
            } else {
                button.innerText = answer;
            }

            button.addEventListener('click', () => checkAnswer(button, i));
            answersContainer.appendChild(button);
        });
    }
    // перевірка відповіді
    function checkAnswer(button, i) {
        clearInterval(interval);
        const correct = questions[questionIndex].correct;
        
        if (i === correct) {
            score++;
            button.classList.add('correct');
        } else {
            button.classList.add('wrong');
        }

        document.querySelectorAll('.answer-btn').forEach(btn => btn.disabled = true);
        setTimeout(nextQuestion, 1000);
    }
   // щоб показало наступне питання
    function nextQuestion() {
        questionIndex++;
        if (questionIndex < questions.length) {
            showQuestion(questions[questionIndex]);
        } else {
            showResult();
        }
    }
     // щоб показати результат
    function showResult() {
        quizScreen.classList.add('hide');
        resultScreen.classList.remove('hide');
        const accuracy = Math.round((score / questions.length) * 100);
        resultText.innerText = `Твій результат: ${accuracy}%`;
        finalScoreDisplay.innerText = score;
    }
  // щоб запустити таймер
    function startTimer() {
        timer = 15;
        timerDisplay.innerText = `Залишилося часу: ${timer}`;
        scoreL.innerText = `Правильних відповідей: ${score}`;
        interval = setInterval(() => {
            timer--;
            timerDisplay.innerText = `Залишилося часу: ${timer}`;
            if (timer <= 0) {
                clearInterval(interval);
                nextQuestion();
            }
        }, 1000);
    }
      // щоб коли починається гра з'являвся екран вікторини
    function startGame() {
        startScreen.classList.add('hide');
        resultScreen.classList.add('hide');
        quizScreen.classList.remove('hide');
        questionIndex = 0;
        score = 0;
        showQuestion(questions[questionIndex]);
    }

    startBtn.addEventListener('click', startGame);
    restartBtn.addEventListener('click', startGame);
})
// це щоб створювати зірки які падають
function createDollar() {
    const container = document.getElementById('money-container');
    const dollar = document.createElement('div');
    
    dollar.innerText = '🌟'; 
    dollar.classList.add('dollar');
    
   
    dollar.style.left = Math.random() * 100 + 'vw';
    
    
    const duration = Math.random() * 4 + 3;
    dollar.style.animationDuration = duration + 's';
    
    
    dollar.style.fontSize = Math.random() * 20 + 20 + 'px';

    container.appendChild(dollar);

    
    setTimeout(() => {
        dollar.remove();
    }, duration * 1000);
}


setInterval(createDollar, 300);
