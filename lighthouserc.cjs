module.exports = {
	ci: {
		collect: {
			url: 'http://0.0.0.0:3000',
			startServerCommand: 'node build',
			startServerReadyPattern: 'Listening on 0.0.0.0:3000'
		},
		assert: {
			preset: 'lighthouse:no-pwa'
		},
		upload: {
			target: 'temporary-public-storage'
		}
	}
};
