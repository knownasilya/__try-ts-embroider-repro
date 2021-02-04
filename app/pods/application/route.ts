import Route from '@ember/routing/route';

export default class Application extends Route {
  beforeModel() {
    alert('called');
  }
}
