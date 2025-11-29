gdjs.IntroCode = {};
gdjs.IntroCode.localVariables = [];
gdjs.IntroCode.idToCallbackMap = new Map();
gdjs.IntroCode.GDTextBoxBackgroundObjects1= [];
gdjs.IntroCode.GDTextBoxBackgroundObjects2= [];
gdjs.IntroCode.GDTextBoxTextObjects1= [];
gdjs.IntroCode.GDTextBoxTextObjects2= [];
gdjs.IntroCode.GDNextButtonObjects1= [];
gdjs.IntroCode.GDNextButtonObjects2= [];


gdjs.IntroCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.IntroCode.GDNextButtonObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDNextButtonObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDNextButtonObjects1[i].hide();
}
}
{/* Unknown object - skipped. */}
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
gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.IntroCode.GDNextButtonObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDNextButtonObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDNextButtonObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.IntroCode.GDNextButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IntroCode.GDNextButtonObjects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDNextButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.IntroCode.GDNextButtonObjects1[k] = gdjs.IntroCode.GDNextButtonObjects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDNextButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Modulo 1", false);
}
}

}


};

gdjs.IntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.IntroCode.GDTextBoxBackgroundObjects1.length = 0;
gdjs.IntroCode.GDTextBoxBackgroundObjects2.length = 0;
gdjs.IntroCode.GDTextBoxTextObjects1.length = 0;
gdjs.IntroCode.GDTextBoxTextObjects2.length = 0;
gdjs.IntroCode.GDNextButtonObjects1.length = 0;
gdjs.IntroCode.GDNextButtonObjects2.length = 0;

gdjs.IntroCode.eventsList0(runtimeScene);
gdjs.IntroCode.GDTextBoxBackgroundObjects1.length = 0;
gdjs.IntroCode.GDTextBoxBackgroundObjects2.length = 0;
gdjs.IntroCode.GDTextBoxTextObjects1.length = 0;
gdjs.IntroCode.GDTextBoxTextObjects2.length = 0;
gdjs.IntroCode.GDNextButtonObjects1.length = 0;
gdjs.IntroCode.GDNextButtonObjects2.length = 0;


return;

}

gdjs['IntroCode'] = gdjs.IntroCode;
