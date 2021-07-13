import Component from '@ember/component';

export default Component.extend({

  actions: {
    openModal(data) {
      if(this.openModal){
        this.openModal(data);
      }
    }
  }
});
