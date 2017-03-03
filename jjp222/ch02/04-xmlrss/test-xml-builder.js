let xml2js = require('xml2js'),
    parseString = xml2js.parseString,
    Builder = xml2js.Builder,
    xml = ""+
        "<items>" +
        "<item><name>Banana</name><price>130</price></item>" +
        "<item><name>Apple</name><price>300</price></item>" +
        "<item><name>Pear</name><price>250</price></item>" +
        "</items>";

parseString(xml, (err, result) => {
    console.log(JSON.stringify(result));
    console.log('---------------------');
    console.log(new Builder().buildObject(result));
});