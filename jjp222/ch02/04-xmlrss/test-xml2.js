let parseString = require('xml2js').parseString,
    xml = "<fruits shop='AAA'><item price='140'>Banana</item><item price='200'>Apple</item></fruits>";

parseString(xml, (err, result) => {
    // console.log(JSON.stringify(result));

    let shop = result.fruits.$.shop;
    console.log('shop:', shop);

    let items = result.fruits.item;
    items.map(item=>{
        console.log('--name=', item._);
        console.log('\tprice=', item.$.price);
    });
});