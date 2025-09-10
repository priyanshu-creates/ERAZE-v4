// Enable client-side interactivity for this component
'use client';

// Import necessary modules
import { useState } from 'react';

// Contact page component with form functionality
export default function ContactPage() {
  // State to manage form data
  // This stores the values entered by the user in the form fields
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: ''
  });

  // Function to handle form input changes
  // This updates the formData state when users type in form fields
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    // Update the specific field in the formData state
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Function to handle form submission
  // This is called when the user clicks the submit button
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    // Show a confirmation message to the user
    alert('Thank you for your message! We will get back to you soon.');
    // Reset the form fields to empty values
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      message: ''
    });
  };

  // Main component render function
  return (
    // Main container with minimum height to fill the screen
    <div className="min-h-screen">
      {/* Hero Section - Contact page introduction */}
      <section className="relative py-20 md:py-32 overflow-hidden min-h-[100vh] flex items-center">
        {/* Content container with maximum width and padding */}
        <div className="max-w-[1440px] mx-auto px-6 relative z-10">
          {/* Form container with maximum width */}
          <div className="max-w-2xl mx-auto">
            {/* Page title */}
            <h1 className="mb-12 text-center">
              Contact us
            </h1>
            
            {/* Contact form with onSubmit handler */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* First Name field */}
              <div>
                {/* Label for the first name input */}
                <label htmlFor="firstName" className="block tagline mb-2">
                  First Name
                </label>
                {/* First name input field */}
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  // Styling for the input field
                  className="w-full px-6 py-4 bg-[#0A0F0A] border border-[rgba(141,255,79,0.2)] rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[#8DFF4F] text-[#FFFFFF] placeholder-[#8B8B8B]"
                />
              </div>
              
              {/* Last Name field */}
              <div>
                {/* Label for the last name input */}
                <label htmlFor="lastName" className="block tagline mb-2">
                  Last Name
                </label>
                {/* Last name input field */}
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  // Styling for the input field
                  className="w-full px-6 py-4 bg-[#0A0F0A] border border-[rgba(141,255,79,0.2)] rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[#8DFF4F] text-[#FFFFFF] placeholder-[#8B8B8B]"
                />
              </div>
              
              {/* Email field */}
              <div>
                {/* Label for the email input */}
                <label htmlFor="email" className="block tagline mb-2">
                  Email
                </label>
                {/* Email input field */}
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  // Styling for the input field
                  className="w-full px-6 py-4 bg-[#0A0F0A] border border-[rgba(141,255,79,0.2)] rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[#8DFF4F] text-[#FFFFFF] placeholder-[#8B8B8B]"
                />
              </div>
              
              {/* Company field (optional) */}
              <div>
                {/* Label for the company input */}
                <label htmlFor="company" className="block tagline mb-2">
                  Company
                </label>
                {/* Company input field */}
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  // Styling for the input field
                  className="w-full px-6 py-4 bg-[#0A0F0A] border border-[rgba(141,255,79,0.2)] rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[#8DFF4F] text-[#FFFFFF] placeholder-[#8B8B8B]"
                />
              </div>
              
              {/* Message field */}
              <div>
                {/* Label for the message textarea */}
                <label htmlFor="message" className="block tagline mb-2">
                  Message
                </label>
                {/* Message textarea field */}
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  // Styling for the textarea field
                  className="w-full px-6 py-4 bg-[#0A0F0A] border border-[rgba(141,255,79,0.2)] rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[#8DFF4F] text-[#FFFFFF] placeholder-[#8B8B8B]"
                ></textarea>
              </div>
              
              {/* Submit button */}
              <button
                type="submit"
                className="btn-primary w-full"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Mission Section - Company mission statement */}
      <section className="py-20">
        {/* Content container */}
        <div className="max-w-[1440px] mx-auto px-6">
          {/* Centered content */}
          <div className="text-center max-w-3xl mx-auto">
            {/* Mission statement title */}
            <h2 className="mb-4">
              We are dedicated to protecting what matters most to you.
            </h2>
            {/* Mission statement description */}
            <p className="text-default">
              Whether you have questions, seek expert guidance, or need immediate assistance, we're only a click away
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}