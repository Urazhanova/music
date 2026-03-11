const toolsData = [
    // 1. Генерация аудио
    {
        id: 'suno',
        name: 'Suno (v4.5)',
        category: 'generation',
        categoryLabel: 'Генерация аудио',
        description: 'Мультимодальный синтез полного цикла. Suno v4.5 демонстрирует значительный скачок в качестве генерации вокала и инструментальных партий. Система позволяет создавать треки длиной более 15 минут с сохранением структурной целостности. Платформа поддерживает генерацию вокала, текстов и аранжировок по текстовому запросу, а также экспорт раздельных стемов (барабаны, бас, вокал), что делает ее мощным инструментом как для любителей, так и для профессионального прототипирования.',
        features: ['Синтез полного цикла', 'Экспорт стемов', 'Длинные треки (>15 мин)'],
        model: 'Подписка / Коммерческие права пользователя (на платных тарифах)',
        url: 'https://suno.com/'
    },
    {
        id: 'udio',
        name: 'Udio (v2)',
        category: 'generation',
        categoryLabel: 'Генерация аудио',
        description: 'Высокоточное аудио и Inpainting. В отличие от аналогов, Udio v2 предлагает более глубокий контроль над жанровыми нюансами, особенно в электронных и классических направлениях. Уникальная особенность — прецизионное редактирование отдельных секций трека (Inpainting 2.0) и возможность расширения готового аудио (audio-to-audio). Это делает платформу предпочтительной для композиторов, работающих в специфических нишах.',
        features: ['Inpainting 2.0', 'Жанровый контроль', 'Расширение аудио'],
        model: 'Кредиты / Pro-подписка',
        url: 'https://www.udio.com/'
    },
    {
        id: 'gemini',
        name: 'Gemini (Lyria 3)',
        category: 'generation',
        categoryLabel: 'Генерация аудио',
        description: 'Модель Lyria 3 от Google глубоко интегрирована в экосистему Gemini. За один мультимодальный запрос (текст, фото или видео) система генерирует 30-секундный пакет: аудиодорожку с вокалом, текст песни и визуальную обложку. Экспериментальное API Lyria RealTime позволяет разработчикам в реальном времени программно изменять BPM, плотность нот и тональность. Все треки защищаются невидимым водяным знаком SynthID.',
        features: ['Lyria 3', 'RealTime API', 'SynthID', 'Мультимодальность'],
        model: 'Подписка Pro/Ultra',
        url: 'https://gemini.google.com/'
    },
    {
        id: 'mureka',
        name: 'Mureka',
        category: 'generation',
        categoryLabel: 'Генерация аудио',
        description: 'Инновационная платформа персонализированного обучения (fine-tuning). Mureka решает проблему «однообразия искусственного интеллекта», позволяя музыкантам загружать свои собственные архивы треков. На их основе ИИ обучается уникальному стилю и «почерку» аранжировщика. Это позволяет профессионалам масштабировать свое творчество, сохраняя авторскую идентичность, с возможностью редактирования по отдельным регионам.',
        features: ['Fine-tuning на данных', 'Перенос стиля', 'API-сервис'],
        model: 'Платные планы / API',
        url: 'https://www.mureka.ai/'
    },
    {
        id: 'aiva',
        name: 'AIVA',
        category: 'generation',
        categoryLabel: 'Генерация аудио',
        description: 'Система символьной композиции, специализирующаяся на написании эмоциональных саундтреков (кино, игры, медиа). В отличие от "текст-в-аудио" генераторов, AIVA создает и редактирует MIDI-данные. Платформа имеет встроенный продвинутый MIDI-редактор, что позволяет композитору точечно вмешиваться в сгенерированную партитуру и продолжать работу в привычной DAW.',
        features: ['Символьная генерация (MIDI)', 'Эмоциональные саундтреки'],
        model: 'Трехуровневая модель / Авторское право (Pro)',
        url: 'https://aiva.ai/'
    },
    {
        id: 'soundgen',
        name: 'SoundGen',
        category: 'generation',
        categoryLabel: 'Генерация аудио',
        description: 'Инструмент генерации "текст-в-аудио" с уникальной поддержкой аудио-трансфера стиля. Система позволяет не только генерировать полноценную музыку и спецэффекты по описанию, но и загрузить простую мелодию (например, напетую на диктофон), чтобы ИИ трансформировал ее в полноценную аранжировку в выбранном жанре.',
        features: ['Трансфер стиля', 'Обертка аудио', 'SFX'],
        model: 'Лицензирование по запросу',
        url: 'https://soundgen.io/'
    },
    // 2. Аранжировка & MIDI
    {
        id: 'orb',
        name: 'Orb Producer Suite 3',
        category: 'arrangement',
        categoryLabel: 'Аранжировка & MIDI',
        description: 'Генератор MIDI данных на основе паттернов для использования внутри цифровых рабочих станций (DAW). Состоит из комплекса 4 синхронизированных VST3/AU плагинов (Orb Melody, Orb Bass, Orb Arpeggio, Orb Synth). Плагины обмениваются данными друг с другом для мгновенного создания гармонически связанных слоев аранжировки, выступая как виртуальный оркестратор.',
        features: ['4 VST Плагина', 'MIDI паттерны', 'Связанная гармония'],
        model: 'VST3/AU плагины',
        url: 'https://www.orbplugins.com/orb-producer-suite/'
    },
    {
        id: 'magenta',
        name: 'Magenta Studio (Google)',
        category: 'arrangement',
        categoryLabel: 'Аранжировка & MIDI',
        description: 'Набор нейросетевых инструментов-ассистентов для трансформации существующих музыкальных идей. Модуль Dramify умеет анализировать любую мелодическую линию и автоматически подбирать ритмический рисунок ударных инструментов. Модуль Interpolate способен алгоритмически соединить две совершенно разные мелодии бесшовным логичным переходом.',
        features: ['Drumify', 'Interpolate', 'Трансформация идей'],
        model: 'Инструменты для композиторов / Open Source',
        url: 'https://magenta.tensorflow.org/studio'
    },
    {
        id: 'theorchestra',
        name: 'The Orchestra Complete 4',
        category: 'arrangement',
        categoryLabel: 'Аранжировка & MIDI',
        description: 'Оркестровая библиотека от Sonuscore с собственным Ensemble Engine. Она анализирует сыгранные композитором простые аккорды и автоматически распределяет их в реальном времени между секциями (скрипки, медные и деревянные духовые). Система применяет сложные ритмические паттерны и артикуляции, сокращая время технической подготовки классической партитуры на 60-70%.',
        features: ['Ensemble Engine', 'Авто-оркестровка', 'Экономия времени'],
        model: 'Библиотека сэмплов (Kontakt)',
        url: 'https://sonuscore.com/shop/the-orchestra-complete-4/'
    },
    {
        id: 'midiagent',
        name: 'MIDI Agent',
        category: 'arrangement',
        categoryLabel: 'Аранжировка & MIDI',
        description: 'Инновационный подход к генерации MIDI на базе больших языковых моделей (LLM, таких как ChatGPT или Claude). Существует в виде VST плагина. Создает умную гармонизацию загруженных одноголосных мелодий, выстраивая 3-4 голосные партии (например, хорал или бэк-вокал) с математически правильным академическим голосоведением.',
        features: ['LLM', 'Правильное голосоведение'],
        model: 'VST3/AU плагин прямо в DAW',
        url: '' // No public link available
    },
    {
        id: 'staccatoai',
        name: 'Staccato AI',
        category: 'arrangement',
        categoryLabel: 'Аранжировка & MIDI',
        description: 'Специализированный AI Instrument MIDI Rewrite. Позволяет загружать существующие MIDI-партии по принципу drag-and-drop и мгновенно переписывать их, меняя степень сложности, настроение или ритмический размер, не выходя из аранжировочного проекта.',
        features: ['MIDI Rewrite', 'Управление сложностью', 'Drag&Drop'],
        model: 'Инструмент для DAW',
        url: 'https://staccato.ai/'
    },
    {
        id: 'hookpad',
        name: 'HookPad Aria',
        category: 'arrangement',
        categoryLabel: 'Аранжировка & MIDI',
        description: 'Интеллектуальный помощник композитора, опирающийся не на аудиосинтез, а на колоссальную базу знаний. Aria обучена на базе данных из 50,000 ручных транскрипций поп-хитов и классических произведений. Она генерирует гармонические прогрессии и мелодии на основе строгой теории музыки.',
        features: ['50,000 транскрипций', 'Теория музыки', 'Гармония'],
        model: 'Браузерное приложение / Standalone',
        url: 'https://www.hooktheory.com/hookpad'
    },
    {
        id: 'lemonaide',
        name: 'Lemonaide',
        category: 'arrangement',
        categoryLabel: 'Аранжировка & MIDI',
        description: 'Модель, обученная совместно со всемирно известными артистами. Lemonaide работает как VST плагин, призванный преодолеть "страх чистого листа". По нажатию кнопки он генерирует миллионы так называемых "зерен" (seeds) — коротких, качественных мелодических и гармонических хуков, из которых продюсер может вырастить полноценный трек.',
        features: ['Seeds (Зерна)', 'Коллаборативное обучение'],
        model: 'VST плагин с библиотекой идей',
        url: 'https://lemonaide.ai/'
    },
    // 3. Вокальный синтез
    {
        id: 'synthv',
        name: 'Synthesizer V Studio 2 Pro',
        category: 'vocal',
        categoryLabel: 'Вокальный синтез',
        description: 'Золотой стандарт индустрии от Dreamtonics для создания гиперреалистичного вокала с нуля. В отличие от генерации по тексту, система позволяет с хирургической точностью прорисовывать кривые экспрессии, настраивать вибрато, придыхания, атаку и тембр каждой ноты. Плагин Vocoflex добавляет функцию вокального морфинга в реальном времени, превращая голос продюсера в нужный тембр ИИ модели без потери динамики исполнения.',
        features: ['Гиперреализм', 'Кривые экспрессии', 'Vocoflex морфинг'],
        model: 'Pro версия / Лицензия',
        url: 'https://dreamtonics.com/synthesizerv/'
    },
    {
        id: 'acestudio',
        name: 'ACE Studio 2.0',
        category: 'vocal',
        categoryLabel: 'Вокальный синтез',
        description: 'Масштабная студия вокального синтеза, предоставляющая доступ к более чем 140 профессиональным голосам на 8 языках. Уникальная киллер-фича — режим "Choir Mode". Он позволяет мгновенно превратить одну вокальную мелодию в массивную многоголосную хоровую партию с расщеплением по частотам, автоматизируя часы рутинной работы бэк-вокалистов.',
        features: ['140+ голосов', '8 языков', 'Choir Mode (Хор)'],
        model: 'Платформа синтеза',
        url: 'https://ace-studio.timedomain.cn/'
    },
    {
        id: 'hollyplus',
        name: 'Holly+ / GrimesAI',
        category: 'vocal',
        categoryLabel: 'Вокальный синтез',
        description: 'Концепция цифровых двойников. Музыканты Холли Херндон и Граймс (проект Elf.tech) легализовали использование своих AI-голосов другими артистами. Управление правами на гипер-голос Херндон передано децентрализованной организации (DAO). Граймс через дистрибьютора TuneCore делит роялти с пользователями (50/50), признавая свой ИИ-клон официальным соавтором.',
        features: ['Цифровые двойники', 'Децентрализованное DAO', 'Сплит роялти 50/50'],
        model: 'Децентрализованная коммерциализация',
        url: 'https://holly.plus/'
    },
    // 4. Реставрация
    {
        id: 'mal',
        name: 'MAL (Machine-Assisted Learning)',
        category: 'restoration',
        categoryLabel: 'Реставрация & Стэмы',
        description: 'Проприетарная нейросетевая технология разделения моно-сигнала, разработанная командой Питера Джексона (WingNut Films). Была изначально обучена на сотнях часов записей The Beatles. Именно MAL использовался для создания "последней песни" Now and Then, изолировав кристально чистый вокал Джона Леннона от старого некачественного кассетного аудио.',
        features: ['Анализ моно-сигнала', 'Изоляция голоса', 'WingNut Films'],
        model: 'Проприетарная технология',
        url: '' // Proprietary, no public link
    },
    {
        id: 'moises',
        name: 'Moises.ai / Lalal.ai',
        category: 'restoration',
        categoryLabel: 'Реставрация & Стэмы',
        description: 'Признанные лидеры рынка массового разделения готового аудио на стемы (Stem Separation). По состоянию на 2026 год алгоритмы поддерживают детализированное разделение микса на 10 и более компонентов: помимо ударных, баса и вокала изолировать можно акустические гитары, синтезаторы, бэк-вокалы и группы струнных с минимальными искажениями исходного звука.',
        features: ['10+ независимых стемов', 'Доступность', 'Стриминговое качество'],
        model: 'Масс-маркет SaaS / Подписка',
        url: 'https://moises.ai/'
    },
    {
        id: 'logicpro',
        name: 'Logic Pro 2',
        category: 'restoration',
        categoryLabel: 'Реставрация & Стэмы',
        description: 'Интеграция нейросетевых технологий реставрации в рабочий процесс продюсеров. Apple встроила высококачественные инструменты Stem Separation прямо в ядро профессиональной DAW. Это позволяет прямо на таймлайне разбить сведенный аудиофайл на составляющие, моментально редактируя темп, высоту тона или применяя эффекты к изолированным элементам.',
        features: ['Native DAW интеграция', 'Stem Separation на таймлайне'],
        model: 'В составе Apple Logic Pro',
        url: 'https://www.apple.com/logic-pro/'
    }
];

