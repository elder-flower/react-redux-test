import _ from 'lodash';
import { READ_EVENTS } from '../actions';

export default( events = {}, action ) => {
    switch( action.type ){
        case READ_EVENTS:
            /*
            console.log('events action');
            let aaa = _.mapKeys(action.response.data, 'id');
            console.log(action);
            console.log(aaa);
            */
            return _.mapKeys(action.response.data, 'id');
        default:
            return events
    }
}

