import { ButtonWrapper } from './Button.styled';

export const Button = ({ loadMore }) => {
  return <ButtonWrapper onClick={loadMore}>Load More</ButtonWrapper>;
};
