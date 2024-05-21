// @ts-ignore isolatedModules
import {applyTheme, generateTheme} from './utils/m3-utils.ts'

import colorLess from './style/design-tokens/color.less?inline'
import elevationLess from './style/design-tokens/elevation.less?inline'
import motionLess from './style/design-tokens/motion.less?inline'
import sizeLess from './style/design-tokens/size.less?inline'

import homeLess from './style/home.less?inline'
import appBarLess from './style/top-app-bar.less?inline'

import {styleLoader} from './utils/css-utils'

styleLoader('global', elevationLess, motionLess, sizeLess)
styleLoader('theme', colorLess)

// 首页
const homePathNames = new Set(['/', '/forum.php'])
if (homePathNames.has(window.location.pathname)) {
    console.log('md3kl-home', window.location.pathname)
    styleLoader('home', homeLess)
} else {
    styleLoader('other', appBarLess)
}

const theme = generateTheme('#0F75E3', false)
applyTheme(theme)

// @ts-ignore
window.generateTheme = generateTheme
// @ts-ignore
window.applyTheme = applyTheme

