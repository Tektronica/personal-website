import Head from 'next/head'
import Layout from '../components/templates/Layout'
import ButtonBrutal from '../components/Button/ButtonBrutal'

export default function FiveOhFive() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Head>
                <title>505</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1 className="pb-2">505 - Internal Server Error </h1>

            <ButtonBrutal l
                label="Return to home"
                color={"red"}
                path='/'
            />
        </div>
    )
}

FiveOhFive.layout = Layout