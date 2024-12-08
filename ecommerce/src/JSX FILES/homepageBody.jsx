import PatekBest from '../image/patekBest.png';

function HomepageBody() {
    return(
        <div className="homepageBody-container">
            <div className="leftHomepageBody">
                <div className='watchLimit'>
                    <button className='limitedTo'>Limited to 50 pieces</button>
                </div>
                <div className='watchName'>
                    <p className='refNum'>5066A-001</p>
                    <p className='brandName'>PATEK PHILIPPE AQUANAUT</p>
                </div>
                <div className='watchPrices'>
                    <p className='watchPrice'>$40,578</p>
                    <button className='buyButton'>BUY NOW</button>
                </div>
            </div>
            <div className="middleHomepageBody">
                <img src={PatekBest} alt="Patek Best Seller" className='patekBest' />
            </div>
            <div className="rightHomepageBody">
                <div className="watchStatus">
                    <p className='status'>AVAILABLE</p>
                </div>
            </div>
        </div>
    )
}

export default HomepageBody;