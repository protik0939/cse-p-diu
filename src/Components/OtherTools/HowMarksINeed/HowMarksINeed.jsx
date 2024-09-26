import { useState } from "react";
import { Helmet } from "react-helmet";

const HowMarksINeed = () => {
    const [marks, setMarks] = useState({
        quiz1: "",
        quiz2: "",
        quiz3: "",
        midterm: "",
        assignment: "",
        attendance: "",
        presentation: "",
    });

    const [output, setOutput] = useState([]);
    const [showOutput, setShowOutput] = useState(false);
    const [ttl, setTtl] = useState(0);
    const [predictedGrade, setPredictedGrade] = useState("");
    const [additionalMarks, setAdditionalMarks] = useState("");

    const handleChange = (e) => {
        setMarks({ ...marks, [e.target.name]: e.target.value });
    };

    const calculate = () => {
        const { quiz1, quiz2, quiz3, midterm, assignment, attendance, presentation } = marks;

        if ([quiz1, quiz2, quiz3, midterm, assignment, attendance, presentation].some(val => val === "")) {
            alert("Please fill all the fields.");
            return;
        }

        const quizAvg = (parseFloat(quiz1) + parseFloat(quiz2) + parseFloat(quiz3)) / 3;
        const totalMarks = parseFloat(quizAvg) + parseFloat(midterm) + parseFloat(assignment) + parseFloat(attendance) + parseFloat(presentation);

        setTtl(totalMarks);

        const results = [];

        const grades = [
            { grade: "D", threshold: 40, gpa: 2.00 },
            { grade: "C", threshold: 45, gpa: 2.25 },
            { grade: "C+", threshold: 50, gpa: 2.50 },
            { grade: "B-", threshold: 55, gpa: 2.75 },
            { grade: "B", threshold: 60, gpa: 3.00 },
            { grade: "B+", threshold: 65, gpa: 3.25 },
            { grade: "A-", threshold: 70, gpa: 3.50 },
            { grade: "A", threshold: 75, gpa: 3.75 },
            { grade: "A+", threshold: 80, gpa: 4.00 },
        ];

        let highestPossibleGrade = "";

        grades.forEach(({ grade, threshold, gpa }) => {
            if (totalMarks < threshold) {
                const marksNeeded = parseFloat(threshold - totalMarks).toFixed(2);
                results.push(`For '${grade}' (${gpa}) Grade, ${marksNeeded} marks needed.`);
                highestPossibleGrade = `${grade} Grade (${gpa})`;
            } else {
                results.push(`'${grade}' (${gpa}) Grade achieved already!`);
            }
        });

        const maxAchievable = parseFloat(totalMarks + 40).toFixed(2);
        results.push(`The highest you can achieve = ${maxAchievable} Marks, ${highestPossibleGrade}`);

        setOutput(results);
        setShowOutput(true);
    };

    const handlePredictGrade = () => {
        const predictedMarks = parseFloat(additionalMarks) + ttl;
        let predictedResult = "";
        const grades = [
            { grade: "D", threshold: 40, gpa: 2.00 },
            { grade: "C", threshold: 45, gpa: 2.25 },
            { grade: "C+", threshold: 50, gpa: 2.50 },
            { grade: "B-", threshold: 55, gpa: 2.75 },
            { grade: "B", threshold: 60, gpa: 3.00 },
            { grade: "B+", threshold: 65, gpa: 3.25 },
            { grade: "A-", threshold: 70, gpa: 3.50 },
            { grade: "A", threshold: 75, gpa: 3.75 },
            { grade: "A+", threshold: 80, gpa: 4.00 },
        ];

        grades.forEach(({ grade, threshold, gpa }) => {
            if (predictedMarks >= threshold) {
                predictedResult = `With an additional ${additionalMarks} marks, your predicted grade is: ${grade} (${gpa}). Total Marks: ${predictedMarks}`;
            }
        });

        setPredictedGrade(predictedResult);
    };

    return (
        <div className="grade-calculator my-20 flex flex-col justify-center items-center">
            <Helmet>
                <title>How Marks I Need | CSE P DIU</title>
            </Helmet>
            <h2 className="heading text-white text-2xl font-bold">Final Marks Needed</h2>
            <h6 className="heading mb-10 text-center p-4">Check how many marks you need to get in the Final Exam to achieve different Grades</h6>

            <div className="text-center">
                <div className="flex flex-wrap items-center justify-center px-10 sm:px-0">
                    {[
                        { name: "quiz1", label: "Quiz-1 (15)", placeholder: "1st quiz marks" },
                        { name: "quiz2", label: "Quiz-2 (15)", placeholder: "2nd quiz marks" },
                        { name: "quiz3", label: "Quiz-3 (15)", placeholder: "3rd quiz marks" },
                        { name: "midterm", label: "Midterm (25)", placeholder: "Midterm marks" },
                        { name: "assignment", label: "Assignment (5)", placeholder: "Assignment marks" },
                        { name: "attendance", label: "Attendance (7)", placeholder: "Attendance marks" },
                        { name: "presentation", label: "Presentation (8)", placeholder: "Presentation marks" },
                    ].map(({ name, label, placeholder }) => (
                        <div className="p-2" key={name}>
                            <h4 className="inputTitle">{label}</h4>
                            <input
                                name={name}
                                placeholder={placeholder}
                                className="inputFieldMarks input input-bordered w-full max-w-xs"
                                type="text"
                                value={marks[name]}
                                onChange={handleChange}
                            />
                        </div>
                    ))}
                </div>
                <button className="btn my-10" onClick={calculate}>
                    Submit
                </button>
            </div>

            {showOutput && (
                <>
                    <h1>Till now youve got total {ttl} Marks</h1>
                    <div className="text-center p-4">
                        {output.map((line, index) => (
                            <h2 key={index} className="outputHeading">
                                {line}
                            </h2>
                        ))}
                        <div className="p-4">
                            <h4>Guess your Final exam marks</h4>
                            <input
                                type="text"
                                placeholder="Enter marks"
                                className="inputFieldMarks input input-bordered w-full max-w-xs"
                                value={additionalMarks}
                                onChange={(e) => setAdditionalMarks(e.target.value)}
                            />
                            <button className="btn my-6" onClick={handlePredictGrade}>
                                Predict Grade
                            </button>
                        </div>
                        {predictedGrade && (
                            <h2 className="outputHeading">
                                {predictedGrade}
                            </h2>
                        )}
                        <button className="btn my-6" onClick={() => setShowOutput(false)}>
                            Close
                        </button>
                    </div>
                </>
            )}
            <div className="sm:mb-[60px]" />
        </div>
    );
};

export default HowMarksINeed;
