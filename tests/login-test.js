var
    request = require('supertest'),
    app = require('../app'),
    assert = require('chai').assert;

describe('Login', function() {

    describe('Login', function() {
        it('should return 302', function(done) {
            request(app)
                .post('/login')
                .send({
                    email: "test@gmail.com",
                    password: "password"
                })
                .expect(302)
                .end(function(err, res) {
                    assert.strictEqual(res.headers.location, "/");
                    done(err);
                });
        });
    });
})