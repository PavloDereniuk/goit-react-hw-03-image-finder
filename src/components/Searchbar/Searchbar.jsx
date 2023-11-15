import { Formik } from 'formik';

import {
  SearchbarWrapper,
  Form,
  Button,
  Field,
  Search,
} from './Searchbar.styled';

export const Searchbar = ({ addQuery }) => {
  return (
    <Formik
      initialValues={{
        query: '',
      }}
      onSubmit={values => {
        addQuery(values);
      }}
    >
      <SearchbarWrapper>
        <Form>
          <Button type="submit">
            <Search />
          </Button>

          <Field
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="query"
          />
        </Form>
      </SearchbarWrapper>
    </Formik>
  );
};
