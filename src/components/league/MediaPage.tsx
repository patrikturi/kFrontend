import React from 'react';

export const MediaPage = () => {

  return (<>
        <div className="col-md-3"></div>
        <div className="col-md-6">
        <h2 className="mb-4">Mini League Media</h2>
          <div>
            {/* TODO: shrink size after breakpoint */}
            <iframe src="https://www.youtube.com/embed/O1_8GpHYky4" style={{width: 560, height: 315}} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div>
            <iframe src="https://www.youtube.com/embed/fEemNFGdikM" style={{width: 560, height: 315}} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div>
            <iframe src="https://www.youtube.com/embed/DU9eo7TmvxA" style={{width: 560, height: 315}} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
  </>);
};
