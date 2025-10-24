import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

const nextConfig: NextConfig = {
  /* enable a static export */
  output: 'export',
  /* config options here */
  reactCompiler: true,
  /* Disables Next.js image optimization (not compatible with static export) */
  images: {
    unoptimized: true,
  },
};

export default withFlowbiteReact(nextConfig);
