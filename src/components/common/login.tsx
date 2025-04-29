'use client';
import Image from "next/image";
import styles from "../../app/page.module.css";
import { useActionState, useState } from "react";
import Link from 'next/link'
import { signInAction } from "../../validators/loginValidators";
import { loginSchema } from "../../app/api/auth/login";
import { ValidatedInput } from "../ui/input"
export default function LoginComponent() {
    const [wasSubmitted, setWasSubmitted] = useState(false)
    const [state, action, isPending] = useActionState(signInAction, {})

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        setWasSubmitted(true)
        const formData = new FormData(event.currentTarget)
        const data = Object.fromEntries(formData)
        console.log(data)
        const validationResult = loginSchema.safeParse(data)
        if (!validationResult.success) {
            event.preventDefault()
        } else {
            alert('sucess')
        }
    }

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
                            <h1 className="fs-4 card-title fw-bold mb-2">Login</h1>
                            <form className="needs-validation" onSubmit={handleSubmit} action={action} >
                                <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans"> </div>
                                <div className="mb-3">
                                    <div className="mb-2 w-100">
                                        <ValidatedInput
                                            labelName='EMail Address'
                                            type="text"
                                            name="email"
                                            fieldSchema={loginSchema.shape["email"]}
                                            wasSubmitted={wasSubmitted}
                                            defaultValue={state.form?.email}
                                            errors={state.errors?.email}
                                        />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <div className="mb-2 w-100">
                                        <label className="text-muted" >Password</label>
                                    </div>
                                    <input id="password" type="password" className="form-control" name="password" required />

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

