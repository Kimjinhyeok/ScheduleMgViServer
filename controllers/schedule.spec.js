var should = require('should');
var httpMock = require('node-mocks-http');
var sinon = require('sinon');
var scheduleModel = require('../models/schedule.model');
var ScheduleVO = require('../data-unit/schedule.vo');
var PlanVO = require('../data-unit/plan.vo');
var scheduleService = require('../services/schedule.service');
var connectDB = require('../db/db-connector');
var data = {};
/*
describe("Schedule", function(){
    before(()=>{
        connectDB.connectDB();
    });
    it("get Schedule By Current Date", function(){
        scheduleService.getSchedule().then((res)=>{
            console.log("result : " + res);    
        }).catch((err) => {
            console.error(err)
        });
    })
})
*/
describe("remove Schedules", function(){
    before(done => {
        connectDB.connectDB();
        setTimeout(function(){
            done();
        }, 1000);
    });
    it("get letter date schedule", (done)=>{
        scheduleModel.find({targetDay : {$lt : new Date().setHours(0,0,0)}, activate : true})
        .update({}, {$set : {activate : false}}, {multi : true}, function(err, res){
            if(err){
                should.fail();
                done();
            }else{
                console.log(res);
                should.exist(res);
                done();
            }
        });
    })
})