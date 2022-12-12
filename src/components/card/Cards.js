import React from 'react'
import imageCard1 from '../../assets/card-find.png'

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
            <img src={imageCard1} className="card-img" alt="imagecard1"/>
            <div className="card-body">
                <h5 className="card-title">The Bund, Shanghai</h5>
                <p className="card-text">{`China's`} most international city.</p>
            </div>
        </div>
        <div className="card card-border" role="button">
            <img src={imageCard1} className="card-img" alt="imagecard1"/>
            <div className="card-body">
                <h5 className="card-title">The Bund, Shanghai</h5>
                <p className="card-text">{`China's`} most international city.</p>
            </div>
        </div>
    </>
  )
}

export default Cards