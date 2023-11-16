import { ImageGalleryWrapper } from './ImageGallery.styled';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  return (
    <ImageGalleryWrapper>
      {images.map(image => (
        <ImageGalleryItem image={image} key={image.id} />
      ))}
    </ImageGalleryWrapper>
  );
};
