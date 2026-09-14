/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // All current Image sources are local. Do not allow arbitrary remote hosts.
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/partner-kit/:path*",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow, noarchive, nosnippet, noimageindex" },
          { key: "Referrer-Policy", value: "no-referrer" },
        ],
      },
    ]
  },
}

export default nextConfig
