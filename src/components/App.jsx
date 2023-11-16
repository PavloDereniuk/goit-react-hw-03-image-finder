import { fetchImages } from 'api';
import { Component } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import toast, { Toaster } from 'react-hot-toast';
import { Container } from './Container';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';



export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    loading: false,
    error: false,
    loadMore: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      try {
        const additionalParams = {
          q: this.state.query.split('/').pop(),
          page: this.state.page,
          per_page: 12,
        };
        const initialImages = await fetchImages(additionalParams);
        if (additionalParams.q === '' || initialImages.total === 0) {
          Notify.failure(
            'Sorry, there are no images matching your search query. Please try again.'
          );
          this.setState({ loadMore: false });
          return;
        } else {
          this.setState({ loading: true, error: false, loadMore: false });
          this.setState(prevState => ({
            images: [...prevState.images, ...initialImages.hits],
          }));
        }
      } catch (error) {
        toast.error('Please try reloading this page');
        this.setState({ error: true });
      } finally {
        this.setState({ loading: false });
      }
    }
    if (this.state.images.length > 0) {
      this.setState({ loadMore: true });
    }
  }

  addQuery = newQuery => {
    this.setState({
      query: `${Date.now()}/${newQuery.query}`,
      page: 1,
      images: [],
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  render() {
    const { images, loadMore, loading } = this.state;

    return (
      <Container>
        <Searchbar addQuery={this.addQuery} />
        {images.length > 0 && <ImageGallery images={this.state.images} />}
        {loading && <Loader />}
        {loadMore && <Button loadMore={this.handleLoadMore} />}
        <Toaster />
      </Container>
    );
  }
}
