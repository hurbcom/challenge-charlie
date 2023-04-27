/**
 * Declaration to allow import of svg files
 */

declare module '*.svg' {
    const content: any
    export const ReactComponent: any
    export default content
}
