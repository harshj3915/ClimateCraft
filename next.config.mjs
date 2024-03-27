/** @type {import("next").NextConfig} */
const nextConfig = {
    images: {
        domains: ["https://pixabay.com/"],
    },
    env:{
        WEATHER_APP_API:"717b2ead64cd49d39c995712242103",
        BACKGROUND_API:"42994632-d0786b121de2f8255a448a2e6"
    }
};

export default nextConfig;
