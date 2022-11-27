import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import Image from 'next/image'
import { useThemeContext } from "./../theme";

const Counter = dynamic(() => import('../../components/Counter'), {
})


console.log('AAAAAAAAAAAAAHOJ')
// @ts-ignore
function About<any>({data}) {
    // @ts-ignore
    const [theme, setTheme] = useThemeContext();

    function toggle() {

        console.log('AAAAAAAAAAAA')
        setTheme('DSADSA11sadsa111111')
    }


    return <div>



        <div className="flex container w-full container mx-auto flex flex-wrap items-center justify-between text-2xl lg:text-4xl pl-4"
        >

            LANDING
        </div>

            <div className="flex container w-full container mx-auto flex flex-wrap justify-between ">
                <div className="lg:w-4/6  flex-none p-2">

                    <Image
                        src="https://cataas.com/cat"
                        alt="Picture of the author"
                        width={500}
                        height={500}
                    />

                    <div className="text-white text-center bg-blue-600 py-2 rounded-lg">{data.body}




                    </div>
                </div>
                <div className="lg:w-2/6 flex-none p-2">
                    <div className="text-white text-center bg-blue-600 px-4 py-2  rounded-lg ">
                        <a href="#_"
                           onClick={() => toggle()}
                           className="inline-block py-1 text-xl text-white bg-blue-800 px-7 hover:bg-gray-700 rounded-xl">
                            Button Text
                        </a>


                        <Counter></Counter>
                    </div>


                </div>
            </div>




        <style jsx>{`

.gradient {
    background:linear-gradient(90deg,#33a3d5 0%,#71da51 100%)
}


    @media (min-width: 1024px)
.container {
    max-width: 1024px;
}

@media (min-width: 768px)
.container {
    max-width: 768px;
}

.container {
    max-width: 640px;
}

        p {
          color: blue;
        }
      `}</style>
    </div>

        {/*<Suspense fallback={`Loading...`}>*/}
        {/*    aaaqq*/}
        {/*    <Counter  />*/}
        {/*</Suspense>*/}
}



// This gets called on every request
export async function getServerSideProps(context) {
    context.res.setHeader(
        'Cache-Control',
        'public, s-maxage=100000, stale-while-revalidate=5900'
    )

    console.log(context.params.id, 'req')

    console.log('AAAAAAAAAAAAAAAAAAAAAAAAA123')


    const resFetch = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${context.params.id}`,
        { cache: 'no-store' },
    );
    const data = await resFetch.json();

    // Pass data to the page via props
    return { props: { data } }
}

export default About
