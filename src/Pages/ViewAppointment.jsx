import React, { useEffect, useState } from 'react'
import { useAlert } from '../Common/Toasts/AlertProvider';
import { useSuccess } from '../Common/Toasts/SuccessProvider';
import { useLoader } from '../Common/Loader/useLoader';
import { deleteAppointment, getAppointment, updateProfile } from '../Common/Apis/ApiService';
import { MdDelete } from "react-icons/md";

const ViewAppointment = () => {

    const [data, setData] = useState([])
    const { alert } = useAlert();
    const { success } = useSuccess();
    const { startLoading, stopLoading } = useLoader();

    const handleGetData = async () => {
        try {
            startLoading();
            const response = await getAppointment(data);
            stopLoading();

            if (response.status) {
                setData(response.data)
            } else {
                alert(response.message);
            }
        } catch (error) {
            console.error(error);
            stopLoading();
            alert('Please Try Again!');
        }
    }

    useEffect(() => {
        handleGetData()
    }, [])

    const handleDelete = async (id) => {
        try {
            startLoading();
            const response = await deleteAppointment(id);
            stopLoading();

            if (response.status) {
                handleGetData()
                success(response.message)
            } else {
                alert(response.message);
            }
        } catch (error) {
            console.error(error);
            stopLoading();
            alert('Please Try Again!');
        }
    }


    return (
        <div className='h-screen py-12'>
            <div className="relative container mx-auto h-full overflow-x-auto">
                <table className={`relative ${data.length == 0 && 'h-full'} w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400`}>
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Sr No
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Request Type
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Blood Group
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Hospital
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Doctor
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Time
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    {data.length != 0 ? <tbody>
                        {data.map((el, index) => (
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {index + 1}
                                </th>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {`${el?.profile?.first_name} ${el?.profile?.last_name}`}
                                </th>
                                <td className="px-6 py-4">
                                    {el?.request_type}
                                </td>
                                <td className="px-6 py-4">
                                    {el?.blood_group?.name}
                                </td>
                                <td className={`px-6 py-4 ${el.status?.toLowerCase() == 'pending' ? 'text-yellow-500' : el.status?.toLowerCase() == 'cancelled' || el.status?.toLowerCase() == 'reject' ? 'text-red-500' : el.status?.toLowerCase() == 'completed' || el.status?.toLowerCase() == 'approved' ? 'text-green-500' : 'text-blue-500'}`}>
                                    {el?.status}
                                </td>
                                <td className="px-6 py-4">
                                    {el?.hospital?.name}
                                </td>
                                <td className="px-6 py-4">
                                    {el?.doctor?.name ? el?.doctor?.name : 'Not Assign'}
                                </td>
                                <td className="px-6 py-4">
                                    {el?.appointment_date ? el?.appointment_date : 'Not Assign'}
                                </td>
                                <td className="px-6 py-4">
                                    {el?.appointment_time ? el?.appointment_time : 'Not Assign'}
                                </td>
                                <td className={`px-6 py-4 ${el?.status?.toLowerCase() == 'completed' && 'text-red-500'}`}>
                                    {el?.status?.toLowerCase() == 'completed' ? (
                                        <button onClick={() => handleDelete(el.id)}>
                                            <MdDelete />
                                        </button>
                                    ) : '---'}
                                </td>
                            </tr>
                        ))}
                    </tbody> : (
                        <div className='absolute text-lg top-[50%] left-[50%]'>
                            No Data
                        </div>
                    )}
                </table>
            </div>
        </div>
    )
}

export default ViewAppointment