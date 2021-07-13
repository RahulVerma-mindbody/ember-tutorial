import Controller from '@ember/controller';

export default Controller.extend({

  openModal: false,
  personInfo: null,

  actions: {
    openModalDetails(data) {
      this.set('openModal', true);
      this.set('personInfo', data);
    },

    closeModal() {
      this.set('openModal', false);
    }
  }
});
