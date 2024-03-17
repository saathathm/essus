import React, { Fragment, useEffect, useState } from 'react';
import MetaData from './layouts/MetaData';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../actions/productActions';
import Loader from './layouts/Loader';
import Product from './product/Product';
import { toast } from 'react-toastify';
import Pagination from 'react-js-pagination'

export default function Home() {
    const dispatch = useDispatch();
    const { loading, products, productsCount, resPerPage, error } = useSelector((state) => state.productsState);
    const [currentPage, setCurrentPage] = useState(1);

    const setCurrentPageNo = (pageNo) => {
        setCurrentPage(pageNo);
    }

    useEffect(() => {
        if (error) {
            const err = async () => {
                return (
                    toast.error(error, {
                        position: 'bottom-center'
                    })
                )
            }
            err();
            
        }
        dispatch(getProducts(null, null, null, null, currentPage))
    }, [error, dispatch, currentPage]);


    return (
        <Fragment>

            {loading ? <Loader /> :
                <Fragment>
                    <MetaData title={'Buy Best Products'} />
                    <h1 id="products_heading">Latest Products</h1>

                    <section id="products" className="container mt-5">
                        <div className="row">
                            {products && products.map((product) => (
                                <Product col={4} key={product._id} product={product} />
                            ))}
                        </div>
                    </section>

                    {productsCount > 0 && productsCount > resPerPage ?
                        <div className='d-flex justify-content-center mt-5'>
                            <Pagination
                                activePage={currentPage}
                                onChange={setCurrentPageNo}
                                totalItemsCount={productsCount}
                                itemsCountPerPage={resPerPage}
                                nextPageText={'Next'}
                                firstPageText={'First'}
                                lastPageText={'Last'}
                                itemClass='page-item'
                                linkClass='page-link'

                            />
                        </div> : null
                    }
                </Fragment>
            }

        </Fragment>
    )
}