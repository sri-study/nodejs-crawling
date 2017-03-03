let rssUri = 'http://web.kma.go.kr/weather/forecast/mid-term-rss3.jsp?stnId=109',
    client = require('cheerio-httpcli');

client.fetch(rssUri, {}, (err, $, res) => {
    if (err) {
        console.log(err);
        return;
    }

    let city = $('location:first-child > city').text(),
        datas = $('location:first-child > data');
    datas.map( (idx, data) => {
        console.log(
            [
                city, 
                $(data).find('tmEf').text(), 
                $(data).find('wf').text(), 
                $(data).find('tmn').text(), 
                $(data).find('tmx').text()
            ].join('\t')
        );
    });
});
