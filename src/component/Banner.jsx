import bannerImage from "../assets/photo.jpg";
import bannerBackground from "../assets/banner.png";
const Banner = () => {
  return (
    <div style={{
      backgroundImage: `url(${bannerBackground})`,
      backgroundSize: "cover",
    }} className="main-container flex w-full items-center">
      <div className=" w-full flex justify-center text-white">
        {/*text*/}
        <div className="w-2/3 ms-10">
          <h3 className="text-3xl font-semibold">Hi, I am</h3>
          <h1 className="mt-3 text-5xl font-bold">Rahul Naitam</h1>
          <h2 className="mt-3 text-2xl font-semibold">  I am a Sr. Technical Trainer </h2>
          <p className="mt-3">Experienced and dedicated technical trainer with a proven track record of delivering high-quality training programs in Programming Languages like as Core & Advance JAVA, Android, Python.</p>
          <br />
          <div className="iconContainer flex space-x-5">
            <a className="hover:bg-green-700 border cursor-pointer px-2 py-2 w-14 h-14 rounded-full flex justify-center bg-gray-800">
              <i class="fa-brands text-4xl fa-facebook"></i>
            </a>
            <a className="hover:bg-green-700 border cursor-pointer px-2 py-2 w-14 h-14 rounded-full flex justify-center bg-gray-800">
              <i class="fa-brands text-4xl fa-linkedin-in"></i>
            </a>
            <a className="hover:bg-green-700 border cursor-pointer px-2 py-2 w-14 h-14 rounded-full flex justify-center bg-gray-800">
              <i class="fa-brands text-4xl fa-instagram"></i>
            </a>
            <a className="hover:bg-green-700 border cursor-pointer px-2 py-2 w-14 h-14 rounded-full flex justify-center bg-gray-800">
              <i class="fa-brands text-4xl fa-youtube"></i>
            </a>
          </div>
          <br />
          <a className="text-1xl px-3 py-2 mt-3 bg-orange-500 rounded-full shadow-lg" href="/contact">Contact Me</a>
        </div>
      </div>
      <div className="w-full flex justify-center">
        {/*image*/}
        <img className="rounded-full shadow-lg w-fit " src={bannerImage} alt="not display" />
      </div>

    </div>
  )

};
export default Banner;