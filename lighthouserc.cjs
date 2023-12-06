module.exports = {
	ci: {
		collect: {
			url: [
				'http://0.0.0.0:3000',
				'http://0.0.0.0:3000/courses',
				'http://0.0.0.0:3000/courses/pre-algebra',
				'http://0.0.0.0:3000/courses/pre-algebra/1-introduction-to-algebra',
				'http://0.0.0.0:3000/auth/login'
			],
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