const ecosystemMap = document.getElementById('ecosystem-map');
const inspectorContent = document.getElementById('inspector-content');
const filterBtns = document.querySelectorAll('.filter-btn');

function renderMap(filter = 'all') {
    ecosystemMap.innerHTML = '';

    toolsData.forEach((tool, index) => {
        if (filter !== 'all' && tool.category !== filter) return;

        const card = document.createElement('div');
        card.className = 'tool-card';
        card.setAttribute('data-id', tool.id);
        card.setAttribute('data-cat', tool.category);
        card.style.animationDelay = `${index * 0.05}s`;

        card.innerHTML = `
            <div class="card-header">
                <div class="tool-name">${tool.name}</div>
            </div>
            <div class="tool-category">${tool.categoryLabel}</div>
            <div class="tool-desc" style="margin-top:12px;">${tool.description}</div>
        `;

        card.addEventListener('click', () => {
            document.querySelectorAll('.tool-card').forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            renderInspector(tool);

            // On mobile devices, open the inspector as a modal
            if (window.innerWidth <= 900) {
                const inspectorEl = document.querySelector('.inspector');
                inspectorEl.classList.add('mobile-active');

                // Use a short timeout to let the browser render the new innerHTML first,
                // otherwise it might preserve the relative scroll ratio of the previous content.
                setTimeout(() => {
                    inspectorEl.scrollTop = 0;
                }, 10);
            }
        });

        ecosystemMap.appendChild(card);
    });
}

