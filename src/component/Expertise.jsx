import bannerBackground from "../assets/banner.png";
import pdf from '../Pdf/Resume.pdf';
const Expertise=()=>{
    return(
        <>
         <div className="mt-2">
            <h1 className=" my-8 text-5xl font-bold underline text-center">My Expertise</h1>
            {/*Box section*/}
            <div 
            style={{
                backgroundImage: `url(${bannerBackground})`,
                backgroundSize:"cover",
              }}
            className=" box-container items-center flex py-10 ">
               <div className="px-10">
                {/* text container*/}
                <div className="w-2/3 text-center text-white">
                <h1 className="text-3xl font-bold space-y-4">I love these technologies</h1>
                <p ><b>1 {') '} Technology Training:</b>Specializing in software development.{" "}<b>2{")"} Curriculum Development:</b> Designing and developing customized training programs tailored to client needs.{" "}<b>3 {") "}Technical Writing:</b> Creating clear and comprehensive documentation and training materials.{" "}<b>4{") "}Project Management:</b> Leading training projects from conception to execution, ensuring timely delivery.</p>
               <a href={pdf} className="text-2xl px-4 py-0.5 bg-orange-500 rounded-full shadow-lg" download="Resume.pdf">Hire me</a>
                </div>
               </div>
               <div className=" flex justify-center">
                 {/* skills container*/}
                <div className="flex justify-center w-2/3 space-x-3 flex-wrap">
                <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-green-500 cursor-pointer">core java</p>
                 <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-green-500 cursor-pointer">J2EE</p>
                 <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-green-500 cursor-pointer">Spring Boot</p>
                 <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-green-500 cursor-pointer">hibernate(ORM tool)</p>
                 <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-green-500 cursor-pointer">Spring Boot framework</p>
                 <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-green-500 cursor-pointer">Java Script </p>
                 <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-green-500 cursor-pointer">React</p>
                 <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-green-500 cursor-pointer" hover:bg-green-500 cursor-pointer>Selenium(Testing)</p>
                 <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-green-500 cursor-pointer">MERN Stack</p>
                 <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-green-500 cursor-pointer">MangoDB</p>
                 <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-green-500 cursor-pointer">MySql</p>
                 <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-green-500 cursor-pointer">NoSql</p>
                 <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-green-500 cursor-pointer">Angular</p>
                 <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-green-500 cursor-pointer">TypeScript</p>
                 <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-green-500 cursor-pointer">NextJs</p>
                </div>
               </div>
            </div>
        </div>
        </>
    )
};
export default Expertise;