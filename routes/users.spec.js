var should = require('should');
var users = require('./users');
var httpMock = require('node-mocks-http');

var req = httpMock.createRequest();
var res = httpMock.createResponse();
var connectDB = require('../db/db-connector');
var userService = require('../services/user.service');
describe('Users', function(){
    before(function(done){
        var promise = connectDB.connectDB();
        promise.then(()=>{
            console.log('connectd');
            done();
        });
        promise.catch(err=>{
            done();
        })
    });
    it('add a new User', function(done){
        var promise = userService.userRegister({
            type : 'privacy',
            name : 'nick',
            password : '1q2w3e4r',
            email : 'bkho2@naver.com'
        });
        promise.then((res) => {
            res.should.equal(true);
            done();
        });
        promise.catch((err) => {
            console.err(err);
            done();
        })
    })
})