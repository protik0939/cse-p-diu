import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import axios from "axios";
import Swal from 'sweetalert2'




const Login = () => {


    const { user, logIn, googleSignIn, passwordReset } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [logginIn, setLoggingIn] = useState(false);

    // console.log(location);

    const handleLogIn = e => {
        e.preventDefault();
        setLoggingIn(true);
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
                            setLoggingIn(false);
                            Swal.fire({
                                position: "top-end",
                                toast: true,
                                title: "Logged In",
                                showConfirmButton: false,
                                color: '#ffffff',
                                background: '#00ff0090',
                                timer: 2000,
                                timerProgressBar: true,
                                width: 'auto',
                            });
                            navigate(location?.state ? location?.state : '/');
                        }
                    })
                    .catch(error => {
                        Swal.fire({
                            position: "top-end",
                            toast: true,
                            title: "Something went wrong",
                            showConfirmButton: false,
                            color: '#ffffff',
                            background: '#ff000090',
                            timer: 2000,
                            timerProgressBar: true,
                            width: 'auto',
                        });
                        setLoggingIn(false);
                    })
            })
            .catch(error => {
                Swal.fire({
                    position: "top-end",
                    toast: true,
                    title: "Wrong email/password",
                    showConfirmButton: false,
                    color: '#ffffff',
                    background: '#ff000090',
                    timer: 2000,
                    timerProgressBar: true,
                    width: 'auto',
                });
                setLoggingIn(false);
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
                                    Swal.fire({
                                        position: "top-end",
                                        toast: true,
                                        title: "Logged In",
                                        showConfirmButton: false,
                                        color: '#00ff00',
                                        background: '#1d232a90',
                                        timer: 2000,
                                        timerProgressBar: true,
                                        width: 'auto',
                                    });
                                    navigate(location?.state ? location?.state : '/');
                                })
                                .catch(error => {
                                    console.error('Error saving new user:', error);
                                    Swal.fire({
                                        position: "top-end",
                                        toast: true,
                                        title: "Something went wrong",
                                        showConfirmButton: false,
                                        color: '#ff0000',
                                        background: '#1d232a90',
                                        timer: 2000,
                                        timerProgressBar: true,
                                        width: 'auto',
                                    });
                                });
                        }
                    })
                    .catch(error => {
                        console.error('Error checking user existence:', error);
                        Swal.fire({
                            position: "top-end",
                            toast: true,
                            title: "Something went wrong",
                            showConfirmButton: false,
                            color: '#ff0000',
                            background: '#1d232a90',
                            timer: 2000,
                            timerProgressBar: true,
                            width: 'auto',
                        });
                    });
            })
            .catch((error) => {
                console.error('Error during Google sign-in:', error);
                Swal.fire({
                    position: "top-end",
                    toast: true,
                    title: "Something went wrong",
                    showConfirmButton: false,
                    color: '#ff0000',
                    background: '#1d232a90',
                    timer: 2000,
                    timerProgressBar: true,
                    width: 'auto',
                });
            });
    };


    const handleResetPassword = async() => {
        const { value: email } = await Swal.fire({
            title: "Input email address",
            input: "email",
            inputLabel: "Your email address",
            inputPlaceholder: "example@gmail.com",
            background: "#1d232a90",
            color: "#ffffff",
          });
          if (email) {
            passwordReset(email);
            Swal.fire({
                title: `A Password Reset Mail has been sent to your email - ${email}`,
                background: "#1d232a90",
                color: "#ffffff",
            });
          }
    }



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
                                        <div onClick={handleResetPassword} className="label-text-alt link link-hover">Forgot password?</div>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    {logginIn && <div className='text-center'><span className="loading loading-ring loading-lg" /></div>}
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