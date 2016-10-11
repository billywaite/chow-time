var path = require('path');

module.exports = {
	showHome: showHome
};

function showHome(req, res) {
	res.sendFile(path.join(__dirname, '../../views/index.html'));
}