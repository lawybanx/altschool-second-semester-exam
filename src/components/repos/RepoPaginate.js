import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import RepoItem from './RepoItem';

const RepoPaginate = ({ repos }) => {
  const [pageNumber, setPageNumber] = useState(0);

  const reposPerPage = 9;
  const pagesVisited = pageNumber * reposPerPage;

  const displayrepos = repos
    .slice(pagesVisited, pagesVisited + reposPerPage)
    .map(repo => {
      return <RepoItem key={repo.id} repo={repo} />;
    });

  const pageCount = Math.ceil(repos.length / reposPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <div className='container'>
        <div className='repo-wrapper'>
          <div className='repo-row'>{displayrepos}</div>
        </div>
        <div className='pagination-wrapper'>
          <ReactPaginate
            previousLabel={'Previous'}
            nextLabel={'Next'}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName='pagination'
            previousLinkClassName='previousBttn'
            nextLinkClassName='nextBttn'
            disabledClassName='paginationDisabled'
            activeClassName='paginationActive'
          />
        </div>
      </div>
    </>
  );
};

export default RepoPaginate;
