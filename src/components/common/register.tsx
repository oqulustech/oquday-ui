'use client';
import Image from "next/image";
import styles from "../../app/page.module.css";
import { registerSchema } from "../../app/api/auth/register";
import { registerMAction } from '../../validators/registerValidators'
import React, { FormEvent } from 'react'
import { useActionState, useState, useEffect } from "react";

import Link from "next/link";
import { ValidatedInput } from "../ui/input";
export default function RegisterComponent() {
    const [wasSubmitted, setWasSubmitted] = useState(false);
    const [state, action] = useActionState(registerMAction, {});
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        console.log(formData)

    }
    return (

        <div className="container h-100">
            <div className="row justify-content-sm-center h-100">
                <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-10">
                    <div className="text-center my-5">
                        <Image
                            className={styles.logo}
                            src="/logo.png"
                            alt=""
                            width={200}
                            height={200}
                            priority
                        />
                    </div>
                    <div className="card shadow-lg " id="registrMargin" >
                        <div className="card-body p-5">
                            <h1 className="fs-4 card-title fw-bold mb-2">Register</h1>
                            <form className="needs-validation" >
                                <div className="row mb-3 mt-3">
                                    <div className="col-4">
                                        <label className="mb-2 text-muted" >First Name</label>
                                        <input id="text" type="text" className="form-control" name="email" required />
                                        <ValidatedInput
                                            labelName='Email Address'
                                            type="text"
                                            name="email"
                                            fieldSchema={registerSchema.shape["email"]}
                                            wasSubmitted={wasSubmitted}
                                            defaultValue={state.form?.email}
                                            errors={state.errors?.email}
                                        />
                                    </div>
                                    <div className="col-4">
                                        <label className="mb-2 text-muted" >Last Name</label>
                                        <input id="text" type="text" className="form-control" name="email" required />
                                        <div className="invalid-feedback">
                                            Last Name
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <label className="mb-2 text-muted" >E-Mail Address</label>
                                        <input id="email" type="email" className="form-control" name="email" required />
                                        <div className="invalid-feedback">
                                            Email is invalid
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className=" col-4">
                                        <label className="mb-2 text-muted" >Mobile</label>
                                        <input id="text" type="text" className="form-control" name="Mobile" required />
                                        <div className="invalid-feedback">
                                            Mobile Number is required
                                        </div>
                                    </div>
                                    <div className=" col-4">
                                        <label className="mb-2 text-muted" >Company Name</label>
                                        <input id="company" type="text" className="form-control" name="company" required />
                                        <div className="invalid-feedback">
                                            Password is required
                                        </div>
                                    </div>
                                    <div className=" col-4">
                                        <label className="mb-2 text-muted" >Role</label>
                                        <input id="text" type="text" className="form-control" name="company" required />
                                        <div className="invalid-feedback">
                                            Role is required
                                        </div>
                                    </div>

                                </div>
                                <div className="row mt-4">
                                    <div className=" col-4">
                                        <label className="mb-2 text-muted" >Job Level</label>
                                        <input id="text" type="text" className="form-control" name="Mobile" required />
                                        <div className="invalid-feedback">
                                            Mobile Number is required
                                        </div>
                                    </div>
                                    <div className=" col-4">
                                        <label className="mb-2 text-muted" >Password</label>
                                        <input id="company" type="text" className="form-control" name="company" required />
                                        <div className="invalid-feedback">
                                            Password is required
                                        </div>
                                    </div>
                                    <div className=" col-4">
                                        <label className="mb-2 text-muted" >Confirm Password</label>
                                        <input id="text" type="text" className="form-control" name="company" required />
                                        <div className="invalid-feedback">
                                            Role is required
                                        </div>
                                    </div>

                                </div>
                                <button type="button" className="btnBg btn btn-primary  ms-auto mt-3">
                                    Register
                                </button>
                            </form>
                        </div>
                        <div className="card-footer py-3 border-0">
                            <div className="text-center">
                                Alredy have an account? <Link href="/pages/loginPage" >  Login </Link>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-3 text-muted">
                        Copyright &copy; 2025 &mdash; OquDay
                    </div>
                </div>
            </div >
        </div >

    )
}