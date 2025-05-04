import React, { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import {  updateProfile } from 'firebase/auth';
import { auth } from '../firebase.config';
import { toast } from 'react-toastify';
import DocumentTitle from '../Hook/DocumentTitle';

const UpdateProfile = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  

  const handleSubmit = (e) => {
    e.preventDefault();
    const name=e.target.name.value;
    const photoUrl=e.target.photo.value
    console.log(photoUrl,name);
    updateProfile(auth.currentUser, {
        displayName:name, photoURL:photoUrl
      }).then(result=>{
        toast.success('Your Profile is Update')
      }).catch(error=>{
        console.log(error.message);
        toast.error(error.message)
      })
    navigate('/my-profile');
    
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100 px-4">
         <DocumentTitle title=" Update Profile | Job Box"></DocumentTitle>
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Update Your Profile
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-600 mb-1 font-medium">Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              defaultValue={user?.displayName}
             name='name'
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1 font-medium">Photo URL</label>
            <input
              type="text"
              className="w-full border border-gray-300 px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              defaultValue={user?.photoURL}
            name='photo'
              placeholder="Enter your photo URL"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-2 rounded-xl font-semibold shadow-md hover:shadow-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-200"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
