const choiseFragmentForColors = (fragment) => {
    switch (fragment) {
        case 'hat':
            return 'hat_color';
            break;
        case 'head': 
            return 'head_color';
            break;
        case 'arm_right': 
            return 'arm_right_color';
            break;
        case 'arm_left':
            return 'arm_left_color';
            break;
        case 'shoulder_left':
            return 'shoulder_left_color';
            break;
        case 'shoulder_right':
            return 'shoulder_right_color';
            break;
        case 'forearm_left':
            return 'forearm_left_color'

        case 'forearm_right':
            return 'forearm_right_color';
            break;
        case 'body':
            return 'body_color';
            break;
        case 'thorax':
            return 'thorax_color';
            break;
        case 'abdomen':
            return 'abdomen_color';
            break;
        case 'pelvis_l1':
            return 'pelvis_l1_color';
            break;
        case 'pelvis_l2':
            return 'pelvis_l2_color';
            break;
        case 'leg1':
            return 'leg1_color'
            break;
        case 'leg2':
            return 'leg2_color'
            break;
        case 'leg3':
            return 'leg3_color'
            break;
        default:
            console.log("и тут руки не из того места:( печаль")
            return 0;
            break;
    }
}

export default choiseFragmentForColors;