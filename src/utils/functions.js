export function getColorFromTemperature(temperature, hasData = false) {
    if (temperature == null || !hasData)  {
        return [
            '#bdbdbdcc',
            '#e0e0e0cc',
            '#9e9e9ecc',
        ];
    };

    if (temperature > 35)  {
        return [
            '#ff5050cc',
            '#ff8080cc',
            '#ff4d4dcc',
        ];
    };

    if (temperature < 15)  {
        return [
            '#29b6f6cc',
            '#4fc3f7cc',
            '#29b6f6cc',
        ];
    };

    return [
        '#ffc107cc',
        '#ffd54fcc',
        '#f8c11bcc',
    ];

}
