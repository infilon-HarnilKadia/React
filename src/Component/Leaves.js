import React, { useCallback, useState } from 'react'
import DataTables from './DataTables'
import Icon from '@mdi/react';
import { mdiEye, mdiDelete, mdiPlus } from '@mdi/js';
import date from '../helper/DateHelper'
import Modal from './Modal';
import FormModal from './FormModal';

export default function Leaves() {
  const [show, setShow] = useState(false)
  const [show1, setShow1] = useState(false)
  const [sdata, setsData] = useState([
    {
      id: '',
      date: "",
      type: "",
      status: "",
    },
  ])
  const head = [
    {
      name: "#",
      data: (item) => item.id
    },
    {
      name: "Leaves Date",
      data: (item) => item.date
    },
    {
      name: "Leaves Type",
      data: (item) => item.type
    },
    {
      name: "Status",
      data: (item) => item.status
    },
    {
      name: "View",
      data: (item) => item.view
    }, {
      name: "Delete",
      data: (item) => item.delete
    }
  ]
  let count = 0
  const handleShow = useCallback((id) => {
    setShow(!show)
    const sdata = data.filter((item) => {
      return item.id === id
    })
    const statuss1 = sdata.map((item) => {
      if (item.status === 1) {
        return { ...item, status: <span className="inline-flex items-center rounded-md bg-yellow-300 px-2 py-1 text-xs font-semibold text-yellow-800 ring-1 ring-inset ring-yellow-600/20">Pending</span> }
      } else {
        count += 1
        return { ...item, status: <span className="inline-flex items-center rounded-md bg-green-300 px-2 py-1 text-xs font-semibold text-green-700 ring-1 ring-inset ring-green-600/20">Approve</span> }
      }
    })
    setsData(statuss1)
  }, [show])


  const handleShow1 = useCallback(() => {
    setShow1(!show1)
  }, [show1])

  const data = [
    {
      id: 1,
      date: "03-07-2024",
      type: "Full Leaves",
      status: 1,
      view: <a href='#' onClick={() => handleShow(1)}><Icon path={mdiEye} className='text-rhino' size={1} /></a>,
      delete: <a href='#'><Icon path={mdiDelete} className='text-rhino' size={1} /></a>
    },
    {
      id: 2,
      date: "02-07-2024",
      type: "Full Leaves",
      status: 1,
      view: <a href='#' onClick={() => handleShow(2)}><Icon path={mdiEye} className='text-rhino' size={1} /></a>,
      delete: <a href='#'><Icon path={mdiDelete} className='text-rhino' size={1} /></a>
    },
    {
      id: 3,
      date: "01-07-2024",
      type: "Full Leaves",
      status: 1,
      view: <a href='#' onClick={() => handleShow(3)}><Icon path={mdiEye} className='text-rhino' size={1} /></a>,
      delete: <a href='#'><Icon path={mdiDelete} className='text-rhino' size={1} /></a>
    },
    {
      id: 4,
      date: "10-05-2024",
      type: "Full Leaves",
      status: 2,
      view: <a href='#' onClick={() => handleShow(4)}><Icon path={mdiEye} className='text-rhino' size={1} /></a>,
      delete: <a href='#'><Icon path={mdiDelete} className='text-rhino' size={1} /></a>
    },
  ]

  const statuss = data.map((item) => {
    if (item.status === 1) {
      return { ...item, status: <span className="inline-flex items-center rounded-md bg-yellow-300 px-2 py-1 text-xs font-semibold text-yellow-800 ring-1 ring-inset ring-yellow-600/20">Pending</span> }
    } else {
      count += 1
      return { ...item, status: <span className="inline-flex items-center rounded-md bg-green-300 px-2 py-1 text-xs font-semibold text-green-700 ring-1 ring-inset ring-green-600/20">Approve</span> }
    }
  })
  return (
    <>
      <div className='grid shadow-5xl'>

        <div className='rounded'>
          <p className='text-gray1 py-4 px-5 bg-grid border-l-3 text-title font-semibold border-rhino relative t-bg'>Leaves
            <span className='float-right mr-14'>Total Leaves : <em>{count}</em> {`(${date('', 1)})`} </span>
          </p>
        </div>
        <div className='bg-white py-5'>
          {/* <div> */}
          <button onClick={handleShow1} className="bg-rhino mx-8 my-2 btn-icon text-white py-2 px-3 flex rounded text-base1 duration-300 hover:bg-gray1">
            <Icon path={mdiPlus} className='text-rhino' size={1} /><span className='pl-3 spd'>Add</span>
          </button>
          <DataTables heading={head} row={statuss} />
          <Modal open={show} close={handleShow} selectedItem={sdata} />
          <FormModal open={show1} close={handleShow1} />
          {/* </div> */}
        </div>
      </div>
    </>
  )
}
