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