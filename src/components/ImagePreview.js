import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { openImagePreviewModal } from '../actions/general-actions';
import { title } from '../constants/constants';

function ImagePreview({ imgSrc, open, setImagePreviewModal, File }) {
    return (
        <div style={open ? { position: 'fixed', width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, .6)', zIndex: 999999, padding: '20px', top: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' } : { display: 'none' }} onClick={() => setImagePreviewModal(null, false)} >
            <div style={{ backgroundColor: 'rgba(0, 0, 0, 0)', posistion: 'relative', height: '95%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <FontAwesomeIcon icon={faXmark} title={title.CLOSE} style={{ color: 'white', fontSize: '25px', position: 'absolute', top: '10%', right: '123px', border: '1px solid white', borderRadius: '5%', padding: '5px 9px', background: 'red', cursor: 'pointer' }} onClick={() => setImagePreviewModal(null, false)} />
                <img src={imgSrc} style={{ height: '80%', width: '30%' }} />
            </div>
        </div>
    )
};

const mapStateToProps = (store) => {
    return {
        imgSrc: store.generalReducer.imageSrcForPreview,
        openModal: store.generalReducer.isImagePreviewModalOpen,
        File: store.generalReducer.File
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setImagePreviewModal: (src, modalState) => {
            dispatch(openImagePreviewModal(src, modalState));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ImagePreview);