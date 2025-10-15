
export default {
  config: {

         menu: {

      items: [
        {
          id: 'content-manager',
          to: '/content-manager',
          label: 'Content Manager',
          icon: 'folder',
          permissions: ['content-manager.read'],
        },
      
      ],
    },

    // Add a new locale, other than 'en'
    locales: ["es"],

    // Override or extend the theme
    theme: {
      // overwrite light theme properties
      light: {
        colors: {
    alternative200: '#9CA3AF',
    alternative500: '#ac73e6',
    alternative600: '#ac73e6',
    alternative700: '#e0c1f4',
    buttonNeutral0: '#ffffff',
    buttonPrimary500: '#E4302A',
    buttonPrimary600: '#c22d28ff',
    danger100: '#1B1C1D',
    danger200: '#9CA3AF',
    danger500: '#ee5e52',
    danger600: '#ee5e52',
    danger700: '#ee5e52',
    neutral0: '#282A2C',
    neutral100: '#1B1C1D',
    neutral1000: '#ffffff',
    neutral150: '#1B1C1D',
    neutral200: '#9CA3AF',
    neutral300: '#9CA3AF',
    neutral400: '#a5a5ba',
    neutral500: '#c0c0cf', 
    neutral600: '#a5a5ba',
    neutral700: '#eaeaef',
    neutral800: '#ffffff',
    neutral900: '#ffffff',
    primary100: '#1B1C1D',
    primary200: '#9CA3AF',
    primary500: '#c22d28ff',
    primary600: '#c22d28ff',
    primary700: '#c22d28ff',
    secondary100: '#1B1C1D',
    secondary200: '#9CA3AF',
    secondary500: '#66b7f1',
    secondary600: '#66b7f1',
    secondary700: '#b8e1ff',
    success100: '#1B1C1D',
    success200: '#9CA3AF',
    success500: '#5cb176',
    success600: '#5cb176',
    success700: '#c6f0c2',
    warning100: '#1B1C1D',
    warning200: '#9CA3AF',
    warning500: '#f29d41',
    warning600: '#f29d41',
    warning700: '#fae7b9',
        },
      },

      // overwrite dark theme properties
      dark: {
        colors: {
      
    alternative200: '#9CA3AF',
    alternative500: '#ac73e6',
    alternative600: '#ac73e6',
    alternative700: '#e0c1f4',
    buttonNeutral0: '#ffffff',
    buttonPrimary500: '#E4302A',
    buttonPrimary600: '#c22d28ff',
    danger100: '#1B1C1D',
    danger200: '#9CA3AF',
    danger500: '#ee5e52',
    danger600: '#ee5e52',
    danger700: '#ee5e52',
    neutral0: '#282A2C',
    neutral100: '#1B1C1D',
    neutral1000: '#ffffff',
    neutral150: '#1B1C1D',
    neutral200: '#9CA3AF',
    neutral300: '#9CA3AF',
    neutral400: '#a5a5ba',
    neutral500: '#c0c0cf', 
    neutral600: '#a5a5ba',
    neutral700: '#eaeaef',
    neutral800: '#ffffff',
    neutral900: '#ffffff',
    primary100: '#1B1C1D',
    primary200: '#9CA3AF',
    primary500: '#c22d28ff',
    primary600: '#c22d28ff',
    primary700: '#c22d28ff',
    secondary100: '#1B1C1D',
    secondary200: '#9CA3AF',
    secondary500: '#66b7f1',
    secondary600: '#66b7f1',
    secondary700: '#b8e1ff',
    success100: '#1B1C1D',
    success200: '#9CA3AF',
    success500: '#5cb176',
    success600: '#5cb176',
    success700: '#c6f0c2',
    warning100: '#1B1C1D',
    warning200: '#9CA3AF',
    warning500: '#f29d41',
    warning600: '#f29d41',
    warning700: '#fae7b9',
        },

      },
    },
    // Extend the translations
    translations: {
      fr: {
        "Auth.form.email.label": "test",
        Users: "Utilisateurs",
        City: "CITY (FRENCH)",
        // Customize the label of the Content Manager table.
        Id: "ID french",
      },
    },
    // Disable video tutorials
    tutorials: false,
    // Disable notifications about new Strapi releases
    notifications: { releases: false },
  },

    bootstrap() {
   
    const style = document.createElement("style");
    style.innerHTML = `
      div[role="alert"][class*="Trial"],
      div[class*="UpgradePlan"],
      div[class*="UpgradeCTA"] {
        display: none !important;
      }
    `;
    document.head.appendChild(style);
  },
  
};