import { ImageGalleryWrapper } from './ImageGallery.styled';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  return (
    <ImageGalleryWrapper>
      <ImageGalleryItem images={images} />
    </ImageGalleryWrapper>
  );
};
