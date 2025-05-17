
const URL = {
    // API 
    // baseUrl : 'https://bloodbank-backend-e8cg.onrender.com/'
    baseUrl : 'http://localhost:4061/'
}
const ENDPOINTS = {
    // API Endpoints
    baseUrl : URL.baseUrl,
    signUp: URL.baseUrl + 'api/auth/sign-up',
    emailVerify: URL.baseUrl + 'api/auth/email-verify',
    signIn: URL.baseUrl + 'api/auth/sign-in',
    googleSSO: URL.baseUrl + 'api/auth/google-sign-in',
    forgotPassword: URL.baseUrl + 'api/auth/forgot-password',
    resetPassword: URL.baseUrl + 'api/auth/reset-password',
    logout: URL.baseUrl + 'api/auth/logout',
    createContact: URL.baseUrl + 'api/contact',
    getHospital: URL.baseUrl + 'api/hospital',
    getDoctor: URL.baseUrl + 'api/doctor',
    getBloodGroup: URL.baseUrl + 'api/blood-group',
    createAppointment: URL.baseUrl + 'api/appointment',
    getProfile: URL.baseUrl + 'api/profile',
    updateProfile: URL.baseUrl + 'api/profile',
    updateProfilePic: URL.baseUrl + 'api/profile/upload-profile-pic',
    getAppointment: URL.baseUrl + 'api/appointment',
    deleteAppointment: URL.baseUrl + 'api/appointment',
}

export default ENDPOINTS