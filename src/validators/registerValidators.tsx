"use server";
import { redirect, } from "next/navigation"
import { registerAction, registerSchema } from "../app/api/auth/register";

export async function registerMAction(
    _prev: registerAction,
    formData: FormData

): Promise<registerAction> {
    console.log(_prev)
    const form = Object.fromEntries(formData)
    const validationResult = registerSchema.safeParse(form)

    if (!validationResult.success) {
        return {
            form,
            errors: validationResult.error.flatten().fieldErrors
        };
    }
    return { form };

    // if (!validationResult.success) {
    //     return {
    //         form,
    //         errors: validationResult.error.flatten().fieldErrors
    //     }
    // } else {
    //     console.log(_prev)
    //     // return { form }
    //     redirect("/pages/dashboard")
    // }

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