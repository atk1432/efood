import Banner from './Banner';


function Banners() {

    const origin = 'http://localhost:3000/'

    const banners = [
        'banner1.webp',
        'banner2.webp'
    ]


    return (
        <div className="Banners">
            { 
                banners.map((banner, index) => {
                    return <Banner key={index} src={ origin + banner } />
                })
            }
        </div>
    );
}

export default Banners;