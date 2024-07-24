import { useEffect, useState } from "react";
const light = {
  light: true,
  "primary-100": "#ffe4e1",
  "primary-200": "#f89487",
  "primary-300": "#f46645",
  "primary-400": "#f14a23",
  "primary-500": "#ce330f",
  "primary-600": "#841c03",
  match: "#de6348",

  white: "hsl(0,0%,100%)",
  gray: "hsl(0, 0%, 92%)",

  green: "#d1f96c",
};

const dark = {
  dark: true,
  "primary-100": "#e03711",
  "primary-200": "#b12708",
  "primary-300": "#841c03",
  "primary-400": "rgba(248, 148, 135, 1)",
  "primary-500": "rgba(255, 228, 225, 1)",
  "primary-600": "rgba(244, 102, 69, 1)",
  match: "#e14623",

  white: "hsl(0,0%,100%)",
  gray: "hsl(0, 0%, 92%)",
  green: "hsl(77, 92%, 70%)",
};

function useTheme(initial) {
  const [activeTheme, setActiveTheme] = useState(initial);
  const [theme, setTheme] = useState(light);
  useEffect(() => {
    if (activeTheme === "light") setTheme(light);
    else setTheme(dark);
  }, [activeTheme]);

  return [theme, setActiveTheme];
}

export default useTheme;
