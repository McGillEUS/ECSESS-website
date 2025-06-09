const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.cYVfR2vN.js",app:"_app/immutable/entry/app.9Y43kxZR.js",imports:["_app/immutable/entry/start.cYVfR2vN.js","_app/immutable/chunks/ZRKSbuk1.js","_app/immutable/chunks/Ow3wAJci.js","_app/immutable/chunks/Hlf9az3Y.js","_app/immutable/entry/app.9Y43kxZR.js","_app/immutable/chunks/Ow3wAJci.js","_app/immutable/chunks/DYKiCq2r.js","_app/immutable/chunks/Hlf9az3Y.js","_app/immutable/chunks/p26bu0g8.js","_app/immutable/chunks/bM6RsxOl.js","_app/immutable/chunks/BCXYo4VB.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-DJI34HqG.js')),
			__memo(() => import('./chunks/1-OSbG0_sR.js'))
		],
		routes: [
			
		],
		prerendered_routes: new Set(["/","/__data.json","/council","/council/__data.json","/events","/events/__data.json","/join","/resources","/resources/__data.json","/showroom"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set(["/","/__data.json","/council","/council/__data.json","/events","/events/__data.json","/join","/resources","/resources/__data.json","/showroom"]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
