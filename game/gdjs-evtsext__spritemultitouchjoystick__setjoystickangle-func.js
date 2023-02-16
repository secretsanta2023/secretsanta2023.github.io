
if (typeof gdjs.evtsExt__SpriteMultitouchJoystick__SetJoystickAngle !== "undefined") {
  gdjs.evtsExt__SpriteMultitouchJoystick__SetJoystickAngle.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__SpriteMultitouchJoystick__SetJoystickAngle = {};

gdjs.evtsExt__SpriteMultitouchJoystick__SetJoystickAngle.conditionTrue_0 = {val:false};
gdjs.evtsExt__SpriteMultitouchJoystick__SetJoystickAngle.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__SpriteMultitouchJoystick__SetJoystickAngle.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
{runtimeScene.getScene().getVariables().get("__MultitouchJoystick").getChild("Controllers").getChild((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("ControllerIdentifier")) || 0 : 0)).getChild("Joystick").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("JoystickIdentifier") : "")).getChild("Angle").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}}

}


};

gdjs.evtsExt__SpriteMultitouchJoystick__SetJoystickAngle.func = function(runtimeScene, ControllerIdentifier, JoystickIdentifier, Value, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "ControllerIdentifier") return ControllerIdentifier;
if (argName === "JoystickIdentifier") return JoystickIdentifier;
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__SpriteMultitouchJoystick__SetJoystickAngle.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__SpriteMultitouchJoystick__SetJoystickAngle.registeredGdjsCallbacks = [];