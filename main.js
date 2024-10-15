let map, marker;

const areaCodes = [
    {code: '+1', country: 'USA/Canada'},
    {code: '+44', country: 'UK'},
    {code: '+33', country: 'France'},
    {code: '+49', country: 'Germany'},
    {code: '+39', country: 'Italy'},
    {code: '+91', country: 'India'},
    {code: '+7', country: 'Russia'},
    {code: '+380', country: 'Ukraine'},
    {code: '+86', country: 'China'},
    {code: '+966', country: 'Saudi Arabia'},
    {code: '+55', country: 'Brazil'},
    {code: '+81', country: 'Japan'},
    {code: '+82', country: 'South Korea'},
    {code: '+34', country: 'Spain'},
    {code: '+61', country: 'Australia'},
    {code: '+52', country: 'Mexico'},
    {code: '+31', country: 'Netherlands'},
    {code: '+41', country: 'Switzerland'},
    {code: '+46', country: 'Sweden'},
    {code: '+47', country: 'Norway'},
    {code: '+45', country: 'Denmark'},
    {code: '+358', country: 'Finland'},
    {code: '+48', country: 'Poland'},
    {code: '+43', country: 'Austria'},
    {code: '+32', country: 'Belgium'},
    {code: '+351', country: 'Portugal'},
    {code: '+30', country: 'Greece'},
    {code: '+36', country: 'Hungary'},
    {code: '+420', country: 'Czech Republic'},
    {code: '+manual', country: 'Manual Input'}
];

function getAreaCodeOptions() {
    return areaCodes.map(ac => `<option value="${ac.code}">${ac.code} (${ac.country})</option>`).join('');
}

