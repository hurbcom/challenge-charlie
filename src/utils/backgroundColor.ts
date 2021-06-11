export function backgroundColor(temp: number) {
    if (temp === 1000)
        return 'linear-gradient(183.5deg, rgba(176, 176, 176, 0.7) 18.6%, rgba(112, 112, 112, 0.9) 119.9% )';
    if (temp <= 15)
        return 'linear-gradient( 183.5deg, rgba(42, 227, 245, 0.7) 18.6%,  rgba(12, 42, 212, 0.9)  119.9% )';
    if (temp >= 35)
        return 'linear-gradient( 183.5deg,  rgba(255,101,80,0.7) 18.6%, rgba(255, 0, 0, 0.9) 119.9% )';
    if (temp > 15 || temp < 35)
        return 'linear-gradient( 183.5deg, rgba(229,251,31,0.7) 18.6%, rgba(244,173,6,1) 119.9% )';
}
