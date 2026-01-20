gdjs.Modulo_321Code = {};
gdjs.Modulo_321Code.localVariables = [];
gdjs.Modulo_321Code.idToCallbackMap = new Map();
gdjs.Modulo_321Code.GDTextBoxBackgroundObjects1= [];
gdjs.Modulo_321Code.GDTextBoxBackgroundObjects2= [];
gdjs.Modulo_321Code.GDNextButtonObjects1= [];
gdjs.Modulo_321Code.GDNextButtonObjects2= [];
gdjs.Modulo_321Code.GDHeartObjects1= [];
gdjs.Modulo_321Code.GDHeartObjects2= [];
gdjs.Modulo_321Code.GDNewBBTextObjects1= [];
gdjs.Modulo_321Code.GDNewBBTextObjects2= [];
gdjs.Modulo_321Code.GDNewBBText2Objects1= [];
gdjs.Modulo_321Code.GDNewBBText2Objects2= [];


gdjs.Modulo_321Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Heart"), gdjs.Modulo_321Code.GDHeartObjects1);
gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.Modulo_321Code.GDNextButtonObjects1);
{for(var i = 0, len = gdjs.Modulo_321Code.GDNextButtonObjects1.length ;i < len;++i) {
    gdjs.Modulo_321Code.GDNextButtonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_321Code.GDHeartObjects1.length ;i < len;++i) {
    gdjs.Modulo_321Code.GDHeartObjects1[i].getBehavior("Scale").setScale(0.32);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ShowNextButtonTimer");
}
{for(var i = 0, len = gdjs.Modulo_321Code.GDHeartObjects1.length ;i < len;++i) {
    gdjs.Modulo_321Code.GDHeartObjects1[i].getBehavior("Tween").addObjectScaleTween3("PulsateUp", 0.35, "easeOutQuad", 0.5, false, true);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "ShowNextButtonTimer") >= 4;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.Modulo_321Code.GDNextButtonObjects1);
{for(var i = 0, len = gdjs.Modulo_321Code.GDNextButtonObjects1.length ;i < len;++i) {
    gdjs.Modulo_321Code.GDNextButtonObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.Modulo_321Code.GDNextButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Modulo_321Code.GDNextButtonObjects1.length;i<l;++i) {
    if ( gdjs.Modulo_321Code.GDNextButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Modulo_321Code.GDNextButtonObjects1[k] = gdjs.Modulo_321Code.GDNextButtonObjects1[i];
        ++k;
    }
}
gdjs.Modulo_321Code.GDNextButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Modulo 2", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Heart"), gdjs.Modulo_321Code.GDHeartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Modulo_321Code.GDHeartObjects1.length;i<l;++i) {
    if ( gdjs.Modulo_321Code.GDHeartObjects1[i].getBehavior("Tween").hasFinished("PulsateUp") ) {
        isConditionTrue_0 = true;
        gdjs.Modulo_321Code.GDHeartObjects1[k] = gdjs.Modulo_321Code.GDHeartObjects1[i];
        ++k;
    }
}
gdjs.Modulo_321Code.GDHeartObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Modulo_321Code.GDHeartObjects1 */
{for(var i = 0, len = gdjs.Modulo_321Code.GDHeartObjects1.length ;i < len;++i) {
    gdjs.Modulo_321Code.GDHeartObjects1[i].getBehavior("Tween").removeTween("PulsateUp");
}
}
{for(var i = 0, len = gdjs.Modulo_321Code.GDHeartObjects1.length ;i < len;++i) {
    gdjs.Modulo_321Code.GDHeartObjects1[i].getBehavior("Tween").addObjectScaleTween3("PulsateDown", 0.32, "easeOutQuad", 0.5, false, true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Heart"), gdjs.Modulo_321Code.GDHeartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Modulo_321Code.GDHeartObjects1.length;i<l;++i) {
    if ( gdjs.Modulo_321Code.GDHeartObjects1[i].getBehavior("Tween").hasFinished("PulsateDown") ) {
        isConditionTrue_0 = true;
        gdjs.Modulo_321Code.GDHeartObjects1[k] = gdjs.Modulo_321Code.GDHeartObjects1[i];
        ++k;
    }
}
gdjs.Modulo_321Code.GDHeartObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Modulo_321Code.GDHeartObjects1 */
{for(var i = 0, len = gdjs.Modulo_321Code.GDHeartObjects1.length ;i < len;++i) {
    gdjs.Modulo_321Code.GDHeartObjects1[i].getBehavior("Tween").removeTween("PulsateDown");
}
}
{for(var i = 0, len = gdjs.Modulo_321Code.GDHeartObjects1.length ;i < len;++i) {
    gdjs.Modulo_321Code.GDHeartObjects1[i].getBehavior("Tween").addObjectScaleTween3("PulsateUp", 0.35, "easeOutQuad", 0.5, false, true);
}
}
}

}


};

gdjs.Modulo_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Modulo_321Code.GDTextBoxBackgroundObjects1.length = 0;
gdjs.Modulo_321Code.GDTextBoxBackgroundObjects2.length = 0;
gdjs.Modulo_321Code.GDNextButtonObjects1.length = 0;
gdjs.Modulo_321Code.GDNextButtonObjects2.length = 0;
gdjs.Modulo_321Code.GDHeartObjects1.length = 0;
gdjs.Modulo_321Code.GDHeartObjects2.length = 0;
gdjs.Modulo_321Code.GDNewBBTextObjects1.length = 0;
gdjs.Modulo_321Code.GDNewBBTextObjects2.length = 0;
gdjs.Modulo_321Code.GDNewBBText2Objects1.length = 0;
gdjs.Modulo_321Code.GDNewBBText2Objects2.length = 0;

gdjs.Modulo_321Code.eventsList0(runtimeScene);
gdjs.Modulo_321Code.GDTextBoxBackgroundObjects1.length = 0;
gdjs.Modulo_321Code.GDTextBoxBackgroundObjects2.length = 0;
gdjs.Modulo_321Code.GDNextButtonObjects1.length = 0;
gdjs.Modulo_321Code.GDNextButtonObjects2.length = 0;
gdjs.Modulo_321Code.GDHeartObjects1.length = 0;
gdjs.Modulo_321Code.GDHeartObjects2.length = 0;
gdjs.Modulo_321Code.GDNewBBTextObjects1.length = 0;
gdjs.Modulo_321Code.GDNewBBTextObjects2.length = 0;
gdjs.Modulo_321Code.GDNewBBText2Objects1.length = 0;
gdjs.Modulo_321Code.GDNewBBText2Objects2.length = 0;


return;

}

gdjs['Modulo_321Code'] = gdjs.Modulo_321Code;
