import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import ProfileSkeleton from "../Skeleton/ProfileSkeleton";

const Profile = () => {
    const { id } = useParams();
    const [userProInfo, setUserProInfo] = useState({});
    const { user, uploadNameImageID } = useContext(AuthContext);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        fetch(`https://cse-p-diu-server.vercel.app/users/uid/${id}`)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                setUserProInfo(data);
                setLoader(false);
            })
            .catch((error) => {
                console.error('Error fetching user:', error);
                setLoader(false);
            });
    }, [id]);

    const updateInfoHandler = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photourl = form.photourl.value;
        const studentId = form.studentId.value;
        const batchNo = form.batchNo.value;
        const section = form.section.value;
        const uid = userProInfo.uid;
        const updatedInfo = { name, photourl, studentId, batchNo, section, uid }
        // console.log(updatedInfo);
        fetch(`https://cse-p-diu-server.vercel.app/users/uid/${uid}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updatedInfo)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                uploadNameImageID(name, photourl);
                setUserProInfo(data);
                setLoader(false);
                document.getElementById('update Info').close();
            })

    }

    return (
        <div>
            <div className="py-8" />
            <div className="flex p-4 sm:flex-col">
                <div className="w-1/3 sm:w-full">
                    {loader ?
                        <>
                            <ProfileSkeleton></ProfileSkeleton>
                        </>
                        :
                        <div>
                            <div className="indicator w-full">
                                {userProInfo?.classRepresentative === "true" ? <span className="indicator-item badge text-2xl font-bold">CR</span> : ''}
                                <img className="w-full rounded-[20px]" src={userProInfo.photourl} alt="" />
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <h1 className="text-2xl font-bold">Name: {userProInfo.name}</h1>
                                    <h1 className="text-1xl font-bold">Student ID: {userProInfo.studentId}</h1>
                                    <h2>Email: {userProInfo.email}</h2>
                                    <h2>Section: {userProInfo.batchNo}_{userProInfo.section}</h2>
                                </div>
                                <div>
                                    {user.uid === userProInfo.uid ? <button onClick={() => document.getElementById('update Info').showModal()} className="btn">Update Info</button> : ''}
                                    <dialog id="update Info" className="modal">
                                        <div className="modal-box text-white">

                                            <h1 className="text-center font-bold text-2xl">Update Info</h1>
                                            <form onSubmit={updateInfoHandler} className="card-body">
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Name<span className="text-[#ff0000] text-2xl">*</span></span>
                                                    </label>
                                                    <input defaultValue={userProInfo.name} type="text" name="name" placeholder="Sadat Alam Protik" className="input input-bordered" required />

                                                    <label className="label">
                                                        <span className="label-text">Student ID</span>
                                                    </label>
                                                    <input defaultValue={userProInfo.studentId} type="text" name="studentId" placeholder="0242220005101858" className="input input-bordered" />

                                                    <label className="label">
                                                        <span className="label-text">Batch&#40;61/62/63......&#41;</span>
                                                    </label>
                                                    <input defaultValue={userProInfo.batchNo} type="number" name="batchNo" placeholder="63" className="input input-bordered" />

                                                    <label className="label ">
                                                        <span className="label-text">Section</span>
                                                    </label>

                                                    <select name="section" className="select select-bordered w-full">
                                                        {/* If userProInfo.section is null or empty, show "Select Section" as the default option */}
                                                        {!userProInfo.section && (
                                                            <option value="" disabled selected>
                                                                Select Section
                                                            </option>
                                                        )}
                                                        <option value="A" selected={userProInfo.section === "A"}>A</option>
                                                        <option value="B" selected={userProInfo.section === "B"}>B</option>
                                                        <option value="C" selected={userProInfo.section === "C"}>C</option>
                                                        <option value="D" selected={userProInfo.section === "D"}>D</option>
                                                        <option value="E" selected={userProInfo.section === "E"}>E</option>
                                                        <option value="F" selected={userProInfo.section === "F"}>F</option>
                                                        <option value="G" selected={userProInfo.section === "G"}>G</option>
                                                        <option value="H" selected={userProInfo.section === "H"}>H</option>
                                                        <option value="I" selected={userProInfo.section === "I"}>I</option>
                                                        <option value="J" selected={userProInfo.section === "J"}>J</option>
                                                        <option value="K" selected={userProInfo.section === "K"}>K</option>
                                                        <option value="L" selected={userProInfo.section === "L"}>L</option>
                                                        <option value="M" selected={userProInfo.section === "M"}>M</option>
                                                        <option value="N" selected={userProInfo.section === "N"}>N</option>
                                                        <option value="O" selected={userProInfo.section === "O"}>O</option>
                                                        <option value="P" selected={userProInfo.section === "P"}>P</option>
                                                        <option value="Q" selected={userProInfo.section === "Q"}>Q</option>
                                                        <option value="R" selected={userProInfo.section === "R"}>R</option>
                                                        <option value="S" selected={userProInfo.section === "S"}>S</option>
                                                        <option value="T" selected={userProInfo.section === "T"}>T</option>
                                                        <option value="U" selected={userProInfo.section === "U"}>U</option>
                                                        <option value="V" selected={userProInfo.section === "V"}>V</option>
                                                        <option value="W" selected={userProInfo.section === "W"}>W</option>
                                                        <option value="X" selected={userProInfo.section === "X"}>X</option>
                                                        <option value="Y" selected={userProInfo.section === "Y"}>Y</option>
                                                        <option value="Z" selected={userProInfo.section === "Z"}>Z</option>
                                                    </select>





                                                    <label className="label">
                                                        <span className="label-text">Photo URL<span className="text-[#ff0000] text-2xl">*</span></span>
                                                    </label>
                                                    <input defaultValue={userProInfo.photourl} type="text" name="photourl" placeholder="Photo URL" className="input input-bordered" required />
                                                </div>
                                                <div className="form-control mt-6">
                                                    <button className="btn btn-primary">Update</button>
                                                </div>
                                            </form>

                                            <form method="dialog" className="text-center">
                                                {/* if there is a button in form, it will close the modal */}
                                                <button className="btn">Cancel</button>
                                            </form>
                                        </div>
                                    </dialog>
                                </div>
                            </div>
                        </div>
                    }
                </div>
                <div className="w-2/3 sm:w-full col-span-2 flex flex-col p-4 items-center justify-center">

                    <h2>No Post Yet!</h2>
                </div>
            </div>
        </div>
    );
};

export default Profile;
