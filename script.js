//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//----------------------    ██████╗ ██████╗ ██████╗ ██╗     ██╗██╗   ██╗███████╗   -----------------------
//----------------------   ██╔════╝██╔═══██╗██╔══██╗██║     ██║██║   ██║██╔════╝   -----------------------
//----------------------   ██║     ██║   ██║██████╔╝██║     ██║██║   ██║███████╗   -----------------------
//----------------------   ██║     ██║   ██║██╔══██╗██║     ██║██║   ██║╚════██║   -----------------------
//----------------------   ╚██████╗╚██████╔╝██║  ██║███████╗██║╚██████╔╝███████║   -----------------------
//----------------------    ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝ ╚═════╝ ╚══════╝   -----------------------
//----------------------                                                           -----------------------
//----------------------            ██╗    ██╗ █████╗ ███╗   ██╗ ██████╗           -----------------------
//----------------------            ██║    ██║██╔══██╗████╗  ██║██╔════╝           -----------------------
//----------------------            ██║ █╗ ██║███████║██╔██╗ ██║██║  ███╗          -----------------------
//----------------------            ██║███╗██║██╔══██║██║╚██╗██║██║   ██║          -----------------------
//----------------------            ╚███╔███╔╝██║  ██║██║ ╚████║╚██████╔╝          -----------------------
//----------------------             ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝           -----------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//-- If you need to customize the tray items, search engines and wallpapers, edit the following arrays. --
//--------------------------------------------------------------------------------------------------------

// Tray items array
const trayIconsItems = [
    { src: 'trayicons/ChatGPT.png', alt: 'ChatGPT', url: 'https://chatgpt.com/' },
    { src: 'trayicons/AIStudio.png', alt: 'AIStudio', url: 'https://aistudio.google.com/app/prompts/1pJD5v--kDEq-gPjlqngb2ByzIcvpX7__' },
    { src: 'trayicons/GitHub.png', alt: 'GitHub', url: 'https://github.com/' },
    { src: 'trayicons/YouTube.png', alt: 'YouTube', url: 'https://www.youtube.com/' },
    { src: 'trayicons/Bilibili.png', alt: 'Bilibili', url: 'https://www.bilibili.com/' },
    { src: 'trayicons/Disney+.png', alt: 'Disney+', url: 'https://www.disneyplus.com/' },
    { src: 'trayicons/MacKed.png', alt: 'MacKed', url: 'https://macked.app/' },
    { src: 'trayicons/Appstorrent.png', alt: 'Appstorrent', url: 'https://appstorrent.ru/programs/' }
];

// Search engings array
const searchEngines = [
    {
        name: 'Google',
        url: 'https://www.google.com/search',
        queryParam: 'q'
    },
    {
        name: 'Bing',
        url: 'https://www.bing.com/search',
        queryParam: 'q'
    },
    {
        name: 'Baidu',
        url: 'https://www.baidu.com/s',
        queryParam: 'wd'
    }
];

// Wallpapers array
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



//---------------------------------------------------------------------
//-- Generally, the following contents does not need to be modified. --
//---------------------------------------------------------------------

// Time update function
function updateTime() {
    const timeDisplay = document.querySelector('.time-display');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const timeString = `${hours}:${minutes}`;
    timeDisplay.textContent = timeString;
}

// Default values
const defaultLightWallpaper = 'wallpapers/LightGlass.jpg';
const defaultDarkWallpaper = 'wallpapers/DrakCirclePurple.jpg';
const defaultSearchEngine = 'Google';

// Selector values
const selectedSearchEngine = localStorage.getItem('searchEngine') || defaultSearchEngine;
const lightWallpaper = localStorage.getItem('lightWallpaper') || defaultLightWallpaper;
const darkWallpaper = localStorage.getItem('darkWallpaper') || defaultDarkWallpaper;

// Update current wallpaper
document.documentElement.style.setProperty('--light-wallpaper', `url(${lightWallpaper})`);
document.documentElement.style.setProperty('--dark-wallpaper', `url(${darkWallpaper})`);