function renderInspector(tool) {
    const colorMap = {
        generation: 'var(--accent-gen)',
        arrangement: 'var(--accent-arr)',
        vocal: 'var(--accent-voc)',
        restoration: 'var(--accent-res)',
    };

    const color = colorMap[tool.category];

    let tagsHtml = tool.features.map(f => `<span class="tag">${f}</span>`).join('');

    inspectorContent.classList.remove('placeholder');
    inspectorContent.innerHTML = `
        <div class="ins-header">
            <button class="close-modal-btn" onclick="closeMobileInspector()">×</button>
            <div class="ins-cat" style="color: ${color}">${tool.categoryLabel}</div>
            <div class="ins-name">${tool.name}</div>
        </div>
        
        <div class="ins-section">
            <div class="ins-label">Описание инструмента</div>
            <div class="ins-text">${tool.description}</div>
        </div>
        
        <div class="ins-section">
            <div class="ins-label">Ключевые технологии / Особенности</div>
            <div class="ins-tags">
                ${tagsHtml}
            </div>
        </div>
        
        <div class="ins-section">
            <div class="ins-label">Модель & Экосистема</div>
            <div class="ins-text" style="font-family: var(--font-mono); font-size: 0.8rem; color:${color};">${tool.model}</div>
        </div>
        
        ${tool.url ? `
        <div class="ins-section" style="border:none; text-align:center;">
             <a href="${tool.url}" target="_blank" style="display:inline-block; text-decoration:none; background:rgba(255,255,255,0.1); border:1px solid ${color}; color:#fff; padding:10px 20px; border-radius:4px; font-weight:600; width:100%; transition:all 0.2s;">Открыть</a>
        </div>
        ` : ''}
    `;
}

