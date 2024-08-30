import { memo } from "react"

function Modal({ open, close, selectedItem }) {
    function handleClose() {
        close(!open)
    }
    return (
        <div className={`overflow-y-auto duration-500 overflow-x-hidden fixed z-120 justify-center items-center ${!open ? "hide" : "show flex"}`}>
            <div className={`relative p-4 max-h-full wWidth`}>
                <div className="relative bg-white shadow dark:bg-gray-700">
                    <div className="flex items-center justify-between p-4 md:p-5 rounded-t dark:border-gray-600">
                        <p className="text-ititle leading-relaxed text-gray1">
                            <span className="font-semibold">Leave Request</span> {selectedItem[0]?.['status']}
                        </p>
                        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={handleClose} data-modal-hide="default-modal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only" >Close modal</span>
                        </button>
                    </div>
                    <div className="p-4 md:p-5 space-y-4">

                        <p className="text-ititle leading-relaxed text-gray1">
                            <span className="font-semibold">Leave Added Date : </span>{selectedItem[0]?.['date']}
                        </p>
                        <p className="text-ititle leading-relaxed text-gray1">
                            <span className="font-semibold">Leave Date : </span>{selectedItem[0]?.['date']}
                        </p>
                        <p className="text-ititle leading-relaxed text-gray1">
                            <span className="font-semibold">Leave Type : </span>{selectedItem[0]?.['type']}
                        </p>
                        <p className="text-ititle leading-relaxed text-gray1">
                            <span className="font-semibold">Reason : </span> -
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default memo(Modal)