const wallpapers = [
    "wallpapers/DarkAbstractReflection.jpg",
    "wallpapers/DarkGlassCircleWithReflection.jpg",
    "wallpapers/DarkGlassDimond.jpg",
    "wallpapers/DarkGlassDropsPurple.jpg",
    "wallpapers/DarkGlassRectangles.jpg",
    "wallpapers/DarkGlassRectanglesPurple.jpg",
    "wallpapers/DarkGlassRound.jpg",
    "wallpapers/DarkGlassRoundPurple.jpg",
    "wallpapers/DarkGlassRounded.jpg",
    "wallpapers/DarkGlassTwistedWithReflection.jpg",
    "wallpapers/DarkMetalBand.jpg",
    "wallpapers/DarkMetalCurved.jpg",
    "wallpapers/DarkMetalRectangles.jpg",
    "wallpapers/DarkMetalRectanglesPurple.jpg",
    "wallpapers/DarkMetalStack.jpg",
    "wallpapers/DarkMicrosoftBlue.jpg",
    "wallpapers/DarkMicrosoftPurple.jpg",
    "wallpapers/DarkMultiColorStack.jpg",
    "wallpapers/DarkPlanetWithRings.jpg",
    "wallpapers/DarkRayBall.jpg",
    "wallpapers/DarkWaves.jpg",
    "wallpapers/DarkWindowsPantone.jpg",
    "wallpapers/DrakCirclePurple.jpg",
    "wallpapers/LightAbstractPurple.jpg",
    "wallpapers/LightAbstractReflection.jpg",
    "wallpapers/LightBallBlueYellow.jpg",
    "wallpapers/LightCandyCube.jpg",
    "wallpapers/LightColoredSmokes.jpg",
    "wallpapers/LightGlass.jpg",
    "wallpapers/LightGlassBallBlue.jpg",
    "wallpapers/LightGlassCircleBlur.jpg",
    "wallpapers/LightGlassCube.jpg",
    "wallpapers/LightGlassCurved.jpg",
    "wallpapers/LightGlassOcean.jpg",
    "wallpapers/LightGlassPaved.jpg",
    "wallpapers/LightGlassPurple.jpg",
    "wallpapers/LightGlassPurpleBands.jpg",
    "wallpapers/LightGlassStripsBlue.jpg",
    "wallpapers/LightInfinityStack.jpg",
    "wallpapers/LightMetalBand.jpg",
    "wallpapers/LightMetalRectangles.jpg",
    "wallpapers/LightMetalStack.jpg",
    "wallpapers/LightMicrosoftPink.jpg",
    "wallpapers/LightPlasterPlates.jpg",
    "wallpapers/LightThinGlassStack.jpg",
    "wallpapers/LightWaves.jpg",
    "wallpapers/LightWavesBlue.jpg",
    "wallpapers/LightWavesCyan.jpg",
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

function updateTime() {
    const timeDisplay = document.querySelector('.time-display');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const timeString = `${hours}:${minutes}`;
    timeDisplay.textContent = timeString;
}

const defaultLightWallpaper = 'wallpapers/LightGlass.jpg';
const defaultDarkWallpaper = 'wallpapers/DrakCirclePurple.jpg';
const defaultSearchEngine = 'Google';

document.addEventListener('DOMContentLoaded', () => {
    const selectedSearchEngine = localStorage.getItem('searchEngine') || defaultSearchEngine;
    const lightWallpaper = localStorage.getItem('lightWallpaper') || defaultLightWallpaper;
    const darkWallpaper = localStorage.getItem('darkWallpaper') || defaultDarkWallpaper;

    document.documentElement.style.setProperty('--light-wallpaper', `url(${lightWallpaper})`);
    document.documentElement.style.setProperty('--dark-wallpaper', `url(${darkWallpaper})`);

    updateTime();
    setInterval(updateTime, 100);

    const searchButton = document.querySelector('.search-button');
    searchButton.addEventListener('auxclick', (event) => {
        if (event.button === 1) {
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
        { src: 'trayicons/ChatGPT.png', alt: 'ChatGPT', url: 'https://chatgpt.com/' },
        { src: 'trayicons/AIStudio.png', alt: 'AIStudio', url: 'https://aistudio.google.com/app/prompts/1pJD5v--kDEq-gPjlqngb2ByzIcvpX7__' },
        { src: 'trayicons/GitHub.png', alt: 'GitHub', url: 'https://github.com/' },
        { src: 'trayicons/YouTube.png', alt: 'YouTube', url: 'https://www.youtube.com/' },
        { src: 'trayicons/Bilibili.png', alt: 'Bilibili', url: 'https://www.bilibili.com/' },
        { src: 'trayicons/Disney+.png', alt: 'Disney+', url: 'https://www.disneyplus.com/' },
        { src: 'trayicons/Appstorrent.png', alt: 'Appstorrent', url: 'https://appstorrent.ru/programs/' }
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
    const lightwallpaperselect = document.querySelector('#light-wallpaper-select');
    const darkwallpaperselect = document.querySelector('#dark-wallpaper-select');
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

        lightwallpaperselect.appendChild(option.cloneNode(true));
        darkwallpaperselect.appendChild(option.cloneNode(true));
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
    lightwallpaperselect.value = lightWallpaper;
    darkwallpaperselect.value = darkWallpaper;

    updateSearchFormAction(selectedSearchEngine);

    searchEngineSelect.addEventListener('change', (e) => {
        const selectedEngine = e.target.value;
        updateSearchFormAction(selectedEngine);
        localStorage.setItem('searchEngine', selectedEngine);
    });

    lightwallpaperselect.addEventListener('change', (e) => {
        const selectedWallpaper = e.target.value;
        document.documentElement.style.setProperty('--light-wallpaper', `url(${selectedWallpaper})`);
        localStorage.setItem('lightWallpaper', selectedWallpaper);
    });

    darkwallpaperselect.addEventListener('change', (e) => {
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

    const previewButton = document.getElementById('previewButton');
    const closeModal = document.getElementById('closeModal');
    const previewModal = document.getElementById('wallpaperPreviewModal');
    const galleryContainer = document.getElementById('gallery');
    let largeImage = null;
    let loadingIndex = 0;
    let loadedImages = [];

    function getPreviewImagePath(imagePath) {
        const fileName = imagePath.split('/').pop();
        return `wallpapers/preview/${fileName}`;
    }

    previewButton.addEventListener('click', (event) => {
        event.stopPropagation();
        openPreviewModal(); 
    });
    closeModal.addEventListener('click', closePreviewModal);

    previewModal.style.transition = 'opacity 0.2s ease-in-out';

    function closeModalOnOutsideClick(event) {
        if (!previewModal.contains(event.target)) closePreviewModal();
    }

    function openPreviewModal() {
        previewModal.style.opacity = '0';
        previewModal.style.display = 'block';
        settingsMenu.style.display = 'none';
        setTimeout(() => {
            previewModal.style.opacity = '1';
        }, 10);
        if (galleryContainer.innerHTML === '') {
            wallpapers.forEach(fullPath => {
                const fileName = fullPath.split('/').pop().split('.')[0];
                const div = document.createElement('div');
                div.classList.add('gallery-item');

                const img = document.createElement('img');
                img.src = getPreviewImagePath(fullPath);
                img.alt = fileName;
                img.dataset.fullImage = fullPath;

                div.appendChild(img);
                const span = document.createElement('span');
                span.textContent = fileName.replace(/^[^-]*-/, '');
                div.appendChild(span);
                galleryContainer.appendChild(div);
            });
        }
        window.addEventListener('click', closeModalOnOutsideClick);
    }

    function closePreviewModal() {
        previewModal.style.opacity = '0';
        setTimeout(() => {
            previewModal.style.display = 'none';
        }, 200);
        if (largeImage) {
            largeImage.classList.remove('large');
            largeImage = null;
        }
        window.removeEventListener('click', closeModalOnOutsideClick);
    }

    galleryContainer.addEventListener('click', (event) => {
        if (event.target.tagName === 'IMG') {
            const img = event.target;
            if (largeImage) {
                largeImage.classList.remove('large');
                largeImage.src = getPreviewImagePath(largeImage.dataset.fullImage);
                largeImage = null;
            } else {
                img.classList.add('large');
                img.src = img.dataset.fullImage;
                largeImage = img;
            }
        }
    });
});