// Filters
filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        filterBtns.forEach(b => b.classList.remove('active'));
        const target = e.currentTarget;
        target.classList.add('active');

        renderMap(target.getAttribute('data-filter'));

        // Reset inspector
        inspectorContent.className = 'inspector-content placeholder';
        inspectorContent.innerHTML = '<p>Выберите инструмент на карте для просмотра деталей и характеристик.</p>';
    });
});

// Spectrum generation
const spectrum = document.getElementById('spectrum');
for (let i = 0; i < 40; i++) {
    const bar = document.createElement('div');
    bar.className = 'bar';
    // Random height variations and random delay for varied animation
    bar.style.animationDelay = `${Math.random() * 0.5}s`;
    bar.style.animationDuration = `${0.5 + Math.random() * 0.8}s`;

    // Gradient coloring for spectrum
    if (i < 10) bar.style.background = 'var(--accent-gen)';
    else if (i < 20) bar.style.background = 'var(--accent-arr)';
    else if (i < 30) bar.style.background = 'var(--accent-voc)';
    else bar.style.background = 'var(--accent-res)';

    spectrum.appendChild(bar);
}

// Initial render
renderMap();

// Timecode update simulation
const timecodeEl = document.querySelector('.timecode');
let time = 0;
setInterval(() => {
    time += 1;
    let s = Math.floor(time / 100);
    let ms = time % 100;

    let m = Math.floor(s / 60);
    s = s % 60;

    let fm = m < 10 ? '0' + m : m;
    let fs = s < 10 ? '0' + s : s;
    let fms = ms < 10 ? '0' + ms : ms;

    timecodeEl.textContent = `00:${fm}:${fs}:${fms}`;
}, 10);

// Helper to close mobile inspector
window.closeMobileInspector = function () {
    document.querySelector('.inspector').classList.remove('mobile-active');

    // Remove selection from the card map
    document.querySelectorAll('.tool-card').forEach(c => c.classList.remove('selected'));
};
