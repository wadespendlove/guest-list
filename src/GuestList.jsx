const GuestList = ({ guestList, setSelectedGuest }) => {
  return guestList.map((individualGuest) => {
    return (
      <section id="guest" key={individualGuest.id}>
        <p
          className="name"
          onClick={() => {
            setSelectedGuest(individualGuest);
          }}
        >
          {individualGuest.name}
          <br />
          {individualGuest.email}
        </p>
      </section>
    );
  });
};

export default GuestList;
