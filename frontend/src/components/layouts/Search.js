import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Search() {
    const navigate = useNavigate();
    const [keyWord, setKeyWord] = useState('');
    const location = useLocation();


    const searchHandler = (e) => {
        e.preventDefault();
        if (keyWord !== '') {
            navigate(`/search/${keyWord}`)
        }
    }

    const clearKeyword = () => {
        setKeyWord('');
    }

    useEffect(() => {
        if (location.pathname === '/') {
            clearKeyword();
        }
    }, [location])

    return (
        <form onSubmit={searchHandler} >
            <div className="input-group">
                <input
                    type="text"
                    id="search_field"
                    className="form-control"
                    placeholder="Enter Product Name ..."
                    onChange={(e) => { setKeyWord(e.target.value) }}
                    value={keyWord}
                />
                <div className="input-group-append">
                    <button id="search_btn" className="btn">
                        <i className="fa fa-search" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        </form>
    )
}