import React, { useEffect } from 'react'
import { Editor } from 'tinymce'
import Card from './Card'
export default function Home() {
    return (
        <>
            <form className="flex flex-col relative">
                <div className='shadow-4xl grid basis-full mt-1 sticky top-16 bg-white z-50'>
                    <h5 className='text-xl font-medium text-gray1 py-2 px-5'>Welcome, <span className='text-rhino'>Harnil Kadia!</span></h5>
                </div>
                <br />
                <div className='grid shadow-5xl'>
                    <div className='rounded'>
                        <p className='text-gray1 py-4 px-5 bg-grid border-l-3 text-title font-semibold border-rhino relative t-bg'>Timer</p>
                    </div>
                    <div className='bg-white py-8 px-6'>
                        <div className='pb-4'>
                            <label htmlFor="countries" className="block mb-2 text-gray1 text-ititle font-bold">Project<i className='text-red-700'>*</i></label>
                            <select id="countries" className="block p-2.5 w-full text-title text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500">
                                <option>Choose a Project</option>
                                <option defaultValue="gpcb">GPCB</option>
                                <option defaultValue="fitz">Ftizpatrick</option>
                                <option defaultValue="see">SEE Linkage</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="message" className="block mb-2 text-ititle font-bold text-gray1">Please describe the task in detail with Statistics <i className='text-red-700'>*</i></label>
                            <textarea id="mytextarea" rows="4" className="block p-2.5 w-full text-title text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                        </div>
                        <button className="bg-rhino mt-3 text-white py-2 px-5 rounded text-base1 duration-300 hover:bg-gray1">
                            Start Timer
                        </button>
                    </div>
                </div>
                <div className='grid shadow-5xl my-8'>
                    <div className='rounded'>
                        <p className='text-gray1 py-4 px-5 bg-grid border-l-3 text-title border-rhino relative font-semibold t-bg'>Today's Work</p>
                    </div>
                    <div className='bg-white grid lg:grid-cols-4 lg:gap-4 sm:grid-cols-2 sm:gap-2 py-8 px-6'>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
            </form>
        </>
    )
}
