import React from 'react';
import track1 from './file.mp3'

const Audio = React.forwardRef((props, ref) => {
    return (
        <audio src={track1} ref={ref} />
    )
});

// const Audio = (props, ref) => {
//     return (
//         <audio src={track1} ref={ref} />
//     )
// };

// export default React.forwardRef(Audio)

export default Audio;