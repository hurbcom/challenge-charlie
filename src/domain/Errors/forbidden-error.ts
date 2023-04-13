export class ForbiddenError extends Error {
    constructor() {
        super('Permissão insuficiente para acessar este recurso')
        this.name = 'ForbiddenError'
    }
}
