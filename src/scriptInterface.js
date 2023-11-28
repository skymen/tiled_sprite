function getScriptInterface(parentClass, map) {
  return class extends parentClass {
    constructor() {
      super();
      map.set(this, parentClass._GetInitInst().GetSdkInstance());
      this.LOAD_RESIZE_MODE = {
        RESIZE: 0,
        NO_RESIZE: 1,
      };
      this.LOAD_CROSS_ORIGIN = {
        ANONYMOUS: 0,
        NONE: 1,
      };
    }

    IsTileRandomizationEnabled() {
      return map.get(this)._enableTileRandomization;
    }
    LoadURL(url, resizeMode, crossOrigin) {
      map.get(this).LoadURL(url, resizeMode, crossOrigin);
    }
  };
}
