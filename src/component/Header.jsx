import { useState } from "react";
import pdf from '../Pdf/Resume.pdf';

const Header = () => {
    const [brandName, setBrandName] = useState("Rahul Naitam")
    const [menuLinks, setMenuLinks] = useState([
        {
            title: 'Home',
            link: '/home',
            id: '1'
        },
        {
            title: 'About us',
            link: '/Aboutus',
            id: '2'
        },
        {
            title: 'Gallary',
            link: '/Gallary',
            id: '3'
        },
        {
            title: 'Services',
            link: '/Services',
            id: '4'
        },
    ]);
    /*const [actionButton, SetActionButton] = useState({
        title: 'Dounload CV',
        link: './Hire me',
    })*/
    return (
        <>
            <div className="h-20 border main  flex justify-between items-center px-16 bg-gray-200">
                <div className="text-2xl font-bold">
                    <h1>{brandName}</h1>
                </div>
                <div className="space-x-6">

                    {menuLinks.map((link) => (
                        <a key={link.id} href={link.link} className="hover:text-orange-600">{link.title}</a>
                    ))}
                    {/* <a href="/About us"className="hover:text-orange-600">About us</a>
        <a href="/Gallary"className="hover:text-orange-600">Gallary</a>
        <a href="/Services"className="hover:text-orange-600">Services</a>
    */}

                </div>
                <div>
                    {/*<a href={actionButton.link} className="px-4 py-2 rounded-full bg-orange-500 shadow text-1xl" download="Resume.pdf">{actionButton.title}</a> */}

                    <a href={pdf} className="px-4 py-2 rounded-full bg-orange-500 shadow text-1xl" download="Resume.pdf">Download Resume</a>
                </div>

            </div>

        </>
    )
};
export default Header;