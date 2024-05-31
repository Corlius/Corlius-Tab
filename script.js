const wallpapers = [
    "Wallpapers/DarkGlassDimond.jpg",
    "Wallpapers/DarkGlassRectangles.jpg",
    "Wallpapers/DarkGlassRectanglesGray.jpg",
    "Wallpapers/DarkGlassRectanglesPurple.jpg",
    "Wallpapers/DarkGlassRound.jpg",
    "Wallpapers/DarkGlassRoundPurple.jpg",
    "Wallpapers/DarkGlassRounded.jpg",
    "Wallpapers/DarkMetalBand.jpg",
    "Wallpapers/DarkMetalRectangles.jpg",
    "Wallpapers/DarkMetalStack.jpg",
    "Wallpapers/DarkRayBall.jpg",
    "Wallpapers/DarkWaves.jpg",
    "Wallpapers/DarkWindowsPantone.jpg",
    "Wallpapers/DrakCirclePurple.jpg",
    "Wallpapers/LightGlass.jpg",
    "Wallpapers/LightGlassCube.jpg",
    "Wallpapers/LightGlassOcean.jpg",
    "Wallpapers/LightGlassPaved.jpg",
    "Wallpapers/LightGlassPurple.jpg",
    "Wallpapers/LightGlassPurpleBands.jpg",
    "Wallpapers/LightGlassRectanglesPurple.jpg",
    "Wallpapers/LightMetalBand.jpg",
    "Wallpapers/LightMetalRectangles.jpg",
    "Wallpapers/LightMetalStack.jpg",
    "Wallpapers/LightRoundStackGold.jpg",
    "Wallpapers/LightRoundStackRed.jpg",
    "Wallpapers/LightWaves.jpg",
    "Wallpapers/LightWindowsPantone.jpg",
];

const searchEngines = [
    {
        name: 'Google',
        url: 'https://www.google.com/search',
        icon: 'google.png',
        queryParam: 'q'
    },
    {
        name: 'Bing',
        url: 'https://www.bing.com/search',
        icon: 'bing.png',
        queryParam: 'q'
    },
    {
        name: 'Baidu',
        url: 'https://www.baidu.com/s',
        icon: 'baidu.png',
        queryParam: 'wd'
    }
];

const defaultLightWallpaper = 'Wallpapers/LightGlass.jpg';
const defaultDarkWallpaper = 'Wallpapers/DarkGlassRound.jpg';
const defaultSearchEngine = 'Google';

