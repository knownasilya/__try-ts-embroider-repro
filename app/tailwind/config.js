module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: [],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    require('@frontile/buttons/tailwind'),
    require('@frontile/overlays/tailwind'),
    require('@frontile/notifications/tailwind'),
    require('@frontile/forms/tailwind'),
  ],
};
