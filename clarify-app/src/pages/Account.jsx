import React from 'react';
import { UserAuth } from '../context/AuthContext';
import "./Account.css";

const Account = () => {
  const { logOut, user } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='w-[300px] m-auto account-container'>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className='account-box'>
        <h1 className='text-center text-2xl font-bold pt-12 account-header'>Account Details</h1>
        <div className='user-text'>
          <p>Welcome, {user?.displayName}</p>
        </div>
        <button onClick={handleSignOut} className='border py-2 px-5 mt-10 logout-btn btn btn-primary'>
          Logout
        </button>
      </div>

    </div>
  );
};

export default Account;