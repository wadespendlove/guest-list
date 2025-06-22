import { useState } from "react";
import GuestList from "./GuestList";
import GuestDetails from "./GuestDetails";
import useGuest from "./useGuest";

export default function App() {
  const [selectedGuest, setSelectedGuest] = useState();
  const guestList = useGuest();
  return (
    <section id="the-guest-list">
      <h1>Guest List</h1>
      {!selectedGuest ? (
        <GuestList guestList={guestList} setSelectedGuest={setSelectedGuest} />
      ) : (
        <GuestDetails
          selectedGuest={selectedGuest}
          setSelectedGuest={setSelectedGuest}
        />
      )}
    </section>
  );
}
