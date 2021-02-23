/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   vaadin-control-state-mixin.js
 */


// tslint:disable:variable-name Describing an API that's defined elsewhere.
// tslint:disable:no-any describes the API as best we are able today

export {ControlStateMixin};


/**
 * Polymer.IronControlState is not a proper 2.0 class, also, its tabindex
 * implementation fails in the shadow dom, so we have this for vaadin elements.
 */
declare function ControlStateMixin<T extends new (...args: any[]) => {}>(base: T): T & ControlStateMixinConstructor;

interface ControlStateMixinConstructor {
  new(...args: any[]): ControlStateMixin;
}

export {ControlStateMixinConstructor};

interface ControlStateMixin {

  /**
   * Any element extending this mixin is required to implement this getter.
   * It returns the actual focusable element in the component.
   */
  readonly focusElement: Element|null|undefined;

  /**
   * Specify that this control should have input focus when the page loads.
   */
  autofocus: boolean|null|undefined;

  /**
   * If true, the user cannot interact with this element.
   */
  disabled: boolean|null|undefined;
  ready(): void;
  disconnectedCallback(): void;
  _setFocused(focused: boolean): void;
  _focus(): void;
  click(): void;
}
