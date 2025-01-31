import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    env: {
        EMAIL_HOST: process.env.EMAIL_HOST,
        EMAIL_PORT: process.env.EMAIL_PORT,
        EMAIL_USER: process.env.EMAIL_USER,
        EMAIL_PASS: process.env.EMAIL_PASS,
    },
};

export default nextConfig;
