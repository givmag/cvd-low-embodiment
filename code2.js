gdjs.Modulo_322Code = {};
gdjs.Modulo_322Code.localVariables = [];
gdjs.Modulo_322Code.idToCallbackMap = new Map();
gdjs.Modulo_322Code.GDTextBoxBackgroundObjects1= [];
gdjs.Modulo_322Code.GDTextBoxBackgroundObjects2= [];
gdjs.Modulo_322Code.GDNextButtonObjects1= [];
gdjs.Modulo_322Code.GDNextButtonObjects2= [];
gdjs.Modulo_322Code.GDTextBoxBackground2Objects1= [];
gdjs.Modulo_322Code.GDTextBoxBackground2Objects2= [];
gdjs.Modulo_322Code.GDFastFoodsObjects1= [];
gdjs.Modulo_322Code.GDFastFoodsObjects2= [];
gdjs.Modulo_322Code.GDFastFoodObjects1= [];
gdjs.Modulo_322Code.GDFastFoodObjects2= [];
gdjs.Modulo_322Code.GDMonitoringObjects1= [];
gdjs.Modulo_322Code.GDMonitoringObjects2= [];
gdjs.Modulo_322Code.GDChairObjects1= [];
gdjs.Modulo_322Code.GDChairObjects2= [];
gdjs.Modulo_322Code.GDCigarettesObjects1= [];
gdjs.Modulo_322Code.GDCigarettesObjects2= [];
gdjs.Modulo_322Code.GDText_9595CigsObjects1= [];
gdjs.Modulo_322Code.GDText_9595CigsObjects2= [];
gdjs.Modulo_322Code.GDNewBBText2Objects1= [];
gdjs.Modulo_322Code.GDNewBBText2Objects2= [];
gdjs.Modulo_322Code.GDText_9595ChairObjects1= [];
gdjs.Modulo_322Code.GDText_9595ChairObjects2= [];
gdjs.Modulo_322Code.GDText_9595FastFoodObjects1= [];
gdjs.Modulo_322Code.GDText_9595FastFoodObjects2= [];
gdjs.Modulo_322Code.GDText_9595MonitoringObjects1= [];
gdjs.Modulo_322Code.GDText_9595MonitoringObjects2= [];


