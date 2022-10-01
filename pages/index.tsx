import type { NextPage } from 'next'
import Head from 'next/head';
import Formulary from '../components/Form';

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Clasifica Eroticos</title>
      </Head>


      <h1 className="text-3xl font-bold underline text-red-500">
      Hello world!
      </h1>

      <Formulary />
    </>
  )
}

export default Home
