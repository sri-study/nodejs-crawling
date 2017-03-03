let rssUri = 'http://web.kma.go.kr/weather/forecast/mid-term-rss3.jsp?stnId=109',
    parseString = require('xml2js').parseString,
    request = require('request');


request(rssUri, (err, res, xml) => {
    if ( !err && res.statusCode == 200 ) {
        analyzeRss(xml);
    }
});

function analyzeRss(xml) {
    parseString(xml, (err, obj) => {
        if(err) {
            console.log(err); 
            return;
        }
        
        let body = obj.rss.channel[0].item[0].description[0].body[0],
            datas = body.location[0].data,
            city = body.location[0].city
            ;

        datas.map(data=>{
            console.log(
                [city, data.tmEf, data.wf, data.tmn, data.tmx].join('\t')
            );
        });
    });
}