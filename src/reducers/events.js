import _ from 'lodash';
import {
  CREATE_EVENT,
  READ_EVENTS,
  READ_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT,
} from '../actions';

export default( events = {}, action ) => {
    switch( action.type ){
        case CREATE_EVENT:
        case READ_EVENT:
        case UPDATE_EVENT:
          const data = action.response.data;
          return { ...events, [data.id]: data };
        case READ_EVENTS:
            /*
            console.log('events action');
            let aaa = _.mapKeys(action.response.data, 'id');
            console.log(action);
            console.log(aaa);
            */
            /*
                response.data はObject IDを基準にソートする為に「_」を使っている。
            */
            return _.mapKeys(action.response.data, 'id');
        case DELETE_EVENT:
          delete events[action.id];
          return { ...events };
        default:
            return events
    }
}

