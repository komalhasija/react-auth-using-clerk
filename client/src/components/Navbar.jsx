import React from 'react'

import { useClerk, UserButton, useUser } from '@clerk/clerk-react'



const Navbar = () => {
    const { openSignIn } = useClerk()
    const { isSignedIn, user } = useUser()
    return (
        <nav class="bg-white shadow-md px-6 py-4 flex items-center justify-between">

            <div class="text-2xl font-bold text-black">
                Autify
            </div>
        {
            isSignedIn
            ? <div>
                <UserButton />
            </div>
            :
            <button onClick={() => openSignIn({})} class="bg-black text-white px-5 py-2 rounded-xl hover:bg-gray-800 transition duration-200">
                Get Started
            </button>
        }   
        </nav>

        //     <div className='flex items-center justify-between py-3 bg-gray-300 w-full'>

        //         <h1 className='text-3xl text-center w-25 mt-5  ml-5 mr-5text-white-600 rounded-full bg-black/20'>Auth</h1>
        //         {
        //             isSignedIn
        //                 ? <div>
        //                     <UserButton/>
        //                 </div>
        //                 :
        //                 <button onClick={() => openSignIn({})} className=' mr-10 text-white bg-zinc-800 flex items-center gap-4  px-4 py-2 sm:px-8 sm:py-3 text-sm rounded-full'>
        //                     Get Started </button>
        //         }
        //     </div>
    )
}

export default Navbar