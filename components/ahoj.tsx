import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

function Ahoj() {


  return (
      <h1 className="text-3xl font-bold underline">
        aaaaaaatadyy

      </h1>
  )

}


export async function getServerSideProps() {

    console.log('AAAAAAAAAAAabbbbbbbbb')
    // Fetch data from external API
    // const res = await fetch(`https://.../data`)
    // const data = await res.json()
    // console.log('DSADS')
    // Pass data to the page via props


    return { props: { data: 'ahooj' } }
}




export default Ahoj
