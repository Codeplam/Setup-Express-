var low = require('lowdb');
var FileSync = require('lowdb/adapters/FileSync');
var adapter = new FileSync('db.json');
var db = low(adapter);

db.defaults({ posts: [] }).write(); // đoạn này để set default trong file json ta có một mạng posts rỗng

module.exports = db;