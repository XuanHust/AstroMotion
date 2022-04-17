import './home.scss'

const Home = () => {
    return (
        <div className="home-container">
            <div className='home-content'>
                <div className='home-content1'></div>
                <div className='home-content2'></div>
                <div className='home-content-left'>
                    <h2>Welcome to Astro Motion</h2>
                    <p>This HTML template has a motion video background loop which is provided by <strong>Get Free Pictures</strong>. This is one-page responsive layout for your websites. Feel free to use this for a commercial purpose.</p>
                    <p>You are not permitted to redistribute this template on your Free CSS collection websites. Please <strong>contact us</strong> for more information.</p>
                </div>
                <div className='home-content-right'>
                    <p className='home-picture-top'>
                        <img src="images/home-img-1.jpg" alt="home-img-1" />
                    </p>
                    <p className='home-picture-bottom'>
                        <img src="images/home-img-2.jpg" alt="home-img-1" />
                    </p>
                </div>
                <div className='home-content3'></div>
                <div className='home-content4'></div>
            </div>
        </div>
    )
}

export default Home;