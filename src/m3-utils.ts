import {argbFromHex, blueFromArgb, DynamicColor, greenFromArgb, Hct, hexFromArgb, MaterialDynamicColors, redFromArgb, SchemeTonalSpot} from '@material/material-color-utilities'

function generateTheme(color: string, isDark: boolean) {
    const argb = argbFromHex(color)
    const hct = Hct.fromInt(argb)
    const dynamicScheme = new SchemeTonalSpot(hct, isDark, 0)

    const theme: Record<string, string> = {}
    Object.entries(MaterialDynamicColors)
        .forEach(color => {
            const name = color[0].replaceAll(/([A-Z])/g, '-$1').toLowerCase()
            if (color[1] instanceof Number) {
                const colorElement = color[1] as number
                theme[name] = hexFromArgb(colorElement)
            } else if (color[1] instanceof DynamicColor) {
                theme[name] = hexFromArgb(color[1].getArgb(dynamicScheme))
            }
        })
    return theme
}

function rgbFromArgb(argb: number) {
    const red = redFromArgb(argb)
    const green = greenFromArgb(argb)
    const blue = blueFromArgb(argb)
    return [red, green, blue].join(', ')
}

function applyTheme(theme: Record<string, string>) {
    for (let name in theme) {
        const color = theme[name as keyof typeof theme]
        const propKey = `--mdkl-color-${name}`
        document.documentElement.style.setProperty(propKey, rgbFromArgb(argbFromHex(color)))
    }
}

export {generateTheme, applyTheme}

