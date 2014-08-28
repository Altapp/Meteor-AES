Package.describe({
    name: "jplatimer:aes",
	summary: "Stand-alone encryption package to encrypt/decrypt data with AES using Crypto-JS.",
	git: "https://github.com/manybothans/Meteor-AES.git",
    version: "1.1.1"
});

Package.onUse(function (api) {
	// If no version is specified for an 'api.use' dependency, use the
	// one defined in Meteor 0.9.0.
	api.versionsFrom('0.9.0');

	api.addFiles('aes.js');
	api.export && api.export('CryptoJS');
});