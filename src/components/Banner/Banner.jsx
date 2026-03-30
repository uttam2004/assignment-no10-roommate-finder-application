import React from 'react';
import { CgViewComfortable } from 'react-icons/cg';
import { FaCropSimple, FaPeopleRoof, FaSignsPost, FaUsersViewfinder } from 'react-icons/fa6';
import { MdOutlineHealthAndSafety } from 'react-icons/md';

const Banner = () => {
    return (
        <div className="carousel w-full max-h-96">
            <div id="slide1" className="carousel-item relative w-full justify-center">
                <img
                    src="https://don5wql5ofws9.cloudfront.net/media/home/web_dorm.webp"
                    className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
                <div className="card absolute md:top-10 md:left-90 bg-white/45 backdrop-invert backdrop-opacity-10 md:w-96 w-76 mt-20 md:mt-0">
                    <div className="card-body">
                        <h2 className="card-title flex"><FaUsersViewfinder size={24} /> Find Your Perfect Roommate</h2>
                        <p className='flex items-center'><MdOutlineHealthAndSafety size={20} />  Safe, verified, and easy</p>
                        <div className="justify-end card-actions">
                            <button className="btn btn-primary">Browse Listings</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full justify-center">
                <img
                    src="https://colpittsdev.ca/images/ForWebsite_reduced.jpg"
                    className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
                <div className="card absolute md:top-10 md:left-90 bg-white/40 backdrop-invert backdrop-opacity-10 md:w-96 w-76 mt-14 md:mt-0">
                    <div className="card-body">
                        <h2 className="card-title flex"><FaSignsPost size={24} /> Post Your Room in Minutes</h2>
                        <p className='flex items-center'><FaPeopleRoof size={20} />  Reach thousands of people instantly</p>
                        <div className="justify-end card-actions">
                            <button className="btn btn-primary">Add Listing</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full justify-center">
                <img
                    src="https://www.edgeip.com/images/FCK/Image/202405/Laurier-ResidenceOffCampusHomeSweetHome.jpg"
                    className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
                <div className="card absolute md:top-10 md:left-90 bg-white/45 backdrop-invert backdrop-opacity-10 md:w-96 w-76 mt-14 md:mt-0">
                    <div className="card-body">
                        <h2 className="card-title flex"><CgViewComfortable size={24}/> Live Comfortably, Together</h2>
                        <p className='flex items-center'><FaCropSimple size={18}/>Affordable shared living made simple</p>
                        <div className="justify-end card-actions">
                            <button className="btn btn-primary">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full justify-center">
                <img
                    src="https://media.istockphoto.com/id/2189274055/video/handshake-university-or-students-hug-in-outdoor-campus-or-school-for-bonding-acceptance-or.jpg?s=640x640&k=20&c=gESlbdZ9_dLQOMkZihOShvNmbxdNzESLLnd1w3MAIt0="
                    className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
                <div className="card absolute md:top-30 md:left-90 bg-white/45 backdrop-invert backdrop-opacity-10 md:w-96 w-76 mt-20 md:mt-0">
                    <div className="card-body">
                        <h2 className="card-title flex"><FaUsersViewfinder size={24}/> Save Money with Shared Living</h2>
                        <p className='flex'><MdOutlineHealthAndSafety size={24}/> Split rent, save more</p>
                        <div className="justify-end card-actions">
                            <button className="btn btn-primary">Find Affordable Rooms</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
