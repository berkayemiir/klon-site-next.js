import Link from "next/link";
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";

export const Pagination = ({ currentPage, total, perpage }) => {
  const lastPage = Math.ceil(total / perpage);

  return (
    <div className="flex gap-4 mt-8 justify-end">
      {currentPage > 1 && (
        <Link
          href={`?page=${Number(currentPage) - 1}`}
          className="flex items-center tracking-wide transition-all hover:text-[#02b0ae]"
        >
          <HiOutlineChevronLeft />
          Geri
        </Link>
      )}
      {currentPage < lastPage && (
        <Link
          href={`?page=${Number(currentPage) + 1}`}
          className="flex items-center trancking-wide transition-all hover:text-[#02b0ae]"
        >
          İleri
          <HiOutlineChevronRight />
        </Link>
      )}
    </div>
  );
};
