let sql = require('sqlite3').verbose(),
    db = new sql.Database('test.sqlite');

db.serialize(_=>{
    db.run('CREATE TABLE IF NOT EXISTS items(name, value)');
    
    let stmt = db.prepare('INSERT INTO items VALUES(?,?)');
    stmt.run(['banana', 300]);
    stmt.run(['apple', 150]);
    stmt.run(['mango', 250]);
    stmt.finalize();

    db.each('SELECT * FROM items', (err, row) => {
        console.log(row.name + ' : ' + row.value);
    });
});

db.close();