/**
 * Path model events
 */

'use strict';

import {EventEmitter} from 'events';
import Path from '../../models/path.model';
var PathEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
PathEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
for(var e in events) {
  let event = events[e];
  Path.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    PathEvents.emit(event + ':' + doc._id, doc);
    PathEvents.emit(event, doc);
  };
}

export default PathEvents;
