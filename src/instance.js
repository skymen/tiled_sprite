function getInstanceJs(parentClass, scriptInterface, addonTriggers, C3) {
  const tempRect = C3.New(C3.Rect);
  const tempQuad = C3.New(C3.Quad);
  const rcTex = C3.New(C3.Rect);
  const qTex = C3.New(C3.Quad);
  function WrapModeToStr(wrapMode) {
    switch (wrapMode) {
      case 0:
        return "clamp-to-edge";
      case 1:
        return "repeat";
      case 2:
        return "mirror-repeat";
    }
    return "repeat";
  }
  // let oldSpriteType = C3.Plugins.Sprite.Type;
  // let delegate = null;
  // C3.Plugins.Sprite.Type = class extends oldSpriteType {
  //   // LoadTextures(renderer) {
  //   //   return new Promise((resolve, reject) => {
  //   //     delegate = {
  //   //       resolve,
  //   //       reject,
  //   //     };
  //   //   });
  //   // }

  //   LoadTextures(renderer) {
  //     const opts = {
  //       sampling: this._runtime.GetSampling(),
  //       wrapX: "repeat",
  //       wrapY: "repeat",
  //     };
  //     return Promise.all(
  //       this._animations.map((a) => a.LoadAllTextures(renderer, opts))
  //     );
  //   }
  // };
  return class extends parentClass {
    constructor(inst, properties) {
      super(inst);
      this._wrapHorizontal = 0;
      this._wrapVertical = 0;
      this._imageOffsetX = 0;
      this._imageOffsetY = 0;
      this._imageScaleX = 1;
      this._imageScaleY = 1;
      this._imageAngle = 0;
      this._enableTileRandomization = false;
      this._tileXRandom = 0;
      this._tileYRandom = 0;
      this._tileAngleRandom = 0;
      this._tileBlendMarginX = 0;
      this._tileBlendMarginY = 0;

      this.isCreatingTextures = false;

      if (
        !C3.Plugins.Sprite ||
        !(this._inst.GetPlugin() instanceof C3.Plugins.Sprite)
      ) {
        throw new Error("This behavior needs to be used on a Sprite plugin");
      }

      this._inst._objectType._skymen_textureData =
        this._inst._objectType._skymen_textureData || new WeakMap();

      this._inst.Draw = (renderer) => {
        this.Draw(renderer);
      };

      // if (delegate && !this._inst._objectType._skymen_LoadTextures) {
      //   this._inst._objectType._skymen_LoadTextures = true;
      //   (async () => {
      //     const opts = {
      //       sampling: this._runtime.GetSampling(),
      //       wrapX: this._wrapHorizontal,
      //       wrapY: this._wrapVertical,
      //     };
      //     let value = await Promise.all(
      //       this._animations.map((a) => a.LoadAllTextures(renderer, opts))
      //     );
      //     if (delegate) delegate.resolve(value);
      //   })().finally(() => {
      //     delegate = null;
      //   });
      // }

      if (properties) {
        this._wrapHorizontal = WrapModeToStr(properties[0]);
        this._wrapVertical = WrapModeToStr(properties[1]);
        this._imageOffsetX = properties[2];
        this._imageOffsetY = properties[3];
        this._imageScaleX = properties[4];
        this._imageScaleY = properties[5];
        this._imageAngle = C3.toRadians(properties[6]);
        this._enableTileRandomization = !!properties[7];
        this._tileXRandom = properties[8];
        this._tileYRandom = properties[9];
        this._tileAngleRandom = properties[10];
        this._tileBlendMarginX = properties[11];
        this._tileBlendMarginY = properties[12];
      }
    }

    Release() {
      super.Release();
    }

    async LoadTextures(renderer) {
      const opts = {
        sampling: this._runtime.GetSampling(),
        wrapX: this._wrapHorizontal,
        wrapY: this._wrapVertical,
      };
      await Promise.all(
        this._inst._objectType._animations.map((a) => {
          a.ReleaseAllTextures();
          return a.LoadAllTextures(renderer, opts);
        })
      );
      this._inst._objectType._skymen_textures_Loaded = true;
    }

    SetTilingShaderProgram(renderer) {
      if (this._enableTileRandomization) {
        const imageInfo = this._inst._sdkInst.GetCurrentImageInfo();
        renderer.SetTileRandomizationMode();
        renderer.SetTileRandomizationInfo(
          imageInfo.GetWidth() * this._imageScaleX,
          imageInfo.GetHeight() * this._imageScaleY,
          this._tileXRandom,
          this._tileYRandom,
          this._tileAngleRandom,
          this._tileBlendMarginX,
          this._tileBlendMarginY
        );
      } else renderer.SetTextureFillMode();
    }

    async LoadTexture(renderer, imageInfo, opts) {
      let canvas = await imageInfo.ExtractImageToCanvas();
      let newTexture = renderer.CreateStaticTexture(canvas, opts);
      this._inst._objectType._skymen_textureData.set(imageInfo, newTexture);
    }

    async CreateAllTextures(renderer) {
      this._inst._objectType._skymen_isCreatingTextures = true;
      const opts = {
        sampling: this._runtime.GetSampling(),
        wrapX: this._wrapHorizontal,
        wrapY: this._wrapVertical,
      };
      debugger;
      for (const a of this._inst._objectType._animations) {
        for (const f of a._frames) {
          let imageInfo = f.GetImageInfo();
          this._inst._objectType._skymen_textureData.set(imageInfo, null);
          await this.LoadTexture(renderer, imageInfo, opts);
        }
      }
    }

    Draw(renderer) {
      const imageInfo = this._inst._sdkInst.GetCurrentImageInfo();
      const texture = this._inst._sdkInst._currentTexture;
      if (texture === null) return;
      const myRealTexture =
        this._inst._objectType._skymen_textureData.get(imageInfo);
      if (!this._inst._objectType._skymen_isCreatingTextures) {
        this.CreateAllTextures(renderer);
        return;
      }
      if (myRealTexture === null) return;
      this.SetTilingShaderProgram(renderer);
      renderer.SetTexture(myRealTexture);
      const imageWidth = imageInfo.GetWidth();
      const imageHeight = imageInfo.GetHeight();
      const imageOffsetX = this._imageOffsetX / imageWidth;
      const imageOffsetY = this._imageOffsetY / imageHeight;
      const wi = this._inst.GetWorldInfo();
      rcTex.set(
        0,
        0,
        wi.GetWidth() / (imageWidth * this._imageScaleX),
        wi.GetHeight() / (imageHeight * this._imageScaleY)
      );
      rcTex.offset(-imageOffsetX, -imageOffsetY);
      if (wi.HasMesh()) this._DrawMesh(wi, renderer);
      else this._DrawStandard(wi, renderer);
    }
    _DrawStandard(wi, renderer) {
      let quad = wi.GetBoundingQuad();
      if (this._runtime.IsPixelRoundingEnabled())
        quad = wi.PixelRoundQuad(quad);
      if (this._imageAngle === 0) renderer.Quad3(quad, rcTex);
      else {
        qTex.setFromRotatedRect(rcTex, -this._imageAngle);
        renderer.Quad4(quad, qTex);
      }
    }
    _DrawMesh(wi, renderer) {
      const transformedMesh = wi.GetTransformedMesh();
      if (wi.IsMeshChanged()) {
        wi.CalculateBbox(tempRect, tempQuad, false);
        let quad = tempQuad;
        if (this._runtime.IsPixelRoundingEnabled())
          quad = wi.PixelRoundQuad(quad);
        let texCoords = rcTex;
        if (this._imageAngle !== 0) {
          qTex.setFromRotatedRect(rcTex, -this._imageAngle);
          texCoords = qTex;
        }
        transformedMesh.CalculateTransformedMesh(
          wi.GetSourceMesh(),
          quad,
          texCoords
        );
        wi.SetMeshChanged(false);
      }
      transformedMesh.Draw(renderer);
    }
    IsOriginalSizeKnown() {
      return true;
    }
    _SetMeshChanged() {
      this._inst.GetWorldInfo().SetMeshChanged(true);
    }
    _SetImageOffsetX(x) {
      if (this._imageOffsetX === x) return;
      this._imageOffsetX = x;
      this._runtime.UpdateRender();
      this._SetMeshChanged();
    }
    _GetImageOffsetX() {
      return this._imageOffsetX;
    }
    _SetImageOffsetY(y) {
      if (this._imageOffsetY === y) return;
      this._imageOffsetY = y;
      this._runtime.UpdateRender();
      this._SetMeshChanged();
    }
    _GetImageOffsetY() {
      return this._imageOffsetY;
    }
    _SetImageScaleX(x) {
      if (this._imageScaleX === x) return;
      this._imageScaleX = x;
      this._runtime.UpdateRender();
      this._SetMeshChanged();
    }
    _GetImageScaleX() {
      return this._imageScaleX;
    }
    _SetImageScaleY(y) {
      if (this._imageScaleY === y) return;
      this._imageScaleY = y;
      this._runtime.UpdateRender();
      this._SetMeshChanged();
    }
    _GetImageScaleY() {
      return this._imageScaleY;
    }
    _SetImageAngle(a) {
      if (this._imageAngle === a) return;
      this._imageAngle = a;
      this._runtime.UpdateRender();
      this._SetMeshChanged();
    }
    _GetImageAngle() {
      return this._imageAngle;
    }
    _SetTileRandomizationEnabled(e) {
      e = !!e;
      if (this._enableTileRandomization === e) return;
      this._enableTileRandomization = e;
      this._runtime.UpdateRender();
    }
    _IsTileRandomizationEnabled() {
      return this._enableTileRandomization;
    }
    _SetTileXRandom(x) {
      if (this._tileXRandom === x) return;
      this._tileXRandom = x;
      if (this._IsTileRandomizationEnabled()) this._runtime.UpdateRender();
    }
    _GetTileXRandom() {
      return this._tileXRandom;
    }
    _SetTileYRandom(y) {
      if (this._tileYRandom === y) return;
      this._tileYRandom = y;
      if (this._IsTileRandomizationEnabled()) this._runtime.UpdateRender();
    }
    _GetTileYRandom() {
      return this._tileYRandom;
    }
    _SetTileAngleRandom(a) {
      if (this._tileAngleRandom === a) return;
      this._tileAngleRandom = a;
      if (this._IsTileRandomizationEnabled()) this._runtime.UpdateRender();
    }
    _GetTileAngleRandom() {
      return this._tileAngleRandom;
    }
    _SetTileBlendMarginX(x) {
      if (this._tileBlendMarginX === x) return;
      this._tileBlendMarginX = x;
      if (this._IsTileRandomizationEnabled()) this._runtime.UpdateRender();
    }
    _GetTileBlendMarginX() {
      return this._tileBlendMarginX;
    }
    _SetTileBlendMarginY(y) {
      if (this._tileBlendMarginY === y) return;
      this._tileBlendMarginY = y;
      if (this._IsTileRandomizationEnabled()) this._runtime.UpdateRender();
    }
    _GetTileBlendMarginY() {
      return this._tileBlendMarginY;
    }
    GetDebuggerProperties() {
      return [
        {
          title: "Tiling Sprite Properties",
          properties: [
            {
              name: "Image Offset X",
              value: this._GetImageOffsetX(),
              onedit: (v) => this._SetImageOffsetX(v),
            },
            {
              name: "Image Offset Y",
              value: this._GetImageOffsetY(),
              onedit: (v) => this._SetImageOffsetY(v),
            },
            {
              name: "Image Scale X",
              value: this._GetImageScaleX() * 100,
              onedit: (v) => this._SetImageScaleX(v / 100),
            },
            {
              name: "Image Scale Y",
              value: this._GetImageScaleY() * 100,
              onedit: (v) => this._SetImageScaleY(v / 100),
            },
            {
              name: "Image Angle",
              value: C3.toDegrees(this._GetImageAngle()),
              onedit: (v) => this._SetImageAngle(C3.toRadians(v)),
            },
          ],
        },
        {
          title: "Tiling Sprite Randomization Properties",
          properties: [
            {
              name: "Enable Tile Randomization",
              value: this._IsTileRandomizationEnabled(),
              onedit: (v) => this._SetTileRandomizationEnabled(v),
            },
            {
              name: "X Random",
              value: this._GetTileXRandom() * 100,
              onedit: (v) => this._SetTileXRandom(v / 100),
            },
            {
              name: "Y Random",
              value: this._GetTileYRandom() * 100,
              onedit: (v) => this._SetTileYRandom(v / 100),
            },
            {
              name: "Angle Random",
              value: this._GetTileAngleRandom() * 100,
              onedit: (v) => this._SetTileAngleRandom(v / 100),
            },
            {
              name: "Blend Margin X",
              value: this._GetTileBlendMarginX() * 100,
              onedit: (v) => this._SetTileBlendMarginX(v / 100),
            },
            {
              name: "Blend Margin Y",
              value: this._GetTileBlendMarginY() * 100,
              onedit: (v) => this._SetTileBlendMarginY(v / 100),
            },
          ],
        },
      ];
    }

    SaveToJson() {
      return {
        wrapHorizontal: this._wrapHorizontal,
        wrapVertical: this._wrapVertical,
        imageOffsetX: this._imageOffsetX,
        imageOffsetY: this._imageOffsetY,
        imageScaleX: this._imageScaleX,
        imageScaleY: this._imageScaleY,
        imageAngle: this._imageAngle,
        enableTileRandomization: this._enableTileRandomization,
        tileXRandom: this._tileXRandom,
        tileYRandom: this._tileYRandom,
        tileAngleRandom: this._tileAngleRandom,
        tileBlendMarginX: this._tileBlendMarginX,
        tileBlendMarginY: this._tileBlendMarginY,
        isCreatingTextures: this.isCreatingTextures,
      };
    }

    LoadFromJson(o) {
      this._wrapHorizontal = o.wrapHorizontal;
      this._wrapVertical = o.wrapVertical;
      this._imageOffsetX = o.imageOffsetX;
      this._imageOffsetY = o.imageOffsetY;
      this._imageScaleX = o.imageScaleX;
      this._imageScaleY = o.imageScaleY;
      this._imageAngle = o.imageAngle;
      this._enableTileRandomization = o.enableTileRandomization;
      this._tileXRandom = o.tileXRandom;
      this._tileYRandom = o.tileYRandom;
      this._tileAngleRandom = o.tileAngleRandom;
      this._tileBlendMarginX = o.tileBlendMarginX;
      this._tileBlendMarginY = o.tileBlendMarginY;
      this.isCreatingTextures = o.isCreatingTextures;
    }

    Trigger(method) {
      super.Trigger(method);
      const addonTrigger = addonTriggers.find((x) => x.method === method);
      if (addonTrigger) {
        this.GetScriptInterface().dispatchEvent(new C3.Event(addonTrigger.id));
      }
    }

    GetScriptInterfaceClass() {
      return scriptInterface;
    }
  };
}
