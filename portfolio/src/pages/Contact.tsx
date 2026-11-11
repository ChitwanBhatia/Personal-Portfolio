import Heading from "../components/Heading";

export default function Contact() {
  return (
    <section>
      <Heading>Contact</Heading>
      <div className="map">Embed your Google Map iframe here</div>
      <h3 className="h3">Contact Form</h3>
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <input placeholder="Full Name" required />
        <input type="email" placeholder="Email Address" required />
        <textarea placeholder="Your Message" required />
        <button className="btn">➤ Send Message</button>
      </form>
    </section>
  );
}