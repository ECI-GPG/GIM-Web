import AppConstants from '../constants/app-constants';

const model = {
  selectedTab : 'OPENED',
};

var handlers = (model) => {
  [AppConstants.ACTIONS.INBOX.SELECT_TAB]: (action) => model = Object.assign(model,{selectedTab:action.tab})
};

export default storeFactory(model, handlers);
