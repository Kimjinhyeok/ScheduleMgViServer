var should = require('should');
var httpMock = require('node-mocks-http');
var sinon = require('sinon');
var scheduleModel = require('../models/schedule.model');
var ScheduleVO = require('../data-unit/schedule.vo');
var PlanVO = require('../data-unit/plan.vo');
var scheduleService = require('../services/schedule.service');
var connectDB = require('../db/db-connector');
var data = {};
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