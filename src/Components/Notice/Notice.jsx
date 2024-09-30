import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

const Notice = () => {

    const [emails, setEmails] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Function to fetch emails from the API using Axios
    const fetchEmails = async () => {
        try {
            const response = await axios.get('https://cse-p-diu-server.vercel.app/users');

            // Extracting the emails from the user data
            const emailList = response.data.map(user => user.email);

            // Set the emails in state
            setEmails(emailList);
            setLoading(false);
            console.log(emails)
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };

    // useEffect to fetch the emails when the component mounts
    useEffect(() => {
        fetchEmails();
    }, []);

    return (
        <div>
            <Helmet>
                <title>Notice | CSE P DIU</title>
            </Helmet>
            <div className="pt-20" />
            <h1>email: {emails[0]}</h1>
        </div>
    );
};

export default Notice;