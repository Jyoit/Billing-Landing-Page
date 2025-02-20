import React from 'react'

export default function Testimonials() {

    const testimonials = [
        { name: "John Doe", photo: "john.jpg", quote: "This billing service saved me so much time!" },
        { name: "Jane Smith", photo: "jane.jpg", quote: "Highly recommend this service!" },
       
      ];
      
  return (
    <div className="testimonials-section">
      {testimonials.map((testimonial, index) => (
        <div className='testimonial-card' key={index}>
          <img src={testimonial.photo} alt={testimonial.name} />
          <div className='testimonial-content' >
          <h4>{testimonial.name}</h4>
          <p>{testimonial.quote}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
