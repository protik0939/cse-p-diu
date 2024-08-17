import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import axios from "axios";




const Login = () => {


    const { user, logIn, googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    // console.log(location);

    const handleLogIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        logIn(email, password)
            .then(result => {
                // console.log(result.user);
                const person = { email };
                // get access token
                axios.post('https://cse-p-diu-server.vercel.app/jwt', person, { withCredentials: true })
                    .then(res => {
                        // console.log(res);
                        if (res.data.success) {
                            navigate(location?.state ? location?.state : '/');
                        }
                    })
                    .catch(error => {
                        // console.log(error);
                    })
            })
            .catch(error => {
                // console.log(error);
            });
    }

    const handleGooglePopupLogin = () => {
        googleSignIn()
            .then((result) => {
                const uid = result.user.uid;
                const email = result.user.email;
                const name = result.user.displayName;
                const photourl = result.user.photoURL;
                const studentId = null;
                const batchNo = null;
                const section = null;
                const classRepresentative = false;

                // Check if the user already exists in the database
                fetch(`https://cse-p-diu-server.vercel.app/users/uid/${uid}`)
                    .then(res => res.json())
                    .then(data => {
                        if (data.uid === uid) {
                            // User exists, just navigate
                            navigate(location?.state ? location?.state : '/');
                        } else {
                            // User does not exist, send user data to the database
                            const newUser = { uid, email, name, photourl, studentId, batchNo, section, classRepresentative };
                            fetch('https://cse-p-diu-server.vercel.app/users', {
                                method: 'POST',
                                headers: {
                                    'content-type': 'application/json'
                                },
                                body: JSON.stringify(newUser)
                            })
                                .then(res => res.json())
                                .then(() => {
                                    navigate(location?.state ? location?.state : '/');
                                })
                                .catch(error => {
                                    console.error('Error saving new user:', error);
                                });
                        }
                    })
                    .catch(error => {
                        console.error('Error checking user existence:', error);
                    });
            })
            .catch((error) => {
                console.error('Error during Google sign-in:', error);
            });
    };



    return (
        <div>
            <div className="py-7" />
            {user ? navigate(`/profile/${user.uid}`) :
                <div className="hero bg-transparent min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">

                        </div>
                        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                            <h1 className="text-center font-bold text-3xl">Log in</h1>
                            <form onSubmit={handleLogIn} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </form>
                            <h1 className="text-center p-4">Have no account? <Link className="text-[#7480ff]" to='/register'>Register</Link></h1>
                            <h1 className="text-center">Or Log in using</h1>
                            <div className="flex w-full items-center justify-center my-5">
                                <FcGoogle onClick={handleGooglePopupLogin} className="p-1 text-5xl rounded-full cursor-pointer"></FcGoogle>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default Login;