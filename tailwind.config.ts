import type {Config} from "tailwindcss";
import DefaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
    mode: "jit",
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
    theme: {
        fontFamily: {
            jost: ["Jost", ...DefaultTheme.fontFamily.sans],
            robotoMono: ['Roboto Mono', ...DefaultTheme.fontFamily.mono],
        },
        colors: {
            transparent: "transparent",
            current: "currentColor",
            black: "#000",
            white: "#fff",
            red: {
                500: "#ea4335",
                300: "#f28b82",
            },
            yellow: {
                600: "#f9ab00",
                500: "#F9AB00",
                200: "#fde293",
            },
            green: {
                500: "#34a853",
                300: "#81c995",
            },
            blue: {
                500: "#4285f4",
                300: "#8ab4f8",
            },
            grey: {
                700: "#616161",
                100: "#f1f3f4",
                400: "#9CA3AF",
            },
            slate: {
                700: "#231656",
            },
            sky: {
                500: "#2196f3",
                950: "#001A44",
            },
            orange: {
                500: "#ff9800"
            },
            stone: {
                300: "#C4C4C4",
            },
            neutral: {
                600: "#4E4E4E",
            },
            indigo: {
                500: "#3f51b5",
                950: "#231656"
            },
        },
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
export default config;
