var
    request = require('supertest'),
    app = require('../app');

describe('Home', function() {

    describe('Home', function() {
        it('should get landing page', function(done) {
            request(app)
                .get('/')
                .expect(200)
                .end(function(err, res) {
                    done(err);
                });
        });
    });
})