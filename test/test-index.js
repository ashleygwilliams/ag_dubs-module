var test = require('tap').test;

var ashley = require('../index.js');

test('Does ashley work at npm?', function (t) {
  t.ok(ashley, 'damn right she does');
  t.done();
});
