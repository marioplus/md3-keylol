import * as m3Utils from '@material/material-color-utilities'
import {styleReLoader} from './css-utils'

function generateTheme(color: string, isDark: boolean) {
    const argb = m3Utils.argbFromHex(color)
    const hct = m3Utils.Hct.fromInt(argb)
    const dynamicScheme = new m3Utils.SchemeTonalSpot(hct, isDark, 0)

    const theme: Record<string, string> = {
        'theme-mode': isDark ? 'dark' : 'light',
        'theme-source': color,
    }
    Object.entries(m3Utils.MaterialDynamicColors)
        .forEach(color => {
            const name = color[0].replaceAll(/([A-Z])/g, '-$1').toLowerCase()
            if (color[1] instanceof Number) {
                const colorElement = color[1] as number
                theme[name] = m3Utils.hexFromArgb(colorElement)
            } else if (color[1] instanceof m3Utils.DynamicColor) {
                theme[name] = m3Utils.hexFromArgb(color[1].getArgb(dynamicScheme))
            }
        })
    return theme
}

function rgbFromArgb(argb: number) {
    const red = m3Utils.redFromArgb(argb)
    const green = m3Utils.greenFromArgb(argb)
    const blue = m3Utils.blueFromArgb(argb)
    return [red, green, blue].join(', ')
}

function applyTheme(theme: Record<string, string>) {
    const cssVars = Object.keys(theme)
        .map(name => {
            const hex = theme[name as keyof typeof theme]
            const isCustom = /^theme-.+/.test(name)
            if (isCustom) {
                return `  --md3kl-color-${name}: ${hex};\n`
            } else {
                const rgb = rgbFromArgb(m3Utils.argbFromHex(hex))
                return [
                    `  --md3kl-color-${name}-rgb: rgb(${rgb});\n`,
                    `  --md3kl-color-${name}: ${rgb};\n`
                ].join('')
            }
        })
    const css = ':root {' + cssVars.join('') + '}'
    styleReLoader('theme', css)
}

export {generateTheme, applyTheme}

