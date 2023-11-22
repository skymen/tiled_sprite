// WARNING: DO NOT EDIT THIS FILE, IT IS AUTOGENERATED
module.exports = {
  addonType: "behavior",
  id: "skymen_tiled_sprite",
  name: "tiled_sprite",
  version: "1.0.0.5",
  category:
    // "attributes",
    // "movements",
    // "other",
    "general",
  author: "skymen",
  website: "https://www.construct.net",
  documentation: "https://www.construct.net",
  description: "Tiled Sprite, what more is there to say?",
  // icon: "icon.svg", // defaults to "icon.svg" if omitted
  // addonUrl: "https://www.construct.net/en/make-games/addons/####/XXXX", // displayed in auto-generated docs
  // githubUrl: "https://github.com/skymen/XXXX", // displays latest release version in auto-generated docs
  fileDependencies: [
    /*
    {
      filename: "filename.js", // no need to include "c3runtime/" prefix
      type:
        "copy-to-output"
        "inline-script"
        "external-dom-script"
        "external-runtime-script"
        "external-css"

      // for copy-to-output only
      // fileType: "image/png"
    }
    */
  ],
  info: {
    Set: {
      IsOnlyOneAllowed: false,
      CanBeBundled: true,
      IsDeprecated: false,
    },
  },
  properties: [
    /*
    {
      type:
        "integer"
        "float"
        "percent"
        "text"
        "longtext"
        "check"
        "font"
        "combo"
        "group"
        "link"
        "info"

      id: "property_id",
      options: {
        initialValue: 0,
        interpolatable: false,

        // minValue: 0, // omit to disable
        // maxValue: 100, // omit to disable

        // for type combo only
        // items: [
        //   {itemId1: "item name1" },
        //   {itemId2: "item name2" },
        // ],

        // dragSpeedMultiplier: 1, // omit to disable

        // for type link only
        // linkCallback: `function(instOrObj) {}`,
        // linkText: "Link Text",
        // callbackType:
        //   "for-each-instance"
        //   "once-for-type"

        // for type info only
        // infoCallback: `function(inst) {}`,
      },
      name: "Property Name",
      desc: "Property Description",
    }
    */
    {
      type: "combo",
      id: "wrap-horizontal",
      options: {
        initialValue: "repeat",
        interpolatable: false,
        items: [
          { clamp: "Clamp to edge" },
          { repeat: "Repeat" },
          { mirror: "Mirrorred repeat" },
        ],
      },
      name: "Wrap Horizontal",
      desc: "How the image wraps horizontally.",
    },
    {
      type: "combo",
      id: "wrap-vertical",
      options: {
        initialValue: "repeat",
        interpolatable: false,
        items: [
          { clamp: "Clamp to edge" },
          { repeat: "Repeat" },
          { mirror: "Mirrorred repeat" },
        ],
      },
      name: "Wrap Vertical",
      desc: "How the image wraps vertically.",
    },
    {
      type: "float",
      id: "image-offset-x",
      options: {
        initialValue: 0,
        interpolatable: false,
      },
      name: "Image Offset X",
      desc: "The X offset of the image within the object, in pixels.",
    },
    {
      type: "float",
      id: "image-offset-y",
      options: {
        initialValue: 0,
        interpolatable: false,
      },
      name: "Image Offset Y",
      desc: "The Y offset of the image within the object, in pixels.",
    },
    {
      type: "percent",
      id: "image-scale-x",
      options: {
        initialValue: 1,
        interpolatable: false,
      },
      name: "Image Scale X",
      desc: "The X scale of the image within the object.",
    },
    {
      type: "percent",
      id: "image-scale-y",
      options: {
        initialValue: 1,
        interpolatable: false,
      },
      name: "Image Scale Y",
      desc: "The Y scale of the image within the object.",
    },
    {
      type: "angle",
      id: "image-angle",
      options: {
        initialValue: 0,
        interpolatable: false,
      },
      name: "Image Angle",
      desc: "The angle of the image within the object, in degrees.",
    },
    {
      type: "check",
      id: "enable-randomization",
      options: {
        initialValue: false,
      },
      name: "Enable tile randomization",
      desc: "Whether to enable random offsets and orientations for tiles to break up repetitive patterns.",
    },
    {
      type: "percent",
      id: "x-random",
      options: {
        initialValue: 1,
        interpolatable: false,
      },
      name: "X Random",
      desc: "Amount of horizontal shift randomization.",
    },
    {
      type: "percent",
      id: "y-random",
      options: {
        initialValue: 1,
        interpolatable: false,
      },
      name: "Y Random",
      desc: "Amount of vertical shift randomization.",
    },
    {
      type: "percent",
      id: "angle-random",
      options: {
        initialValue: 1,
        interpolatable: false,
      },
      name: "Angle Random",
      desc: "Amount of rotation randomization.",
    },
    {
      type: "percent",
      id: "blend-margin-x",
      options: {
        initialValue: 0.1,
        interpolatable: false,
      },
      name: "Blend Margin X",
      desc: "Percentage of the tile width that fades to adjacent tiles.",
    },
    {
      type: "percent",
      id: "blend-margin-y",
      options: {
        initialValue: 0.1,
        interpolatable: false,
      },
      name: "Blend Margin Y",
      desc: "Percentage of the tile height that fades to adjacent tiles.",
    },
    {
      type: "combo",
      id: "asset-loading",
      options: {
        initialValue: "deferred",
        interpolatable: false,
        items: [{ deferred: "Deferred" }, { force: "Force" }],
      },
      name: "Asset Loading",
      desc: "Deferred: Will progressively load the textures in memory. This will not pause rendering until it's done but also the textures will be missing until they are loaded. Force: Will load the textures in memory before rendering. This will pause rendering until it's done but also the textures will be available immediately.",
    },
  ],
  aceCategories: {
    // follows the format id: langName
    // in the ACEs refer to categories using the id, not the name
    general: "Properties",
    tile_randomization: "Tile randomization",
  },
  Acts: {
    /*
    SampleAction: {
      // The category of the action as it appears in the add action dialog
      category: "general",

      // Forward to the instance function name
      forward: "_SampleAction",
      // Or specify a handler function
      handler: `function () {
        // Your code here
      }`,

      // Set to true to automatically generate a script interface for this action
      // Cases where you might not want this are:
      // 1- If the action params are incompatible with the script interface
      // 2- If you don't want it to appear in the script interface
      // 3- If the script interface has a better way to achieve the same thing
      autoScriptInterface: true,

      // Set to true to highlight the action in the add action dialog
      highlight: true,

      // Set to true to hide the action in the interface. False by default if not specified.
      deprecated: false,

      // Marks the action as async. Defaults to false if not specified.
      isAsync: false,

      // list of parameters
      params: [
        {
          // The id of the parameter. This is used to generate the script interface.
          // It must be unique for each parameter.
          id: "param1",
          // The name of the parameter.
          name: "Param 1",
          // The description of the parameter.
          desc: "The first parameter",

          // The type of the parameter.
          type:
            // The following types can take a default value AND be automatically generated in the script interface
            - "string"
            - "number"
            - "any"
            - "boolean"

            // The following types can take a default value but CANNOT be automatically generated in the script interface
            - "combo"

            // The following types CANNOT take a default value AND CANNOT be automatically generated in the script interface
            - "cmp"
            - "object"
            - "objectname"
            - "layer"
            - "layout"
            - "keyb"
            - "instancevar"
            - "instancevarbool"
            - "eventvar"
            - "eventvarbool"
            - "animation"
            - "objinstancevar"

          // The default value of the parameter. Can be omitted if the type is not a string, number, any, boolean or combo.
          value: "the default value of the parameter",

          // Only for type "combo"
          items: [
            {"itemId1": "itemName1"},
            {"itemId2": "itemName2"},
            {"itemId3": "itemName3"},
          ],

          // Only for type "object"
          allowedPluginIds: ["Sprite", "TiledBg"],
        },
      ],

      // The name of the action as it appears in the add action dialog
      listName: "Sample Action",

      // The text that appears in the event sheet. Note, every single param must be used in the display text.
      // You can also use [b] and [i] tags.
      // You can also use the {my} tag to include the behavior icon and name.
      displayText: "{my}: Sample action [i]{0}[/i]",

      // The description of the action as it appears in the add action dialog
      description: "This is a sample action",
    },
    */
    // Generate actions for all properties except wrap mode
    SetImageOffsetX: {
      category: "general",
      forward: "_SetImageOffsetX",
      autoScriptInterface: true,
      params: [
        {
          id: "value",
          name: "Value",
          desc: "The new value of the property.",
          type: "number",
          value: "0",
        },
      ],
      listName: "Set image offset X",
      displayText: "{my}: Set image offset X to [i]{0}[/i]",
      description:
        "Set the X offset of the image within the object, in pixels.",
    },
    SetImageOffsetY: {
      category: "general",
      forward: "_SetImageOffsetY",
      autoScriptInterface: true,
      params: [
        {
          id: "value",
          name: "Value",
          desc: "The new value of the property.",
          type: "number",
          value: "0",
        },
      ],
      listName: "Set image offset Y",
      displayText: "{my}: Set image offset Y to [i]{0}[/i]",
      description:
        "Set the Y offset of the image within the object, in pixels.",
    },
    SetImageScaleX: {
      category: "general",
      forward: "_SetImageScaleX",
      autoScriptInterface: true,
      params: [
        {
          id: "value",
          name: "Value",
          desc: "The new value of the property.",
          type: "number",
          value: "1",
        },
      ],
      listName: "Set image scale X",
      displayText: "{my}: Set image scale X to [i]{0}[/i]",
      description: "Set the X scale of the image within the object.",
    },
    SetImageScaleY: {
      category: "general",
      forward: "_SetImageScaleY",
      autoScriptInterface: true,
      params: [
        {
          id: "value",
          name: "Value",
          desc: "The new value of the property.",
          type: "number",
          value: "1",
        },
      ],
      listName: "Set image scale Y",
      displayText: "{my}: Set image scale Y to [i]{0}[/i]",
      description: "Set the Y scale of the image within the object.",
    },
    SetImageAngle: {
      category: "general",
      forward: "_SetImageAngle",
      autoScriptInterface: true,
      params: [
        {
          id: "value",
          name: "Value",
          desc: "The new value of the property.",
          type: "number",
          value: "0",
        },
      ],
      listName: "Set image angle",
      displayText: "{my}: Set image angle to [i]{0}[/i]",
      description: "Set the angle of the image within the object, in degrees.",
    },
    SetTileRandomizationEnabled: {
      category: "tile_randomization",
      forward: "_SetTileRandomizationEnabled",
      autoScriptInterface: true,
      params: [
        {
          id: "value",
          name: "Value",
          desc: "The new value of the property.",
          type: "boolean",
          value: "false",
        },
      ],
      listName: "Set tile randomization enabled",
      displayText: "{my}: Set tile randomization enabled to [i]{0}[/i]",
      description:
        "Set whether to enable random offsets and orientations for tiles to break up repetitive patterns.",
    },
    SetTileXRandom: {
      category: "tile_randomization",
      forward: "_SetTileXRandom",
      autoScriptInterface: true,
      params: [
        {
          id: "value",
          name: "Value",
          desc: "The new value of the property.",
          type: "number",
          value: "1",
        },
      ],
      listName: "Set tile X random",
      displayText: "{my}: Set tile X random to [i]{0}[/i]",
      description: "Set the amount of horizontal shift randomization.",
    },
    SetTileYRandom: {
      category: "tile_randomization",
      forward: "_SetTileYRandom",
      autoScriptInterface: true,
      params: [
        {
          id: "value",
          name: "Value",
          desc: "The new value of the property.",
          type: "number",
          value: "1",
        },
      ],
      listName: "Set tile Y random",
      displayText: "{my}: Set tile Y random to [i]{0}[/i]",
      description: "Set the amount of vertical shift randomization.",
    },
    SetTileAngleRandom: {
      category: "tile_randomization",
      forward: "_SetTileAngleRandom",
      autoScriptInterface: true,
      params: [
        {
          id: "value",
          name: "Value",
          desc: "The new value of the property.",
          type: "number",
          value: "1",
        },
      ],
      listName: "Set tile angle random",
      displayText: "{my}: Set tile angle random to [i]{0}[/i]",
      description: "Set the amount of rotation randomization.",
    },
    SetTileBlendMarginX: {
      category: "tile_randomization",
      forward: "_SetTileBlendMarginX",
      autoScriptInterface: true,
      params: [
        {
          id: "value",
          name: "Value",
          desc: "The new value of the property. Percentage of the tile width that fades to adjacent tiles.",
          type: "number",
          value: "0.1",
        },
      ],
      listName: "Set tile blend margin X",
      displayText: "{my}: Set tile blend margin X to [i]{0}[/i]",
      description:
        "Set the percentage of the tile width that fades to adjacent tiles.",
    },
    SetTileBlendMarginY: {
      category: "tile_randomization",
      forward: "_SetTileBlendMarginY",
      autoScriptInterface: true,
      params: [
        {
          id: "value",
          name: "Value",
          desc: "The new value of the property. Percentage of the tile height that fades to adjacent tiles.",
          type: "number",
          value: "0.1",
        },
      ],
      listName: "Set tile blend margin Y",
      displayText: "{my}: Set tile blend margin Y to [i]{0}[/i]",
      description:
        "Set the percentage of the tile height that fades to adjacent tiles.",
    },
    LoadURL: {
      category: "general",
      forward: "LoadURL",
      autoScriptInterface: true,
      isAsync: true,
      params: [
        {
          id: "url",
          name: "URL",
          desc: "The URL of the image to load.",
          type: "string",
          value: "",
        },
        {
          id: "resize",
          name: "Resize",
          desc: "Whether to resize the object to fit the new image.",
          type: "combo",
          value: "resize",
          items: [
            { resize: "Resize to image size" },
            { no_resize: "Keep current size" },
          ],
        },
        {
          id: "cross-origin",
          name: "Cross-origin",
          desc: "Whether to request the image with cross-origin enabled.",
          type: "combo",
          value: "anonymous",
          items: [{ anonymous: "Anonymous" }, { none: "None" }],
        },
      ],
      listName: "Load image from URL",
      displayText:
        "{my}: Load image from URL [i]{0}[/i] (resize to [i]{1}[/i], cross-origin [i]{2}[/i]))",
      description: "Load an image from a URL.",
    },
  },
  Cnds: {
    /*
    SampleCondition: {
      // The category of the action as it appears in the add condition dialog
      category: "general",

      // Forward to the instance function name
      forward: "_SampleAction",
      // Or specify a handler function
      handler: `function () {
        // Your code here
      }`,

      // Set to true to automatically generate a script interface for this condition
      // Cases where you might not want this are:
      // 1- If the condition params are incompatible with the script interface
      // 2- If you don't want it to appear in the script interface
      // 3- If the script interface has a better way to achieve the same thing
      autoScriptInterface: true,

      // Set to true to highlight the condition in the add condition dialog
      highlight: true,

      // Set to true to hide the condition in the interface. False by default if not specified.
      deprecated: false,

      // special conditions properties. These can all be omitted, and they will default to the following values:
      isTrigger: false,
      isFakeTrigger: false,
      isStatic: false,
      isLooping: false,
      isInvertible: true,
      isCompatibleWithTriggers: true,

      // list of parameters
      params: [
        {
          // The id of the parameter. This is used to generate the script interface.
          // It must be unique for each parameter.
          id: "param1",
          // The name of the parameter.
          name: "Param 1",
          // The description of the parameter.
          desc: "The first parameter",

          // The type of the parameter.
          type:
            // The following types can take a default value AND be automatically generated in the script interface
            - "string"
            - "number"
            - "any"
            - "boolean"

            // The following types can take a default value but CANNOT be automatically generated in the script interface
            - "combo"

            // The following types CANNOT take a default value AND CANNOT be automatically generated in the script interface
            - "cmp"
            - "object"
            - "objectname"
            - "layer"
            - "layout"
            - "keyb"
            - "instancevar"
            - "instancevarbool"
            - "eventvar"
            - "eventvarbool"
            - "animation"
            - "objinstancevar"

          // The default value of the parameter. Can be omitted if the type is not a string, number, any, boolean or combo.
          value: "the default value of the parameter",

          // Only for type "combo"
          items: [
            {"itemId1": "itemName1"},
            {"itemId2": "itemName2"},
            {"itemId3": "itemName3"},
          ],

          // Only for type "object"
          allowedPluginIds: ["Sprite", "TiledBg"],
        },
      ],

      // The name of the condition as it appears in the add condition dialog
      listName: "Sample Condition",

      // The text that appears in the event sheet. Note, every single param must be used in the display text.
      // You can also use [b] and [i] tags.
      // You can also use the {my} tag to include the behavior icon and name.
      displayText: "{my}: Sample condition [i]{0}[/i]",

      // The description of the condition as it appears in the add condition dialog
      description: "This is a sample condition",
    },
    */
    IsTileRandomizationEnabled: {
      category: "tile_randomization",
      forward: "_IsTileRandomizationEnabled",
      autoScriptInterface: true,
      params: [],
      listName: "Is tile randomization enabled",
      displayText: "{my}: Is tile randomization enabled",
      description:
        "Whether random offsets and orientations for tiles are enabled.",
    },
  },
  Exps: {
    /*
    SampleExpression: {
      // The category of the action as it appears in the expression picker
      category: "general",

      // Forward to the instance function name
      forward: "_SampleAction",
      // Or specify a handler function
      handler: `function () {
        // Your code here
      }`,

      // Set to true to automatically generate a script interface for this expression
      // Cases where you might not want this are:
      // 1- If you don't want it to appear in the script interface
      // 2- If the script interface has a better way to achieve the same thing
      autoScriptInterface: true,

      // Set to true to highlight the expression in the expression picker
      highlight: true,

      // Set to true to hide the expression in the interface. False by default if not specified.
      deprecated: false,

      // The type of the expression.
      returnType:
        - "string"
        - "number"
        - "any" // must be either string or number

      // Set to true if the expression is variadic. False by default if not specified.
      isVariadicParameters: false

      // list of parameters
      params: [
        {
          // The id of the parameter. This is used to generate the script interface.
          // It must be unique for each parameter.
          id: "param1",
          // The name of the parameter.
          name: "Param 1",
          // The description of the parameter.
          desc: "The first parameter",

          // The type of the parameter.
          type:
            // The following types can take a default value AND be automatically generated in the script interface
            - "string"
            - "number"
            - "any"
        },
      ],

      // The description of the expression as it appears in the expression picker
      description: "This is a sample expression",
    },
    */
    ImageOffsetX: {
      category: "general",
      forward: "_GetImageOffsetX",
      autoScriptInterface: true,
      returnType: "number",
      params: [],
      description: "The X offset of the image within the object, in pixels.",
    },
    ImageOffsetY: {
      category: "general",
      forward: "_GetImageOffsetY",
      autoScriptInterface: true,
      returnType: "number",
      params: [],
      description: "The Y offset of the image within the object, in pixels.",
    },
    ImageScaleX: {
      category: "general",
      forward: "_GetImageScaleX",
      autoScriptInterface: true,
      returnType: "number",
      params: [],
      description: "The X scale of the image within the object.",
    },
    ImageScaleY: {
      category: "general",
      forward: "_GetImageScaleY",
      autoScriptInterface: true,
      returnType: "number",
      params: [],
      description: "The Y scale of the image within the object.",
    },
    ImageAngle: {
      category: "general",
      forward: "_GetImageAngle",
      autoScriptInterface: true,
      returnType: "number",
      params: [],
      description: "The angle of the image within the object, in degrees.",
    },
    IsTileRandomizationEnabled: {
      category: "tile_randomization",
      handler: `function () {
        return this._enableTileRandomization?1:0;
      }`,
      autoScriptInterface: false,
      returnType: "number",
      params: [],
      description:
        "Whether random offsets and orientations for tiles are enabled.",
    },
    TileXRandom: {
      category: "tile_randomization",
      forward: "_GetTileXRandom",
      autoScriptInterface: true,
      returnType: "number",
      params: [],
      description: "The amount of horizontal shift randomization.",
    },
    TileYRandom: {
      category: "tile_randomization",
      forward: "_GetTileYRandom",
      autoScriptInterface: true,
      returnType: "number",
      params: [],
      description: "The amount of vertical shift randomization.",
    },
    TileAngleRandom: {
      category: "tile_randomization",
      forward: "_GetTileAngleRandom",
      autoScriptInterface: true,
      returnType: "number",
      params: [],
      description: "The amount of rotation randomization.",
    },
    TileBlendMarginX: {
      category: "tile_randomization",
      forward: "_GetTileBlendMarginX",
      autoScriptInterface: true,
      returnType: "number",
      params: [],
      description:
        "The percentage of the tile width that fades to adjacent tiles.",
    },
    TileBlendMarginY: {
      category: "tile_randomization",
      forward: "_GetTileBlendMarginY",
      autoScriptInterface: true,
      returnType: "number",
      params: [],
      description:
        "The percentage of the tile height that fades to adjacent tiles.",
    },
  },
};
