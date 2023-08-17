import { FaCalendarAlt, FaClipboardList, FaLayerGroup, FaPaperclip, FaSms } from 'react-icons/fa';

const UserDataCard = ({ user, client, description, followers, sms, fake_date, role }) => {

    return (
        <div className='mb-5'>
            <div className="d-flex gap-3 align-items-center justify-content-between">
                <div className='d-flex gap-2 mb-2 align-items-center'>
                    <img className='' width={"40px"} height={"40px"} src={user?.user_img} alt="" />
                    <h6>{user?.user_name}</h6>
                </div>
                <div className='d-flex gap-2 mb-2 align-items-center'>
                    <img className='' width={"40px"} height={"40px"} src={client?.client_img} alt="" />
                    <h6>{client?.client_name}</h6>
                </div>
            </div>
            <div className='d-flex justify-content-between'>
                <p><FaLayerGroup /> {description.slice(0, 35)}...</p>
                <p><FaClipboardList /> 1/2</p>
            </div>
            <div>
                {
                    followers.follower_imgs.map((img, id) =>
                        <img src={img} width={"40px"} height={"40px"} className='me-3' key={id} alt="" />
                    )
                }
                <span className='bg-secondary rounded-circle p-1'>12+</span>
                <span><FaSms /> {parseInt(sms) + 3}</span>

                <span><FaPaperclip /> 23</span>

                <span><FaCalendarAlt /> {fake_date}</span>
            </div>
        </div>
    );
};

export default UserDataCard;