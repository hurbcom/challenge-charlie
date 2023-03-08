export const getHeroImage = async () => {
    const image = await fetch('/api/hero-image').then(res => res.json())
    return image
}