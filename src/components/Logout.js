import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setPageNotFoundComponent } from "../actions/general-actions";
import { logout, updateUser } from "../actions/login-actions";
import { defaultScrollPosition } from "../constants/constants";

function Logout({ funcLogout }) {
    const navigate = useNavigate();

    useEffect(() => {
        funcLogout();
        navigate('/login');
    }, []);
};

const mapDispatchToProps = (dispatch) => {
    return {
        funcLogout: () => {
            dispatch(logout());
        }
    }
};

export default connect(null, mapDispatchToProps)(Logout);