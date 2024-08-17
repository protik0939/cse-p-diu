import { PDFDownloadLink } from "@react-pdf/renderer";
import { useState } from "react";
import headerLogo from "../../../../assets/headerlogo.png";  // Replace with the correct path to your header logo
import LabReportIndexDocument from "./LabReportIndexDocument";

const LabReportIndex = () => {
    const [formData, setFormData] = useState({
        headerLogo: headerLogo,
        experiments: Array.from({ length: 8 }, () => ({
            experimentNo: "",
            experimentName: "",
            date: "",
            pageNo: "",
        })),
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (index, e) => {
        const { name, value } = e.target;
        const newExperiments = formData.experiments.map((experiment, i) =>
            i === index ? { ...experiment, [name]: value } : experiment
        );
        setFormData({
            ...formData,
            experiments: newExperiments,
        });
    };

    const handleAddExperiment = () => {
        if (formData.experiments.length < 15) {
            setFormData({
                ...formData,
                experiments: [
                    ...formData.experiments,
                    { experimentNo: "", experimentName: "", date: "", pageNo: "" },
                ],
            });
        }
    };

    const handleRemoveExperiment = (index) => {
        if (formData.experiments.length > 1) {
            const newExperiments = formData.experiments.filter((_, i) => i !== index);
            setFormData({
                ...formData,
                experiments: newExperiments,
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="my-20">
            <h1 className="text-center text-2xl p-4 font-bold">
                Lab Report Index
            </h1>
            {!submitted ? (
                <form onSubmit={handleSubmit}>
                    {formData.experiments.map((experiment, index) => (
                        <div key={index} className="flex sm:flex-col items-center justify-center space-x-4 sm:space-x-0 sm:space-y-2 mb-4 sm:mb-10">
                            <div className="flex space-x-4 sm:p-2">
                                <input
                                    className="input input-bordered w-16 sm:w-[20%]"
                                    type="text"
                                    name="experimentNo"
                                    placeholder="No."
                                    value={experiment.experimentNo}
                                    onChange={(e) => handleChange(index, e)}
                                    required
                                />
                                <input
                                    className="input input-bordered w-60 sm:w-[80%]"
                                    type="text"
                                    name="experimentName"
                                    placeholder="Experiment Name"
                                    value={experiment.experimentName}
                                    onChange={(e) => handleChange(index, e)}
                                    required
                                />
                            </div>
                            <div className="flex space-x-4 sm:p-2">
                                <input
                                    className="input input-bordered w-40 sm:w-[80%]"
                                    type="text"
                                    name="date"
                                    placeholder="Date"
                                    value={experiment.date}
                                    onChange={(e) => handleChange(index, e)}
                                    required
                                />
                                <input
                                    className="input input-bordered w-24 sm:[w-20%]"
                                    type="text"
                                    name="pageNo"
                                    placeholder="Page No."
                                    value={experiment.pageNo}
                                    onChange={(e) => handleChange(index, e)}
                                    required
                                />
                            </div>
                            <button
                                type="button"
                                className="btn btn-error"
                                onClick={() => handleRemoveExperiment(index)}
                                disabled={formData.experiments.length <= 1}
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    {formData.experiments.length < 15 && (
                        <div className="text-center mt-4">
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={handleAddExperiment}
                            >
                                Add Experiment
                            </button>
                        </div>
                    )}
                    <div className="text-center mt-10">
                        <button className="btn" type="submit">Generate PDF</button>
                    </div>
                </form>
            ) : (
                <div className="flex items-center justify-center h-[30vw]">
                    <PDFDownloadLink
                        className="btn"
                        document={<LabReportIndexDocument formData={formData} />}
                        fileName={`LabReportIndex_${new Date().toLocaleDateString()}.pdf`}
                    >
                        {({ loading }) =>
                            loading ? <span className="loading loading-ring loading-lg"></span> : "Download PDF"
                        }
                    </PDFDownloadLink>
                </div>
            )}
        </div>
    );
};

export default LabReportIndex;