let translations = {
    en: {
        title: "Artistic QR Code Creator",
        modeLabel: "QR Code Mode:",
        normalMode: "Normal QR Code",
        artisticMode: "Artistic QR Code",
        typeLabel: "QR Code Type:",
        contentLabel: "Content:",
        colorLabel: "QR Code Foreground Color:",
        bgColorLabel: "QR Code Background Color:",
        generateBtn: "Show QR Data",
        textPlaceholder: "Enter your content here",
        urlPlaceholder: "Enter URL here",
        mecardName: "Name",
        mecardPhone: "Phone",
        mecardEmail: "Email",
        mecardAddress: "Address",
        wifiSSID: "SSID",
        wifiPassword: "Password",
        wifiEncryption: "Encryption Type",
        geoLatitude: "Latitude",
        geoLongitude: "Longitude",
        themeLabel: "Choose Theme:",
        defaultTheme: "Default Theme",
        darkTheme: "Dark Theme",
        colorfulTheme: "Colorful Theme",
        searchPlaceholder: "Search location",
        searchButton: "Search",
        settingsTitle: "Settings",
        languageLabel: "Language:",
        mecardSurname: "Surname",
        mecardURL: "URL",
    },
    es: {
        title: "Creador de Códigos QR Artísticos",
        modeLabel: "Modo de Código QR:",
        normalMode: "Código QR Normal",
        artisticMode: "Código QR Artístico",
        typeLabel: "Tipo de Código QR:",
        contentLabel: "Contenido:",
        colorLabel: "Color del Código QR:",
        bgColorLabel: "Color de Fondo:",
        generateBtn: "Mostrar Datos QR",
        textPlaceholder: "Ingrese su contenido aquí",
        urlPlaceholder: "Ingrese la URL aquí",
        mecardName: "Nombre",
        mecardPhone: "Teléfono",
        mecardEmail: "Correo electrónico",
        mecardAddress: "Dirección",
        wifiSSID: "SSID",
        wifiPassword: "Contraseña",
        wifiEncryption: "Tipo de encriptación",
        geoLatitude: "Latitud",
        geoLongitude: "Longitud",
        themeLabel: "Elegir Tema:",
        defaultTheme: "Tema Predeterminado",
        darkTheme: "Tema Oscuro",
        colorfulTheme: "Tema Colorido",
        searchPlaceholder: "Buscar ubicación",
        searchButton: "Buscar",
        settingsTitle: "Configuraciones",
        languageLabel: "Idioma:",
        mecardSurname: "Familienname",
        mecardURL: "URL"
        
    },
    fr: {
        title: "Créateur de Code QR Artistique",
        modeLabel: "Mode de Code QR :",
        normalMode: "Code QR Normal",
        artisticMode: "Code QR Artistique",
        typeLabel: "Type de Code QR :",
        contentLabel: "Contenu :",
        colorLabel: "Couleur du Code QR :",
        bgColorLabel: "Couleur de Fond :",
        generateBtn: "Afficher les données QR",
        textPlaceholder: "Entrez votre contenu ici",
        urlPlaceholder: "Entrez l'URL ici",
        mecardName: "Nom",
        mecardPhone: "Téléphone",
        mecardEmail: "Email",
        mecardAddress: "Adresse",
        wifiSSID: "SSID",
        wifiPassword: "Mot de passe",
        wifiEncryption: "Type de chiffrement",
        geoLatitude: "Latitude",
        geoLongitude: "Longitude",
        themeLabel: "Choisir le Thème :",
        defaultTheme: "Thème par Défaut",
        darkTheme: "Thème Sombre",
        colorfulTheme: "Thème Coloré",
        searchPlaceholder: "Rechercher un emplacement",
        searchButton: "Recherche",
        settingsTitle: "Réglages",
        languageLabel: "Langue :",
        mecardSurname: "Cognome",
        mecardURL: "URL"
    },
    de: {
        title: "Künstlerischer QR-Code-Generator",
        modeLabel: "QR-Code-Modus:",
        normalMode: "Normaler QR-Code",
        artisticMode: "Künstlerischer QR-Code",
        typeLabel: "QR-Code-Typ:",
        contentLabel: "Inhalt:",
        colorLabel: "QR-Code-Farbe:",
        bgColorLabel: "Hintergrundfarbe:",
        generateBtn: "QR-Daten anzeigen",
        textPlaceholder: "Geben Sie hier Ihren Inhalt ein",
        urlPlaceholder: "Geben Sie hier die URL ein",
        mecardName: "Name",
        mecardPhone: "Telefon",
        mecardEmail: "E-Mail",
        mecardAddress: "Adresse",
        wifiSSID: "SSID",
        wifiPassword: "Passwort",
        wifiEncryption: "Verschlüsselungstyp",
        geoLatitude: "Breitengrad",
        geoLongitude: "Längengrad",
        themeLabel: "Thema Wählen:",
        defaultTheme: "Standard Theme",
        darkTheme: "Dunkles Thema",
        colorfulTheme: "Buntes Thema",
        searchPlaceholder: "Standort suchen",
        searchButton: "Suche",
        settingsTitle: "Einstellungen",
        languageLabel: "Sprache:",
        mecardSurname: "Familienname",
        mecardURL: "URL"
    },
    it: {
        title: "Creatore di Codici QR Artistici",
        modeLabel: "Modalità Codice QR:",
        normalMode: "Codice QR Normale",
        artisticMode: "Codice QR Artistico",
        typeLabel: "Tipo di Codice QR:",
        contentLabel: "Contenuto:",
        colorLabel: "Colore del Codice QR:",
        bgColorLabel: "Colore di Sfondo:",
        generateBtn: "Mostra Dati QR",
        textPlaceholder: "Inserisci il tuo contenuto qui",
        urlPlaceholder: "Inserisci l'URL qui",
        mecardName: "Nome",
        mecardPhone: "Telefono",
        mecardEmail: "Email",
        mecardAddress: "Indirizzo",
        wifiSSID: "SSID",
        wifiPassword: "Password",
        wifiEncryption: "Tipo di crittografia",
        geoLatitude: "Latitudine",
        geoLongitude: "Longitudine",
        themeLabel: "Scegli Tema:",
        defaultTheme: "Tema Predefinito",
        darkTheme: "Tema Scuro",
        colorfulTheme: "Tema Colorato",
        searchPlaceholder: "Cerca posizione",
        searchButton: "Cerca",
        settingsTitle: "Impostazioni",
        languageLabel: "Lingua:",
        mecardSurname: "Cognome",
        mecardURL: "URL"
    },
    hi: {
        title: "कलात्मक QR कोड निर्माता",
        modeLabel: "QR कोड मोड:",
        normalMode: "नॉर्मल QR कोड",
        artisticMode: "कलात्मक QR कोड",
        typeLabel: "QR कोड प्रकार:",
        contentLabel: "सामग्री:",
        colorLabel: "QR कोड रंग:",
        bgColorLabel: "पृष्ठभूमि रंग:",
        generateBtn: "QR डेटा दिखाएँ",
        textPlaceholder: "अपनी सामग्री यहां दर्ज करें",
        urlPlaceholder: "URL यहां दर्ज करें",
        mecardName: "नाम",
        mecardPhone: "फोन",
        mecardEmail: "ईमेल",
        mecardAddress: "पता",
        wifiSSID: "SSID",
        wifiPassword: "पासवर्ड",
        wifiEncryption: "एन्क्रिप्शन प्रकार",
        geoLatitude: "अक्षांश",
        geoLongitude: "देशांतर",
        themeLabel: "थीम चुनें:",
        defaultTheme: "डिफ़ॉल्ट थीम",
        darkTheme: "डार्क थीम",
        colorfulTheme: "रंगीन थीम",
        searchPlaceholder: "स्थान खोजें",
        searchButton: "खोजें",
        settingsTitle: "सेटिंग्स",
        languageLabel: "भाषा:",
        mecardSurname: "Прізвище",
        mecardURL: "URL"
    },
    ru: {
        title: "Создатель художественных QR-кодов",
        modeLabel: "Режим QR-кода:",
        normalMode: "Обычный QR-код",
        artisticMode: "Художественный QR-код",
        typeLabel: "Тип QR-кода:",
        contentLabel: "Содержание:",
        colorLabel: "Цвет QR-кода:",
        bgColorLabel: "Цвет фона:",
        generateBtn: "Показать данные QR",
        textPlaceholder: "Введите ваш текст здесь",
        urlPlaceholder: "Введите URL здесь",
        mecardName: "Имя",
        mecardPhone: "Телефон",
        mecardEmail: "Email",
        mecardAddress: "Адрес",
        wifiSSID: "SSID",
        wifiPassword: "Пароль",
        wifiEncryption: "Тип шифрования",
        geoLatitude: "Широта",
        geoLongitude: "Долгота",
        themeLabel: "Выберите тему:",
        defaultTheme: "Тема по умолчанию",
        darkTheme: "Темная тема",
        colorfulTheme: "Яркая тема",
        searchPlaceholder: "Поиск места",
        searchButton: "Поиск",
        settingsTitle: "Настройки",
        languageLabel: "Язык:",
        mecardSurname: "Фамилия",
        mecardURL: "URL"
    },
    uk: {
        title: "Творець художніх QR-кодів",
        modeLabel: "Режим QR-коду:",
        normalMode: "Звичайний QR-код",
        artisticMode: "Художній QR-код",
        typeLabel: "Тип QR-коду:",
        contentLabel: "Вміст:",
        colorLabel: "Колір QR-коду:",
        bgColorLabel: "Колір фону:",
        generateBtn: "Показати дані QR",
        textPlaceholder: "Введіть ваш текст тут",
        urlPlaceholder: "Введіть URL тут",
        mecardName: "Ім'я",
        mecardPhone: "Телефон",
        mecardEmail: "Email",
        mecardAddress: "Адреса",
        wifiSSID: "SSID",
        wifiPassword: "Пароль",
        wifiEncryption: "Тип шифрування",
        geoLatitude: "Широта",
        geoLongitude: "Довгота",
        themeLabel: "Оберіть тему:",
        defaultTheme: "Тема за замовчуванням",
        darkTheme: "Темна тема",
        colorfulTheme: "Яскрава тема",
        searchPlaceholder: "Пошук місця",
        searchButton: "Пошук",
        settingsTitle: "Налаштування",
        languageLabel: "Мова:",
        mecardSurname: "Прізвище",
        mecardURL: "URL"
    },
    zh: {
        title: "艺术二维码生成器",
        modeLabel: "二维码模式：",
        normalMode: "普通二维码",
        artisticMode: "艺术二维码",
        typeLabel: "二维码类型：",
        contentLabel: "内容：",
        colorLabel: "二维码颜色：",
        bgColorLabel: "背景颜色：",
        generateBtn: "显示二维码数据",
        textPlaceholder: "在此输入您的内容",
        urlPlaceholder: "在此输入URL",
        mecardName: "姓名",
        mecardPhone: "电话",
        mecardEmail: "电子邮件",
        mecardAddress: "地址",
        wifiSSID: "SSID",
        wifiPassword: "密码",
        wifiEncryption: "加密类型",
        geoLatitude: "纬度",
        geoLongitude: "经度",
        themeLabel: "选择主题：",
        defaultTheme: "默认主题",
        darkTheme: "黑暗主题",
        colorfulTheme: "五彩缤纷的主题",
        searchPlaceholder: "搜索位置",
        searchButton: "搜索",
        settingsTitle: "设置",
        languageLabel: "语言：",
        mecardSurname: "姓��",
        mecardURL: "URL"
    },
    ar: {
        title: "منشئ رمز QR الفني",
        modeLabel: "وضع رمز QR:",
        normalMode: "رمز QR العادي",
        artisticMode: "رمز QR الفني",
        typeLabel: "نوع رمز QR:",
        contentLabel: "المحتوى:",
        colorLabel: "لون رمز QR:",
        bgColorLabel: "لون الخلفية:",
        generateBtn: "عرض بيانات QR",
        textPlaceholder: "أدخل المحتوى هنا",
        urlPlaceholder: "أدخل الرابط هنا",
        mecardName: "الاسم",
        mecardPhone: "الهاتف",
        mecardEmail: "البريد الإلكتروني",
        mecardAddress: "العنوان",
        wifiSSID: "SSID",
        wifiPassword: "كلمة المرور",
        wifiEncryption: "نوع التشفير",
        geoLatitude: "خط العرض",
        geoLongitude: "خط الطول",
        themeLabel: "اختر السمة:",
        defaultTheme: "النسق الافتراضي",
        darkTheme: "السمة الداكنة",
        colorfulTheme: "السمة الملونة",
        searchPlaceholder: "ابحث عن الموقع",
        searchButton: "بحث",
        settingsTitle: "الإعدادات",
        languageLabel: "اللغة:",
        mecardSurname: "الكنية",
        mecardURL: "الرابط"
    },
    pt: {
        title: "Criador de Código QR Artístico",
        modeLabel: "Modo de Código QR:",
        normalMode: "Código QR Normal",
        artisticMode: "Código QR Artístico",
        typeLabel: "Tipo de Código QR:",
        contentLabel: "Conteúdo:",
        colorLabel: "Cor do Código QR:",
        bgColorLabel: "Cor de Fundo:",
        generateBtn: "Mostrar Dados QR",
        textPlaceholder: "Insira seu conteúdo aqui",
        urlPlaceholder: "Insira a URL aqui",
        mecardName: "Nome",
        mecardPhone: "Telefone",
        mecardEmail: "Email",
        mecardAddress: "Endereço",
        wifiSSID: "SSID",
        wifiPassword: "Senha",
        wifiEncryption: "Tipo de Criptografia",
        geoLatitude: "Latitude",
        geoLongitude: "Longitude",
        themeLabel: "Escolha o Tema:",
        defaultTheme: "Tema Padrão",
        darkTheme: "Tema Escuro",
        colorfulTheme: "Tema Colorido",
        searchPlaceholder: "Pesquisar localização",
        searchButton: "Pesquisar",
        settingsTitle: "Configurações",
        languageLabel: "Idioma:",
        mecardSurname: "Familienname",
        mecardURL: "URL"
    },
    nl: {
        title: "Artistieke QR-code Creator",
        modeLabel: "QR-code Modus:",
        normalMode: "Normale QR-code",
        artisticMode: "Artistieke QR-code",
        typeLabel: "QR-code Type:",
        contentLabel: "Inhoud:",
        colorLabel: "QR-code Kleur:",
        bgColorLabel: "Achtergrondkleur:",
        generateBtn: "Toon QR-gegevens",
        textPlaceholder: "Voer hier uw inhoud in",
        urlPlaceholder: "Voer hier de URL in",
        mecardName: "Naam",
        mecardPhone: "Telefoon",
        mecardEmail: "E-mail",
        mecardAddress: "Adres",
        wifiSSID: "SSID",
        wifiPassword: "Wachtwoord",
        wifiEncryption: "Versleutelingstype",
        geoLatitude: "Breedtegraad",
        geoLongitude: "Lengtegraad",
        themeLabel: "Kies Thema:",
        defaultTheme: "Standaard Thema",
        darkTheme: "Donker Thema",
        colorfulTheme: "Kleurrijk Thema",
        searchPlaceholder: "Zoek locatie",
        searchButton: "Zoeken",
        settingsTitle: "Instellingen",
        languageLabel: "Taal:",
        mecardSurname: "Achternaam",
        mecardURL: "URL"
    },
};

