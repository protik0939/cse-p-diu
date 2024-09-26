import { Helmet } from "react-helmet";

const Blc = () => {
    return (
        <div className="w-full h-screen">
            
            <Helmet>
                <title>BLC | CSE P DIU</title>
            </Helmet>
                <iframe
                    className="w-full h-full pt-[65px] sm:py-[60px]"
                    src='https://elearn.daffodilvarsity.edu.bd'
                />
            <div className="py-[0px]" />
        </div>
    );
};

export default Blc;