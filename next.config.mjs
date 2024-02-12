/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        // Important: return the modified config
        // config.module.rules.push({
        //     test: /\.node/,
        //     use: 'raw-loader',
        // })

        config.externals.push({
            sharp: "commonjs sharp",
            canvas: "commonjs canvas",
        })

        return config
    },
};

export default nextConfig;