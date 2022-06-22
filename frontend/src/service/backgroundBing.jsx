import axios from 'axios'; 

async function getImage (setBackground) {
    await axios.get(
        "https://thingproxy.freeboard.io/fetch/https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR"
    ).then(response => setBackground(`https://www.bing.com/${response.data.images[0].url}`))
}

export default getImage; 
