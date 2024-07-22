class Theme {
  constructor() {
    this.light = {
      "primary-100": "rgba(255, 228, 225, 1)",
      "primary-200": "rgba(248, 148, 135, 1)",
      "primary-300": "rgba(244, 102, 69, 1)",
      "primary-400": "#f14a23",
      "primary-500": "#ce330f",
      "primary-600": "#841c03",
      white: "hsl(0, 0%, 100%)",
      green: "hsl(77, 92%, 70%)",
    };
    this.dark = {
      "primary-100": "#841c03",
      "primary-200": "#ce330f",
      "primary-300": "#f14a23",
      "primary-400": "rgba(244, 102, 69, 1)",
      "primary-500": "rgba(248, 148, 135, 1)",
      "primary-600": "rgba(255, 228, 225, 1)",
      white: "hsl(0, 0%, 100%)",
      green: "hsl(77, 92%, 70%)",
    };
  }

  toggleTheme() {
    if (this.theme) {
      if (this.theme === this.light) this.theme = this.light;
      else this.theme = this.dark;
    }
    this.theme = this.light;
  }
}

const theme = new Theme();

theme.toggleTheme();

export default theme;
