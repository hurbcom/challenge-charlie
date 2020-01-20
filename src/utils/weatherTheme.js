const themes = {
  warn: {
    lighten:'#fd8888cb',
    normal:'#ff5353cb',
    darken:'#fd1717cb'
  },
  cold: {
    lighten:'#88b1fdcb',
    normal:'#536dffcb',
    darken:'#2617fdcb'
  },
  normal: {
    lighten:'#feffaccb',
    normal:'#fffc53cb',
    darken:'#fdf917cb'
  },
  default: {
    lighten:'#b9b9b9cb',
    normal:'#6e6e6ecb',
    darken:'#424242cb'
  }
};

const getThemeByTemp = (tempC) => {
  if(tempC === undefined || tempC === null) return themes.default;
  else if(tempC < 15) return themes.cold;
  else if(tempC > 35) return themes.warn;
  else return themes.normal;
}

export { getThemeByTemp };