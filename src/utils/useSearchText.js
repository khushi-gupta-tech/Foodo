import { useState } from "react";

const useSearchText = () => {
  const [searchText, setSearchText] = useState("");
  return [searchText, setSearchText];
};

export default useSearchText;
