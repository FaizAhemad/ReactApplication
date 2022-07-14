import React from 'react'
import { Pagination } from 'react-bootstrap';
import { connect } from 'react-redux';
import { changePaginationProps, changeProductView } from '../actions/products-action';

function PaginationComponent({ currentPage, size, pages, totalPages, paginationSize, setCurrentPageValue, setValue, ...props }) {

    return (
        <Pagination size={size}>
            <Pagination.First
                disabled={currentPage === 1}
                style={{ cursor: currentPage === 1 && 'not-allowed' }}
                onClick={() => {
                    if (currentPage === 1) {
                        return
                    }
                    else {
                        props.setPaginationProps({ currentPage: 1 });
                        setCurrentPageValue(1);
                    }
                }}
            />
            <Pagination.Prev disabled={currentPage === 1} onClick={() => {
                if (currentPage === 1) {
                    return
                }
                else {
                    props.setPaginationProps({ currentPage: currentPage - 1 });
                    setCurrentPageValue(currentPage - 1);
                }
            }}
                style={{ cursor: currentPage === 1 && 'not-allowed' }}
            />
            {
                pages.length !== 0 ?

                    pages.map((pages, i) => {
                        if (totalPages < paginationSize) {
                            if (pages <= paginationSize) {
                                return (
                                    <Pagination.Item active={pages === currentPage && true} onClick={(e) => {
                                        props.setPaginationProps({ currentPage: parseInt(e.target.innerHTML) })
                                        setCurrentPageValue(parseInt(e.target.innerHTML));
                                    }} key={i}>{pages}</Pagination.Item>
                                )
                            }
                        }
                        else {
                            const midpoint = Math.ceil(totalPages / 2);
                            if (pages === 1 || pages === midpoint + 1 || pages === midpoint) {
                                return <Pagination.Item key={pages} active={pages === currentPage && true} onClick={(e) => {
                                    props.setPaginationProps({ currentPage: parseInt(e.target.innerHTML) });
                                    setCurrentPageValue(parseInt(e.target.innerHTML));
                                }}>{pages}</Pagination.Item>
                            }
                            if (pages === 2 || pages === midpoint + 2) {
                                return <Pagination.Ellipsis key={pages}></Pagination.Ellipsis>
                            }
                            if (pages === totalPages) {
                                return <Pagination.Item key={pages} active={pages === currentPage && true} onClick={(e) => {
                                    props.setPaginationProps({ currentPage: parseInt(e.target.innerHTML) });
                                    setCurrentPageValue(parseInt(e.target.innerHTML));
                                }}>{pages}</Pagination.Item>
                            }
                        }
                    }
                    )
                    :
                    <Pagination.Item >Calculating pages...</Pagination.Item>
            }

            <Pagination.Next
                disabled={currentPage === totalPages}
                onClick={() => {
                    setValue()
                    if (currentPage === totalPages) {
                        return
                    }
                    else {
                        props.setPaginationProps({ currentPage: currentPage + 1 });
                        setCurrentPageValue(currentPage + 1);
                    }
                }}
                style={{ cursor: currentPage === totalPages && 'not-allowed' }}
            />
            <Pagination.Last
                disabled={currentPage === totalPages}
                onClick={() => {
                    if (currentPage === totalPages) {
                        return
                    }
                    else {
                        props.setPaginationProps({ currentPage: totalPages })
                        setCurrentPageValue(totalPages);
                    }
                }}
                style={{ cursor: currentPage === totalPages && 'not-allowed' }}
            />
        </Pagination>
    )
}

const mapStateToProps = (store) => {
    return {
        store: store
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeProductViewDispatch: (view) => {
            dispatch(changeProductView(view))
        },
        setPaginationProps: (obj) => {
            dispatch(changePaginationProps(obj))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PaginationComponent);