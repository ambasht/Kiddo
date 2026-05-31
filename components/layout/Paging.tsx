import { useState,useEffect } from "react";

type PaginationProps<T> = {
  items: T[];
  itemsPerPage?: number;
  renderItem: (item: T) => React.ReactNode;
};

export default function Paging<T>({
  items,
  itemsPerPage = 3,
  renderItem,
}: PaginationProps<T>) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(
    items.length / itemsPerPage
  );

  const startIndex =
    (currentPage - 1) * itemsPerPage;

  const currentItems = items.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <>
    <section className="px-5 py-10">
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {currentItems.map(renderItem)}
      </div>

      {/* Pagination Buttons */}
            <div className="flex justify-center items-center gap-2 mt-12">

              <button
                  onClick={() =>
                      setCurrentPage((p) =>
                          Math.max(p - 1, 1)
                      )
                  }
                  disabled={currentPage === 1}
                  className="px-4 py-2 rounded-xl border"
              >
                  Previous
              </button>

              {Array.from(
                  { length: totalPages },
                  (_, i) => i + 1
              ).map((page) => (
                  <button
                      key={page}
                      onClick={() =>
                          setCurrentPage(page)
                      }
                      className={`px-4 py-2 rounded-xl ${currentPage === page
                          ? "bg-gradient-to-r from-orange-400 to-pink-400 text-white"
                          : "border"
                          }`}
                  >
                      {page}
                  </button>
              ))}

              <button
                  onClick={() =>
                      setCurrentPage((p) =>
                          Math.min(p + 1, totalPages)
                      )
                  }
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 rounded-xl border"
              >
                  Next
              </button>

          </div>
        </section>
    </>
  );
}