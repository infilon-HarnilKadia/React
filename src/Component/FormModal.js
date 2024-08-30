import { memo } from "react"

function FormModal({ open, close }) {
    function handleClose() {
        close(!open)
    }
    return (
        <div className={`overflow-y-auto duration-700 ease-in-out transition-opacity  w-full md:inset-0 h-screen  overflow-x-hidden fixed z-120 justify-center items-center ${!open ? "flex opacity-0 invisible" : " flex bg-slate-500 bg-opacity-50 opacity-100 visible"}`}>
            <div className={`relative p-4 w-full max-w-md max-h-full`}>
                <div className="relative bg-white shadow dark:bg-gray-700">
                    <div className="flex items-center justify-between p-4 md:p-5 rounded-t dark:border-gray-600">
                        <p className="text-ititle leading-relaxed text-gray1">
                            <span className="font-semibold">Add New Leave Request</span>
                        </p>
                        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={handleClose} data-modal-hide="default-modal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only" >Close modal</span>
                        </button>
                    </div>
                    <form className="p-4 md:p-5" onSubmit={(e) => { console.log(e.target, 'lk') }}>
                        <div className="grid gap-4 mb-4 grid-cols-1">
                            <div className="col-span-2">
                                <label htmlFor="leave_from" className="block mb-2 text-gray1 text-ititle font-bold">Leave From<i className='text-red-700'>*</i></label>
                                <input type="date" name="leave_from" id="leave_from" className="block p-2.5 w-full text-title text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Select Leave Date" required />
                            </div>
                            <div className="col-span-2">
                                <label htmlFor="leave_to" className="block mb-2 text-gray1 text-ititle font-bold">Leave To<i className='text-red-700'>*</i></label>
                                <input type="date" name="leave_to" id="leave_to" className="block p-2.5 w-full text-title text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Select Leave Date" required />
                            </div>

                            <div className="col-span-2">
                                <label htmlFor="leave_type" className="block mb-2 text-gray1 text-ititle font-bold">Leave Type</label>
                                <select id="leave_type" name="leave_type" className="block p-2.5 w-full text-title text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" required>
                                    <option defaultValue="fl">Full Leave</option>
                                    <option defaultValue="hl">Half Leave</option>
                                    <option defaultValue="p">Parial</option>
                                </select>
                            </div>

                            <div className="col-span-2">
                                <label htmlFor="reason" className="block mb-2 text-ititle font-bold text-gray1">Reason<i className='text-red-700'>*</i></label>
                                <textarea id="reason" rows="4" required className="block p-2.5 w-full text-title text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" name="reason" placeholder="Write your thoughts here..."></textarea>
                            </div>
                        </div>
                        <button type="submit" className="btn-bg mt-3 text-white py-2 px-5 rounded text-base1">
                            Submit
                        </button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default memo(FormModal)