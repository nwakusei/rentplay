import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.tcdn.com.br",
				pathname: "/**", // aceita qualquer imagem desse domínio
			},
		],
	},
};

export default nextConfig;
