import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { ContextApi } from '../contextAPI/ContextAPI';
import api from '../api/api';
import TextFields from './TextFields';
import toast from 'react-hot-toast';

const LoginPage = () => {
    const [loader, setLoader] = useState(false);
    const {setToken} = useContext(ContextApi)

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        defaultValues: {
            username: "",
            email: "",
            password: "",
        },
        mode: "onTouched",
    });

    const loginHandler = async (data) => {
        setLoader(true);
        try {
            const { data: response } = await api.post(
                "/api/auth/public/login",
                data    
            );
            // Assuming the response contains user data or a token--> Store it in localStorage 
            setToken(response.token);
          localStorage.setItem("JWT_TOKEN", JSON.stringify(response.token));

            toast.success(response.message || "Login successful!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            
            reset();
            navigate("/dashboard");
        } catch (error) {
            console.error("Login failed:", error);
            toast.error(error.response?.data?.message || "Login failed. Please try again.", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } finally {
            setLoader(false);
        }
    };

    return (
        <div className='min-h-[calc(100vh-64px)] bg-gradient-to-br from-blue-50 to-indigo-50 flex justify-center items-center py-12 px-4'>
            <form 
                onSubmit={handleSubmit(loginHandler)}
                className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden p-8"
            >
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-bold text-indigo-600 mb-2">
                       Login to SwiftLink Analytics
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
                    {loader ? "Logging in your Account..." : "Login Now"}
                </button>

                <p className='text-center text-gray-600 mt-6 text-sm'>
                    Don't have an account? {' '}
                    <Link
                        to="/register"
                        className='font-medium text-indigo-600 hover:text-indigo-800 hover:underline transition-colors'
                    >
                        Login
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default LoginPage;