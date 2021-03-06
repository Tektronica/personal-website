import Link from "next/link"
import { motion } from 'framer-motion';

function getColor(type) {
    if (type == 'tech') {
        return 'pink'
    } else if (type == 'travel') {
        return 'blue'
    } else if (type == 'tutorial') {
        return 'yellow'
    } else {
        return 'yellow'
    }
}

const SlimCard = (props) => {
    const bgColor = {
        default: 'bg-yellow-300',
        'yellow': 'bg-yellow-300',
        'blue': 'bg-blue-300',
        'red': 'bg-red-300',
        'pink': 'bg-pink-300',
        'green': 'bg-green-300',
        'purple': 'bg-purple-300',
    }

    const color = getColor(props.type)

    return (
        <>
            <Link href={props.path}>
                <a
                    className="text-left w-full hover:text-blue-600 focus:text-blue-600"
                >
                    <motion.div className="card" whileHover={{
                        position: 'relative',
                        zIndex: 1,
                        background: 'white',
                        scale: [1, 1.1, 1],
                        rotate: [0, 1, -1, 0],
                        transition: { duration: .2 }
                    }}>
                        <div className="flex pl-2 border cursor-pointer border-black bg-white box-shadow-black">
                        
                            <div className={`flex-none w-4 mr-2 ${bgColor[color]}`}></div>
                            <div className="flex-grow ">
                                <h3 className="uppercase text-md md:text-lg font-bold">
                                    {props.label}
                                </h3>
                                <p className="mt-1 text-sm md:text-md">
                                    {props.description}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </a>
            </Link>


        </>
    )
}

export default SlimCard