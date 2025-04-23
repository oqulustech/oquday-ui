'use client';
import Image from "next/image";
import styles from "../../app/page.module.css";
import React, { FormEvent } from 'react'
export default function LoginComponent() {
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        console.log(formData)
        // const response = await fetch('/api/submit', {
        //     method: 'POST',
        //     body: formData,
        // })

        // Handle response if necessary
        // const data = await response.json()
        // ...
    }
    return (

        <div className="container h-100">
            <div className="row justify-content-sm-center h-100">
                <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
                    <div className="text-center my-5">
                        <Image
                            className={styles.logo}
                            src="/next.svg"
                            alt="Next.js logo"
                            width={180}
                            height={38}
                            priority
                        />
                    </div>
                    <div className="card shadow-lg">
                        <div className="card-body p-5">
                            <h1 className="fs-4 card-title fw-bold mb-2">Login</h1>
                            <form className="needs-validation" >
                                <div className="mb-3">
                                    <label className="mb-2 text-muted" >E-Mail Address</label>
                                    <input id="email" type="email" className="form-control" name="email" required />
                                    <div className="invalid-feedback">
                                        Email is invalid
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <div className="mb-2 w-100">
                                        <label className="text-muted" >Password</label>
                                        <a className="float-end">
                                            Forgot Password?
                                        </a>
                                    </div>
                                    <input id="password" type="password" className="form-control" name="password" required />
                                    <div className="invalid-feedback">
                                        Password is required
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="form-check">
                                        <input type="checkbox" name="remember" id="remember" className="form-check-input" />
                                        <label className="form-check-label">Remember Me</label>
                                    </div>

                                </div>

                            </form>
                        </div>
                        <div className="card-footer py-3 border-0">
                            <div className="text-center">
                                Don't have an account? <a href="" className="text-dark">Create One</a>
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