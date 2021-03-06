import React from 'react';
import Modal from 'react-modal';

const GifModal = (props) => {
    if (!props.selectedGif) {
        return <div></div>;
      }
      
    return (
        <Modal
            style={ customStyles }
            isOpen={ props.modalIsOpen }
            onRequestClose={ () => props.onRequestClose() } >
            <div className="gif-modal">
                <img src={ props.selectedGif.images.original.url } />
                <p><strong>Source:</strong> <a href={ props.selectedGif.source }>{ props.selectedGif.source }</a></p>
                <p><strong>Rating:</strong> { props.selectedGif.rating }</p>

                <button onClick={() => props.onRequestClose()}>close</button>
            </div>
        </Modal>
    );
};

const customStyles = {
    content : {
        width: 'auto',
        height: 'auto',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

export default GifModal;