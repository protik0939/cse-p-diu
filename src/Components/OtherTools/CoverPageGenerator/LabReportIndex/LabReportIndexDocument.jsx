import { Page, Text, View, Document, StyleSheet, Image } from "@react-pdf/renderer";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
    page: {
        flexDirection: "column",
        backgroundColor: "#ffffff",
        padding: 40,
    },
    header: {
        textAlign: "center",
        marginBottom: 20,
    },
    headerLogo: {
        width: 150,
        marginBottom: 10,
        alignSelf: 'center',
    },
    title: {
        fontSize: 18,
        marginBottom: 20,
        textAlign: "center",
        fontWeight: 'bold',
        textDecoration: "underline",
    },
    table: {
        display: "table",
        width: "100%",
        borderStyle: "solid",
        borderColor: "#000",
        marginBottom: 10,
        padding: 10,
    },
    tableRow: {
        flexDirection: "row",
        width: "100%",
        borderBottom: 1,
    },
    tableCell1: {
        margin: "auto",
        fontSize: 10,
        padding: 10,
        width: "10%",
    },
    tableCell2: {
        margin: "auto",
        fontSize: 10,
        padding: 10,
        width: "65%",
    },
    tableCell3: {
        margin: "auto",
        fontSize: 10,
        padding: 10,
        width: "15%",
    },
    tableCell4: {
        margin: "auto",
        fontSize: 10,
        padding: 10,
        width: "10%",
    },
});

const LabReportIndexDocument = ({ formData }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.header}>
                <Image
                    src={formData.headerLogo}
                    alt="User provided content"
                    style={styles.headerLogo}
                />
            </View>

            <Text style={styles.title}>Index</Text>

            <View style={styles.table}>
                <View style={styles.tableRow}>
                    <Text style={styles.tableCell1}>Exp. No</Text>
                    <Text style={styles.tableCell2}>Experiment Name</Text>
                    <Text style={styles.tableCell3}>Date</Text>
                    <Text style={styles.tableCell4}>Page No</Text>
                </View>

                {formData.experiments.map((experiment, index) => (
                    <View key={index} style={styles.tableRow}>
                        <Text style={styles.tableCell1}>{experiment.experimentNo}</Text>
                        <Text style={styles.tableCell2}>{experiment.experimentName}</Text>
                        <Text style={styles.tableCell3}>{experiment.date}</Text>
                        <Text style={styles.tableCell4}>{experiment.pageNo}</Text>
                    </View>
                ))}
            </View>
        </Page>
    </Document>
);

LabReportIndexDocument.propTypes = {
    formData: PropTypes.object.isRequired,
};

export default LabReportIndexDocument;
