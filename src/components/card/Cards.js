import React from 'react'
import imageCard1 from '../../assets/card-find.png'
import imageCard2 from '../../assets/card-find2.png'
import imageCard3 from '../../assets/card-find3.png'

function Cards() {
  return (
    <>
        <div className="card card-border" role="button">
            <img src={imageCard1} className="card-img" alt="imagecard1"/>
            <div className="card-body">
                <h5 className="card-title">The Bund, Shanghai</h5>
                <p className="card-text">{`China's`} most international city.</p>
            </div>
        </div>
        <div className="card card-border" role="button">
            <img src={imageCard2} className="card-img" alt="imagecard2"/>
            <div className="card-body">
                <h5 className="card-title">Sydney Opera House, Sydney</h5>
                <p className="card-text">{`China's`} Take a stroll along the famous harbor.</p>
            </div>
        </div>
        <div className="card card-border" role="button">
            <img src={imageCard3} className="card-img" alt="imagecard3"/>
            <div className="card-body">
                <h5 className="card-title">Kōdaiji Temple, Kyoto</h5>
                <p className="card-text">{`China's`} Step back in time in the Gion district.</p>
            </div>
        </div>
    </>
  )
}

export default Cards