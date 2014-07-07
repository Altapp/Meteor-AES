Package.describe({
	summary: "Stand-alone encryption package to encrypt/decrypt data with AES using Crypto-JS."
});

Package.on_use(function (api) {
	api.add_files('aes.js', ['client', 'server']);
	api.export && api.export('CryptoJS');
});