function changeLanguage() {
    let lang = document.getElementById('language-select').value;
    let t = translations[lang] || translations['en'];
    
    document.getElementById('title').textContent = t.title;
    document.getElementById('mode-label').textContent = t.modeLabel || "QR Code Mode:";
    document.getElementById('type-label').textContent = t.typeLabel || "QR Code Type:";
    document.getElementById('color-label').textContent = t.colorLabel || "QR Code Foreground Color:";
    document.getElementById('bg-color-label').textContent = t.bgColorLabel || "QR Code Background Color:";
    document.getElementById('generate-btn').textContent = t.generateBtn || "Show QR Data";

    document.getElementById('settings-title').textContent = t.settingsTitle || "Settings";
    document.getElementById('language-label').textContent = t.languageLabel || "Language:";
    document.getElementById('theme-label').textContent = t.themeLabel || "Theme:";
    
    let modeSelect = document.getElementById('qr-mode');
    modeSelect.options[0].text = t.normalMode || "Normal QR Code";
    modeSelect.options[1].text = t.artisticMode || "Artistic QR Code";

    let themeSelect = document.getElementById('theme-select');
    themeSelect.options[0].text = t.defaultTheme || "Default Theme";
    themeSelect.options[1].text = t.darkTheme || "Dark Theme";
    themeSelect.options[2].text = t.colorfulTheme || "Colorful Theme";

    updateInputFields();
    localStorage.setItem('language-select', lang);
}

