import { useSelector } from "react-redux"
import Loader from '../layouts/Loader';
import { Fragment } from "react";
import { Link } from "react-router-dom";
import MetaData from "../layouts/MetaData";

export default function Profile() {
    const { user, loading } = useSelector(state => state.authState);
    return (
        <Fragment>
            <MetaData title={"My Profile"} />
            {loading ? <Loader /> :
                <div className="row justify-content-around mt-5 user-info">
                    <div className="col-12 col-md-3">
                        <figure className='avatar avatar-profile'>
                            {user && user.avatar && <img className="rounded-circle img-fluid" src={user.avatar ?? './images/default_avatar.png'} alt='userPhoto' />}
                        </figure>
                        <Link to={'/myprofile/update'} id="edit_profile" className="btn btn-primary btn-block my-5">
                            Edit Profile
                        </Link>
                    </div>

                    <div className="col-12 col-md-5">
                        <h4>Full Name</h4>
                        {user && user.name && <p>{user.name}</p>}

                        <h4>Email Address</h4>
                        {user && user.email && <p>{user.email}</p>}

                        <h4>Joined</h4>
                        {user && user.createdAt && <p>{String(user.createdAt).substring(0, 10)}</p>}

                        <a href="javascript;" className="btn btn-danger btn-block mt-5">
                            My Orders
                        </a>

                        <Link to={'/myprofile/update/password'} className="btn btn-primary btn-block mt-3">
                            Change Password
                        </Link>
                    </div>
                </div>
            }
        </Fragment>
    )
}