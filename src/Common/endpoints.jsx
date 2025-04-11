
const URL = {
    // API 
    // baseUrl : 'https://whatsapp-back-end-live.onrender.com/'
    baseUrl : import.meta.env.VITE_BASE_URL
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
}

export default ENDPOINTS