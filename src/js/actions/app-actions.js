import AppConstants from '../constants/app-constants';
import { dispatch, register} from '../dispatchers/app-dispatcher';

export default {

  send(action, payload) {
    dispatch({actionType: action, payload});
  },

  getShipmentsByStatus(status) {
    dispatch({ actionType: AppConstants.INBOX.GET_SHIPMENTS, status });
  }
}
