gdjs.Modulo_322Code = {};
gdjs.Modulo_322Code.localVariables = [];
gdjs.Modulo_322Code.idToCallbackMap = new Map();
gdjs.Modulo_322Code.GDTextBoxBackgroundObjects1= [];
gdjs.Modulo_322Code.GDTextBoxBackgroundObjects2= [];
gdjs.Modulo_322Code.GDTextBoxTextObjects1= [];
gdjs.Modulo_322Code.GDTextBoxTextObjects2= [];
gdjs.Modulo_322Code.GDNextButtonObjects1= [];
gdjs.Modulo_322Code.GDNextButtonObjects2= [];
gdjs.Modulo_322Code.GDTextBoxText2Objects1= [];
gdjs.Modulo_322Code.GDTextBoxText2Objects2= [];
gdjs.Modulo_322Code.GDTextBoxBackground2Objects1= [];
gdjs.Modulo_322Code.GDTextBoxBackground2Objects2= [];
gdjs.Modulo_322Code.GDNewSpriteObjects1= [];
gdjs.Modulo_322Code.GDNewSpriteObjects2= [];
gdjs.Modulo_322Code.GDNewSprite2Objects1= [];
gdjs.Modulo_322Code.GDNewSprite2Objects2= [];
gdjs.Modulo_322Code.GDNewSprite3Objects1= [];
gdjs.Modulo_322Code.GDNewSprite3Objects2= [];
gdjs.Modulo_322Code.GDNewSprite4Objects1= [];
gdjs.Modulo_322Code.GDNewSprite4Objects2= [];
gdjs.Modulo_322Code.GDNewSprite5Objects1= [];
gdjs.Modulo_322Code.GDNewSprite5Objects2= [];


gdjs.Modulo_322Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.Modulo_322Code.GDNextButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("TextBoxBackground2"), gdjs.Modulo_322Code.GDTextBoxBackground2Objects1);
gdjs.copyArray(runtimeScene.getObjects("TextBoxText2"), gdjs.Modulo_322Code.GDTextBoxText2Objects1);
{for(var i = 0, len = gdjs.Modulo_322Code.GDNextButtonObjects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDNextButtonObjects1[i].hide();
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ShowNextButtonTimer");
}
{for(var i = 0, len = gdjs.Modulo_322Code.GDTextBoxBackground2Objects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDTextBoxBackground2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_322Code.GDTextBoxText2Objects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDTextBoxText2Objects1[i].hide();
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ShowTextBox2Timer");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimeScale(runtimeScene) >= 4;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TextBoxText2"), gdjs.Modulo_322Code.GDTextBoxText2Objects1);
{for(var i = 0, len = gdjs.Modulo_322Code.GDTextBoxText2Objects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDTextBoxText2Objects1[i].resetTimer("Box2");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "ShowNextButtonTimer") >= 8;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.Modulo_322Code.GDNextButtonObjects1);
{for(var i = 0, len = gdjs.Modulo_322Code.GDNextButtonObjects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDNextButtonObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.Modulo_322Code.GDNextButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Modulo_322Code.GDNextButtonObjects1.length;i<l;++i) {
    if ( gdjs.Modulo_322Code.GDNextButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Modulo_322Code.GDNextButtonObjects1[k] = gdjs.Modulo_322Code.GDNextButtonObjects1[i];
        ++k;
    }
}
gdjs.Modulo_322Code.GDNextButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Modulo 3", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ShowTextBox2Timer");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "ShowTextBox2Timer") >= 5;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TextBoxBackground2"), gdjs.Modulo_322Code.GDTextBoxBackground2Objects1);
gdjs.copyArray(runtimeScene.getObjects("TextBoxText2"), gdjs.Modulo_322Code.GDTextBoxText2Objects1);
{for(var i = 0, len = gdjs.Modulo_322Code.GDTextBoxBackground2Objects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDTextBoxBackground2Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Modulo_322Code.GDTextBoxText2Objects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDTextBoxText2Objects1[i].hide(false);
}
}
}

}


};

gdjs.Modulo_322Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Modulo_322Code.GDTextBoxBackgroundObjects1.length = 0;
gdjs.Modulo_322Code.GDTextBoxBackgroundObjects2.length = 0;
gdjs.Modulo_322Code.GDTextBoxTextObjects1.length = 0;
gdjs.Modulo_322Code.GDTextBoxTextObjects2.length = 0;
gdjs.Modulo_322Code.GDNextButtonObjects1.length = 0;
gdjs.Modulo_322Code.GDNextButtonObjects2.length = 0;
gdjs.Modulo_322Code.GDTextBoxText2Objects1.length = 0;
gdjs.Modulo_322Code.GDTextBoxText2Objects2.length = 0;
gdjs.Modulo_322Code.GDTextBoxBackground2Objects1.length = 0;
gdjs.Modulo_322Code.GDTextBoxBackground2Objects2.length = 0;
gdjs.Modulo_322Code.GDNewSpriteObjects1.length = 0;
gdjs.Modulo_322Code.GDNewSpriteObjects2.length = 0;
gdjs.Modulo_322Code.GDNewSprite2Objects1.length = 0;
gdjs.Modulo_322Code.GDNewSprite2Objects2.length = 0;
gdjs.Modulo_322Code.GDNewSprite3Objects1.length = 0;
gdjs.Modulo_322Code.GDNewSprite3Objects2.length = 0;
gdjs.Modulo_322Code.GDNewSprite4Objects1.length = 0;
gdjs.Modulo_322Code.GDNewSprite4Objects2.length = 0;
gdjs.Modulo_322Code.GDNewSprite5Objects1.length = 0;
gdjs.Modulo_322Code.GDNewSprite5Objects2.length = 0;

gdjs.Modulo_322Code.eventsList0(runtimeScene);
gdjs.Modulo_322Code.GDTextBoxBackgroundObjects1.length = 0;
gdjs.Modulo_322Code.GDTextBoxBackgroundObjects2.length = 0;
gdjs.Modulo_322Code.GDTextBoxTextObjects1.length = 0;
gdjs.Modulo_322Code.GDTextBoxTextObjects2.length = 0;
gdjs.Modulo_322Code.GDNextButtonObjects1.length = 0;
gdjs.Modulo_322Code.GDNextButtonObjects2.length = 0;
gdjs.Modulo_322Code.GDTextBoxText2Objects1.length = 0;
gdjs.Modulo_322Code.GDTextBoxText2Objects2.length = 0;
gdjs.Modulo_322Code.GDTextBoxBackground2Objects1.length = 0;
gdjs.Modulo_322Code.GDTextBoxBackground2Objects2.length = 0;
gdjs.Modulo_322Code.GDNewSpriteObjects1.length = 0;
gdjs.Modulo_322Code.GDNewSpriteObjects2.length = 0;
gdjs.Modulo_322Code.GDNewSprite2Objects1.length = 0;
gdjs.Modulo_322Code.GDNewSprite2Objects2.length = 0;
gdjs.Modulo_322Code.GDNewSprite3Objects1.length = 0;
gdjs.Modulo_322Code.GDNewSprite3Objects2.length = 0;
gdjs.Modulo_322Code.GDNewSprite4Objects1.length = 0;
gdjs.Modulo_322Code.GDNewSprite4Objects2.length = 0;
gdjs.Modulo_322Code.GDNewSprite5Objects1.length = 0;
gdjs.Modulo_322Code.GDNewSprite5Objects2.length = 0;


return;

}

gdjs['Modulo_322Code'] = gdjs.Modulo_322Code;
