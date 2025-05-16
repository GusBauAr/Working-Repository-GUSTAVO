import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    error: null,
  });

  useEffect(() => {
    getFetch();
  }, [url]);

  const setLoadingState = () => {
    setState({
        data: null,
        isLoading: true,
        hasError: false,
        error: null,
    });
  }

  //esta es nuestra funcion
  const getFetch = async () => {
    setLoadingState();
    const resp = await fetch(url);

    //sleep
    await new Promise (resolve => setTimeout(resolve,1500))

    if (!resp.ok) {
      setState({
        data: null,
        isLoading: false,
        hasError: true,
        error: {
          code: resp.status,
          message: resp.statusText,
        },
      });
      return;
    }

    const data = await resp.json();
    setState({
      data: data,
      isLoading: false,
      hasError: false,
      error: null,
    });

    //manejo del cache


  };

  //si ahora retorna un objeto es un custom hook
  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};
