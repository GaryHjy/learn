const splitChunks = {
	chunks: "async", // 默认只作用于异步模块，为`all`时对所有模块生效,`initial`对同步模块有效
	minSize: 30000, // 合并前模块文件的体积
	minChunks: 1, // 最少被引用次数
	maxAsyncRequests: 5, // 默认最大并行chunk默认下载为5个
	maxInitialRequests: 3, // 对于entry chunk默认并行下载最大为3个
	name: true,
	cacheGroups: {
		default: {
			minChunks: 2,
			priority: -20,
			reuseExistingChunk: true,
		},
		vendors: {
			test: /[\\/]node_modules[\\/]/,
			priority: -10
		}
	}
}