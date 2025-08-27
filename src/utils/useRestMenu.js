import { useEffect,useState } from "react";

const useRestMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  // fetchdata
  useEffect(() => {
    fetchMenu();
  }, [resId]);

  const fetchMenu = async () => {
    const data = await fetch(
      `http://localhost:5000/api/restaurants/menu/${resId}`
    );
    const json = await data.json();
    setResInfo(json);
  };

  return resInfo;
};

export default useRestMenu;
