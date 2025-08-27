import { useState } from "react";

const useFilterRest = (initial = []) => {
  const [filterRest, setFilterRest] = useState(initial);
  return [filterRest, setFilterRest];
};

export default useFilterRest;
