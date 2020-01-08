import React from 'react';

import SnapChat from './snapchat';

const Icon = props => {
    switch (props.name) {
        case "snapchat": 
        return <SnapChat {...props} />
        default:
            return;
    }
}

export default Icon;