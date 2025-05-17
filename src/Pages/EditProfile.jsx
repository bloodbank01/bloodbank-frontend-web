import React, { useEffect, useState } from 'react';
import { useAlert } from '../Common/Toasts/AlertProvider';
import { useLoader } from '../Common/Loader/useLoader';
import { getBloodGroup, getProfile, updateProfile, updateProfilePic } from '../Common/Apis/ApiService';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { useSuccess } from '../Common/Toasts/SuccessProvider';
import { bloodGroupList } from '../Redux/Action';
import { useDispatch } from 'react-redux';

const EditProfile = () => {
  const { alert } = useAlert();
  const { success } = useSuccess();
  const { startLoading, stopLoading } = useLoader();
  const [profile, setProfile] = useState({});
  const [state, setState] = useState([
    { "name": "Gujarat" },
    { "name": "Andhra Pradesh" },
    { "name": "Odisha" },
    { "name": "Telangana" },
    { "name": "Kerala" },
    { "name": "Assam" },
    { "name": "Ontario" },
    { "name": "Quebec" },
    { "name": "British Columbia" },
    { "name": "Alberta" },
    { "name": "Manitoba" },
    { "name": "São Paulo" },
    { "name": "Rio de Janeiro" },
    { "name": "Bahia" },
    { "name": "Minas Gerais" },
    { "name": "Paraná" },
    { "name": "Tokyo" },
    { "name": "Osaka" },
    { "name": "Hokkaido" },
    { "name": "Kyoto" },
    { "name": "Fukuoka" },
    { "name": "Bavaria" },
    { "name": "Berlin" },
    { "name": "Hesse" },
    { "name": "Saxony" },
    { "name": "North Rhine-Westphalia" },
    { "name": "New South Wales" },
    { "name": "Victoria" },
    { "name": "Queensland" },
    { "name": "Western Australia" },
    { "name": "South Australia" },
    { "name": "Uttar Pradesh" },
    { "name": "Maharashtra" },
    { "name": "Bihar" },
    { "name": "West Bengal" },
    { "name": "Madhya Pradesh" },
    { "name": "Tamil Nadu" },
    { "name": "Rajasthan" },
    { "name": "Karnataka" },
    { "name": "Punjab" },
    { "name": "Cairo" },
    { "name": "Giza" },
    { "name": "Alexandria" },
    { "name": "Aswan" },
    { "name": "Luxor" },
    { "name": "Île-de-France" },
    { "name": "Provence-Alpes-Côte d'Azur" },
    { "name": "Nouvelle-Aquitaine" },
    { "name": "Occitanie" },
    { "name": "Auvergne-Rhône-Alpes" },
    { "name": "Gauteng" },
    { "name": "Western Cape" },
    { "name": "KwaZulu-Natal" },
    { "name": "Eastern Cape" },
    { "name": "Free State" },
    { "name": "Jalisco" },
    { "name": "Mexico City" },
    { "name": "Nuevo León" },
    { "name": "Puebla" },
    { "name": "Yucatán" }
  ]
  )
  const [city, setCity] = useState([
    { "name": "Surat" },
    { "name": "Rajkot" },
    { "name": "Ahemdabad" },
    { "name": "Bhavanagar" },
    { "name": "Asansol" },
    { "name": "Siliguri" },
    { "name": "Bhopal" },
    { "name": "Indore" },
    { "name": "Jabalpur" },
    { "name": "Gwalior" },
    { "name": "Ujjain" },
    { "name": "Chennai" },
    { "name": "Coimbatore" },
    { "name": "Madurai" },
    { "name": "Tiruchirappalli" },
    { "name": "Salem" },
    { "name": "Jaipur" },
    { "name": "Jodhpur" },
    { "name": "Udaipur" },
    { "name": "Kota" },
    { "name": "Ajmer" },
    { "name": "Bengaluru" },
    { "name": "Toronto" },
    { "name": "Ottawa" },
    { "name": "Montreal" },
    { "name": "Quebec City" },
    { "name": "Vancouver" },
    { "name": "Victoria" },
    { "name": "Calgary" },
    { "name": "Edmonton" },
    { "name": "Winnipeg" },
    { "name": "Brandon" },
    { "name": "São Paulo" },
    { "name": "Campinas" },
    { "name": "Rio de Janeiro" },
    { "name": "Niterói" },
    { "name": "Salvador" },
    { "name": "Feira de Santana" },
    { "name": "Belo Horizonte" },
    { "name": "Uberlândia" },
    { "name": "Curitiba" },
    { "name": "Londrina" },
    { "name": "Tokyo" },
    { "name": "Hachioji" },
    { "name": "Osaka" },
    { "name": "Sakai" },
    { "name": "Sapporo" },
    { "name": "Asahikawa" },
    { "name": "Kyoto" },
    { "name": "Uji" },
    { "name": "Fukuoka" },
    { "name": "Kitakyushu" },
    { "name": "Munich" },
    { "name": "Nuremberg" },
    { "name": "Berlin" },
    { "name": "Spandau" },
    { "name": "Frankfurt" },
    { "name": "Wiesbaden" },
    { "name": "Leipzig" },
    { "name": "Dresden" },
    { "name": "Cologne" },
    { "name": "Düsseldorf" },
    { "name": "Sydney" },
    { "name": "Newcastle" },
    { "name": "Melbourne" },
    { "name": "Geelong" },
    { "name": "Brisbane" },
    { "name": "Gold Coast" },
    { "name": "Perth" },
    { "name": "Fremantle" },
    { "name": "Adelaide" },
    { "name": "Mount Gambier" },
    { "name": "Lucknow" },
    { "name": "Kanpur" },
    { "name": "Varanasi" },
    { "name": "Agra" },
    { "name": "Prayagraj" },
    { "name": "Mumbai" },
    { "name": "Pune" },
    { "name": "Nagpur" },
    { "name": "Nashik" },
    { "name": "Aurangabad" },
    { "name": "Patna" },
    { "name": "Gaya" },
    { "name": "Bhagalpur" },
    { "name": "Muzaffarpur" },
    { "name": "Darbhanga" },
    { "name": "Kolkata" },
    { "name": "Howrah" },
    { "name": "Durgapur" }
  ])
  const [country, setCountry] = useState([
    { "name": "Canada" },
    { "name": "Brazil" },
    { "name": "Japan" },
    { "name": "Germany" },
    { "name": "Australia" },
    { "name": "India" },
    { "name": "Egypt" },
    { "name": "France" },
    { "name": "South Africa" },
    { "name": "Mexico" }
  ]
  )
  const bloodGroupLists = useSelector(state => state.handle.bloodGroupList);
  let dispatch = useDispatch()
  useEffect(() => {
    (async () => {
      startLoading()
      const blood_group_list = await getBloodGroup()
      stopLoading()

      if (blood_group_list.status) {
        dispatch(bloodGroupList(blood_group_list.data))
      } else {
        alert(blood_group_list.message)
      }

    })()
  }, [third])


  const navigate = useNavigate();
  const [profilePic, setProfilePic] = useState(null)
  const handleGetProfile = async () => {
    try {
      startLoading();
      const response = await getProfile();
      stopLoading();

      if (response.status) {
        setProfile(response.data);
        setProfilePic(response.data.profile_pic)
      } else {
        alert(response.message);
      }
    } catch (error) {
      console.error(error);
      stopLoading();
      alert('Please Try Again!');
    }
  };

  const handleSubmit = async (data) => {
    try {
      startLoading();
      const response = await updateProfile(data);
      stopLoading();

      if (response.status) {
        navigate('/profile')
        success('Profile updated successfully!');
      } else {
        alert(response.message);
      }
    } catch (error) {
      console.error(error);
      stopLoading();
      alert('Please Try Again!');
    }
  };

  useEffect(() => {
    handleGetProfile();
  }, []);

  const initialValues = {
    first_name: profile?.first_name || '',
    last_name: profile?.last_name || '',
    gender: profile?.gender || '',
    blood_id: profile?.blood_group?.id || '',
    dob: profile?.dob || '',
    address: profile?.address?.address || '',
    state: profile?.address?.state || '',
    country: profile?.address?.country || '',
    city: profile?.address?.city || '',
    pincode: profile?.address?.pincode || '',
    phone_no: profile?.address?.phone_no || '',
  };

  const validationSchema = Yup.object({
    first_name: Yup.string().required('Required'),
    last_name: Yup.string().required('Required'),
    gender: Yup.string().required('Required'),
    blood_id: Yup.string().required('Required'),
    dob: Yup.date().required('Required'),
    address: Yup.string().required('Required'),
    state: Yup.string().required('Required'),
    country: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
    pincode: Yup.string().required('Required'),
    phone_no: Yup.string().required('Required'),
  });

  const handleFileSelect = async (e) => {
    try {
      const formData = new FormData();
      formData.append('file', e.target.files[0]);
      console.log(formData)
      startLoading()
      const response = await updateProfilePic(formData)
      stopLoading()

      if (response.status) {
        setProfilePic(response.data.profile_pic)
        success(response.message)
      } else {
        alert(response.message)
      }

    } catch (error) {
      console.log(error)
      stopLoading()
      alert("Please Try Again!")
    }
    console.log("🚀 ~ handleFileSelect ~ e.target.files[0]:", e.target.files[0])
  };

  return (
    <div className="bg-gray-100 p-4 md:p-8">
      <div className="mx-auto container bg-white rounded-xl shadow-lg p-6 md:p-8">
        {Object.keys(profile).length > 0 && (
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            enableReinitialize
          >
            <Form>
              <div className="flex flex-col md:flex-row items-center justify-between border-b border-gray-200 pb-5 mb-6">
                <h1 className="text-2xl font-semibold text-gray-800">Edit Profile</h1>
                <button
                  type="submit"
                  className="bg-primary py-1.5 px-7 tracking-wider rounded-md text-white text-sm font-semibold mt-3 md:mt-0"
                >
                  <i className="fas fa-save mr-2" /> Save Changes
                </button>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                <div className="relative">
                  <img id="profile-pic" src={profilePic ? profilePic : '../images/user.jpg'} alt="Profile Picture"
                    className="w-32 h-32 rounded-full border-3 border-gray-200 object-cover shadow-md" />
                  <input type="file" id="profile-pic-input" accept="image/*" className="hidden" onChange={(e) => handleFileSelect(e)} />
                  <label htmlFor="profile-pic-input"
                    className="absolute bottom-0 right-0 bg-white rounded-full p-1.5 cursor-pointer hover:bg-gray-100 transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                      className="w-5 h-5 text-gray-700">
                      <path
                        d="M13.586 3.586a2 2 0 012.828 2.828l-7.93 7.93-2.828-2.828 7.93-7.93zM11.317 10l-2.828 2.828 7.93 7.93a2 0 002.828-2.828l-7.93-7.93z" />
                      <path d="M16 9a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </label>
                </div>
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Field name="first_name" placeholder="First Name" className="w-full p-3 border rounded-md border-[#B5B5B5]" />
                    <ErrorMessage name="first_name" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                  <div>
                    <Field name="last_name" placeholder="Last Name" className="w-full p-3 border rounded-md border-[#B5B5B5]" />
                    <ErrorMessage name="last_name" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                  <div>
                    <Field name="gender" as="select" className="w-full p-3 border rounded-md border-[#B5B5B5]">
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </Field>
                    <ErrorMessage name="gender" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                  <div>
                    <Field name="blood_id" as="select" className="w-full p-3 border rounded-md border-[#B5B5B5]">
                      <option value="">Select Blood Group</option>
                      {bloodGroupLists.map((el) => (
                        <option value={el.id}>{el.name}</option>
                      ))}

                    </Field>
                    <ErrorMessage name="blood_id" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                  <div>
                    <Field name="dob" type="date" className="w-full p-3 border rounded-md border-[#B5B5B5]" />
                    <ErrorMessage name="dob" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-5">Address</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Field name="address" placeholder="Address" className="w-full p-3 border rounded-md border-[#B5B5B5]" />
                    <ErrorMessage name="address" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                  <div>
                    <Field name="state" as="select" className="w-full p-3 border rounded-md border-[#B5B5B5]">
                      <option value="">Select State</option>
                      {state.map((el) => (
                        <option value={el.name}>{el.name}</option>
                      ))}
                    </Field>
                    <ErrorMessage name="state" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                  <div>
                    <Field name="country" as="select" className="w-full p-3 border rounded-md border-[#B5B5B5]">
                      <option value="">Select Country</option>
                      {country.map((el) => (
                        <option value={el.name}>{el.name}</option>
                      ))}
                    </Field>
                    <ErrorMessage name="country" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                  <div>
                    <Field name="city" as="select" className="w-full p-3 border rounded-md border-[#B5B5B5]">
                      <option value="">Select City</option>
                      {city.map((el) => (
                        <option value={el.name}>{el.name}</option>
                      ))}
                    </Field>
                    <ErrorMessage name="city" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                  <div>
                    <Field name="pincode" placeholder="Pincode" className="w-full p-3 border rounded-md border-[#B5B5B5]" />
                    <ErrorMessage name="pincode" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                  <div>
                    <Field name="phone_no" placeholder="Phone Number" className="w-full p-3 border rounded-md border-[#B5B5B5]" />
                    <ErrorMessage name="phone_no" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                </div>
              </div>
            </Form>
          </Formik>
        )}
      </div>
    </div>
  );
};

export default EditProfile;
