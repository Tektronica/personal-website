import Head from 'next/head'
import Layout from '../components/templates/Layout'
import Image from 'next/image'
import Link from 'next/link'

export default function GalleryPage({ albums }) {

	return (
		<div className="flex flex-col py-2">
			<Head>
				<title>Gallery</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="overflow-hidden md:overflow-none">
				<div className='px-2 md:px-0'>
					<div className=''>
						<div>
							<h1 className="text-2xl md:text-6xl font-bold border-b ">
								Gallery.
							</h1>
							<p className="text-pink-600 font-bold md:text-2xl ">

								Our honeymoon and elopement photos are just a click away!
							</p>
						</div>

						<div className='flex flex-col bg-white h-screen items-center'>

							<div className='pt-4 flex flex-row justify-center sm:justify-start'>
								<Link href={`/album/honeymoon`}>
									<a>
										{/* opacity-0 group-hover:opacity-100 duration-300  */}
										<div className="relative transition duration-500 group ease-in-out transform hover:-translate-y-1 hover:scale-110 hover-trigger hover:z-50 ">
											<div className="-rotate-12 opacity-0 group-hover:opacity-100 duration-300 absolute left-0 mt-10 md:mt-16 right-0 z-10 flex justify-center items-end">
												<Image src={`${process.env.BACKBLAZE_URL}iceland/buttons/honeymoon_text_dim_522x140.png`}
												alt='honeymoon-tag'
												width={522} height={140} />
											</div>
											<div className="relative h-[50px]">
												<Image
													src={`${process.env.BACKBLAZE_URL}iceland/buttons/VACATION_button.png`}
													alt='Honeymoon'
													width={616} height={1080}
												/>
											</div>
										</div>
									</a>
								</Link>
								<Link href={`/album/elopement`}>
									<a>
										<div className="relative transition duration-500 group ease-in-out transform hover:-translate-y-1 hover:scale-110 hover-trigger hover:z-50">
											<div className="-rotate-12 opacity-0 group-hover:opacity-100 duration-300 absolute left-0 mt-10 md:mt-16 right-0 z-10 flex justify-center items-end">
												<Image src={`${process.env.BACKBLAZE_URL}iceland/buttons/elopement_text_dim_585x169.png`}
												alt='elopement-tag'
												width={585} height={169} />
											</div>
											<div className="relative h-[50px]">
												<Image src={`${process.env.BACKBLAZE_URL}iceland/buttons/ELOPEMENT_button.png`}
													alt='Elopement'
													width={606} height={1080}
												/>
											</div>
										</div>
									</a>
								</Link>
							</div>

						</div>
					</div>
				</div>
			</main>
		</div>
	)
}



GalleryPage.getLayout = function getLayout(page) {
	return (
		<Layout>
			{page}
		</Layout>
	)
}
