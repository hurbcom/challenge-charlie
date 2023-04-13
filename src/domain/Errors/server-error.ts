export class ServerError extends Error {
    constructor(message?: string) {
        switch (message) {
            case 'Network Error':
                super('Parece que os nossos servidores estão offline. Por favor tente novamente')
                break
            default: super('Ocorreu um erro ao processar sua solicitação. Por favor tente novamente')
                break
        }
        this.name = 'ServerError'
    }
}
