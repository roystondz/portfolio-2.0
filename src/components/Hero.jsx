import {HERO_CONTENT} from "../constants";
import profilePic from "../assets/unnamed (2).jpg";

const Hero = () => {
  return (
    <div className='pb-4 border-b border-neutral-900 lg:mb-36'>
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start" >
                    <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Royston Akash Dsouza</h1>
                    <span className="text-3xl tracking-tight text-transparent bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text">
                        Software Developer
                    </span>
                    <p className="max-w-xl py-6 my-2 font-light tracking-tighter">
                        {HERO_CONTENT}
                    </p>
                </div> 
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <img src={profilePic} alt="profile" />
                    </div>
                </div>
        </div>
      
    </div>
  )
}

export default Hero
