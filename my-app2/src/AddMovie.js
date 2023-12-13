import React, {useState} from 'react';
import { Modal, Button } from 'react-bootstrap';


function AddMovie (props)  {
    //React Hooks
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalInputTitle, setModalInputTitle] = useState('');
    const [modalInputDecription, setModalInputDecription] = useState('');
    const [modalInputPoster, setModalInputPoster] = useState('');
    const [modalInputRating, setModalInputRating] = useState('');
    
    //Modal Show On/Off
    const showModal = () => {
        setIsModalVisible(true);
    };
    const handleOk = () => {
        props.onOk({title : modalInputTitle,description : modalInputDecription,imageUrl : modalInputPoster,rate : modalInputRating});
        setIsModalVisible(false);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };

    //Get data from modal and passed to MovieList as a callback function
    const modalTitleHandler = e => {
        setModalInputTitle(e.target.value)
    };
    const modalDecriptionHandler = e => {
        setModalInputDecription(e.target.value)
    };
    const modalPosterHandler = e => {
        setModalInputPoster(e.target.value)
    };
    const modalRatingHandler = e => {
        setModalInputRating(e.target.value)
    };
    

    return (
    <div className="movid-add">
        <Button variant="primary" className="add-movie" onClick={() => showModal()}>Add Movie</Button>
        <Modal className="modal-movie" show={isModalVisible}  onHide={handleCancel}>
        <Modal.Title>Add movie</Modal.Title>
            <div className="col-modal">
            <label>Movie title :</label>
            <input type='text' 
                placeholder="Add a movie title..."
                value={modalInputTitle}
                onChange={modalTitleHandler}>
            </input>
            </div>
            <div className="col-modal">
            <label>Movie description :</label>
            <input type='text' 
                placeholder="Add a movie description..."
                value={modalInputDecription}
                onChange={modalDecriptionHandler}>
            </input>
            </div>
            <div className="col-modal">
            <label>Movie Poster :</label>
            <input type='text' 
                placeholder="Add a valid url link..."
                value={modalInputPoster}
                onChange={modalPosterHandler}>
            </input>
            </div>
            <div className="col-modal">
            <label>Movie Rating :</label>
            <input type='number' 
                placeholder="Add a rating from 0 to 5..."
                value={modalInputRating}
                onChange={modalRatingHandler}>
        </input>
        </div>
        <button onClick={handleOk} className="btn btn-success">Save</button>
        </Modal>
    </div>
    );
}
export default AddMovie;