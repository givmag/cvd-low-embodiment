gdjs.Modulo_321Code = {};
gdjs.Modulo_321Code.localVariables = [];
gdjs.Modulo_321Code.idToCallbackMap = new Map();
gdjs.Modulo_321Code.GDTextBoxBackgroundObjects1= [];
gdjs.Modulo_321Code.GDTextBoxBackgroundObjects2= [];
gdjs.Modulo_321Code.GDTextBoxTextObjects1= [];
gdjs.Modulo_321Code.GDTextBoxTextObjects2= [];
gdjs.Modulo_321Code.GDNextButtonObjects1= [];
gdjs.Modulo_321Code.GDNextButtonObjects2= [];
gdjs.Modulo_321Code.GDHeartObjects1= [];
gdjs.Modulo_321Code.GDHeartObjects2= [];
gdjs.Modulo_321Code.GDNewSpriteObjects1= [];
gdjs.Modulo_321Code.GDNewSpriteObjects2= [];


gdjs.Modulo_321Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.Modulo_321Code.GDNextButtonObjects1);
{for(var i = 0, len = gdjs.Modulo_321Code.GDNextButtonObjects1.length ;i < len;++i) {
    gdjs.Modulo_321Code.GDNextButtonObjects1[i].hide();
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ShowNextButtonTimer");
}
{/* Unknown object - skipped. */}
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


};

gdjs.Modulo_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Modulo_321Code.GDTextBoxBackgroundObjects1.length = 0;
gdjs.Modulo_321Code.GDTextBoxBackgroundObjects2.length = 0;
gdjs.Modulo_321Code.GDTextBoxTextObjects1.length = 0;
gdjs.Modulo_321Code.GDTextBoxTextObjects2.length = 0;
gdjs.Modulo_321Code.GDNextButtonObjects1.length = 0;
gdjs.Modulo_321Code.GDNextButtonObjects2.length = 0;
gdjs.Modulo_321Code.GDHeartObjects1.length = 0;
gdjs.Modulo_321Code.GDHeartObjects2.length = 0;
gdjs.Modulo_321Code.GDNewSpriteObjects1.length = 0;
gdjs.Modulo_321Code.GDNewSpriteObjects2.length = 0;

gdjs.Modulo_321Code.eventsList0(runtimeScene);
gdjs.Modulo_321Code.GDTextBoxBackgroundObjects1.length = 0;
gdjs.Modulo_321Code.GDTextBoxBackgroundObjects2.length = 0;
gdjs.Modulo_321Code.GDTextBoxTextObjects1.length = 0;
gdjs.Modulo_321Code.GDTextBoxTextObjects2.length = 0;
gdjs.Modulo_321Code.GDNextButtonObjects1.length = 0;
gdjs.Modulo_321Code.GDNextButtonObjects2.length = 0;
gdjs.Modulo_321Code.GDHeartObjects1.length = 0;
gdjs.Modulo_321Code.GDHeartObjects2.length = 0;
gdjs.Modulo_321Code.GDNewSpriteObjects1.length = 0;
gdjs.Modulo_321Code.GDNewSpriteObjects2.length = 0;


return;

}

gdjs['Modulo_321Code'] = gdjs.Modulo_321Code;
