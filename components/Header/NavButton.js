import Link from 'next/link'

const NavButton = (props) => {
    return (
        <div className='hover:bg-pink-200'>
            <Link href={props.path}>
                <button className="p-2 ml-8 font-medium text-gray-900 ">
                    {props.label}
                </button>
            </Link>
        </div>
    )
}

export default NavButton