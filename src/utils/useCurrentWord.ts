import { useEffect } from "react";
import useDataFromFetch from "src/state/useDataFromFetch";
import useGetData from "../utils/useGetData";

const useCurrentWord = () => {
  const [solutionArray, setSolutionArray] = useDataFromFetch();
  const { doGetDataWords } = useGetData();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    async function handleDatas(_signal: AbortSignal) {
      await doGetDataWords().then((data) => {
        setSolutionArray(data);
      });
    }

    if (solutionArray.length < 1) {
      handleDatas(signal);
    }

    return () => {
      controller.abort(signal);
    };
  }, [doGetDataWords, solutionArray, setSolutionArray]);

  const current =
    solutionArray[Math.floor(Math.random() * solutionArray.length - 1)];
  return {
    current,
  };
};

export default useCurrentWord;
