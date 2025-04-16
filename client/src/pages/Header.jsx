import React from 'react'
import {  useClerk, UserButton, useUser } from '@clerk/clerk-react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const { openSignIn, signOut } = useClerk()
    const navigate=useNavigate();
    
    const { isSignedIn, user } = useUser()
    const signOutHandler=async(e)=>{
        e.preventDefault();
        await signOut();
        navigate('/');
    }
    return (
        <header class="bg-gray-50 py-16 px-6 text-center flex flex-col items-center">
            <h1 class="text-4xl md:text-5xl font-extrabold text-black mb-4">
                Secure & Seamless Authentication
            </h1>
            <p class="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-6">
                Authify provides reliable, fast, and developer-friendly authentication solutions
                to safeguard your apps while offering a smooth user experience.
            </p>
            {
                user ?
                    <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg text-center">
                        <img
                            src={user.imageUrl}
                            alt="User Profile"
                            className="w-28 h-28 rounded-full mx-auto mb-6 shadow-md"
                        />
                        <h2 className="text-2xl font-bold text-gray-900 mb-1">
                            {user.fullName}
                        </h2>
                        <p className="text-gray-600 mb-6">
                            {user.primaryEmailAddress.emailAddress}
                        </p>
                        <button
                            onClick={signOutHandler}
                            className="bg-black text-white px-6 py-2 rounded-xl hover:bg-red-600 transition"
                        >
                            Logout
                        </button>
                    </div>
                    :

                    <div class="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full text-center">
                        <h2 class="text-2xl font-bold text-gray-900 mb-4">
                            You are logged out
                        </h2>
                        <p class="text-gray-600 mb-6">
                            Please log in to access your dashboard and manage your account securely.
                        </p>
                        <button onClick={() => openSignIn({})} class="bg-black text-white px-6 py-3 rounded-xl text-base hover:bg-gray-800 transition">
                            Login
                        </button>
                    </div>
            }
        </header>

    )
}

export default Header