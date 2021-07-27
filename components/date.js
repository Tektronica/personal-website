import { parseISO, format } from 'date-fns'

export default function Date({ dateString }) {
    // format date string
    const date = parseISO(dateString)
    return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}

