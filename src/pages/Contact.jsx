export default function Contact() {
  return (
    <div className="container my-4">
      <h2>Contact Us</h2>
      <form onSubmit={(e) => { e.preventDefault(); alert("Message Sent!"); e.target.reset(); }}>
        <div className="mb-3">
          <label>Name</label>
          <input className="form-control" type="text" required />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input className="form-control" type="email" required />
        </div>
        <div className="mb-3">
          <label>Message</label>
          <textarea className="form-control" rows="5" required></textarea>
        </div>
        <button className="btn btn-primary" type="submit">Send</button>
      </form>
    </div>
  );
}