import { Helmet } from "react-helmet";
import LeftNavBar from "../../HomeBars/LeftNavBar";

const Options = () => {
    return (
        <div>
            <Helmet>
                <title>Options | CSE P DIU</title>
            </Helmet>
            <div className="mt-[50px]" />
            <LeftNavBar></LeftNavBar>
            <div className="sm:mb-[60px]" />
        </div>
    );
};

export default Options;