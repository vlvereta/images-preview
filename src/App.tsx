import { useEffect, useState } from "react";

import { Header } from "./components";
import { IBaseState } from "./types/baseState";
import SearchForm from "./container/SearchForm";
import { ApiService as Service } from "./api/ApiService";
import { ISuccessResponse } from "./types/ISuccessResponse";

const ApiService = new Service();

type PicturesState = IBaseState<ISuccessResponse | null, any>;

const initialState: PicturesState = {
  isFetching: false,
  data: null,
  error: null,
};

const App = () => {
  const [picturesState, setPicturesState] = useState<PicturesState>(initialState);

  useEffect(() => () => setPicturesData(initialState), []);

  const setIsFetching =
    (isFetching: boolean) => setPicturesState(prevState => ({ ...prevState, isFetching }));

  const setPicturesData =
    (data: any) => setPicturesState(prevState => ({ ...prevState, data }));

  const setPicturesError =
    (error: any) => setPicturesState(prevState => ({ ...prevState, error }));
  
  const fetchPictures = async (query: string) => {
    setIsFetching(true);
    
    try {
      const data = await ApiService.fetchPictures(query);
      setPicturesData(data);
    } catch (error) {
      console.error("Something went wrong: ", error);
      setPicturesError(error);
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
          <p>
            {picturesState.data?.totalHits}
          </p>
        </section>
      </main>
    </>
  );
};

export default App;
