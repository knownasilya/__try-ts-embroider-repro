import Route from '@ember/routing/route';

export default class Application extends Route {
  beforeModel() {
    return this.loadCurrentUser();
  }

  async loadCurrentUser() {
    alert('called');
    debugger;
  }
}
