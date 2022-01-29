import React, { useEffect, useState } from 'react';

import { Header } from './components';
import Service from './api/ApiService';
import { IBaseState } from './types/baseState';
import SearchForm from './containers/SearchForm';
import PicturesBlock from './containers/PicturesContainer';
import { ISuccessResponse } from './types/ISuccessResponse';

const ApiService = new Service();

type PicturesState = IBaseState<ISuccessResponse | null, any>;

const initialState: PicturesState = {
  isFetching: false,
  data: null,
  error: null,
};

const App = () => {
  const [picturesState, setPicturesState] = useState<PicturesState>(initialState);

  const setIsFetching = (isFetching: boolean) =>
    setPicturesState((prevState) => ({ ...prevState, isFetching }));

  const setPicturesData = (data: any) =>
    setPicturesState((prevState) => ({ ...prevState, data }));

  const setPicturesError = (error: any) =>
    setPicturesState((prevState) => ({ ...prevState, error }));

  useEffect(() => () => setPicturesData(initialState), []);

  const fetchPictures = async (query: string) => {
    setPicturesData(null);
    setPicturesError(null);
    setIsFetching(true);

    try {
      const data = await ApiService.fetchPictures(query);
      setPicturesData(data);
    } catch (error) {
      console.error(error);
      setPicturesError('Something went wrong, please retry.');
    } finally {
      setIsFetching(false);
    }
  };

  return (
    <>
      <Header />
      <main>
        <SearchForm fetchPictures={fetchPictures} />
        <section>
          {
            picturesState.isFetching
              ? <p>Fetching...</p>
              : picturesState.error
                ? <p>Something went wrong...</p>
                : picturesState.data
                  ? <PicturesBlock data={picturesState.data} />
                  : undefined
          }
        </section>
      </main>
    </>
  );
}

export default App;
