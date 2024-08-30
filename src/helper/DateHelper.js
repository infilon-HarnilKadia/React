export default function DateExp(yrs = '', obj = '') {
    const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const month = ["Jan", "Feb", "March", "April", "May", "June",
        "July", "Aug", "Sep", "Oct", "Nov", "Dec"
    ]
    let date = new Date()
    if (yrs) {
        return date.getFullYear()
    } else if (obj) { return date.getFullYear() }
    else {
        return `${day[date.getDay()]} - ${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()}`
    }
}
