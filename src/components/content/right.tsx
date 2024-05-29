import PaginationButton from "../pagination-btn";

const RightContent = () => {
  return (
    <div className="lg:col-span-7">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xl text-[#0e1a44]">Post Engagement</span>
        <div className="flex items-center justify-end gap-2">
          <div>
            <input
              placeholder="Search..."
              className="px-3 border border-solid border-black rounded-lg h-[30px] outline-none"
            />
          </div>
          <button className="rounded-lg text-sm focus:active:scale-95 transition-all duration-150 ease-in-out hover:bg-[#0e1a44] hover:text-white h-[30px] px-3 border border-solid border-black font-bold">
            Bulk Actions
          </button>
        </div>
      </div>

      <div className="overflow-y-hidden overflow-x-scroll">
        <div className="bg-white rounded-2xl w-full">Hello</div>
      </div>

      <div className="flex justify-center items-center py-3.5 gap-4">
        <PaginationButton>
          &lt;&lt;
        </PaginationButton>
        <PaginationButton>
          &lt;
        </PaginationButton>
        <PaginationButton>
          &gt;&gt;
        </PaginationButton>
        <PaginationButton>
          &gt;
        </PaginationButton>
        <span>Page 1 of 2</span>
        <span>
          . Go to page:&nbsp;
          <input
            type="number"
            className="w-16 p-1 border border-solid border-gray-300 outline-none focus:outline-1 focus:outline-gray-300 focus:outline-offset-0 rounded-lg"
          />
        </span>
      </div>
    </div>
  );
};

export default RightContent;
