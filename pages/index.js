import Head from 'next/head'
import Image from 'next/image'
import Cart from '../components/Cart'
import Header from '../components/Header'
import Panel from '../components/HomeCom/Panel'
import profile from '../public/profile.jpeg'
import SmallCards from '../components/HomeCom/SmallCards'
import LoginForm from '../components/LoginForm'
import SingUpForm from '../components/SignUpForm'
import apiRequest from '../Server/ApiRequest'
import { useCustomHook } from '../service/Context'
import TestimonialCard from 'material-testimonial-card';
import Footer from '../components/Footer'

export default function Home({ services }) {
  const { cartToggle, loginToggle, signUpToggle } = useCustomHook();
  return (
    <div className='w-[100%] h-fit min-h-[100vh] bg-gray-50/50 text-slate-700'>

      <Head>
        <title>Hodan</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Panel />
      <section>
        {cartToggle && <Cart />}
        {signUpToggle && <SingUpForm />}
        {loginToggle && <LoginForm />}
      </section>
      <section className='w-[80%] overflow-auto m-auto py-10'>
        <h1 className='text-3xl font-normal text-center mb-10'>Services</h1>

      </section>

      <section className='w-[90%] m-auto mb-5 h-fit flex flex-col items-center'>
        <h1 className='text-3xl font-normal text-center mb-5'>Testmonial</h1>
        <div className='flex justify-center sm:justify-between items-center flex-wrap w-[100%]'>
          <TestimonialCard
            name={"John Smith"}
            image={"profile.jpeg"}
            content={"Wow! This testimonial card is so amazing! I would like to use it in my project! Wow! This testimonial card is so amazing! I would like to use it in my project! Wow! This testimonial card is so amazing! I would like to use it in my project!"}
            project={"Testimonial card"}
          />
          <TestimonialCard
            name={"John Smith"}
            image={"profile.jpeg"}
            content={"Wow! This testimonial card is so amazing! I would like to use it in my project! Wow! This testimonial card is so amazing! I would like to use it in my project! Wow! This testimonial card is so amazing! I would like to use it in my project!"}
            project={"Testimonial card"}
          />
          <TestimonialCard
            name={"John Smith"}
            image={"profile.jpeg"}
            content={"Wow! This testimonial card is so amazing! I would like to use it in my project! Wow! This testimonial card is so amazing! I would like to use it in my project! Wow! This testimonial card is so amazing! I would like to use it in my project!"}
            project={"Testimonial card"}
          />
        </div>
      </section>

      <Footer />
    </div>
  )
}


export async function getServerSideProps() {
  let data;
  const response = await apiRequest.get('/services')
    .catch(error => console.log('error ayaa dhacay', error))
  if (response) {
    data = response.data
  }
  return {
    props: {
      services: data
    }
  }
}