function updateQRMode() {
    let colorInputs = document.querySelectorAll('#qr-color, #qr-bg-color');
    colorInputs.forEach(input => input.removeAttribute('disabled'));
}

function changeTheme() {
    let theme = document.getElementById('theme-select').value;
    document.body.className = theme === 'default' ? '' : `${theme}-theme`;
    localStorage.setItem('theme-select', theme);
}

function initMap() {
    map = L.map('map-container').setView([0, 0], 2);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    map.on('click', function(e) {
        setMarker(e.latlng);
    });

    marker = L.marker([0, 0]);
}

function setMarker(latlng) {
    if (!marker._map) {
        marker.addTo(map);
    }
    marker.setLatLng(latlng);
    document.getElementById('geo-latitude').value = latlng.lat.toFixed(6);
    document.getElementById('geo-longitude').value = latlng.lng.toFixed(6);
}

function searchLocation() {
    const query = document.getElementById('location-search').value;
    if (!query) return;

    fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`)
        .then(response => response.json())
        .then(data => {
            if (data && data.length > 0) {
                const result = data[0];
                const lat = parseFloat(result.lat);
                const lon = parseFloat(result.lon);
                map.setView([lat, lon], 13);
                setMarker(L.latLng(lat, lon));
            } else {
                alert('Location not found');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while searching for the location');
        });
}

function updateInputFields() {
    let type = document.getElementById('qr-type').value;
    let lang = document.getElementById('language-select').value;
    let t = translations[lang];
    let inputFields = document.getElementById('input-fields');
    
    inputFields.innerHTML = '';
    
    switch(type) {
        case 'text':
        case 'url':
            inputFields.innerHTML = `
                <label for="qr-content" id="content-label">${t.contentLabel}</label>
                <input type="text" id="qr-content" placeholder="${type === 'url' ? t.urlPlaceholder : t.textPlaceholder}">
            `;
            break;
            case 'mecard':
                inputFields.innerHTML = `
                    <div class="input-group">
                        <input type="text" id="mecard-name" placeholder="${t.mecardName}">
                    </div>
                    <div class="input-group">
                        <input type="text" id="mecard-surname" placeholder="${t.mecardSurname}">                        
                    </div>
                    <div class="input-group">
                        <select id="mecard-phone-areacode" onchange="handleManualAreaCode(this)">
                            ${getAreaCodeOptions()}
                        </select>
                        <input type="text" id="mecard-phone" placeholder="${t.mecardPhone}">
                        <button onclick="addInput('mecard-phone')">+</button> 
                    </div>
                    <div class="input-group">
                        <input type="text" id="mecard-email" placeholder="${t.mecardEmail}">
                        <button onclick="addInput('mecard-email')">+</button>
                    </div>
                    <div class="input-group">
                        <input type="text" id="mecard-address" placeholder="${t.mecardAddress}">
                        <button onclick="addInput('mecard-address')">+</button> 
                    </div>
                    <div class="input-group">
                        <input type="text" id="mecard-url" placeholder="${t.mecardURL}">
                        <button onclick="addInput('mecard-url')">+</button> 
                    </div>
                `;            
            break;
        case 'wifi':
            inputFields.innerHTML = `
                <div class="input-group">
                    <input type="text" id="wifi-ssid" placeholder="${t.wifiSSID}">
                </div>
                <div class="input-group">
                    <input type="text" id="wifi-password" placeholder="${t.wifiPassword}">
                </div>
                <div class="input-group">
                    <input type="text" id="wifi-encryption" placeholder="${t.wifiEncryption}">
                </div>
            `;
            break;
        case 'geo':
            inputFields.innerHTML = `
                <div id="map-container" style="height: 300px; margin-bottom: 10px;"></div>
                <div class="input-group">
                    <input type="text" id="geo-latitude" placeholder="${t.geoLatitude}">
                </div>
                <div class="input-group">
                    <input type="text" id="geo-longitude" placeholder="${t.geoLongitude}">
                </div>
                <div class="input-group">
                    <input type="text" id="location-search" placeholder="${t.searchPlaceholder}">
                    <button onclick="searchLocation()">${t.searchButton}</button>
                </div>
            `;
            requestAnimationFrame(() => {
                initMap();
            });
            break;
    }
}

function handleManualAreaCode(select) {
    if (select.value === '+manual') {
        let manualInput = document.createElement('input');
        manualInput.type = 'text';
        manualInput.placeholder = 'Enter area code';
        manualInput.className = 'manual-area-code';
        select.parentNode.insertBefore(manualInput, select.nextSibling);
    } else {
        let manualInput = select.nextSibling;
        if (manualInput && manualInput.className === 'manual-area-code') {
            manualInput.remove();
        }
    }
}

function addInput(baseId) {
    let inputGroup = document.querySelector(`#${baseId}`).closest('.input-group');
    let newInput = document.createElement('div');
    newInput.className = 'input-group';
    if (baseId === 'mecard-phone') {
        newInput.innerHTML = `
            <select id="${baseId}-areacode-${Date.now()}" onchange="handleManualAreaCode(this)">
                ${getAreaCodeOptions()}
            </select>
            <input type="text" id="${baseId}-${Date.now()}" placeholder="${inputGroup.querySelector('input').placeholder}">
            <button onclick="removeInput(this)">-</button>
        `;
    } else {
        newInput.innerHTML = `
            <input type="text" id="${baseId}-${Date.now()}" placeholder="${inputGroup.querySelector('input').placeholder}">
            <button onclick="removeInput(this)">-</button>
        `;
    }
    inputGroup.parentNode.insertBefore(newInput, inputGroup.nextSibling);
}

