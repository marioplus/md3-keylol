// @ts-ignore isolatedModules
import {applyTheme, generateTheme} from './m3-utils.ts'

// 全局样式
if (window.location.host === 'keylol.com') {
    import('./style/design-tokens/color.less')
    import('./style/design-tokens/elevation.less')
    import('./style/design-tokens/motion.less')
    import('./style/design-tokens/s.less')

    import('./style/top-app-bar.less')
}

// 首页
const homePathNames = ['/', '/forum.php']
if (homePathNames.concat(window.location.pathname)) {
    console.log('mdkl-home')
    import('./style/home.less')
}

const theme = generateTheme('#0F75E3', false)
applyTheme(theme)

window.mdkl.generateTheme = generateTheme
window.mdkl.applyTheme = applyTheme
