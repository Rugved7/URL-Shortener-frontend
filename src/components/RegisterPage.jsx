import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import TextFields from './TextFields';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
    const [loader, setLoader] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm({
        defaultValues: {
            username: "",
            email: "",
            password: "",
        },
        mode: "onTouched",
    });

    const registerHandler = async (data) => {
        // Your register logic
    };

    return (
        <div className='min-h-[calc(100vh-64px)] bg-gradient-to-br from-blue-50 to-indigo-50 flex justify-center items-center py-12 px-4'>
            <form 
                onSubmit={handleSubmit(registerHandler)}
                className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden p-8"
            >
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-bold text-indigo-600 mb-2">
                        Create Your Account
                    </h1>
                    <p className="text-gray-600">
                        Join SwiftLink Analytics to start shortening URLs
                    </p>
                    <div className="h-1 bg-indigo-100 w-20 mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="space-y-5">
                    <TextFields
                        label="Username"
                        required
                        id="username"
                        type="text"
                        message="Username is required"
                        placeholder="Enter your username"
                        register={register}
                        errors={errors}
                    />

                    <TextFields
                        label="Email"
                        required
                        id="email"
                        type="email"
                        message="Valid email is required"
                        placeholder="your@email.com"
                        register={register}
                        errors={errors}
                    />

                    <TextFields
                        label="Password"
                        required
                        id="password"
                        type="password"
                        message="Password must be at least 6 characters"
                        placeholder="Create a password"
                        register={register}
                        min={6}
                        errors={errors}
                    />
                </div>

                <button
                    disabled={loader}
                    type='submit'
                    className={`w-full mt-6 py-3 px-4 rounded-lg font-medium transition-colors ${
                        loader 
                            ? 'bg-indigo-400 cursor-not-allowed' 
                            : 'bg-indigo-600 hover:bg-indigo-700'
                    } text-white shadow-md`}
                >
                    {loader ? "Creating Account..." : "Register Now"}
                </button>

                <p className='text-center text-gray-600 mt-6 text-sm'>
                    Already have an account? {' '}
                    <Link
                        to="/login"
                        className='font-medium text-indigo-600 hover:text-indigo-800 hover:underline transition-colors'
                    >
                        Login here
                    </Link>
                </p>
            </form>
        </div>
    )
}

export default RegisterPage