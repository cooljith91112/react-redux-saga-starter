import React from 'react';
import _ from 'lodash';

const Paginator = (props) => {

    let {totalRecords=0, currentPage=1, pageSize=15} = props;
    let pages = [1];
    let previousItemStyle = totalRecords<pageSize ? 'page-item disabled' : 'page-item';
    let nextItemStyle = totalRecords<pageSize ? 'page-item disabled' : 'page-item';

    if(totalRecords>pageSize){
        pages = _.times(parseInt(totalRecords/pageSize,10));
    }

    const onPrevious = ()=>{
        props.previousPage();
    }

    const onNext = ()=>{
        props.nextPage();
    }

    const onPageClick = (pageNum)=>{
        props.goToNextPage(pageNum)
    }


    return (
        <nav>
            <ul className="pagination">
                <li className={previousItemStyle}>
                    <a className="page-link" href="javascript:void(0)" onClick={onPrevious}>Previous</a>
                </li>

                {pages.map(_page=>{
                    return(
                        <li key={_page} className={_page==currentPage ? "page-item active" : "page-item"}>
                            <a className="page-link" href="javascript:void(0)" onClick={onPageClick.bind(this, _page)}>{_page}</a>
                        </li>
                    )
                })}
                <li className={nextItemStyle}>
                    <a className="page-link" href="#" onClick={onNext}>Next</a>
                </li>
            </ul>
        </nav>
    )
}

export default Paginator;