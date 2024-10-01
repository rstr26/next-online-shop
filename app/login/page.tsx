import React from 'react'
import LoginInputs from '../_components/login/LoginInputs'

const LoginPage = () => {


    return (
        <div 
            className="hero bg-gradient-to-r from-primary to-secondary min-h-screen" 
        >
            {/* Overlay */}
            <div className="hero-overlay bg-opacity-60"></div>

            <div className="hero-content flex-col lg:flex-row-reverse">
                {/* Login Text */}
                <div className='text-white'>
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                </div>

                {/* Login Form */}
                <LoginInputs />
            </div>
        </div>
    )
}

export default LoginPage