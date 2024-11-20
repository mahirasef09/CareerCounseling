import { GiTeacher } from "react-icons/gi";
import { IoBookOutline } from "react-icons/io5";
import { PiChalkboardTeacherThin } from "react-icons/pi";
import { RiTeamLine } from "react-icons/ri";


const WhyUs = () => {
    return (
        <div className="footer footer-center bg-secondary text-primary-content p-10 rounded-3xl">
            <div>
                <PiChalkboardTeacherThin className="text-5xl"></PiChalkboardTeacherThin>
                <h3 className="text-3xl font-extrabold">Dedicated Trainers</h3>
            </div>
            <div>
                <RiTeamLine className="text-5xl"></RiTeamLine>
                <h3 className="text-3xl font-extrabold">Responsive Team</h3>
            </div>
            <div>
                <IoBookOutline className="text-5xl"></IoBookOutline>
                <h3 className="text-3xl font-extrabold">Exclusive Study Materials</h3>
            </div>
            <div>
                <GiTeacher className="text-5xl"></GiTeacher>
                <h3 className="text-3xl font-extrabold">Unique Teaching Methods</h3>
            </div>
        </div>
    );
};

export default WhyUs;