import Link from "next/link"

const SlimCard = (props) => {
    const bgColor = {
        default: 'bg-yellow-200',
        'yellow': 'bg-yellow-200',
        'blue': 'bg-blue-200',
        'red': 'bg-red-200',
        'pink': 'bg-pink-200',
        'green': 'bg-green-200',
        'purple': 'bg-purple-200',
    }

    return (
        <>
            {/* <a
                href={ props.path }
                className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
            >
                <h3 className="text-2xl font-bold">{ props.label } &rarr;</h3>
                <p className="mt-4 text-xl">
                    { props.description }
                </p>
            </a> */}
            <Link href={props.path}>
                <a
                    className="text-left w-full hover:text-blue-600 focus:text-blue-600"
                >
                    <div className="flex pl-2 border cursor-pointer border-black bg-white box-shadow-black">
                        <div className={`flex-none w-4 mr-2 ${bgColor[props.color]}`}></div>
                        <div className="flex-grow ">
                            <h3 className="uppercase text-xl font-bold">{props.label} </h3>
                            <p className="mt-1 text-lg">
                                {props.description}
                            </p>
                        </div>
                    </div>
                </a>
            </Link>

        </>
    )
}

export default SlimCard