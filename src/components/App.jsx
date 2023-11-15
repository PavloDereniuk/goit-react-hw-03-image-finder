import { fetchImages } from 'api';
import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
// import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    images: [],
    query: 'car',
    page: 1,
    loading: false,
    error: false,
    loadMore: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      try {
        const additionalParams = {
          q: this.state.query,
        };
        const initialQuizzes = await fetchImages(additionalParams);
        this.setState({ images: initialQuizzes.hits });
      } catch (error) {
        this.setState({ error: true });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  addQuery = newQuery => {
    this.setState({
      query: newQuery.query,
    });
  };

  render() {
    return (
      <>
        <Searchbar addQuery={this.addQuery} />
        {this.state.images.length > 0 && (
          <ImageGallery images={this.state.images} />
        )}
        <Button />
      </>
    );
  }
}
