/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "audbnoftlvwgfvmhbndt.supabase.co",
        port: "",
      },
    ],
  },
}

module.exports = nextConfig
