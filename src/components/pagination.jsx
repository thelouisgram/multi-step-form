import data from './paginationData'

const Pagination = ({ currentStep }) => {

    const activePagination = 'border-lightBlue text-marineBlue bg-lightBlue'

    // Render Pagination
    const page = data.map((page, index) => {
        return (
            <div key={index} className='flex gap-3 items-center'>
                <div className={`border-[1px] w-[32px] h-[32px] rounded-full
                  flex justify-center items-center font-Ubuntu 
                 text-[14px]  font-[700] ${currentStep === index ? activePagination : 
                 'border-white text-white'}`}>
                    {page.id}
                </div>
                <div>
                    <p className='font-Ubuntu text-[13px] text-lightGray'>{page.step}</p>
                    <h3 className='font-Ubuntu text-[13px] tracking-[0.15em] text-white font-[700]'>
                        {page.content}
                    </h3>
                </div>
            </div>
        )
    })
    return (
        <>
            <div className='flex flex-col gap-6'>
                {/* Display Pagination */}
                {page}
            </div>
        </>
    )
}

export default Pagination
