let yaml = require('js-yaml'),
    fs = require('fs'),
    txt = fs.readFileSync('test.yml', 'utf-8'),
    obj = yaml.safeLoad(txt);

obj.items.forEach(data => {
    console.log(data.name, data.price);
});

    