import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EventRegister = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    email: '',
    fullname: '',
    admissionNumber: '',
    branch: '',
    contactNumber: '',
    language: '',
    laptop: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const contactNumberRegex = /^[0-9]{10}$/;

    if (!emailRegex.test(formData.email)) {
      toast.error('Invalid email address');
      return;
    }

    if (!contactNumberRegex.test(formData.contactNumber)) {
      toast.error('Contact number must be 10 digits');
      return;
    }

    try {
      setLoading(true);
      const response = await fetch('https://uniques-form-back.vercel.app/codeCrusade/addParticipant', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log(response);
      if (response.status === 200) {
        toast.success('Registered successfully');
      } else if (response.status === 400) {
        toast.error('Already Registered!');
      }
      setLoading(false);
    } catch (err) {
      toast.error('Failed to register!');
      console.log(err);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md shadow-md lg:w-11/12 md:w-1/3 w-1/3">
        <h2 className="text-xl font-semibold mb-4">Event Registration</h2>
        {/* <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="fullname" className="block text-sm font-medium mb-1">Fullname</label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="admissionNumber" className="block text-sm font-medium mb-1">Admission Number</label>
            <input
              type="text"
              id="admissionNumber"
              name="admissionNumber"
              value={formData.admissionNumber}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="branch" className="block text-sm font-medium mb-1">Branch</label>
            <input
              type="text"
              id="branch"
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="contactNumber" className="block text-sm font-medium mb-1">Contact Number</label>
            <input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>

          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Language Preference</label>
            <div className="flex items-center">
              <input
                type="radio"
                id="hindi"
                name="language"
                value="Hindi"
                checked={formData.language === 'Hindi'}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="hindi" className="mr-4">Hindi</label>
              <input
                type="radio"
                id="english"
                name="language"
                value="English"
                checked={formData.language === 'English'}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="english">English</label>
            </div>
          </div>

          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Do you have a laptop?</label>
            <div className="flex items-center">
              <input
                type="radio"
                id="yes"
                name="laptop"
                value="Yes"
                checked={formData.laptop === 'Yes'}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="yes" className="mr-4">Yes</label>
              <input
                type="radio"
                id="no"
                name="laptop"
                value="No"
                checked={formData.laptop === 'No'}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="no">No</label>
            </div>
          </div>

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-400 text-white px-4 py-2 rounded-md"
            >
              Cancel
            </button>
            <button
              disabled={loading}
              type="submit"
              className="bg-red-800 text-white px-4 py-2 rounded-md"
            >
              {loading ? "In Progress..." : "Register"}
            </button>
          </div>
        </form> */}
        <p className='text-center text-3xl font-bold'><span className='text-red-500'>Oops!</span> You are late</p>
        <p className='text-center text-xl py-4'>Registration is closed Now</p>
        <button onClick={onClose} className='border-0 px-4 py-3 rounded-md bg-black text-white font-medium '>Close</button>
      </div>
    </div>
  );
};

export default EventRegister;
