const Services = () => {
    return (
        <>
            <div className="main-container">
                <h1 className="text-5xl font-bold text-center underline mt-8">My Services</h1>
                <div className="Services-container space-x-5 px-10 flex mt-12">
                    <div className="cursor-pointer hover:bg-green-400 bg-slate-100 p-5 text-center shadow-lg rounded-xl service1 space-y-4">
                        <i class="text-5xl fa-brands fa-aws"></i>
                        <h1 className="text-4xl">Web Development</h1>
                        <p>Crafting tailor-made websites that align with your brand identity and business goals. From concept to deployment, I create visually appealing and functional websites that provide an excellent user experience.</p>
                        <button className="px-3 py-2 bg-orange-500 rounded-full shadow-lg text-2xl">check....</button>
                    </div>
                    <div className="cursor-pointer hover:bg-green-400 bg-slate-100 p-5 text-center space-y-3 shadow-lg rounded-xl">
                        <i class="text-5xl fa-solid fa-mobile"></i>
                        <h1 className="text-4xl">Android  Development</h1>
                        <p>Creating custom Android apps tailored to your business needs, ensuring a unique user experience that aligns with your brand.Building high-performance apps using Java or Kotlin to leverage the full potential of Android devices.</p>
                        <button className="px-3 py-2 bg-orange-500 rounded-full shadow-lg text-2xl">check....</button>
                    </div>
                    <div className="cursor-pointer hover:bg-green-400 bg-slate-100 p-5 text-center space-y-3 shadow-lg rounded-xl">
                        <i class="text-5xl fa-solid fa-server"></i>
                        <h1 className="text-4xl">Backend Development</h1>
                        <p>Designing and developing custom backend systems tailored to your specific needs, ensuring scalability and performance. Creating robust and secure APIs that allow seamless communication between your frontend and backend, as well as with third-party services.</p>
                        <button className="px-3 py-2 bg-orange-500 rounded-full shadow-lg text-2xl">check....</button>
                    </div>
                </div>
            </div>
        </>
    )

};
export default Services;