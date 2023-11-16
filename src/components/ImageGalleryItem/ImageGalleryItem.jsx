import { Component } from 'react';
import { ImageGalleryItemWrapper } from './ImageGalleryItem.styled';
import { ModalWindows } from '../Modal/ModalWindows';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
    idImage: 0,
  };

  openModal = e => {
    this.setState({
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    const { isModalOpen } = this.state;
    const {
      image: { webformatURL, largeImageURL, tags },
    } = this.props;

    return (
      <ImageGalleryItemWrapper>
        <img src={webformatURL} alt={tags} onClick={this.openModal} />
        <ModalWindows
          isOpen={isModalOpen}
          onClose={this.closeModal}
          image={largeImageURL}
          alt={tags}
        />
      </ImageGalleryItemWrapper>
    );
  }
}
