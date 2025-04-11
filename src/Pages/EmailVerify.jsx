import React, { useEffect, useState } from 'react'
import { emailVerify } from '../Common/Apis/ApiService';
import { useLoader } from '../Common/Loader/useLoader';
import { useAlert } from '../Common/Toasts/AlertProvider';
import { useSuccess } from '../Common/Toasts/SuccessProvider';
import EmailVerified from '../Components/EmailVerified';
import LinkExpire from '../Components/LinkExpire';

const EmailVerify = () => {

    const { alert } = useAlert()
    const { success } = useSuccess()
    const { startLoading, stopLoading } = useLoader();
    const [showVerifyEmailModel, setShowVerifyEmailModel] = useState(false)
    const [showLinkExpireModel, setShowLinkExpireModel] = useState(false)

    useEffect(() => {

        (async () => {
            startLoading()
            const queryParams = new URLSearchParams(window.location.search);
            const access_token = queryParams.get('accessToken');
            const token = queryParams.get('token');


            if (!token || !access_token) {
                alert('Invalid Link!')
            } else {
                const response = await emailVerify({ access_token, token })
                stopLoading()
                if (response.status) {
                    setShowVerifyEmailModel(true)
                } else {
                    setShowLinkExpireModel(true)
                }
            }
        })()

        return () => {
        }
    }, [])

    return (
        <div>
            {showVerifyEmailModel &&
                <EmailVerified setValue={setShowVerifyEmailModel} navigateTo='/sign-in' />
            }
            {showLinkExpireModel &&
                <LinkExpire setValue={setShowLinkExpireModel} navigateTo='/sign-in' />
            }
        </div>
    )
}

export default EmailVerify