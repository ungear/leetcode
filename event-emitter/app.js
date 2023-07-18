//https://leetcode.com/problems/event-emitter/

class EventEmitter {
  events = {}
  subscribe(event, cb) {
    let registredEvent = this.events[event];
    if(!registredEvent) {
        registredEvent = []
        this.events[event] = registredEvent;
    }
    registredEvent.push(cb);
    return {
        unsubscribe: () => {
            const cbIndex = registredEvent.indexOf(cb);
            registredEvent.splice(cbIndex, 1);
        }
    };
  }

  emit(event, args = []) {
      const callbacks = this.events[event];
      if(!callbacks) return [];
      const results = callbacks.map(fn => {
        return fn(...args);   
      })

      return results
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */
