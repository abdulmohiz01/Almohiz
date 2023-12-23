
//import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react'
//import swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
// import required modules
import { Navigation, Pagination } from "swiper";
//image
import Image from 'next/image';

//icons
import { FaQuoteLeft } from 'react-icons/fa'

const TestimonialSlider = () => {
  return <Swiper
    navigation={true}
    pagination={{
      clickable: true
    }}
    modules={[Navigation, Pagination]}
    className='h-[400px]'>
    {
      testimonialData.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16 '>
              {/* avatar, name, position */}
              <div className='w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0'>
                <div className='flex flex-col justify-center text-center'>
                  {/* avatar */}
                  <div className='mb-2 mx-auto'>
                    <Image src={person.image} width={100} height={100} alt='' className='rounded-full'/>
                  </div>
                  {/* name */}
                  <div className='text-lg'>
                    {person.name}
                  </div>
                  {/* position */}
                  <div className='text-[12px] uppercase font-extralight tracking-widest'>
                    {person.position}
                  </div>
                </div>
              </div>
              {/* quote & message */}
              <div className='flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20'>
                {/* quote icon */}
                <div className='mb-4'>
                  <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0' />
                </div>
                {/* messages */}
                <div className='xl:text-lg text-center md:text-left'>{person.message}
                </div>
              </div>
            </div>
          </SwiperSlide>
        )
      })
    }

  </Swiper>;
};

export default TestimonialSlider;


// testimonial data
const testimonialData = [
  {
    image: '/t-avt-1.png',
    name: 'Elizabeth',
    position: 'Customer',
    message:
      'Excellent work with attention to detail. Prompt and timely response. Good communication skills. Proactive. Hiring him for another project.',
  },
  {
    image: '/t-avatar-2.png',
    name: 'Darcy',
    position: 'Customer',
    message:
      'Abdul. delivered outstanding results with creativity and precision, turning my vision into a digital masterpiece.',
  },
  {
    image: '/t-avt-3.png',
    name: 'Jhon Doe',
    position: 'Customer',
    message:
      'Abdul. brought my vision to life with an exceptional display of creativity and attention to detail. The result? A digital masterpiece that leaves me in awe.',
  },
];
