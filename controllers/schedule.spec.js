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
        data.targetDay = "2018-08-13";
        data.plans = new Array();
        data.plans.push({time : "08:02", plan : "wake up"});
        data.plans.push({time : "09:00", plan : "go to DH"});
        
    });
    it("data send to db and check object", function(){
        var result = scheduleService.uploadSchedule(data)
            .then((res)=>{
            return res;
        });
        should(result).be.equal(result);
    })
})