import view from './view.js';
import icons from '../../img/icons.svg';
import previewView from './previewView.js';

class SearchResults extends view {
  _parentElement = document.querySelector('.results');

  _errorMessage = 'No recipe found for your query! please try again ;)';
  _message = '';

  _generateMarkup() {
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join('');
  }
}

export default new SearchResults();
