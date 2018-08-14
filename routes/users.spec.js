var should = require('should');
var users = require('./users');
var httpMock = require('node-mocks-http');

var req = httpMock.createRequest();
var res = httpMock.createResponse();

describe('Users', function(){
    it('should return the statusCode 200', function(){
        users.index(req, res);
        res.statusCode.should.be.equal(200);
    });
    it('should return user array', function(){
        users.index(req,res);
        res.statusCode.should.be.an.instanceOf(Array).and.have.a.lengthOf(2);
    })
})