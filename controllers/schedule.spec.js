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
describe("get Schedules", function(){
    before(done => {
        connectDB.connectDB();
        setTimeout(function(){
            done();
        }, 1000);
    });
    it("let get schedules through service", (done)=>{
        var schedulePromise = scheduleService.getSchedules();
        
        schedulePromise.then( (res) => {
            var data = res.value;
            console.log("data's length : " + data.length);
            should(data.length).greaterThan(0,"길이가 0보다 길어?");
            done();
        });
        schedulePromise.catch( (err) => {
            should().Error("실패함여" + err);
            done();
        })
    })
})