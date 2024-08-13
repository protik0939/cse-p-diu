import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import './Register.css'

const Register = () => {

    const { user, createUser, googleSignIn, emailVerification, uploadNameImageID } = useContext(AuthContext);
    const [showToast, setShowToast] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);


    const location = useLocation();
    const navigate = useNavigate();


    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        const name = form.name.value;
        const photourl = form.photourl.value;
        const studentId = form.studentId.value;
        const batchNo = form.batchNo.value;
        const section = form.section.value;
        const classRepresentative = false;
        if (password !== confirmPassword) {
            setShowToast(true);
            setFadeOut(false);
            setTimeout(() => {
                setFadeOut(true);
                setTimeout(() => {
                    setShowToast(false);
                }, 1000);
            }, 4000);
        } else {
            createUser(email, password)
                .then(result => {
                    emailVerification();
                    uploadNameImageID(name, photourl);
                    // console.log(result.user);
                    const uid = result.user.uid;
                    const newUser = { uid, email, name, photourl, studentId, batchNo, section, classRepresentative }
                    // // console.log(newUser);
                    fetch('https://cse-p-diu-server.vercel.app/users', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(newUser)
                    })
                        .then(res => res.json())
                        .then(data => {
                            // console.log(data);
                        })
                    navigate(location?.state ? location?.state : '/');
                })
                .catch(error => {
                    // console.log(error);
                });
        }
    };

    const handleGooglePopupLogin = () => {
        googleSignIn()
            .then((result) => {
                // console.log(result);
                const uid = result.user.uid;
                const email = result.user.email;
                const name = result.user.displayName;
                const photourl = result.user.photoURL;
                const studentId = null;
                const batchNo = null;
                const section = null;
                const classRepresentative = false;
                const newUser = { uid, email, name, photourl, studentId, batchNo, section, classRepresentative }
                // console.log(newUser);
                fetch('https://cse-p-diu-server.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                    })
                navigate(location?.state ? location?.state : '/');
            }).catch((error) => {
                // console.log(error);
            });
    }

    return (
        <div>

            <div className="py-8" />
            {showToast && (
                <div className={`toast ${fadeOut ? 'fade-out' : ''} z-10`}>
                    <div className="alert alert-info text-[#ffffff] bg-[#ff0000]">
                        <span>Passwords do not match.</span>
                    </div>
                </div>
            )}
            <div>
{user ? navigate(`/profile/${user.uid}`) :
                <div className="hero bg-transparent min-h-screen text-white">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                            <h1 className="text-center font-bold text-3xl">Register</h1>
                            <form onSubmit={handleRegister} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email<span className="text-[#ff0000] text-2xl">*</span></span>
                                    </label>
                                    <input type="email" name="email" placeholder="protik0939@gmail.com" className="input input-bordered" required />

                                    <label className="label">
                                        <span className="label-text">Name<span className="text-[#ff0000] text-2xl">*</span></span>
                                    </label>
                                    <input type="text" name="name" placeholder="Sadat Alam Protik" className="input input-bordered" required />

                                    <label className="label">
                                        <span className="label-text">Student ID</span>
                                    </label>
                                    <input type="text" name="studentId" placeholder="0242220005101858" className="input input-bordered" />

                                    <label className="label">
                                        <span className="label-text">Batch&#40;61/62/63......&#41;</span>
                                    </label>
                                    <input type="number" name="batchNo" placeholder="63" className="input input-bordered" />

                                    <label className="label">
                                        <span className="label-text">Section</span>
                                    </label>

                                    <select name="section" className="select select-bordered w-full max-w-xs">
                                        <option disabled selected>P</option>
                                        <option>A</option>
                                        <option>B</option>
                                        <option>C</option>
                                        <option>D</option>
                                        <option>E</option>
                                        <option>F</option>
                                        <option>G</option>
                                        <option>H</option>
                                        <option>I</option>
                                        <option>J</option>
                                        <option>K</option>
                                        <option>L</option>
                                        <option>M</option>
                                        <option>N</option>
                                        <option>O</option>
                                        <option>P</option>
                                        <option>Q</option>
                                        <option>R</option>
                                        <option>S</option>
                                        <option>T</option>
                                        <option>U</option>
                                        <option>V</option>
                                        <option>W</option>
                                        <option>X</option>
                                        <option>Y</option>
                                        <option>Z</option>
                                    </select>

                                    <label className="label">
                                        <span className="label-text">Photo URL<span className="text-[#ff0000] text-2xl">*</span></span>
                                    </label>
                                    <input type="text" name="photourl" placeholder="Photo URL" className="input input-bordered" required />
                                    <label className="label">
                                        <span className="label-text">Password<span className="text-[#ff0000] text-2xl">*</span></span>
                                    </label>
                                    <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                                    <label className="label">
                                        <span className="label-text">Confirm Password<span className="text-[#ff0000] text-2xl">*</span></span>
                                    </label>
                                    <input type="password" name="confirmPassword" placeholder="Confirm Password" className="input input-bordered" required />
                                    {/* <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label> */}
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Register</button>
                                </div>
                            </form>
                            <h1 className="text-center p-4">Already have an account? <Link className="text-[#7480ff]" to='/login'>Log in</Link></h1>
                            <h1 className="text-center">Or Register using</h1>
                            <div className="flex w-full items-center justify-center my-5">
                                <FcGoogle onClick={handleGooglePopupLogin} className="p-1 text-5xl bg-white rounded-full cursor-pointer"></FcGoogle>
                            </div>
                        </div>
                    </div>
                </div>
                }
            </div>
        </div>
    );
};

export default Register;