import React from 'react'

export default function Contact() {
  return (
    <section id="contact" class="section section-contact">
      <h2>Contact Me</h2>
      <form>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" />
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" />
        <label for="message">Message:</label>
        <textarea id="message" name="message"></textarea>
        <input type="submit" value="Submit" />
      </form>
    </section>
  )
}
