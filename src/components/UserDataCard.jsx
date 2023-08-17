import { FaCalendarAlt, FaClipboardList, FaLayerGroup, FaPaperclip, FaSms } from 'react-icons/fa';
import "./UserDataCard.css";
import { Modal, Button } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const UserDataCard = ({ user, client, description, followers, sms, fake_date, role }) => {
    const [showModal, setShowModal] = useState(false);

    const { data: dataCount = "" } = useQuery(["count", role], async () => {
        const res = await axios.get(`https://user-card-server.vercel.app/dataCount?role=${role}`);
        return res.data;
    });

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className='mb-1 bg-white p-2 rounded custom-card-width'>
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
                <span className='bg-secondary rounded-circle p-1 text-white me-2'>12+</span>
                <span className='me-2'><FaSms /> {parseInt(sms) + 3}</span>

                <div className='me-2 d-inline'>

                    <div className="modal" tabIndex="-1">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Modal title</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <p>Modal body text goes here.</p>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='user-data-card d-inline'>
                        {/* ... rest of the component code ... */}
                        <span onClick={openModal}>
                            <FaPaperclip />
                        </span>

                    </div>
                    {dataCount}
                </div>

                <span><FaCalendarAlt /> {fake_date}</span>
            </div>
        </div>
    );
};

export default UserDataCard;