export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-24d11d27.js","imports":["_app/immutable/start-24d11d27.js","_app/immutable/chunks/index-edb2350d.js","_app/immutable/chunks/index-8212d1f4.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
				leaf: 2
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
