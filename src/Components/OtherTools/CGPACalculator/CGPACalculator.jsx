import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const CGPACalculator = () => {
    const [subjects, setSubjects] = useState([{ subjectName: "", credit: "", cgpa: "" }]);

    const handleAddSubject = () => {
        setSubjects([...subjects, { subjectName: "", credit: "", cgpa: "" }]);
    };

    const handleRemoveSubject = (index) => {
        const newSubjects = subjects.filter((_, i) => i !== index);
        setSubjects(newSubjects);
    };

    const handleChange = (index, event) => {
        const { name, value } = event.target;
        const newSubjects = subjects.map((subject, i) =>
            i === index ? { ...subject, [name]: value } : subject
        );
        setSubjects(newSubjects);
    };

    const calculateCGPA = () => {
        let totalCredits = 0;
        let totalQualityPoints = 0;

        subjects.forEach(({ credit, cgpa }) => {
            const creditValue = parseFloat(credit);
            const cgpaValue = parseFloat(cgpa);
            if (!isNaN(creditValue) && !isNaN(cgpaValue)) {
                totalCredits += creditValue;
                totalQualityPoints += creditValue * cgpaValue;
            }
        });

        return totalCredits ? (totalQualityPoints / totalCredits).toFixed(2) : 0;
    };

    return (
        <div className="mt-20 p-4 flex flex-col items-center justify-center">
            <h2 className="mb-10 p-4 text-2xl font-bold text-white">CGPA Calculator</h2>
            {subjects.map((subject, index) => (
                <div key={index} className="sm:flex-col" style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                    <input
                        className="input input-bordered w-full max-w-xs mr-4 sm:mr-0"
                        type="text"
                        name="subjectName"
                        value={subject.subjectName}
                        onChange={(e) => handleChange(index, e)}
                        placeholder="Subject Name"
                    />
                    <div className="flex sm:mt-3">

                        <input
                            className="input input-bordered w-full max-w-xs mr-4 sm:mr-2"
                            type="number"
                            name="credit"
                            value={subject.credit}
                            onChange={(e) => handleChange(index, e)}
                            placeholder="Credit"
                        />
                        <input
                            className="input input-bordered w-full max-w-xs mr-4 sm:mr-0"
                            type="number"
                            name="cgpa"
                            value={subject.cgpa}
                            onChange={(e) => handleChange(index, e)}
                            placeholder="CGPA"
                        />
                    </div>
                    <button className="sm:mt-4 ml-10 sm:ml-0 sm:mb-10" onClick={() => handleRemoveSubject(index)}>
                        <AiOutlineClose className="bg-[#ff0000] text-white text-2xl hover:scale-110 rounded-full p-1 font-bold" />
                    </button>
                </div>
            ))}
            <button className="btn" onClick={handleAddSubject} style={{ marginTop: "10px" }}>
                Add Subject
            </button>
            <div className="my-10"/>
            <h3 style={{borderRadius: "10px 10px 0 0"}} className="fixed sm:w-full text-center sm:bottom-14 bottom-0 bg-[#fff] text-black font-bold p-4 text-1xl">Total CGPA: {calculateCGPA()}</h3>
            <div className="sm:mb-[60px]" />
        </div>
    );
};

export default CGPACalculator;
