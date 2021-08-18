import Head from 'next/head'
import Layout from '../components/templates/Layout'
import ButtonBrutal from '../components/Button/ButtonBrutal'

export default function FiveOhOh() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Head>
                <title>500</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1 className="pb-2">500 - Server-side error occurred </h1>

            <ButtonBrutal l
                label="Return to home"
                color={"red"}
                path='/'
            />
        </div>
    )
}

FiveOhOh.layout = Layout