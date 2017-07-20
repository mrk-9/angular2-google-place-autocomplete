/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from '../../example/app.module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@angular/core/src/application_module';
import * as import4 from '@angular/platform-browser/src/browser';
import * as import5 from '@angular/forms/src/directives';
import * as import6 from '@angular/forms/src/form_providers';
import * as import7 from '../../directives/index';
import * as import8 from '@angular/common/src/localization';
import * as import9 from '@angular/core/src/application_init';
import * as import10 from '@angular/core/src/testability/testability';
import * as import11 from '@angular/core/src/application_ref';
import * as import12 from '@angular/core/src/linker/compiler';
import * as import13 from '@angular/platform-browser/src/dom/events/hammer_gestures';
import * as import14 from '@angular/platform-browser/src/dom/events/event_manager';
import * as import15 from '@angular/platform-browser/src/dom/shared_styles_host';
import * as import16 from '@angular/platform-browser/src/dom/dom_renderer';
import * as import17 from '@angular/platform-browser/src/security/dom_sanitization_service';
import * as import18 from '@angular/core/src/animation/animation_queue';
import * as import19 from '@angular/core/src/linker/view_utils';
import * as import20 from '@angular/platform-browser/src/browser/title';
import * as import21 from '@angular/forms/src/directives/radio_control_value_accessor';
import * as import22 from '@angular/forms/src/form_builder';
import * as import23 from '@angular/core/src/di/injector';
import * as import24 from './app.component.ngfactory';
import * as import25 from '@angular/core/src/i18n/tokens';
import * as import26 from '@angular/core/src/application_tokens';
import * as import27 from '@angular/platform-browser/src/dom/events/dom_events';
import * as import28 from '@angular/platform-browser/src/dom/events/key_events';
import * as import29 from '@angular/core/src/zone/ng_zone';
import * as import30 from '@angular/platform-browser/src/dom/debug/ng_probe';
import * as import31 from '@angular/core/src/console';
import * as import32 from '@angular/core/src/error_handler';
import * as import33 from '@angular/platform-browser/src/dom/dom_tokens';
import * as import34 from '@angular/platform-browser/src/dom/animation_driver';
import * as import35 from '@angular/core/src/render/api';
import * as import36 from '@angular/core/src/security';
import * as import37 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import38 from '@angular/core/src/change_detection/differs/keyvalue_differs';
class GooglePlaceExampleInjector extends import0.NgModuleInjector<import1.GooglePlaceExample> {
  _CommonModule_0:import2.CommonModule;
  _ApplicationModule_1:import3.ApplicationModule;
  _BrowserModule_2:import4.BrowserModule;
  _InternalFormsSharedModule_3:import5.InternalFormsSharedModule;
  _FormsModule_4:import6.FormsModule;
  _ReactiveFormsModule_5:import6.ReactiveFormsModule;
  _GooglePlaceModule_6:import7.GooglePlaceModule;
  _GooglePlaceExample_7:import1.GooglePlaceExample;
  __LOCALE_ID_8:any;
  __NgLocalization_9:import8.NgLocaleLocalization;
  _ErrorHandler_10:any;
  _ApplicationInitStatus_11:import9.ApplicationInitStatus;
  _Testability_12:import10.Testability;
  _ApplicationRef__13:import11.ApplicationRef_;
  __ApplicationRef_14:any;
  __Compiler_15:import12.Compiler;
  __APP_ID_16:any;
  __DOCUMENT_17:any;
  __HAMMER_GESTURE_CONFIG_18:import13.HammerGestureConfig;
  __EVENT_MANAGER_PLUGINS_19:any[];
  __EventManager_20:import14.EventManager;
  __DomSharedStylesHost_21:import15.DomSharedStylesHost;
  __AnimationDriver_22:any;
  __DomRootRenderer_23:import16.DomRootRenderer_;
  __RootRenderer_24:any;
  __DomSanitizer_25:import17.DomSanitizerImpl;
  __Sanitizer_26:any;
  __AnimationQueue_27:import18.AnimationQueue;
  __ViewUtils_28:import19.ViewUtils;
  __IterableDiffers_29:any;
  __KeyValueDiffers_30:any;
  __SharedStylesHost_31:any;
  __Title_32:import20.Title;
  __RadioControlRegistry_33:import21.RadioControlRegistry;
  __FormBuilder_34:import22.FormBuilder;
  constructor(parent:import23.Injector) {
    super(parent,[import24.AppComponentNgFactory],[import24.AppComponentNgFactory]);
  }
  get _LOCALE_ID_8():any {
    if ((this.__LOCALE_ID_8 == null)) { (this.__LOCALE_ID_8 = import3._localeFactory(this.parent.get(import25.LOCALE_ID,(null as any)))); }
    return this.__LOCALE_ID_8;
  }
  get _NgLocalization_9():import8.NgLocaleLocalization {
    if ((this.__NgLocalization_9 == null)) { (this.__NgLocalization_9 = new import8.NgLocaleLocalization(this._LOCALE_ID_8)); }
    return this.__NgLocalization_9;
  }
  get _ApplicationRef_14():any {
    if ((this.__ApplicationRef_14 == null)) { (this.__ApplicationRef_14 = this._ApplicationRef__13); }
    return this.__ApplicationRef_14;
  }
  get _Compiler_15():import12.Compiler {
    if ((this.__Compiler_15 == null)) { (this.__Compiler_15 = new import12.Compiler()); }
    return this.__Compiler_15;
  }
  get _APP_ID_16():any {
    if ((this.__APP_ID_16 == null)) { (this.__APP_ID_16 = import26._appIdRandomProviderFactory()); }
    return this.__APP_ID_16;
  }
  get _DOCUMENT_17():any {
    if ((this.__DOCUMENT_17 == null)) { (this.__DOCUMENT_17 = import4._document()); }
    return this.__DOCUMENT_17;
  }
  get _HAMMER_GESTURE_CONFIG_18():import13.HammerGestureConfig {
    if ((this.__HAMMER_GESTURE_CONFIG_18 == null)) { (this.__HAMMER_GESTURE_CONFIG_18 = new import13.HammerGestureConfig()); }
    return this.__HAMMER_GESTURE_CONFIG_18;
  }
  get _EVENT_MANAGER_PLUGINS_19():any[] {
    if ((this.__EVENT_MANAGER_PLUGINS_19 == null)) { (this.__EVENT_MANAGER_PLUGINS_19 = [
      new import27.DomEventsPlugin(),
      new import28.KeyEventsPlugin(),
      new import13.HammerGesturesPlugin(this._HAMMER_GESTURE_CONFIG_18)
    ]
    ); }
    return this.__EVENT_MANAGER_PLUGINS_19;
  }
  get _EventManager_20():import14.EventManager {
    if ((this.__EventManager_20 == null)) { (this.__EventManager_20 = new import14.EventManager(this._EVENT_MANAGER_PLUGINS_19,this.parent.get(import29.NgZone))); }
    return this.__EventManager_20;
  }
  get _DomSharedStylesHost_21():import15.DomSharedStylesHost {
    if ((this.__DomSharedStylesHost_21 == null)) { (this.__DomSharedStylesHost_21 = new import15.DomSharedStylesHost(this._DOCUMENT_17)); }
    return this.__DomSharedStylesHost_21;
  }
  get _AnimationDriver_22():any {
    if ((this.__AnimationDriver_22 == null)) { (this.__AnimationDriver_22 = import4._resolveDefaultAnimationDriver()); }
    return this.__AnimationDriver_22;
  }
  get _DomRootRenderer_23():import16.DomRootRenderer_ {
    if ((this.__DomRootRenderer_23 == null)) { (this.__DomRootRenderer_23 = new import16.DomRootRenderer_(this._DOCUMENT_17,this._EventManager_20,this._DomSharedStylesHost_21,this._AnimationDriver_22,this._APP_ID_16)); }
    return this.__DomRootRenderer_23;
  }
  get _RootRenderer_24():any {
    if ((this.__RootRenderer_24 == null)) { (this.__RootRenderer_24 = import30._createConditionalRootRenderer(this._DomRootRenderer_23,this.parent.get(import30.NgProbeToken,(null as any)),this.parent.get(import11.NgProbeToken,(null as any)))); }
    return this.__RootRenderer_24;
  }
  get _DomSanitizer_25():import17.DomSanitizerImpl {
    if ((this.__DomSanitizer_25 == null)) { (this.__DomSanitizer_25 = new import17.DomSanitizerImpl()); }
    return this.__DomSanitizer_25;
  }
  get _Sanitizer_26():any {
    if ((this.__Sanitizer_26 == null)) { (this.__Sanitizer_26 = this._DomSanitizer_25); }
    return this.__Sanitizer_26;
  }
  get _AnimationQueue_27():import18.AnimationQueue {
    if ((this.__AnimationQueue_27 == null)) { (this.__AnimationQueue_27 = new import18.AnimationQueue(this.parent.get(import29.NgZone))); }
    return this.__AnimationQueue_27;
  }
  get _ViewUtils_28():import19.ViewUtils {
    if ((this.__ViewUtils_28 == null)) { (this.__ViewUtils_28 = new import19.ViewUtils(this._RootRenderer_24,this._Sanitizer_26,this._AnimationQueue_27)); }
    return this.__ViewUtils_28;
  }
  get _IterableDiffers_29():any {
    if ((this.__IterableDiffers_29 == null)) { (this.__IterableDiffers_29 = import3._iterableDiffersFactory()); }
    return this.__IterableDiffers_29;
  }
  get _KeyValueDiffers_30():any {
    if ((this.__KeyValueDiffers_30 == null)) { (this.__KeyValueDiffers_30 = import3._keyValueDiffersFactory()); }
    return this.__KeyValueDiffers_30;
  }
  get _SharedStylesHost_31():any {
    if ((this.__SharedStylesHost_31 == null)) { (this.__SharedStylesHost_31 = this._DomSharedStylesHost_21); }
    return this.__SharedStylesHost_31;
  }
  get _Title_32():import20.Title {
    if ((this.__Title_32 == null)) { (this.__Title_32 = new import20.Title()); }
    return this.__Title_32;
  }
  get _RadioControlRegistry_33():import21.RadioControlRegistry {
    if ((this.__RadioControlRegistry_33 == null)) { (this.__RadioControlRegistry_33 = new import21.RadioControlRegistry()); }
    return this.__RadioControlRegistry_33;
  }
  get _FormBuilder_34():import22.FormBuilder {
    if ((this.__FormBuilder_34 == null)) { (this.__FormBuilder_34 = new import22.FormBuilder()); }
    return this.__FormBuilder_34;
  }
  createInternal():import1.GooglePlaceExample {
    this._CommonModule_0 = new import2.CommonModule();
    this._ApplicationModule_1 = new import3.ApplicationModule();
    this._BrowserModule_2 = new import4.BrowserModule(this.parent.get(import4.BrowserModule,(null as any)));
    this._InternalFormsSharedModule_3 = new import5.InternalFormsSharedModule();
    this._FormsModule_4 = new import6.FormsModule();
    this._ReactiveFormsModule_5 = new import6.ReactiveFormsModule();
    this._GooglePlaceModule_6 = new import7.GooglePlaceModule();
    this._GooglePlaceExample_7 = new import1.GooglePlaceExample();
    this._ErrorHandler_10 = import4.errorHandler();
    this._ApplicationInitStatus_11 = new import9.ApplicationInitStatus(this.parent.get(import9.APP_INITIALIZER,(null as any)));
    this._Testability_12 = new import10.Testability(this.parent.get(import29.NgZone));
    this._ApplicationRef__13 = new import11.ApplicationRef_(this.parent.get(import29.NgZone),this.parent.get(import31.Console),this,this._ErrorHandler_10,this,this._ApplicationInitStatus_11,this.parent.get(import10.TestabilityRegistry,(null as any)),this._Testability_12);
    return this._GooglePlaceExample_7;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import3.ApplicationModule)) { return this._ApplicationModule_1; }
    if ((token === import4.BrowserModule)) { return this._BrowserModule_2; }
    if ((token === import5.InternalFormsSharedModule)) { return this._InternalFormsSharedModule_3; }
    if ((token === import6.FormsModule)) { return this._FormsModule_4; }
    if ((token === import6.ReactiveFormsModule)) { return this._ReactiveFormsModule_5; }
    if ((token === import7.GooglePlaceModule)) { return this._GooglePlaceModule_6; }
    if ((token === import1.GooglePlaceExample)) { return this._GooglePlaceExample_7; }
    if ((token === import25.LOCALE_ID)) { return this._LOCALE_ID_8; }
    if ((token === import8.NgLocalization)) { return this._NgLocalization_9; }
    if ((token === import32.ErrorHandler)) { return this._ErrorHandler_10; }
    if ((token === import9.ApplicationInitStatus)) { return this._ApplicationInitStatus_11; }
    if ((token === import10.Testability)) { return this._Testability_12; }
    if ((token === import11.ApplicationRef_)) { return this._ApplicationRef__13; }
    if ((token === import11.ApplicationRef)) { return this._ApplicationRef_14; }
    if ((token === import12.Compiler)) { return this._Compiler_15; }
    if ((token === import26.APP_ID)) { return this._APP_ID_16; }
    if ((token === import33.DOCUMENT)) { return this._DOCUMENT_17; }
    if ((token === import13.HAMMER_GESTURE_CONFIG)) { return this._HAMMER_GESTURE_CONFIG_18; }
    if ((token === import14.EVENT_MANAGER_PLUGINS)) { return this._EVENT_MANAGER_PLUGINS_19; }
    if ((token === import14.EventManager)) { return this._EventManager_20; }
    if ((token === import15.DomSharedStylesHost)) { return this._DomSharedStylesHost_21; }
    if ((token === import34.AnimationDriver)) { return this._AnimationDriver_22; }
    if ((token === import16.DomRootRenderer)) { return this._DomRootRenderer_23; }
    if ((token === import35.RootRenderer)) { return this._RootRenderer_24; }
    if ((token === import17.DomSanitizer)) { return this._DomSanitizer_25; }
    if ((token === import36.Sanitizer)) { return this._Sanitizer_26; }
    if ((token === import18.AnimationQueue)) { return this._AnimationQueue_27; }
    if ((token === import19.ViewUtils)) { return this._ViewUtils_28; }
    if ((token === import37.IterableDiffers)) { return this._IterableDiffers_29; }
    if ((token === import38.KeyValueDiffers)) { return this._KeyValueDiffers_30; }
    if ((token === import15.SharedStylesHost)) { return this._SharedStylesHost_31; }
    if ((token === import20.Title)) { return this._Title_32; }
    if ((token === import21.RadioControlRegistry)) { return this._RadioControlRegistry_33; }
    if ((token === import22.FormBuilder)) { return this._FormBuilder_34; }
    return notFoundResult;
  }
  destroyInternal():void {
    this._ApplicationRef__13.ngOnDestroy();
  }
}
export const GooglePlaceExampleNgFactory:import0.NgModuleFactory<import1.GooglePlaceExample> = new import0.NgModuleFactory(GooglePlaceExampleInjector,import1.GooglePlaceExample);