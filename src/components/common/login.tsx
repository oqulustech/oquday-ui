'use client';
import Image from "next/image";
import styles from "../../app/page.module.css";
import { useActionState, useState, useEffect } from "react";
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { signInAction } from "../../validators/loginValidators";
import { loginSchema } from "../../app/api/auth/login";
import { ValidatedInput } from "../ui/input";
import axiosInstance from '../../app/auth/httpInterceptor';
export default function LoginComponent() {
    const [wasSubmitted, setWasSubmitted] = useState(false);
    const [apiError, setApiError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [state, action] = useActionState(signInAction, {});
    const router = useRouter();
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setWasSubmitted(true);
        setApiError(null);
        setIsLoading(true);

        console.log(state)
        const formData = new FormData(event.currentTarget);
        const validationResult = loginSchema.safeParse(formData);
        if (validationResult?.success) {
            setIsLoading(false);
            return;
        }
        try {
            const response = await axiosInstance.post(
                'http://localhost:3001/api/v1/auth/login',
                JSON.stringify(Object.fromEntries(formData))
            );

            if (response.data?.data?.access_token) {
                localStorage.setItem('token', response.data.accessToken);
                router.push('/pages/dashboard');
            } else {
                setApiError(response.data?.message || 'Login failed');
            }
        } catch (error: any) {
            console.error('Login error:', error);
            setApiError(
                error.response?.data?.message ||
                error.response?.data?.error ||
                'Login failed. Please try again.'
            );
        } finally {
            setIsLoading(false);
        }
    };


    // // const formData = new FormData(event.currentTarget)
    // // const data = Object.fromEntries(formData)
    // // console.log(data)
    // // const validationResult = loginSchema.safeParse(data)
    // // if (!validationResult.success) {
    // //     event.preventDefault()
    // // } else {




    // //     axiosInstance.post('http://localhost:3001/api/v1/auth/login', JSON.stringify(validationResult.data)) // Replace with your API endpoint
    // //         .then(response => {
    // //             console.log(response)
    // //             responseData = response.data
    // //         })
    // //         .catch(error => {
    // //             console.log(error.response?.data)
    // //             console.error('Error fetching data:', error);
    // //             responseData = error.response?.data
    // //         });

    // }

    return (

        <div className="container h-100">
            <div className="row justify-content-sm-center h-100">
                <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">

                    <div className="text-center my-5" id="minusMargin">
                        <Image
                            className={styles.logo}
                            src="/logo.png"
                            alt="Next.js logo"
                            width={250}
                            height={250}
                            priority
                        />
                    </div>
                    <div className="card shadow-lg minusMargin" id="">
                        <div className="card-body p-5">
                            <h1 className="fs-4 card-title fw-bold">Login</h1>
                            <form className="needs-validation" onSubmit={handleSubmit} action={action} >
                                <div className="flex w-full component-preview p-2 items-center justify-center gap-2 font-sans"> </div>
                                <div className="mb-3">
                                    <ValidatedInput
                                        labelName='Email Address'
                                        type="text"
                                        name="email"
                                        fieldSchema={loginSchema.shape["email"]}
                                        wasSubmitted={wasSubmitted}
                                        defaultValue={state.form?.email}
                                        errors={state.errors?.email}
                                    />
                                </div>
                                <div className="mb-3">
                                    <ValidatedInput
                                        labelName='Password'
                                        type="password"
                                        name="password"
                                        fieldSchema={loginSchema.shape["password"]}
                                        wasSubmitted={wasSubmitted}
                                        defaultValue={state.form?.password}
                                        errors={state.errors?.password}
                                    />
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="form-check">
                                        <input type="checkbox" name="remember" id="remember" className="form-check-input" />
                                        <label className="form-check-label">Remember Me</label>
                                    </div>
                                </div>
                                <button type="submit" className="btnBg btn btn-primary  ms-auto mt-2">
                                    Login
                                </button>
                            </form>
                        </div>
                        <div className="card-footer py-3 border-0">
                            <div className="text-center">
                                Don't have an account? <Link href="/pages/register"> Create One</Link>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-3 text-muted">
                        Copyright &copy; 2025 &mdash; OquDay
                    </div>
                </div>
            </div>
        </div>

    )

}

