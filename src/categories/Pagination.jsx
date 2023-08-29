function Pagination(props) {
    let pages = [];
    for (let i = 1; i <= Math.ceil(props.totalPosts / props.postsPerPage); i++) {
        pages.push(i);
    }
    return (
        <div className='flex flex-wrap justify-center mt-4'>
            {pages.map((page, index) => {
                return (
                    <button
                        key={index}
                        onClick={() => props.setCurrentPage(page)}
                        className={page === props.currentPage ? "font-extrabold bg-backpag  text-pagcolor border-pagcolor w-10" : "font-semibold text-sm mr-2 rounded-lg cursor-pointer border-black bg-transparent"}>
                        {page}
                    </button>
                );
            })}
        </div>
    );
}
export default Pagination