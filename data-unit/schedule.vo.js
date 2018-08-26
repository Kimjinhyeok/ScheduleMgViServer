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
    constructor(user = null, targetDay = null, plans = null, descript = null, createDay = null, activated = null){
        this.user = user;
        this.targetDay = targetDay;
        this.plans = plans;
        this.descript = descript;
        this.createDay = createDay;
        this.activated = activated;
    }

    getValid(){
        if(this.user || this.targetDay || this.plans){
            return true;
        }else{
            return false;
        }
    }
}