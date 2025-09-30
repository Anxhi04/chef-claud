// cors-server.js
const cors_proxy = require('cors-anywhere');

cors_proxy.createServer({
    originWhitelist: [], // lejon të gjitha origin-et
    requireHeader: [],   // opsional, nuk kërkon header Authorization
}).listen(8080, 'localhost', () => {
    console.log('CORS Anywhere running on http://localhost:8080');
});
