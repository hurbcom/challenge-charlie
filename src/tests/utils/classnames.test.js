const { default: classNames } = require("@/utils/classnames")

describe('utils classnames function', () => {
    it('should concatenate multiple strings with space in between them', () => {
        let classes = classNames('flex', 'flex-col w-full', '')
        expect(classes).toBe('flex flex-col w-full')
    })
    it('should ignore invalid params and concatenate rest', () => {
        let classes = classNames('flex', null, 'w-full', null)
        expect(classes).toBe('flex w-full')
    })
})