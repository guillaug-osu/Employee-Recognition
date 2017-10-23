var
    request = require('supertest'),
    app = require('../app'),
    assert = require('chai').assert;

describe('Register', function() {

    describe('Register', function() {
        it('should return 200 when form is not completely filled', function(done) {
            request(app)
                .post('/register')
                .send({
                    email: "test@gmail.com",
                    password: "password"
                })
                .expect(200)
                .end(function(err, res) {
                    done(err);
                });
        });

        it('should return 400 when file is not uploaded', function(done) {
            request(app)
                .post('/register')
                .send({
                    name: "Test",
                    email: "test@gmail.com",
                    password: "Password123!",
                    passwordMatch: "Password123!"
                })
                .expect(400)
                .end(function(err, res) {
                    assert.strictEqual(res.text, "No files were uploaded.");
                    done(err);
                });
        });

        it('should return 200 after form is filled and file is uploaded', function(done) {
            request(app)
                .post('/register')
                .attach('signature', 'tests/assets/cat.jpg')
                .field("name", "Test")
                .field("email", "test@gmail.com")
                .field("password", "Password123!")
                .field("passwordMatch", "Password123!")
                .expect(200)
                .end(function(err, res) {
                    done(err);
                });
        });
    });
})