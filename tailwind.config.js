/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.tsx"],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                grupo: {
                    1: '#000',
                    2: '#fff',
                    3: '#FFEE02',
                    4: '#FF0198',
                    5: '#0074D4',
                    6: '#FF8F27',
                    7: '#FF272A',
                    8: '#00E134',
                },
                backgroud: {
                    1: '#ffffff',
                    2: '#000000',
                },
            }
        }
    },
    plugins: [],
}