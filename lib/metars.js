export default function MetarsStrip({ MetarsData }) {
    // KSEA 260153Z 01009KT 10SM FEW030 27/12 A2999 RMK AO2 SLP160 T02720122

    return (
            <div className="w-full text-right bg-black">
                <div className="truncate text-xs sm:text-sm ml-3 mr-3 text-right text-white">
                    <code>{ MetarsData }</code>
                </div>
            </div>
    )
}

export async function getMETARS() {
    // Call an external API endpoint to get METAR.
    const url = 'https://aviationweather.gov/adds/dataserver_current/httpparam?dataSource=metars&requestType=retrieve&format=xml&hoursBeforeNow=3&mostRecent=true&stationString=PHNL%20KSEA'
    const xml_response = await fetch(url)
    const xmlText = await xml_response.text()
    var metarsData = xmlText.substring(
        xmlText.lastIndexOf("<raw_text>") + 10, 
        xmlText.lastIndexOf("</raw_text>"))

    // const metars_data = await data.text()

    return {
        metarsData
    }
}

