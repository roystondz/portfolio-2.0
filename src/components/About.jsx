import aboutImg from "../assets/about.jpg"
import { ABOUT_TEXT } from "../constants"

const About = () => {
  return (
    <div className="pb-4 border-b border-neutral-900 ">
        <h2 className="my-20 text-4xl text-center">About <span className="text-neutral-500"> Me </span></h2>
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center">
                    <img className="rounded-2xl" src={aboutImg} alt="about" />
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <p className="max-w-xl py-16 my-6">{ABOUT_TEXT}</p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default About
