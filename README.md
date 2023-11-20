<img src="./src/icon.svg" width="100" /><br>
# tiled_sprite <br>
Description <br>
<br>
Author: skymen <br>
<sub>Made using [c3ide2-framework](https://github.com/ConstructFund/c3ide2-framework) </sub><br>

## Table of Contents
- [Usage](#usage)
- [Examples Files](#examples-files)
- [Properties](#properties)
- [Actions](#actions)
- [Conditions](#conditions)
- [Expressions](#expressions)
---
## Usage
To build the addon, run the following commands:

```
npm i
node ./build.js
```

To run the dev server, run

```
npm i
node ./dev.js
```

The build uses the pluginConfig file to generate everything else.
The main files you may want to look at would be instance.js and scriptInterface.js

## Examples Files

---
## Properties
| Property Name | Description | Type |
| --- | --- | --- |
| Wrap Horizontal | How the image wraps horizontally. | combo |
| Wrap Vertical | How the image wraps vertically. | combo |
| Image Offset X | The X offset of the image within the object, in pixels. | float |
| Image Offset Y | The Y offset of the image within the object, in pixels. | float |
| Image Scale X | The X scale of the image within the object. | percent |
| Image Scale Y | The Y scale of the image within the object. | percent |
| Image Angle | The angle of the image within the object, in degrees. | angle |
| Enable tile randomization | Whether to enable random offsets and orientations for tiles to break up repetitive patterns. | check |
| X Random | Amount of horizontal shift randomization. | percent |
| Y Random | Amount of vertical shift randomization. | percent |
| Angle Random | Amount of rotation randomization. | percent |
| Blend Margin X | Percentage of the tile width that fades to adjacent tiles. | percent |
| Blend Margin Y | Percentage of the tile height that fades to adjacent tiles. | percent |


---
## Actions
| Action | Description | Params
| --- | --- | --- |


---
## Conditions
| Condition | Description | Params
| --- | --- | --- |


---
## Expressions
| Expression | Description | Return Type | Params
| --- | --- | --- | --- |
