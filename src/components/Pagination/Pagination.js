import { StyledPaginate } from "./PaginationStyled";
import { useDispatch } from "react-redux";
import { setPageNum } from "../../redux/slices/heroesSlice";

function Pagination() {
  const dispatch = useDispatch();

  const handlePageClick = (e) => {
    console.log(e.selected);
    dispatch(setPageNum(e.selected + 1));
  };
  return (
    <StyledPaginate
      breakLabel="..."
      nextLabel=" >"
      onPageChange={handlePageClick}
      pageRangeDisplayed={4}
      pageCount={3}
      previousLabel="< "
      renderOnZeroPageCount={null}
    />
  );
}

export default Pagination;
