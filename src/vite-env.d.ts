/// <reference types="vite/client" />
/// <reference types="vite-plugin-monkey/client" />
//// <reference types="vite-plugin-monkey/global" />

export {}
declare global {
    interface Window {
        mdkl: {
            applyTheme: (theme: Record<string, string>) => void;
            generateTheme: (color: string, isDark: boolean) => Record<string, string>;
        };
    }
}