document.addEventListener('DOMContentLoaded', () => {
    const selectedSearchEngine = localStorage.getItem('searchEngine') || defaultSearchEngine;
    const lightWallpaper = localStorage.getItem('lightWallpaper') || defaultLightWallpaper;
    const darkWallpaper = localStorage.getItem('darkWallpaper') || defaultDarkWallpaper;

    document.documentElement.style.setProperty('--light-wallpaper', `url(${lightWallpaper})`);
    document.documentElement.style.setProperty('--dark-wallpaper', `url(${darkWallpaper})`);

    updateTime();
    setInterval(updateTime, 10);

    const searchButton = document.querySelector('.search-button');

    searchButton.addEventListener('auxclick', (event) => {
        if (event.button === 1) { // Middle button click
            event.preventDefault();
            const searchInput = document.querySelector('.search-box input[type="text"]');
            const query = searchInput.value;
            const selectedEngine = localStorage.getItem('searchEngine') || defaultSearchEngine;
            const selectedEngineData = searchEngines.find(engine => engine.name === selectedEngine);
            const searchURL = `${selectedEngineData.url}?${selectedEngineData.queryParam}=${encodeURIComponent(query)}`;
            window.open(searchURL, '_blank');
        }
    });

    const searchInput = document.querySelector('.search-box input[type="text"]');
    const searchBox = document.querySelector('.search-box');
    searchInput.focus();
    document.onkeydown = function(e) {
        const focusElement = document.activeElement;
        if (e.key === '/' && focusElement !== searchInput) {
            e.preventDefault();
            searchInput.focus();
        }
    };

    searchInput.addEventListener('focus', () => {
        searchBox.classList.add('active');
    });

    searchInput.addEventListener('blur', () => {
        searchBox.classList.remove('active');
    });

    searchBox.classList.add('active');

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && searchBox.classList.contains('active')) {
            searchBox.classList.remove('active');
            searchInput.blur();
        }
    });

    const tray = document.createElement('div');
    tray.className = 'tray';

    const trayIcons = document.createElement('div');
    trayIcons.className = 'tray-icons';

    const trayIconsItem = [
        { src: 'LinkiCons/ChatGPT.png', alt: 'ChatGPT', url: 'https://chatgpt.com/' },
        { src: 'LinkiCons/AIStudio.png', alt: 'AIStudio', url: 'https://aistudio.google.com/app/prompts/1pJD5v--kDEq-gPjlqngb2ByzIcvpX7__' },
        { src: 'LinkiCons/GitHub.png', alt: 'GitHub', url: 'https://github.com/' },
        { src: 'LinkiCons/YouTube.png', alt: 'YouTube', url: 'https://www.youtube.com/' },
        { src: 'LinkiCons/Bilibili.png', alt: 'Bilibili', url: 'https://www.bilibili.com/' },
        { src: 'LinkiCons/Disney+.png', alt: 'Disney+', url: 'https://www.disneyplus.com/' },
        { src: 'LinkiCons/Appstorrent.png', alt: 'Appstorrent', url: 'https://appstorrent.ru/programs/' }
    ];

    trayIconsItem.forEach(config => {
        const icon = document.createElement('img');
        icon.className = 'tray-icon';
        icon.src = config.src;
        icon.alt = config.alt;
        icon.onclick = () => window.location.href = config.url;
        icon.addEventListener('auxclick', (event) => {
            if (event.button === 1) {
                event.preventDefault();
                window.open(config.url, '_blank');
            }
        });
        trayIcons.appendChild(icon);
    });

    tray.appendChild(trayIcons);
    document.body.appendChild(tray);

    const settingsButton = document.querySelector('.settings-icon img');
    const settingsMenu = document.querySelector('.settings-menu');
    const lightWallpaperSelect = document.querySelector('#light-wallpaper-select');
    const darkWallpaperSelect = document.querySelector('#dark-wallpaper-select');
    const searchEngineSelect = document.querySelector('#search-engine-select');
    const searchForm = document.querySelector('.search-box form');

    settingsButton.addEventListener('click', (event) => {
        const isVisible = settingsMenu.style.display === 'block';
        settingsMenu.style.display = isVisible ? 'none' : 'block';
        event.stopPropagation();
    });

    document.addEventListener('click', (event) => {
        if (settingsMenu.style.display === 'block' && !settingsMenu.contains(event.target)) {
            settingsMenu.style.display = 'none';
        }
    });

    wallpapers.forEach(file => {
        const option = document.createElement('option');
        option.value = file;

        const wrapper = document.createElement('div');
        wrapper.className = 'wallpaper-option';

        const span = document.createElement('span');
        span.textContent = file.split('/').pop().replace('.jpg', '');

        wrapper.appendChild(span);
        option.appendChild(wrapper);

        lightWallpaperSelect.appendChild(option.cloneNode(true));
        darkWallpaperSelect.appendChild(option.cloneNode(true));
    });

    searchEngines.forEach(engine => {
        const option = document.createElement('option');
        option.value = engine.name;

        const wrapper = document.createElement('div');
        wrapper.className = 'search-engine-option';

        const img = document.createElement('img');
        img.src = engine.icon;
        img.alt = engine.name;

        const span = document.createElement('span');
        span.textContent = engine.name;

        wrapper.appendChild(img);
        wrapper.appendChild(span);
        option.appendChild(wrapper);

        searchEngineSelect.appendChild(option);
    });

    searchEngineSelect.value = selectedSearchEngine;
    lightWallpaperSelect.value = lightWallpaper;
    darkWallpaperSelect.value = darkWallpaper;

    updateSearchFormAction(selectedSearchEngine);

    searchEngineSelect.addEventListener('change', (e) => {
        const selectedEngine = e.target.value;
        updateSearchFormAction(selectedEngine);
        localStorage.setItem('searchEngine', selectedEngine);
    });

    lightWallpaperSelect.addEventListener('change', (e) => {
        const selectedWallpaper = e.target.value;
        document.documentElement.style.setProperty('--light-wallpaper', `url(${selectedWallpaper})`);
        localStorage.setItem('lightWallpaper', selectedWallpaper);
    });

    darkWallpaperSelect.addEventListener('change', (e) => {
        const selectedWallpaper = e.target.value;
        document.documentElement.style.setProperty('--dark-wallpaper', `url(${selectedWallpaper})`);
        localStorage.setItem('darkWallpaper', selectedWallpaper);
    });

    function updateSearchFormAction(selectedEngine) {
        const selectedEngineData = searchEngines.find(engine => engine.name === selectedEngine);
        searchForm.action = selectedEngineData.url;
        searchForm.onsubmit = (event) => {
            event.preventDefault();
            const query = searchInput.value;
            const searchURL = `${selectedEngineData.url}?${selectedEngineData.queryParam}=${encodeURIComponent(query)}`;
            window.location.href = searchURL;
        };
    }
});

function updateTime() {
    const timeDisplay = document.querySelector('.time-display');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const timeString = `${hours}:${minutes}`;
    timeDisplay.textContent = timeString;
}