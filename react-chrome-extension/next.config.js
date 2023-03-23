/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains:['mhxmexdtagjbmquxeusj.supabase.co'],
    unoptimized: true
  },
  env:{
    PUB_SUPABASE_SECRET_KEY: process.env.PUB_SUPABASE_SECRET_KEY,
    PRIV_SUPABASE_SECRET_KEY: process.env.PRIV_SUPABASE_SECRET_KEY,
  }
}

module.exports = nextConfig
