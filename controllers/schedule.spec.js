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
    it("let remove schedules through service", (done)=>{
        var id = "5b7950662514d20a40c23440"
        var schedulePromise = scheduleService.removeSchedule(id);
        
        schedulePromise.then( (res) => {
            var data = res.result;
            should(data).equal(true, "삭제 성공");
            done();
        });
        schedulePromise.catch( (err) => {
            should().Error("실패함여" + err);
            done();
        })
    })
})