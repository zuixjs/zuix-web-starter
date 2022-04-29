/* globals zuix */
// componentId: '{{componentId}}'

/**
 * {{name}} class
 *
 * @class
 * @author {{author}}
 * @version v1.0
 */
class {{name}} {
  /**
   * @constructor
   * @param {ContextController} cp The component's context controller.
   */
  constructor(cp) {
    cp.init = this.onInit;
    cp.create = this.onCreate;
    cp.update = this.onUpdate;
    cp.dispose = this.onDispose;
  }
  /** @this {ContextController} */
  onInit() {
    const ctx = this.context;
    console.log(ctx.componentId, 'initialized as context', ctx.contextId);
  }
  /** @this {ContextController} */
  onCreate() {
    console.log('It works!', this);
  }
  /** @this {ContextController} */
  onUpdate(target, key, value, path, old) {
  }
  /** @this {ContextController} */
  onDispose() {
  }
}

module.exports = {{name}};
