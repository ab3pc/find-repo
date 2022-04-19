import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, setCurrentPage } from "../../store/usersSlice";
import PaginationButton from "./PaginationButton";

const Pagination = ({ input }) => {
  const total_count = useSelector((state) => state.usersSlice.total_count);
  const currentPage = useSelector((state) => state.usersSlice.currentPage);

  const maxPages = Math.floor(total_count / 12) > 83 ? 83: Math.floor(total_count / 12);
  const dispatch = useDispatch();

  const handleToStart = () => {
    dispatch(setCurrentPage(1));
    dispatch(fetchUsers({ inputValue: input, currentPages: 1 }));
  };

  const handleNext = (currentPag) => {
    console.log(input, currentPag);
    dispatch(setCurrentPage(currentPag));
    dispatch(fetchUsers({ inputValue: input, currentPages: currentPag }));
  };
  const handlePrev = (currentPag) => {
    console.log(input, currentPag);
    dispatch(setCurrentPage(currentPag));
    dispatch(fetchUsers({ inputValue: input, currentPages: currentPag }));
  };
  const handleToEnd = () => {
    dispatch(setCurrentPage(maxPages));
    dispatch(fetchUsers({ inputValue: input, currentPages: maxPages }));
  };

  return (
    <div className="pagination">
      <PaginationButton
        disabled={currentPage === 1}
        id="to_start"
        text="<<"
        onClick={() => handleToStart()}
      />
      <PaginationButton
        disabled={currentPage === 1}
        id="prev"
        text="<"
        onClick={() => handlePrev(currentPage - 1)}
      />
      <PaginationButton id="current" text={currentPage} />
      <PaginationButton
        disabled={currentPage === maxPages}
        id="next"
        text=">"
        onClick={() => handleNext(currentPage + 1)}
      />

      <PaginationButton
        disabled={currentPage === maxPages}
        id="to_end"
        text=">>"
        onClick={() => handleToEnd()}
      />
    </div>
  );
};

export default Pagination;
