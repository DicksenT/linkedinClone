import React from 'react';
import InfoIcon from '@mui/icons-material/Info';
import './Widget.css'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
const Widget = () => {
    const newsArticle = (heading, subtitle) =>(
        <div className="widget__article">
        <div className="widget__articleLeft">
        <FiberManualRecordIcon/>
        </div>
        <div className="widget__articleRight">
            <h4>{heading}</h4>
            <p>{subtitle}</p>
        </div>
        </div>
    )
    return (
        <>
        <hr className='horiz'/>
        <div className='widget'>
            <div className="widget__header">
                <h2>LinkedIn News</h2>
                <InfoIcon/>
            </div>
            {newsArticle("It's finally finished!", "Top news - 1255 readers")}
            {newsArticle("How To Logout??", "Just Click Avatar / LinkedIn Logo On Header")}
            
        </div>
        </>
    );
}

export default Widget;
