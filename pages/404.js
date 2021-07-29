import Head from 'next/head'
import Layout from '../components/templates/Layout'
import ButtonBrutal from '../components/Button/ButtonBrutal'

export default function FourOhFour() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Head>
                <title>404</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1 className="pb-2">404 - Page Not Found</h1>

            <ButtonBrutal l
                label="Return to home"
                color={"yellow"}
                path='/'
            />
        </div>
    )
}

FourOhFour.layout = Layout