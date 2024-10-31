import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backdropBlur: {
        '4': '4px',
      },
      lineHeight: {
        '24.2px': '24.2px',
        "23.5px": "23.5px", 
        "26.44px": "26.44px", 
        "61px": "61px", 

      },

      fontFamily:{
        inter: "Inter",
        heebo: "Heebo"
      },
      width:{
        "292px":"292px",
        "282px":"282px",
        "298px":"298px",
        "483px":"483px",
        "497px":"497px",
        "919px":"919px",
        "68px":"68px",
        "1440px":"1440px",
        "1030px":"1030px",
        "246px":"246px",
        "521px":"521px",
        "623.46px":"623.46px",
        
      },
      height:{
        "299px":"299px",
        "272px":"272px",
        "356px":"356px",
        "502px":"502px",
        "934.2px":"934.2px",
        "180px":"180px",
        "2453px":"2453px",
        "308px":"308px",
        
      },
      backgroundColor:{
        "cv":"#F98585",
        "recent":"#F4E2E2",
        "pageBg":"#CFA6A61C",
        "ellipse":"#AA9F9F4F",
        "heroSection":"#21243D",
      },
      dropShadow:{
        "cvButton": "0 4px 4px 0 rgba(65, 65, 65, 0.54)"
      },
      margin: {
        '1246px': '1246px',
        '1088px': '1088px',
        '963px': '963px',
        '969px': '969px',
        '402px': '402px',
        '246px': '246px',
        '665px': '665px',
      },
      spacing:{
        "402px":"402px",
      }

      




    },
  },
  plugins: [],
};
export default config;
