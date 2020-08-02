import { de, es, it, ptBr } from './languages'

export default function i18n(string) {
  const text = string.toLowerCase().replace(/ /g, '_').trim()

  switch (navigator.language.toLowerCase()) {
    case 'de': {
      return de[string]
    }

    case 'es': {
      return es[string]
    }

    case 'it': {
      return it[string]
    }

    case 'pt-br': {
      return ptBr[text]
    }

    default: {
      return string
    }
  }
}
