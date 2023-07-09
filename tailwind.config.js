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
                    3: '#6100FF',
                    4: '#FF0054',
                    5: '#00FF85',
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