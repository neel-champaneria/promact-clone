module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      buildingAnimateLg: "1164px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        promactDarkBlue: "#0a3164",
        promactLightBlue: "#3a37ea",
        promactYellow: "#f9c213",
        promactGray: "#333333",
        promactBorderLightGray: "#ececec",
        promactLightGray: "#fcfcfc",
        promactServiceOrange: "#e26132",
        promactServiceGreen: "#72b8a1",
        promactServiceDarkBlue: "#4d23a8",
        promactServiceLightBlue: "#5cbcff",
        promactServicePink: "#cb509a",
        promactCompanyInfo: "#f4f9fa",
        promactAchievementColor: "#a9d4dC",
        promactAccordian: "#1473e6",
        promactTestimonial: "#58868f",
        promactCopyright: "#1d1d1d",
      },
      backgroundImage: (theme) => ({
        achievement: "url('../images/achievement.webp')",
      }),
      animation: {
        "spin-slow": "spin 200s linear infinite",
      },
    },
  },
  plugins: [],
};
