import { pool } from "../config/database.js";

class Student {

    static async findByStudentId(studentId) {
        const [rows] = await pool.execute(
            "SELECT * FROM students WHERE student_id = ? LIMIT 1",
            [studentId]
        );
        return rows[0] || null;
    }

    static async getAll() {
        const [rows] = await pool.execute(
            "SELECT * FROM students ORDER BY created_at DESC"
        );
        return rows;
    }

    static async create(student) {
        const sql = `
        INSERT INTO students
        (
            student_id,
            full_name,
            program,
            department,
            cgpa,
            passing_year,
            date_of_birth,
            issue_date
        )
        VALUES (?,?,?,?,?,?,?,?)
        `;

        const values = [
            student.student_id,
            student.full_name,
            student.program,
            student.department,
            student.cgpa,
            student.passing_year,
            student.date_of_birth,
            student.issue_date
        ];

        const [result] = await pool.execute(sql, values);

        return result.insertId;
    }

    static async update(id, student) {

        const sql = `
        UPDATE students SET
        full_name=?,
        program=?,
        department=?,
        cgpa=?,
        passing_year=?,
        date_of_birth=?,
        issue_date=?
        WHERE id=?`;

        await pool.execute(sql, [

            student.full_name,
            student.program,
            student.department,
            student.cgpa,
            student.passing_year,
            student.date_of_birth,
            student.issue_date,
            id

        ]);
    }

    static async delete(id) {
        await pool.execute(
            "DELETE FROM students WHERE id=?",
            [id]
        );
    }

}

export default Student;
