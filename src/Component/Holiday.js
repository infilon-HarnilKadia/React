import DataTables from "./DataTables"

function Holiday() {
    const heads = [
        {
            name: "Date",
            data: (item) => item.date
        },
        {
            name: "Name",
            data: (item) => item.name
        }
    ]
    const data = [
        {
            id: 1,
            date: "2024-03-25",
            name: "Holi"
        },
        {
            id: 2,
            date: "2024-08-15",
            name: "Independence Day"
        },
        {
            id: 3,
            date: "2024-08-19",
            name: "Raxabandhan"
        },
        {
            id: 4,
            date: "2024-08-26",
            name: "Janmashtami"
        },
        {
            id: 5,
            date: "2024-10-12",
            name: "Dussehra"
        },
        {
            id: 6,
            date: "2024-10-31",
            name: "Diwali"
        },
        {
            id: 7,
            date: "2024-11-02",
            name: "New Year (Gujarati)"
        },
        {
            id: 8,
            date: "2024-11-03",
            name: "Bhai duj"
        },
        {
            id: 9,
            date: "2024-12-25",
            name: "Christmas"
        },
    ]
    let cur = new Date().getTime()
    let match = data.map((item) => {
        return cur > new Date(item.date) ? { ...item, key: "pass" } : { ...item, key: "comming" }
    })
    return (
        <>
            <div className='grid shadow-5xl'>
                <div className='rounded'>
                    <p className='text-gray1 py-4 px-5 bg-grid border-l-3 text-title font-semibold border-rhino relative t-bg'>Holiday</p>
                </div>
                <div className='bg-white py-8'>
                    <div>
                        <DataTables heading={heads} row={match} />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Holiday