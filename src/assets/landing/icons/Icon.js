import React from 'react';

import SnapChat from './snapchat';
import Instagram from './instgram';
import Youtube from './youtube';
import Twitter from './twitter';
import Facebook from './facebook';
import Pinterest from './pinterest';
const Icon = props => {
    switch (props.name) {
        case "snapchat": 
        return <SnapChat {...props} />;
        case "instagram":
            return <Instagram {...props} />;
        case "youtube": 
            return <Youtube {...props} />;
        case "twitter":
            return <Twitter {...props} />;
        case "facebook":
            return <Facebook {...props} />;
        case "pinterest":
            return <Pinterest {...props} />;
        default:
            return;
    }
}

export default Icon;