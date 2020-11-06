import template from './templates/template';
import './styles/GridBannerGallery.css';

export default class GridBannerGallery {
  constructor(elem) {
    this.elem = elem;
    this.template = template;
    this.render();
  }

  render() {
    this.elem.insertAdjacentHTML('afterbegin', this.template);
  }
}