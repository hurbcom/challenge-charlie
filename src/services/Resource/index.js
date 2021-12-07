export const fetchData = async (url) => {
    let content;

    try {
        const response = await fetch(url)

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        } else {
            content = await response.json()
        }

        return content
    } catch (e) {
        return null
    }
};