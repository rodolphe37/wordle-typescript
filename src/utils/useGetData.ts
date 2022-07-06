import data from "../datas";

const useGetData = () => {
  const doGetDataWords = async () => {
    try {
      const result = await getWordsList();

      return result;
    } catch (error) {
      console.error(error);
    }
  };
  // method for doGetDataWords
  const getWordsList = () =>
    new Promise((resolve, reject) => {
      const words = data.map((res) => res);

      if (!words) {
        return reject(new Error("words not found"));
      }

      resolve(words);
    });

  return {
    doGetDataWords,
  };
};

export default useGetData;
