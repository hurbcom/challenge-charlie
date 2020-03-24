const weatherPortugueseNames = [
    { englishName: 'Clear', portugueseName: 'Ensolarado' },
    { englishName: 'Rain', portugueseName: 'Chuvoso' },
    { englishName: 'Snow', portugueseName: 'Nevando' },
    { englishName: 'Drizzle', portugueseName: 'Chuviscando' },
    { englishName: 'Clouds', portugueseName: 'Nublado' },
    { englishName: 'Thunderstorm', portugueseName: 'Tempestade' }
];

export default function handleEnglishToPortuguese(englishName) {
    const weatherPortugueseName = weatherPortugueseNames.find(
        element => element.englishName === englishName
    );
    return weatherPortugueseName;
}
