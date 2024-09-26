import { Helmet } from "react-helmet";
import ComingSoon from "../ComingSoon/ComingSoon";

const Notice = () => {
    return (
        <div>
            <Helmet>
                <title>Notice | CSE P DIU</title>
            </Helmet>
            <ComingSoon></ComingSoon>
        </div>
    );
};

export default Notice;