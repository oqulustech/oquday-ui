"use server";


import { redirect } from "next/navigation"
import { loginAction, loginSchema } from "../app/api/auth/login"

export async function signInAction(
    _prev: loginAction,
    formData: FormData
): Promise<loginAction> {
    const form = Object.fromEntries(formData)
    const validationResult = loginSchema.safeParse(form)
    if (!validationResult.success) {
        return {
            form,
            errors: validationResult.error.flatten().fieldErrors
        }
    } else {

        redirect("/pages/register")
    }

}





















// oldCode


// import { text } from "stream/consumers";
// import { z } from "zod";

// const loginFormSchema = z.object({
//     email: z.string().email({ message: "Invalid email address" }),
//     password: z.string().trim().min(6, { message: "Name field is required" }),
// });

// export async function LoginValidators(prevState: any, formData: FormData) {
//     const contactFormData = Object.fromEntries(formData);
//     const validatedContactFormData = loginFormSchema.safeParse(contactFormData);
//     if (!validatedContactFormData.success) {
//         const formFieldErrors =
//             validatedContactFormData.error.flatten().fieldErrors;

//         return {
//             errors: {
//                 email: formFieldErrors?.email,
//                 password: formFieldErrors?.password,
//             },
//         };
//     }

//     return {
//         success: "Your message was sent successfully!",
//     };
// }