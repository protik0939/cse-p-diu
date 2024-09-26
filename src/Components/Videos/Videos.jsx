import { Helmet } from 'react-helmet';
import ComingSoon from '../ComingSoon/ComingSoon'

const Videos = () => {
    return (
        <div>
            <Helmet>
                <title>Videos | CSE P DIU</title>
            </Helmet>
            <ComingSoon></ComingSoon>
        </div>
    );
};

export default Videos;