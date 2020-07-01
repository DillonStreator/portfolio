const withPWA = require('next-pwa');

module.exports = {
    ...withPWA({
        pwa: {
            dest: 'public'
        },
    }),
    env: {
        GA_TRACKING_ID: process.env.GA_TRACKING_ID
    },
    poweredByHeader: false,
};
