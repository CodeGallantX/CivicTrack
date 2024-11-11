"use client"
import { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);

//     try {
//       const response = await fetch('https://your-api-endpoint/forgot-password', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ email })
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setMessage('Recovery email sent! Please check your inbox.');
//       } else {
//         setMessage(data.message || 'Failed to send recovery email.');
//       }
//     } catch (error) {
//       setMessage('An error occurred. Please try again.');
//     }
  };

  return (
    <div className="container mx-auto py-12 lg:py-8">
      <h1 className="text-4xl lg:text-6xl font-bold text-center">Recover Password</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 lg:gap-6">
        <fieldset className="flex flex-col items-start justify-center gap-1">
          <label className="text-[#222831c6]" htmlFor="email">Email Address</label>
          <input
            className="w-full border border-solid py-3 px-3 rounded border-[#22283170] outline-none focus:ring-1 focus:ring-[#92B76D]"
            type="email"
            name="email"
            id="email"
            placeholder="kiasmith@mail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </fieldset>

        {message && <p className="text-green-500">{message}</p>}

        <button className="w-full text-xl font-semibold py-4 rounded bg-[#92B76D] hover:bg-[#ffca0d]" type="submit">
          Send email
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;