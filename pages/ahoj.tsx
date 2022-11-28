import Image from 'next/image'



console.log('AAAAAAAAAAAAAHOJ')
// @ts-ignore
function About<any>({data}) {
    // @ts-ignore

    function toggle() {

    }


    return <div>
        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
            <form>
                <div className="form-group mb-6">
                    <label htmlFor="exampleInputEmail1" className="form-label inline-block mb-2 text-gray-700">Email
                        address</label>
                    <input type="email" className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputEmail1"
                           aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="block mt-1 text-xs text-gray-600"> never share your email
                            with anyone
                            else.</small>
                </div>

            </form>
        </div>


    </div>
}




export default About
