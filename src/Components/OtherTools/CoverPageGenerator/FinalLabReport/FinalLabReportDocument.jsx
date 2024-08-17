import { Page, Text, View, Document, StyleSheet, Image } from "@react-pdf/renderer";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
    page: {
        flexDirection: "column",
        backgroundColor: "#ffffff",
        padding: 30,
        position: 'relative',
        width: "100%",
    },
    header: {
        textAlign: "center",
        marginBottom: 20,
    },
    headerLogo: {
        width: 300,
        marginBottom: 10,
        alignSelf: 'center',
    },
    watermark: {
        position: 'absolute',
        width: '100%',
        top: "25%",
        left: "5%",
        opacity: .1, // Set the opacity lower to make it look more like a watermark
        zIndex: -1,   // Ensure the watermark is behind the text
    },
    section: {
        marginBottom: 6,
        padding: 10,
        flexGrow: 1,
        zIndex: 1,  // Make sure the text is on top of the watermark
    },
    text: {
        fontSize: 12,
        marginBottom: 10,
        lineHeight: 1.5,
    },
    subText: {
        fontSize: 12,
        marginBottom: 10,
        marginLeft: "60px",
        lineHeight: 1.5,
    },
    title: {
        fontSize: 18,
        marginBottom: "50px",
        textAlign: "center",
        fontWeight: 'bold',
        textDecoration: "underline",
    },
    subtitle: {
        fontSize: 12,
        marginBottom: 10,
    },
    contentContainer: {
        padding: 25,
        border: '1px solid #000',
        height: '100%',
        position: 'relative',  // Ensure the container is positioned relatively
    },
    textStyle: {
        textDecoration: "underline",
        fontWeight: 'bold',
    }
});

const FinalLabReportDocument = ({ formData }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.contentContainer}>
                {/* Watermark */}
                <Image style={styles.watermark} src={formData.waterMark} />

                {/* Header with Logo */}
                <View style={styles.header}>
                    <Image
                        src={formData.headerLogo}
                        alt="User provided content"
                        style={styles.headerLogo}
                    />
                </View>

                {/* Content Section */}
                <View style={styles.section}>
                    <Text style={styles.title}>Final Lab Report</Text>
                    <Text style={styles.text}>Course Code: {formData.courseCode}</Text>
                    <Text style={styles.text}>Course Title: {formData.courseTitle}</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.subtitle}><Text style={styles.textStyle}>Submitted To:</Text></Text>
                    <Text style={styles.subText}>Teacher Name: {formData.teacherName}</Text>
                    <Text style={styles.subText}>Department: {formData.department}</Text>
                    <Text style={styles.subText}>Daffodil International University.</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.subtitle}><Text style={styles.textStyle}>Submitted By:</Text></Text>
                    <Text style={styles.subText}>Name: {formData.name}</Text>
                    <Text style={styles.subText}>ID: {formData.studentId}</Text>
                    <Text style={styles.subText}>Section: {formData.section}</Text>
                    <Text style={styles.subText}>Semester: {formData.semester}</Text>
                    <Text style={styles.subText}>Department: {formData.yourDept}</Text>
                    <Text style={styles.subText}>Daffodil International University.</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.subtitle}><Text style={styles.textStyle}>Submission Date:</Text> {formData.submissionDate}</Text>
                </View>
            </View>
        </Page>
    </Document>
);

FinalLabReportDocument.propTypes = {
    formData: PropTypes.object.isRequired,
};

export default FinalLabReportDocument;
