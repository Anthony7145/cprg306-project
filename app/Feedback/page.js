import React, { useState } from 'react';
import { useClient } from 'next/client';

export default function Feedback(){
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');

  const handleRatingChange = (value) => {
    setRating(value);
  };
  
  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ rating, feedback });
    setSubmitted(true);
  };

  const client = useClient();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between text-sm">
        <h1 className="text-4xl font-bold mb-5">Online Survey and Feedback System</h1>
      <h1>Welcome to Our Online Survey and Feedback System</h1>
      <p>
        We value your feedback! Take a moment to share your thoughts on our hotel services through our online survey.
      </p>
      <div>
        <h2>How it works:</h2>
        <ol>
          <li>Rate each service category based on your experience.</li>
          <li>Submit your ratings to help us improve our services.</li>
        </ol>
      </div>
      
      <div>
      {submitted ? (
        <div>
          <h2>Thank you for your feedback!</h2>
          <p>We appreciate your time and input.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h3>Feedback Form</h3>
          <div>
            <label>Rate us:</label>
            <div>
              {[1, 2, 3, 4, 5].map((value) => (
                <label key={value}>
                  <input
                    type="radio"
                    name="rating"
                    value={value}
                    onChange={() => handleRatingChange(value)}
                  />
                  {value}
                </label>
              ))}
            </div>
          </div>
          <div>
            <label>Your Feedback:</label>
            <textarea
              value={feedback}
              onChange={handleFeedbackChange}
              rows="4"
              cols="50"
              required
            />
          </div>
          <button type="submit">Submit Feedback</button>
        </form>
      )}
    </div>
    </div>
    </main>


  );
};



