import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'

interface ProjectsPaginationProps {
  currentPage: number
  totalPages: number
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}

function ProjectsPagination({
  currentPage,
  totalPages,
  setCurrentPage,
}: ProjectsPaginationProps) {
  return (
    <div className="pagination">
      <div className="flex items-stretch gap-2 mt-2 justify-center">
        {/* Previous */}
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 rounded-lg disabled:opacity-40"
        >
          <MdArrowBackIos className="fill-gray-900 dark:fill-white" />
        </button>

        {/* Page numbers */}
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-3 py-1 rounded-lg ${
              page === currentPage
                ? 'bg-gray-100  text-stone-900'
                : 'bg-stone-900 text-gray-100'
            }`}
          >
            {page}
          </button>
        ))}

        {/* Next */}
        <button
          onClick={() =>
            setCurrentPage((page) => Math.min(page + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="px-3 py-1 rounded-lg disabled:opacity-40 text-black"
        >
          <MdArrowForwardIos className="fill-gray-900 dark:fill-white" />
        </button>
      </div>
    </div>
  )
}

export default ProjectsPagination
