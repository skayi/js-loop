/**
 * Author Kwange
 * -------------------------------------------------------------------
 * [Usage]
 * 1. import: import loop from "js-loop";
 * 2. init:
 *    const loopInst = loop({
        run: yourFunction,
        args: arguments, which is using in yourFunction (not required)
        threshhold: 1000
      });
 * 3. execute:  loopInst.start();
 * 4. cancel: loopInst.cancel();
 * @param {option, immediate}: option - loop instance config, immediate - true/false/undefined
 * @returns {start, cancel, config}
 */
export default function loop(option = {}, immediate) {
  let _option = {
    run: function () {},
    args: null,
    threshhold: 2000,
  };
  let _cancelId = null;

  _option = Object.assign({}, _option, option);

  function _callback() {
    _option.run(_option.args);
    _cancelId = setTimeout(_callback, _option.threshhold);
  }

  function start() {
    if (immediate) {
      _callback();
    } else {
      _cancelId = setTimeout(_callback, _option.threshhold);
    }
  }

  function cancel() {
    clearTimeout(_cancelId);
  }

  return {
    start,
    cancel,
    config: _option,
  };
}
