let urlType = require('url'),
    base = 'http://kujirahand.com/url/test/index.html',
    u1, u2, u3;

u1 = urlType.resolve(base, 'a.html');
console.log('u1 = ', u1);

u2 = urlType.resolve(base, '../b.html');
console.log('u2 = ', u2);

u3 = urlType.resolve(base, '/c.html');
console.log('u3 = ', u3);