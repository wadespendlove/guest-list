const GuestDetails = ({ selectedGuest, setSelectedGuest }) => {
  return (
    <section id="guest">
      <h3>{selectedGuest.name}</h3>
      <section id="guest-details">
        <section className="details">
          <h4 className="phone"> Phone number:</h4>
          <p>{selectedGuest.phone}</p>
        </section>
        <section className="details">
          <h4 className="email"> E-mail:</h4>
          <p>{selectedGuest.email}</p>
        </section>
        <section className="details">
          <h4 className="job"> Employed as:</h4>
          <p>{selectedGuest.job}</p>
        </section>
        <section className="details">
          <h4 className="bio"> Bio:</h4>
          <p>{selectedGuest.phone}</p>
          <button id="back" onClick={() => setSelectedGuest()}>
            Back to List
          </button>
        </section>
      </section>
    </section>
  );
};

export default GuestDetails;
