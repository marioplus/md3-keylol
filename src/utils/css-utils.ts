export const styleIdPrefix = 'md3kl-style-'

export function getStyleId(id: string) {
    return id.startsWith(styleIdPrefix)
        ? id
        : styleIdPrefix + id
}

export function styleLoader(id: string, ...css: string[]) {
    const style = document.createElement('style')
    style.id = getStyleId(id)
    style.textContent = css.join('\n')
    document.head.appendChild(style)
    return style
}

export function styleReLoader(id: string, ...css: string[]) {
    const styleId = getStyleId(id)
    const style = document.getElementById(styleId)
    if (style) {
        style.textContent = css.join('\n')
    } else {
        console.error(`style with id ${styleId} not found`)
    }
    return style
}
