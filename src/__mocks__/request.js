module.exports = {
    fetchData: async (url) => {
        try {
            const response = await fetch(url);
            const data = await response.json();

            return data;
        } catch (e) {
            return null;
        }
    }
}