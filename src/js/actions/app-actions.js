import AppConstants from '../constants/app-constants';
import { dispatch, register} from '../dispatchers/app-dispatcher';

export default {

  send(action, payload) {
    dispatch({actionType: actionType, payload});
  },

  getShipmentsByStatus(status) {
    dispatch({ actionType: AppConstants.INBOX.GET_SHIPMENTS, status });
  }
}
