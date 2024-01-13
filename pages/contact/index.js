//components
import Circles from '../../components/Circles'

//icons
import { BsArrowRight } from 'react-icons/bs'
//framer
import { motion } from 'framer-motion';
//formik
import { useFormik } from 'formik';
//validation
import { signUpSchema } from '../schema';

//variants
import { fadeIn } from '../../variants'
import { sendContactForm } from '../lib/api';
const initialValues = {
  name: "",
  subject: "",
  email: "",
  message: "",
};
const Contact = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: async (values, action) => {
      await sendContactForm(values);
      action.resetForm();
    }    
  })
  console.log(errors);

  return (
    <div className='h-full bg-primary/30'>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        {/* text & form */}
        <div className='text flex-col w-full max-w-[700px] '>
          {/* text */}
          <motion.h2 variants={fadeIn("UP", 0.2)} initial='hidden' animate='show' exit='hidden' className='h2 text-center mb-12'>
            Let us <span className='text-accent'>connect.</span>
          </motion.h2>
          {/* form */}
          <motion.form onSubmit={handleSubmit} variants={fadeIn("UP", 0.4)} initial='hidden' animate='show' exit='hidden' action="" method="POST" className='flex flex-1 flex-col gap-6 w-full mx-auto'>
            {/* input group */}
            <div className="flex gap-x-6 w-full justify-between">
              <div className='flex flex-col w-full'>
                <input name='name' value={values.name} onChange={handleChange} onBlur={handleBlur} type="text" placeholder='name' className='input' />
                {errors.name && touched.name ? (<p className='text-red-500 flex'>{errors.name}</p>) : null}
              </div>
              <div className='flex flex-col w-full'>
                <input name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} type="email" placeholder='email' className='input' />
                {errors.email && touched.email ? (<p className='text-red-500 flex'>{errors.email}</p>) : null}
              </div>
            </div>
            <div className='flex flex-col'>
              <input name='subject' type="text" value={values.subject} onChange={handleChange} onBlur={handleBlur} placeholder='subject' className='input' />
              {errors.subject && touched.subject ? (<p className='text-red-500 flex'>{errors.subject}</p>) : null}
            </div>
            <div className='flex flex-col'>
            <textarea name='message' value={values.message} onChange={handleChange} onBlur={handleBlur} placeholder='message' className='textarea'></textarea>
            {errors.message && touched.message ? (<p className='text-red-500 flex'>{errors.message}</p>) : null}
            </div>
            <button type='submit' className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>Let us talk</span>
              <BsArrowRight className=' -translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
            </button>
          </motion.form>

        </div>
      </div>
    </div>);
};

export default Contact;
