import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        proximaSemibolt: ["Proxima Nova", "semibold"],
        proximaRegular: ["Proxima Nova", "regular"],
        proximaButton: ["Proxima Nova", "bold"],
      },
      backgroundImage: {
        bgCloud:
          "url('/images/PreviewsTemplates/PreviewVCardPlus/bgCloud.jpg')",
        joBack: "url('/images/PreviewsTemplates/PreviewVCardPlus/joBack.jpg')",
        ava: "url('/images/PreviewsTemplates/PreviewVCardPlus/jona2.jpg')",
        bgPreviewWhatsapp:
          "url('/images/PreviewsTemplates/PreviewWhatsapp/bgImage.jpg')",
        bgPreviewWhatsappShape:
          "url('/images/PreviewsTemplates/PreviewWhatsapp/Shape.png')",
        gradient1:
          "linear-gradient(180deg, rgba(255,0,232,0) 17%, rgba(162,58,119,1) 16%)",
        gradient2:
          " linear-gradient(0deg, rgba(162,58,119,1) 75%, rgba(162,58,119,0) 90%)",
        gradientPdfPreview:
          " linear-gradient(180deg, rgba(255,211,215,1) 50%, rgba(255,255,255,1) 50%)",
        gradientImegesPreview:
          " linear-gradient(180deg, rgba(39,100,53,1) 45%, rgba(255,255,255,1) 35%)",
      },

      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        mainBg: "hsl(var(--mainBg))",
        lightBlue: "hsl(var(--lightBlue))",
        graydark: "hsl(var(--graydark))",
        lightGray: "hsl(var(--lightGray))",
        lightGreen: "hsl(var(--lightGreen))",
        green: "hsl(var(--green))",
        lightSky: "hsl(var(--lightSky))",
        sky: "hsl(var(--sky))",
        lightBrick: "hsl(var(--lightBrick))",
        brick: "hsl(var(--brick))",
        lightRed: "hsl(var(--lightRed))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
