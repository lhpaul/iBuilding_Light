var request = require('request'),
      assert = require('assert');

      describe('Dispositivo de Luz', function(){
        describe('GET /status', function(){
          it("should respond with status 200", function(done){
            request('http://127.0.0.1:3000/status', function(err,resp,body){
              assert.equal(resp.statusCode, 200);
              done(); 
            }); 
        }); 
    });
});

var vows = require('vows'),
  assert = require('assert');
var sys = require('util');

var api = {
  get: function(path) {
    return function() {
      client.get(path, this.callback);
    };
  }
};

vows.describe('Accesing api').addBatch({
  'GET /': {
    topic: function() {
      client.get('/status', this.callback);
    },
    'should respond with a 200 OK': function(e, res) {
      sys.puts(res);
      assert.equal(res.status, 200);
    }
  }
}).export(module);