// Run after DOM loaded
document.addEventListener('DOMContentLoaded', () => {
    // Update clock every 100ms
    updateTime();
    setInterval(updateTime, 100);

    // Search box part
    const searchBox = document.querySelector('.search-box');
    const searchInput = document.querySelector('.search-box input[type="text"]');

    // Use '/' to activate search box
    document.onkeydown = function(e) {
        const focusElement = document.activeElement;
        if (e.key === '/' && focusElement !== searchInput) {
            e.preventDefault();
            searchInput.focus();
        }
    };

    // Scale up on active
    searchInput.addEventListener('focus', () => {
        searchBox.classList.add('active');
    });

    // Scale down on inactive
    searchInput.addEventListener('blur', () => {
        searchBox.classList.remove('active');
    });

    // Listen esc
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && searchBox.classList.contains('active')) {
            searchBox.classList.remove('active');
            searchInput.blur();
        }
    });

    // Focus on search box while loaded
    searchInput.focus();

    // Define search button dunction
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

    // Tray part
    const trayIcons = document.querySelector('.tray-icons');

    // Add items to tray
    trayIconsItems.forEach(config => {
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

    // Settings part
    const settingsButton = document.querySelector('.settings-icon img');
    const settingsMenu = document.querySelector('.settings-menu');
    const searchEngineSelect = document.querySelector('#search-engine-select');
    const searchForm = document.querySelector('.search-box form');
    const lightwallpaperselect = document.querySelector('#light-wallpaper-select');
    const darkwallpaperselect = document.querySelector('#dark-wallpaper-select');

    // Listen settings icon click
    settingsButton.addEventListener('click', (event) => {
        const isVisible = settingsMenu.style.display === 'block';
        settingsMenu.style.display = isVisible ? 'none' : 'block';
        event.stopPropagation();
    });

    // Click any other place to close
    document.addEventListener('click', (event) => {
        if (settingsMenu.style.display === 'block' && !settingsMenu.contains(event.target)) {
            settingsMenu.style.display = 'none';
        }
    });

    // Generate search engins selection items
    searchEngines.forEach(engine => {
        const option = document.createElement('option');
        option.value = engine.name;

        const wrapper = document.createElement('div');
        wrapper.className = 'search-engine-option';

        const span = document.createElement('span');
        span.textContent = engine.name;

        wrapper.appendChild(span);
        option.appendChild(wrapper);

        searchEngineSelect.appendChild(option);
    });

    // Generate wallpapers selection items
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

    // Apply current selections to the selectors
    searchEngineSelect.value = selectedSearchEngine;
    lightwallpaperselect.value = lightWallpaper;
    darkwallpaperselect.value = darkWallpaper;

    updateSearchFormAction(selectedSearchEngine);

    // Listen search engine sclector
    searchEngineSelect.addEventListener('change', (e) => {
        const selectedEngine = e.target.value;
        updateSearchFormAction(selectedEngine);
        localStorage.setItem('searchEngine', selectedEngine);
    });

    // Listen light wallpaper selector
    lightwallpaperselect.addEventListener('change', (e) => {
        const selectedWallpaper = e.target.value;
        document.documentElement.style.setProperty('--light-wallpaper', `url(${selectedWallpaper})`);
        localStorage.setItem('lightWallpaper', selectedWallpaper);
    });

    // Listen dark wallpaper slector
    darkwallpaperselect.addEventListener('change', (e) => {
        const selectedWallpaper = e.target.value;
        document.documentElement.style.setProperty('--dark-wallpaper', `url(${selectedWallpaper})`);
        localStorage.setItem('darkWallpaper', selectedWallpaper);
    });

    // Update search form action
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

    // Preview function
    const previewButton = document.getElementById('previewButton');
    const previewModal = document.getElementById('wallpaperPreviewModal');
    const closeModal = document.getElementById('closeModal');
    const galleryContainer = document.getElementById('gallery');
    let largeImage = null;
    previewModal.style.transition = 'opacity 0.2s ease-in-out';

    // Get pieview pic path
    function getPreviewImagePath(imagePath) {
        const fileName = imagePath.split('/').pop();
        return `wallpapers/preview/${fileName}`;
    }

    // Click to open modal
    previewButton.addEventListener('click', (event) => {
        event.stopPropagation();
        openPreviewModal(); 
    });
    // Click to close modal
    closeModal.addEventListener('click', closePreviewModal);

    // Click any where else to cloes modal
    function closeModalOnOutsideClick(event) {
        if (!previewModal.contains(event.target)) closePreviewModal();
    }

    // Function to open modal
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

        addIconsToGallery();

        window.addEventListener('click', closeModalOnOutsideClick);
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                closePreviewModal();
            }
        });
    }

    // Function to close modal
    function closePreviewModal() {
        previewModal.style.opacity = '0';
        setTimeout(() => {
            previewModal.style.display = 'none';
            if (largeImage) {
                largeImage.remove();
                largeImage = null;
                const icons = previewModal.querySelectorAll('.icon_large');
                icons.forEach(icon => icon.remove());
                if (largeImageContainer) {
                    previewModal.removeChild(largeImageContainer);
                }
            }
        }, 200);
        window.removeEventListener('click', closeModalOnOutsideClick);
        document.removeEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                closePreviewModal();
            }
        });
    }

    // Add icons to each gallery item
    function addIconsToGallery() {
        const galleryItems = document.querySelectorAll('.preview-modal .gallery-item');

        galleryItems.forEach(item => {
            const sunIcon = document.createElement('img');
            sunIcon.src = 'sun.svg';
            sunIcon.classList.add('icon', 'sun-icon');

            const moonIcon = document.createElement('img');
            moonIcon.src = 'moon.svg';
            moonIcon.classList.add('icon', 'moon-icon');

            item.appendChild(sunIcon);
            item.appendChild(moonIcon);

            sunIcon.addEventListener('click', () => {
                event.stopPropagation();
                const img = item.querySelector('img');
                document.documentElement.style.setProperty('--light-wallpaper', `url(${img.dataset.fullImage})`);
                localStorage.setItem('lightWallpaper', img.dataset.fullImage);
            });

            moonIcon.addEventListener('click', () => {
                event.stopPropagation();
                const img = item.querySelector('img');
                document.documentElement.style.setProperty('--dark-wallpaper', `url(${img.dataset.fullImage})`);
                localStorage.setItem('darkWallpaper', img.dataset.fullImage);
            });
        });
    }

    // Click to view original
    galleryContainer.addEventListener('click', (event) => {
        if (event.target.tagName === 'IMG') {
            const img = event.target;

            const largeImageContainer = document.createElement('div');
            largeImageContainer.classList.add('large-image-container');
            previewModal.appendChild(largeImageContainer);

            largeImage = document.createElement('img');
            largeImage.src = img.dataset.fullImage;
            largeImage.classList.add('large');
            largeImageContainer.appendChild(largeImage);

            addWallpaperSettingIcons(largeImageContainer, img.dataset.fullImage);

            largeImage.addEventListener('click', (event) => {
                event.stopPropagation();
                largeImage.remove();
                largeImage = null; 
                previewModal.removeChild(largeImageContainer);
            });
        }
    });

    // Add icons to original picture
    function addWallpaperSettingIcons(largeImageContainer, imgSrc) {
        const setLightWallpaperIcon = document.createElement('img');
        setLightWallpaperIcon.src = 'sun.svg';
        setLightWallpaperIcon.classList.add('icon_large', 'sun-icon_large');
        setLightWallpaperIcon.onclick = () => {
            document.documentElement.style.setProperty('--light-wallpaper', `url(${imgSrc})`);
            localStorage.setItem('lightWallpaper', imgSrc);
        };
    
        const setDarkWallpaperIcon = document.createElement('img');
        setDarkWallpaperIcon.src = 'moon.svg';
        setDarkWallpaperIcon.classList.add('icon_large', 'moon-icon_large');
        setDarkWallpaperIcon.onclick = () => {
            document.documentElement.style.setProperty('--dark-wallpaper', `url(${imgSrc})`);
            localStorage.setItem('darkWallpaper', imgSrc);
        };
    
        largeImageContainer.appendChild(setLightWallpaperIcon);
        largeImageContainer.appendChild(setDarkWallpaperIcon);
    }
});