'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Observer观察者机制
 * 微信小程序在页面中需要注册所有事件和数据，为了更好组件化，组件只关心自身样式和状态的变更，而将触发行为以广播的形式通知给页面
 * 再调用页面注册的事件进行处理
 * @author  xinhong
 */
var Observer = function () {
  function Observer() {
    _classCallCheck(this, Observer);

    this.ob = {};
  }

  /**
   * [on 按照事件类型挂载回调函数]
   * @param  {[type]}   eventNames [事件名称，可以多事件以空格分隔]
   * @param  {Function} callback   [回调函数]
   * @return {[type]}              [如果是单一事件则返回当前回调所在事件空间的 key 值，如果是多事件则是一个对象，事件名与key相对应 ]
   */


  _createClass(Observer, [{
    key: 'on',
    value: function on(eventNames, cb) {
      var self = this;
      var _events = eventNames.split(' ');
      var _eventKeys = {};
      for (var i = 0; i < _events.length; i++) {
        if (!self.ob[_events[i]]) {
          self.ob[_events[i]] = [];
        }
        var _key = self.ob[_events[i]].push(cb);
        _eventKeys[_events[i]] = _key - 1;
      }
      return _eventKeys;
    }

    /**
     * [off 解除绑回调函数]
     * @param  {[string]} eventName [事件名]
     * @param  {[array]} keys      [指定回调的 key 组成的数组，key会在绑定函数的时候（on方法）返回]
     * @return {[type]}           [description]
     */

  }, {
    key: 'off',
    value: function off(eventName, keys) {
      var self = this;
      if (keys !== undefined && !Array.isArray(keys)) {
        keys = [keys];
      }
      for (var i = 0; i < self.ob[eventName].length; i++) {
        if (keys === undefined || keys.indexOf(i) > -1) {
          self.ob[eventName][i] = undefined;
        }
      }
    }

    /**
     * [trigger 事件触发]
     * @param  {[type]} eventName [事件名]
     * @param  {[type]} args      [希望传递给回调函数的 数组或arguments对象]
     * @return {[type]}           [description]
     */

  }, {
    key: 'emit',
    value: function emit(eventName) {
      var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      var self = this;
      var result = void 0;
      if (!self.ob[eventName]) {
        return result;
      }
      for (var i = 0; self.ob[eventName] && i < self.ob[eventName].length; i++) {
        if (!self.ob[eventName][i]) {
          continue;
        }
        var _r = self.ob[eventName][i].apply(self, args);
        result = result === false ? result : _r;
      }

      return result;
    }

    /**
     * [once 只执行一次行为的绑定方法，事件执行后立即解除绑定]
     * @param  {[string]}   eventName [事件名]
     * @param  {Function} callback  [回调函数]
     * @return {[type]}             [description]
     */

  }, {
    key: 'once',
    value: function once(eventName, cb) {
      var self = this;
      var key = self.on(eventName, function () {
        // 不能用箭头函数， 否则读不到arguments
        var _r = cb.apply(this, arguments);
        self.off(eventName, key[eventName]);
        return _r;
      });
    }
  }]);

  return Observer;
}();

function getEventInstance() {
  var instance = void 0;
  if (!instance) {
    instance = new Observer();
  }
  return instance;
}

module.exports = {
  getEventInstance: getEventInstance
};