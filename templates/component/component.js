// componentId: '{{componentId}}'

/**
 * Class {{name}}.
 *
 * @author {{author}}
 * @version v1.0
 */
class {{name}} extends ControllerInstance {

  onInit() {
    const ctx = this.context;
    console.log(ctx.componentId, 'initialized as context', ctx.contextId);
  }

  onCreate() {
    console.log('It works!', this);
  }

  onDispose() {
  }

  onUpdate(target, key, value, path, old) {
  }

}
