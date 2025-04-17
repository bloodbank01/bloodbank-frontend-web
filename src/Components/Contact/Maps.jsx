import React from 'react'

const Maps = () => {
    return (
        <section>
            <div className="container-fluid mx-auto">
                <div className="w-full h-[500px]">
                   <div className="w-full h-full pb-20">
                   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59517.73646272582!2d72.77206864863278!3d21.197778200000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e54594f6ccb%3A0xe3983533d470bb34!2sSmimer%20Hospital%20Blood%20Bank!5e0!3m2!1sen!2sin!4v1744886367141!5m2!1sen!2sin" style={{ border: '0', width: '100%', height: '100%' }} allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                   </div>
                </div>
            </div>
        </section>
    )
}

export default Maps