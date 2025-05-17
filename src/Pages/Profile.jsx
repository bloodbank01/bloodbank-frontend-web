import React from 'react'
import { Link } from 'react-router-dom'
import { useAlert } from '../Common/Toasts/AlertProvider';
import { useLoader } from '../Common/Loader/useLoader';
import { useState } from 'react';
import { getProfile } from '../Common/Apis/ApiService';
import { useEffect } from 'react';

const Profile = () => {

    const { alert } = useAlert()
    const { startLoading, stopLoading } = useLoader();

    const [profile, setProfile] = useState({})

    const handleGetProfile = async () => {
        try {
            startLoading()
            const response = await getProfile()
            stopLoading()

            if (response.status) {
                setProfile(response.data)
            } else {
                alert(response.message)
            }

        } catch (error) {
            console.log(error)
            stopLoading()
            alert("Please Try Again!")
        }
    };

    useEffect(() => {
      (async () => {
        await handleGetProfile()
      })()
    }, [])
    

    return (
        <div className="bg-gray-100 p-4 md:p-8">
            <div className="container mx-auto bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-end w-full">
                    <button className=' bg-primary py-1.5 px-7 tracking-wider rounded-md text-white text-sm font-semibold'>
                        <Link to='/profile/update'>Edit Profile</Link>
                    </button>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                    <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-gray-200 shadow-md">
                        <img
                            id="profile-pic"
                            src={profile?.profile_pic ? profile?.profile_pic : 'images/user.jpg'}
                            alt="Profile Picture"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                First Name
                            </label>
                            <div
                                id="first-name"
                                className="text-lg text-gray-900 px-4 py-2 rounded-md bg-gray-100"
                            >
                                {profile?.first_name}
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Last Name
                            </label>
                            <div
                                id="last-name"
                                className="text-lg text-gray-900 px-4 py-2 rounded-md bg-gray-100"
                            >
                                {profile?.last_name}
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Gender
                            </label>
                            <div
                                id="gender"
                                className="text-lg text-gray-900 px-4 py-2 rounded-md bg-gray-100"
                            >
                                {profile?.gender}
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Blood Group
                            </label>
                            <div
                                id="blood-group"
                                className="text-lg text-gray-900 px-4 py-2 rounded-md bg-gray-100"
                            >
                                {profile?.blood_group?.name}
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Date of Birth
                            </label>
                            <div
                                id="dob"
                                className="text-lg text-gray-900 px-4 py-2 rounded-md bg-gray-100"
                            >
                                {profile?.dob}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-200 pt-6">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">Address</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Address
                            </label>
                            <div
                                id="address"
                                className="text-lg text-gray-900 px-4 py-2 rounded-md bg-gray-100"
                            >
                                {profile?.address?.address}
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                State
                            </label>
                            <div
                                id="state"
                                className="text-lg text-gray-900 px-4 py-2 rounded-md bg-gray-100"
                            >
                                {profile?.address?.state}
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Country
                            </label>
                            <div
                                id="country"
                                className="text-lg text-gray-900 px-4 py-2 rounded-md bg-gray-100"
                            >
                                {profile?.address?.country}
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                City
                            </label>
                            <div
                                id="city"
                                className="text-lg text-gray-900 px-4 py-2 rounded-md bg-gray-100"
                            >
                                {profile?.address?.city}
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Pincode
                            </label>
                            <div
                                id="pincode"
                                className="text-lg text-gray-900 px-4 py-2 rounded-md bg-gray-100"
                            >
                                {profile?.address?.pincode}
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Phone Number
                            </label>
                            <div
                                id="phone_no"
                                className="text-lg text-gray-900 px-4 py-2 rounded-md bg-gray-100"
                            >
                                {profile?.address?.phone_no}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile