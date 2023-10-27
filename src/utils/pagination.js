const paginationLogic = (currentPage, residents) => {
  
    if (residents.length === 0) {
    return {
      pages: [1],
      residentsInPage: [],
    };
  }

  const RESIDENTS_PER_PAGE = 10;

  const totalPages = Math.ceil(residents.length / RESIDENTS_PER_PAGE);

  const sliceEnd = RESIDENTS_PER_PAGE * currentPage;
  const sliceSTart = sliceEnd - RESIDENTS_PER_PAGE;
  const residentsInPage = residents.slice(sliceSTart, sliceEnd);

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return {
    residentsInPage,
    pages,
  };
};

export { paginationLogic };
