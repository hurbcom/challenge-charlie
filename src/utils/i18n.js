import { ptBR } from './languages/pt-br'

export default function i18n(string) {
  const language = navigator.language
  const message = string.toLowerCase().replace(/ /g, '_').trim()

  switch (language.toLowerCase()) {
    case 'pt-br': {
      return ptBR[message]
    }

    default: {
      return string
    }
  }
}
