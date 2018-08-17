// function ScheduleVO() {};

// ScheduleVO.targetDay = "";
// ScheduleVO.plans = new Array();

// ScheduleVO.setTargetDay = function(target){
//     this.targetDay = target;
// }

// ScheduleVO.getTargetDay = () =>{
//     return this.targetDay;
// }

// ScheduleVO.setPlans = function(plans){
//     this.plans = plans;
// }

// ScheduleVO.getPlans = function(){
//     return this.plans;
// }

// ScheduleVO.addPlan = function(plan){
//     this.plans.push(plan);
// }

// module.exports = ScheduleVO;

module.exports = class ScheduleVO{
    constructor(targetDay, plans, createDay){
        this.targetDay = targetDay;
        this.plans = plans;
        this.createDay = createDay;
    }
}