gdjs.Modulo_322Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Chair"), gdjs.Modulo_322Code.GDChairObjects1);
gdjs.copyArray(runtimeScene.getObjects("Cigarettes"), gdjs.Modulo_322Code.GDCigarettesObjects1);
gdjs.copyArray(runtimeScene.getObjects("FastFood"), gdjs.Modulo_322Code.GDFastFoodObjects1);
gdjs.copyArray(runtimeScene.getObjects("FastFoods"), gdjs.Modulo_322Code.GDFastFoodsObjects1);
gdjs.copyArray(runtimeScene.getObjects("Monitoring"), gdjs.Modulo_322Code.GDMonitoringObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewBBText2"), gdjs.Modulo_322Code.GDNewBBText2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.Modulo_322Code.GDNextButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("TextBoxBackground2"), gdjs.Modulo_322Code.GDTextBoxBackground2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Text_Chair"), gdjs.Modulo_322Code.GDText_9595ChairObjects1);
gdjs.copyArray(runtimeScene.getObjects("Text_Cigs"), gdjs.Modulo_322Code.GDText_9595CigsObjects1);
gdjs.copyArray(runtimeScene.getObjects("Text_FastFood"), gdjs.Modulo_322Code.GDText_9595FastFoodObjects1);
gdjs.copyArray(runtimeScene.getObjects("Text_Monitoring"), gdjs.Modulo_322Code.GDText_9595MonitoringObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ShowNextButtonTimer");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ShowTextBox2Timer");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ShowText1Timer");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ShowText2Timer");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ShowText3Timer");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ShowText4Timer");
}
{for(var i = 0, len = gdjs.Modulo_322Code.GDNextButtonObjects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDNextButtonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_322Code.GDTextBoxBackground2Objects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDTextBoxBackground2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_322Code.GDNewBBText2Objects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDNewBBText2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_322Code.GDText_9595CigsObjects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDText_9595CigsObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_322Code.GDText_9595ChairObjects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDText_9595ChairObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_322Code.GDText_9595FastFoodObjects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDText_9595FastFoodObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_322Code.GDText_9595MonitoringObjects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDText_9595MonitoringObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_322Code.GDCigarettesObjects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDCigarettesObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_322Code.GDChairObjects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDChairObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_322Code.GDFastFoodObjects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDFastFoodObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_322Code.GDFastFoodsObjects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDFastFoodsObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_322Code.GDMonitoringObjects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDMonitoringObjects1[i].hide();
}
}
{gdjs.evtTools.camera.setCameraX(runtimeScene, 640, "", 0);
}
{gdjs.evtTools.camera.setCameraX(runtimeScene, 640, "TextOverlay", 0);
}
{gdjs.evtTools.camera.setCameraX(runtimeScene, 640, "UI", 0);
}
{gdjs.evtTools.camera.setCameraY(runtimeScene, 360, "", 0);
}
{gdjs.evtTools.camera.setCameraY(runtimeScene, 360, "TextOverlay", 0);
}
{gdjs.evtTools.camera.setCameraY(runtimeScene, 360, "UI", 0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "ShowText1Timer") >= 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cigarettes"), gdjs.Modulo_322Code.GDCigarettesObjects1);
gdjs.copyArray(runtimeScene.getObjects("TextBoxBackground"), gdjs.Modulo_322Code.GDTextBoxBackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("Text_Cigs"), gdjs.Modulo_322Code.GDText_9595CigsObjects1);
{for(var i = 0, len = gdjs.Modulo_322Code.GDTextBoxBackgroundObjects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDTextBoxBackgroundObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Modulo_322Code.GDText_9595CigsObjects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDText_9595CigsObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Modulo_322Code.GDCigarettesObjects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDCigarettesObjects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "ShowText2Timer") >= 4;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Chair"), gdjs.Modulo_322Code.GDChairObjects1);
gdjs.copyArray(runtimeScene.getObjects("Text_Chair"), gdjs.Modulo_322Code.GDText_9595ChairObjects1);
{for(var i = 0, len = gdjs.Modulo_322Code.GDText_9595ChairObjects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDText_9595ChairObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Modulo_322Code.GDChairObjects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDChairObjects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "ShowText3Timer") >= 7;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FastFood"), gdjs.Modulo_322Code.GDFastFoodObjects1);
gdjs.copyArray(runtimeScene.getObjects("FastFoods"), gdjs.Modulo_322Code.GDFastFoodsObjects1);
gdjs.copyArray(runtimeScene.getObjects("Text_FastFood"), gdjs.Modulo_322Code.GDText_9595FastFoodObjects1);
{for(var i = 0, len = gdjs.Modulo_322Code.GDText_9595FastFoodObjects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDText_9595FastFoodObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Modulo_322Code.GDFastFoodObjects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDFastFoodObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Modulo_322Code.GDFastFoodsObjects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDFastFoodsObjects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "ShowText4Timer") >= 10;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Monitoring"), gdjs.Modulo_322Code.GDMonitoringObjects1);
gdjs.copyArray(runtimeScene.getObjects("Text_Monitoring"), gdjs.Modulo_322Code.GDText_9595MonitoringObjects1);
{for(var i = 0, len = gdjs.Modulo_322Code.GDText_9595MonitoringObjects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDText_9595MonitoringObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Modulo_322Code.GDMonitoringObjects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDMonitoringObjects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "ShowTextBox2Timer") >= 13;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewBBText2"), gdjs.Modulo_322Code.GDNewBBText2Objects1);
gdjs.copyArray(runtimeScene.getObjects("TextBoxBackground2"), gdjs.Modulo_322Code.GDTextBoxBackground2Objects1);
{for(var i = 0, len = gdjs.Modulo_322Code.GDTextBoxBackground2Objects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDTextBoxBackground2Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Modulo_322Code.GDNewBBText2Objects1.length ;i < len;++i) {
    gdjs.Modulo_322Code.GDNewBBText2Objects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "ShowNextButtonTimer") >= 15;
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


};

gdjs.Modulo_322Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Modulo_322Code.GDTextBoxBackgroundObjects1.length = 0;
gdjs.Modulo_322Code.GDTextBoxBackgroundObjects2.length = 0;
gdjs.Modulo_322Code.GDNextButtonObjects1.length = 0;
gdjs.Modulo_322Code.GDNextButtonObjects2.length = 0;
gdjs.Modulo_322Code.GDTextBoxBackground2Objects1.length = 0;
gdjs.Modulo_322Code.GDTextBoxBackground2Objects2.length = 0;
gdjs.Modulo_322Code.GDFastFoodsObjects1.length = 0;
gdjs.Modulo_322Code.GDFastFoodsObjects2.length = 0;
gdjs.Modulo_322Code.GDFastFoodObjects1.length = 0;
gdjs.Modulo_322Code.GDFastFoodObjects2.length = 0;
gdjs.Modulo_322Code.GDMonitoringObjects1.length = 0;
gdjs.Modulo_322Code.GDMonitoringObjects2.length = 0;
gdjs.Modulo_322Code.GDChairObjects1.length = 0;
gdjs.Modulo_322Code.GDChairObjects2.length = 0;
gdjs.Modulo_322Code.GDCigarettesObjects1.length = 0;
gdjs.Modulo_322Code.GDCigarettesObjects2.length = 0;
gdjs.Modulo_322Code.GDText_9595CigsObjects1.length = 0;
gdjs.Modulo_322Code.GDText_9595CigsObjects2.length = 0;
gdjs.Modulo_322Code.GDNewBBText2Objects1.length = 0;
gdjs.Modulo_322Code.GDNewBBText2Objects2.length = 0;
gdjs.Modulo_322Code.GDText_9595ChairObjects1.length = 0;
gdjs.Modulo_322Code.GDText_9595ChairObjects2.length = 0;
gdjs.Modulo_322Code.GDText_9595FastFoodObjects1.length = 0;
gdjs.Modulo_322Code.GDText_9595FastFoodObjects2.length = 0;
gdjs.Modulo_322Code.GDText_9595MonitoringObjects1.length = 0;
gdjs.Modulo_322Code.GDText_9595MonitoringObjects2.length = 0;

gdjs.Modulo_322Code.eventsList0(runtimeScene);
gdjs.Modulo_322Code.GDTextBoxBackgroundObjects1.length = 0;
gdjs.Modulo_322Code.GDTextBoxBackgroundObjects2.length = 0;
gdjs.Modulo_322Code.GDNextButtonObjects1.length = 0;
gdjs.Modulo_322Code.GDNextButtonObjects2.length = 0;
gdjs.Modulo_322Code.GDTextBoxBackground2Objects1.length = 0;
gdjs.Modulo_322Code.GDTextBoxBackground2Objects2.length = 0;
gdjs.Modulo_322Code.GDFastFoodsObjects1.length = 0;
gdjs.Modulo_322Code.GDFastFoodsObjects2.length = 0;
gdjs.Modulo_322Code.GDFastFoodObjects1.length = 0;
gdjs.Modulo_322Code.GDFastFoodObjects2.length = 0;
gdjs.Modulo_322Code.GDMonitoringObjects1.length = 0;
gdjs.Modulo_322Code.GDMonitoringObjects2.length = 0;
gdjs.Modulo_322Code.GDChairObjects1.length = 0;
gdjs.Modulo_322Code.GDChairObjects2.length = 0;
gdjs.Modulo_322Code.GDCigarettesObjects1.length = 0;
gdjs.Modulo_322Code.GDCigarettesObjects2.length = 0;
gdjs.Modulo_322Code.GDText_9595CigsObjects1.length = 0;
gdjs.Modulo_322Code.GDText_9595CigsObjects2.length = 0;
gdjs.Modulo_322Code.GDNewBBText2Objects1.length = 0;
gdjs.Modulo_322Code.GDNewBBText2Objects2.length = 0;
gdjs.Modulo_322Code.GDText_9595ChairObjects1.length = 0;
gdjs.Modulo_322Code.GDText_9595ChairObjects2.length = 0;
gdjs.Modulo_322Code.GDText_9595FastFoodObjects1.length = 0;
gdjs.Modulo_322Code.GDText_9595FastFoodObjects2.length = 0;
gdjs.Modulo_322Code.GDText_9595MonitoringObjects1.length = 0;
gdjs.Modulo_322Code.GDText_9595MonitoringObjects2.length = 0;


return;

}

gdjs['Modulo_322Code'] = gdjs.Modulo_322Code;
