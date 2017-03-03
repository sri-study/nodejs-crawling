let parseString = require('xml2js').parseString,
    xml = "<item>Apple</item>";

parseString(xml, (err, result) => {
    console.log(JSON.stringify(result.item));
});