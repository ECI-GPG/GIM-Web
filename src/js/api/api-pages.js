import AppConstants from '../constants/app-constants';

const PagesAPI = {

  inbox: { tab : 'OPENED'},

  getInbox() {
    return this.inbox;
  },

  setInboxTab(tab) {
    this.inbox.tab = tab;
  }
}

export default PagesAPI;
