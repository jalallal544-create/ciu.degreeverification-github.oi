import PDFDocument from "pdfkit";
import fs from "fs";

export default function generatePDF(student, outputPath) {

    return new Promise((resolve) => {

        const doc = new PDFDocument({
            size: "A4",
            margin: 50
        });

        const stream = fs.createWriteStream(outputPath);

        doc.pipe(stream);

        doc
            .fontSize(24)
            .text("Degree Verification Certificate", {
                align: "center"
            });

        doc.moveDown();

        doc.fontSize(14);

        doc.text(`Student Name : ${student.full_name}`);
        doc.text(`Student ID   : ${student.student_id}`);
        doc.text(`Program      : ${student.program}`);
        doc.text(`Department   : ${student.department}`);
        doc.text(`CGPA         : ${student.cgpa}`);
        doc.text(`Passing Year : ${student.passing_year}`);
        doc.text(`Issue Date   : ${student.issue_date}`);

        doc.moveDown();

        doc.text(
            "This document is generated electronically.",
            {
                align: "center"
            }
        );

        doc.end();

        stream.on("finish", () => resolve(outputPath));

    });

}
