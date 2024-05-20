import {defineConfig} from 'vite'
import monkey, {cdn} from 'vite-plugin-monkey'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        monkey({
            entry: 'src/main.ts',
            userscript: {
                name: 'Material Design for Keylol',
                icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAeCAYAAABe3VzdAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF8WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTA1LTE2VDE3OjA2OjA4KzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0wNS0xNlQyMDowMjo1OSswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMC0wNS0xNlQyMDowMjo1OSswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpjZjEzZWI2Ni1kMDAxLTFkNDUtYmIzZS1kMTA5MjZlMjgxNTgiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo2NmQ4NjBiMC1jMzVlLTc0NDUtYWNhOS1hNWEyZDMxMWJkMzEiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDphOGExNjM5Mi04ODgzLTRkNGUtYTgzMy1mY2JlZTY4M2EzYjAiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmE4YTE2MzkyLTg4ODMtNGQ0ZS1hODMzLWZjYmVlNjgzYTNiMCIgc3RFdnQ6d2hlbj0iMjAyMC0wNS0xNlQxNzowNjowOCswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpjZjEzZWI2Ni1kMDAxLTFkNDUtYmIzZS1kMTA5MjZlMjgxNTgiIHN0RXZ0OndoZW49IjIwMjAtMDUtMTZUMjA6MDI6NTkrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4wIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7vH+vPAAAC8klEQVRYw7WYPWgUQRTHV0GJSU6IlQopBBstRPC7EAzYiGW00UJiIaJno0HwA6MoKoIBjUoUjCAEsRDUKilUtFAhFiLEToiKFyRcNJfbr9u7jP/JziaTYedr73zw43Zv573538zbd2/XmQyI41UZlZrj+T4j4I79nOd5B8EA+AQKoASKYBQ8B6fAWsD7xXju7KcfEcevGtP1JyDdDiFExSpwFUwQcxsEmzVxVWwAL1isLbMrJxl4HPgku922FLYOPOH8d9KVlAkcII2xd6DNYMXuCH5n6bVYYDQjOrwijbdtKcLaQb/kRznzApG8nNOD/yDuI90ubo414LokfTzQslBgVEsc9zVY2GtBWBsTVlP47OZXORYYVujJcjBlOPEwOA+OgjzoBaPc9SGwl5toBbgGipq4N8U0iAW6Lj3pMRD2AWxVJPsx0CV8dw64BrG/pMVkORjQk4ImQL9FuVjCVviHRTq0ywUGYYfGechQ2GJwAvy2zNX9spixQM/rUzi7bGKdsG4wluFGeqSKnQh8rwhwVyPuEPiW8S7/qduVROAvRZBNEucj4GudZWi9qcCyJMAUS/jEoRkcBp8bUCPzJnmtEzgmOOQaVMBfmlYE3RZPg2WCU75OcfSvrMlWoOom2ZjiGNQhcLtNC5YIvKUIeCPF8WRGcRdtm1dWqCu7FEHLEueipbjBLN216V/dsxTnM5YCn2YR6LEtpicXNBM8FpyXstXVGW2tquy4tx6BzQbbNgI6hE5FZTOgIvR/e+y3OO4HKZ2G27XIsC5GkubUuMxMB9FcDibcNxB4iRt/WTKmygSm2RtTgSU/dGYf1oULwwYic2xsq2JrVXbaTGBF+th5TzNBDzdWrKOh5rkjsR31CExaeFdRH5u4VYy4vIsMc7mgE1hG+umWeSW4IumS+yxWXGZvdSKdBS+P8BA/99KIvgSapwXfHQAPcTwCxsF3PHC1+mHkBDWyuhxWx0teWMK22EDKftjpYj4X84pMTP51/gEoIXwAfuCi2AAAAABJRU5ErkJggg==',
                homepage: 'https://github.com/marioplus',
                namespace: 'https://github.com/marioplus/md-keylol',
                match: ['https://keylol.com/*'],
                'run-at': 'document-start'
            },
            build: {
                externalGlobals: {
                    mdui: cdn.jsdelivr('mdui', 'mdui.global.min.js'),
                },
                externalResource: {
                    'mdui/mdui.css': cdn.jsdelivr(),
                }
            }
        }),
    ],
})
