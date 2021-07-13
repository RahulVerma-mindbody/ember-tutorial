import Component from '@ember/component';

export default Component.extend({

  actions: {
    closeModal(){
      if(this.closeModal){
        this.closeModal();
      }
    }
  }
});
