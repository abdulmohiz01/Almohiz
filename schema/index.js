import * as Yup from "yup";

export const signUpSchema = Yup.object({
    name: Yup.string().min(3).max(25).required("Please Enter Your Name"),
    email: Yup.string().email().required("Please Enter Your Email"),
    subject: Yup.string().min(3).max(50).required("Please Enter Your Subject"),
    message: Yup.string().min(1).required("Please Enter Your Message")
});
