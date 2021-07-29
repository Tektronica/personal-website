import Link from "next/link"

const ButtonBrutal = (props) => {
    const bgColor = {
        default: 'bg-yellow-200',
        'yellow': 'bg-yellow-200',
        'blue': 'bg-blue-200',
        'red': 'bg-red-200',
        'pink': 'bg-pink-200',
        'green': 'background-color: rgb(190, 242, 100)',
        'purple': 'bg-purple-200',
    }

    return (
        <div>
            <Link href={props.path}>
                <a
                    className="hover:text-blue-600 focus:text-blue-600"
                >
                    <div className={`p-2 text-center text-sm ${bgColor[props.color]} border cursor-pointer border-black uppercase box-shadow-black`} >
                        {props.label}
                    </div>

                </a>
            </Link>
        </div>
    )
}

export default ButtonBrutal