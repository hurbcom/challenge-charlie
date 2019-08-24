
export const getBackground = async () => {
    await fetch('https://cors-anywhere.herokuapp.com/https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR').then(res => res.json())
    .then((data) => {
      document.body.style.background = `#f3f3f3 url(https://www.bing.com/${data.images[0].url}.png) no-repeat`;
    },
)}