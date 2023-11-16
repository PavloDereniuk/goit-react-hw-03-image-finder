import { ImageGalleryItemWrapper } from './ImageGalleryItem.styled';


export const ImageGalleryItem = images => {
  const date = images.images;

  return date.map(({ id, webformatURL, largeImageURL }) => {
    return (
      <ImageGalleryItemWrapper key={id}>
        <img id={id} src={webformatURL} alt={largeImageURL} />
      </ImageGalleryItemWrapper>
    );
  });
};
