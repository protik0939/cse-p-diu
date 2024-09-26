import { Helmet } from "react-helmet";
import RightNavBar from "../../HomeBars/RightNavBar";

const Tools = () => {
    return (
        <div>
            <Helmet>
                <title>Tools and Contact | CSE P DIU</title>
            </Helmet>
            <div className="mt-[50px]" />
            <RightNavBar></RightNavBar>
            <div className="sm:mb-[60px] mb-[60px]" />
        </div>
    );
};

export default Tools;