import React, { useEffect, useState } from 'react';

import { Header } from './components';
import Service from './api/ApiService';
import { IBaseState } from './types/baseState';
import SearchForm from './containers/SearchForm';
import { ISuccessResponse } from './types/ISuccessResponse';
import PicturesContainer from './containers/PicturesContainer';

import './styles.css';

const ApiService = new Service();

type PicturesState = IBaseState<ISuccessResponse | null, string | null>;

const initialState: PicturesState = {
  isFetching: false,
  data: null,
  error: null,
};

const App = () => {
  const [picturesState, setPicturesState] = useState<PicturesState>(initialState);

  const setIsFetching = (isFetching: boolean) =>
    setPicturesState((prevState) => ({ ...prevState, isFetching }));

  const setPicturesData = (data: ISuccessResponse) =>
    setPicturesState((prevState) => ({ ...prevState, data }));

  const setPicturesError = (error: string) =>
    setPicturesState((prevState) => ({ ...prevState, error }));

  const clearState = () => setPicturesState(initialState);
    
  useEffect(() => clearState, []);

  const fetchPictures = async (query: string) => {
    clearState();
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
        <SearchForm fetchPictures={fetchPictures} onClear={clearState} />
        {
          picturesState.isFetching
            ? <p>Fetching...</p>
            : picturesState.error
              ? <p style={{ color: 'red' }}>{picturesState.error}</p>
              : picturesState.data
                ? <PicturesContainer data={picturesState.data} />
                : (
                  <>
                    <h2>Let's search for some pictures. Use the search field above &#x1f609;</h2>
                    <h3>Pictures will be fetched from <a href="https://www.pixabay.com">Pixabay</a> portal.</h3>
                  </>
                )
        }
      </main>
    </>
  );
}

export default App;
