import { useState } from "react";
import bannerImage from "../assets/rahul.png";
const About = () => {
  const [data, setData] = useState({
    image: bannerImage,
    title: "FullStack Developer & Android Developer",
    desc1: `Proactive Technical Trainer with a strong track record of over 6 years in mentoring and educating more than 3,500 students in various technical disciplines. Expert in leveraging a variety of training methodologies, including handson labs, e-learning, and interactive workshops, to maximize knowledge retention and practical application. Passionate about empowering students with the skills and confidence needed to succeed in fast-paced tech environments.`,
    actionButton: {
      title: "Read More....",
      link: "/readmore",
    }
  });
  return (
    <>
      <div className="main-container border py-8 bg-gray-100">
        <h1 className="text-center pb-16 text-5xl underline font-bold">About Me</h1>
        <div className="flex items-center">
          {/* image Box */}
          <div className="w-full flex justify-center ">
            <img src={bannerImage} alt="Rahul Naitam " className="rounded-full shadow-lg"></img>
          </div>
          {/* text box */}
          <div className=" w-fit flex justify-center">
            <div className="space-y-5 w-2/3">
              <h1 className="text-5xl text-semibold ">{data.title}</h1>
              <p>{data.desc1}</p>
              <p>{data.desc2}</p>
              <button className="bg-orange-500 px-3 py-2 rounded-full shadow-lg">{data.actionButton.title}
              </button>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};
export default About;