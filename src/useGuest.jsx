import { useEffect, useState } from "react";

const useGuest = () => {
  const [guestList, setGuestList] = useState([]);

  useEffect(() => {
    const getGuestList = async () => {
      const response = await fetch(
        `https://fsa-crud-2aa9294fe819.herokuapp.com/api/2505-ftb-et-web-ft/guests`
      );
      const responseObject = await response.json();
      const guests = responseObject.data;
      setGuestList(guests);
    };
    getGuestList();
  }, []);
  return guestList;
};

export default useGuest;
