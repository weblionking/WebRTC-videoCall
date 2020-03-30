import React, { useState } from 'react';
import PropTypes from 'prop-types';

function MainWindow({ startCall, clientId }) {
  const [friendID, setFriendID] = useState(null);

  const callWithVideo = (video) => {
    const config = { audio: true, video };
    return () => friendID && startCall(true, friendID, config);
  };

  return (
    <div className="container main-window">
      <div>
        My ID: {clientId}
      </div>
      <div>
        Friend ID:
        <input
          type="text"
          className="txt-clientId"
          spellCheck={false}
          placeholder="Your friend ID"
          onChange={(event) => setFriendID(event.target.value)}
        />
      </div>
      <div>
        <button
          type="button"
          className="btn-action fa fa-video-camera"
          onClick={callWithVideo(true)}
        />
        <button
          type="button"
          className="btn-action fa fa-phone"
          onClick={callWithVideo(false)}
        />
      </div>
    </div>
  );
}

MainWindow.propTypes = {
  clientId: PropTypes.string.isRequired,
  startCall: PropTypes.func.isRequired
};

export default MainWindow;
