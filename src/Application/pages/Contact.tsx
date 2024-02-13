const Contact = () => {
  return (
    <div className="component contact" data-testid='contact-component'>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2892.7128894225525!2d1.7567542756502592!3d43.529179560444064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ae8bf35d57cd03%3A0xf87171c8919f4ef6!2sCaraman%20Optique!5e0!3m2!1sfr!2sfr!4v1706603805136!5m2!1sfr!2sfr" 
        title="Google Maps"
        className="map-iframe"
        allowFullScreen={true} 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
 
export default Contact;