var download = (url, savepath, callback) => {
    let http = require('http'),
        fs = require('fs'),
        outfile = fs.createWriteStream(savepath);
    http.get(url, res => {
        res.pipe(outfile);
        res.on('end', _=>{
            outfile.close();
            callback();
        });
    });
};

download('http://jpub.tistory.com/539', 'spring.html', _=>console.log('ok, spring.'));
download('http://jpub.tistory.com/537', 'angular.html', _=>console.log('ok, angular.'));