function generateQR() {
    let type = document.getElementById('qr-type').value;
    let mode = document.getElementById('qr-mode').value;
    let color = document.getElementById('qr-color').value;
    let bgColor = document.getElementById('qr-bg-color').value;
    
    let data = {
        type: type,
        mode: mode,
        color: color,
        bgColor: bgColor
    };
    
    switch(type) {
        case 'text':
        case 'url':
            data.content = document.getElementById('qr-content')?.value || '';
            break;
        case 'mecard':
            data.name = document.getElementById('mecard-name')?.value || '';
            data.phones = Array.from(document.querySelectorAll('[id^="mecard-phone"]')).map(input => {
                let areaCodeSelect = input.previousElementSibling;
                let areaCode = areaCodeSelect ? areaCodeSelect.value : '';
                if (areaCode === '+manual') {
                    let manualInput = areaCodeSelect.nextElementSibling;
                    areaCode = manualInput && manualInput.className === 'manual-area-code' ? manualInput.value : '';
                }
                return `${areaCode}${input.value || ''}`;
            }).filter(Boolean);
            data.emails = Array.from(document.querySelectorAll('[id^="mecard-email"]')).map(input => input.value || '').filter(Boolean);
            data.address = document.getElementById('mecard-address')?.value || '';
            break;
        case 'wifi':
            data.ssid = document.getElementById('wifi-ssid')?.value || '';
            data.password = document.getElementById('wifi-password')?.value || '';
            data.encryption = document.getElementById('wifi-encryption')?.value || '';
            break;
        case 'geo':
            if (marker && typeof marker.getLatLng === 'function') {
                let latlng = marker.getLatLng();
                data.latitude = latlng.lat.toFixed(6);
                data.longitude = latlng.lng.toFixed(6);
            } else {
                data.latitude = document.getElementById('geo-latitude')?.value || '';
                data.longitude = document.getElementById('geo-longitude')?.value || '';
            }
            break;
    }
    
    sendData(data);
}

function removeInput(button) {
    let inputGroup = button.closest('.input-group');
    inputGroup.remove();
}

function toggleSettingsModal() {
    var modal = document.getElementById("settings-modal");
    if (modal.style.display === "block") {
        modal.style.display = "none";
    } else {
        modal.style.display = "block";
    }
}

function sendData(data) {
    window.Telegram.WebApp.sendData(JSON.stringify(data));
}

function applySavedSettings() {
    const savedLanguage = localStorage.getItem('language-select');
    const savedTheme = localStorage.getItem('theme-select');
    console.log(savedLanguage, savedTheme);
    if (savedLanguage) {
        document.getElementById('language-select').value = savedLanguage;
        changeLanguage();
    }
    if (savedTheme) {
        document.getElementById('theme-select').value = savedTheme.replace('-theme', '');
        changeTheme();
    }
}
document.addEventListener('DOMContentLoaded', (event) => {
    applySavedSettings();
});

window.changeLanguage = changeLanguage;
window.changeTheme = changeTheme;
window.generateQR = generateQR;
window.updateInputFields = updateInputFields;
window.searchLocation = searchLocation;
window.updateQRMode = updateQRMode;
window.toggleSettingsModal = toggleSettingsModal;