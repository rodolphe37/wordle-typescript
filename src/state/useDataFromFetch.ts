import { useState } from "react";

const useDataFromFetch = () => {
  const [solutionArray, setSolutionArray] = useState<any>([]);

  return [solutionArray, setSolutionArray];
};

export default useDataFromFetch;
