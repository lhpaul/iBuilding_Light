var vows = require('vows'),
    assert = require('assert');

var api = {
    get: function (path) {
        return function () {
            client.get(path, this.callback);
        };
    }
};

vows.describe('Accesing api').addBatch({
  'GET /': { topic: function () {
    client.get('/status', this.callback);
  },
  'should respond with a 200 OK': function (e, res) {
    assert.equal (res.status, 200);
  }
}
}).export(module);