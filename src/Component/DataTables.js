import { DataTable } from "simple-datatables";
import { useEffect } from "react";

export default function DataTables({ heading, row }) {
    useEffect(() => {
        const tableElement = document.getElementById("default-table");
        if (tableElement) {
            new DataTable(tableElement, {
                searchable: true,
                perPageSelect: false
            });
        }
    }, []);
    const headings = heading.map((item, index) => {
        return (
            <tr className='bg-white border-b-3' key={index}>
                <th>
                    <span className="flex items-center">
                        {item.name}
                        <svg className="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 15 4 4 4-4m0-6-4-4-4 4" />
                        </svg>
                    </span>
                </th>
            </tr >
        )
    })

    const rows = row.map((item) => {
        return (
            <tr className={`${item.key === "pass" ? "opacity-50" : ""} hover:duration-300 hover:transition-all hover:ease-in-out hover:bg-grid`} key={item.id}>
                {
                    heading.map((itemss, index) => {
                        return <td className='text-trTitle font-semibold pss' key={index}>{itemss.data(item)}</td>
                    })
                }
            </tr >
        )
    })
    return (
        <>
            <table id="default-table">
                <thead>
                    {headings}
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </>
    )
}