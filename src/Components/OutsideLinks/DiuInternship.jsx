import { Helmet } from "react-helmet";

const DiuInternship = () => {
    return (
        <div className="w-full h-screen">
            
            <Helmet>
                <title>DIU Internship | CSE P DIU</title>
            </Helmet>
                <iframe
                    className="w-full h-full pt-[70px] sm:py-[60px]"
                    src='https://internship.daffodilvarsity.edu.bd/?app=home'
                />
            <div className="py-[0px]" />
        </div>
    );
};

export default DiuInternship;