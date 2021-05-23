export default class Cals {
  static add(...args) {
    return args.Array.prototype.reduce((a, b) => a + b, 0);
  }
}
