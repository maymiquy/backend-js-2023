const Student = require('../models/Student')


class StudentController {
    index = async (req, res) => {
        const students = await Student.getAllData()
        const response = {
            message: 'Menampilkan semua data student',
            data: students
        }

        res.status(200).json(response)
    }

    store = async (req, res) => {
        const { nama, nim, email, jurusan } = req.body
        const students = await Student.createData(req.body)
        const response = {
            message: 'Menambahkan data student',
            data: students
        }

        res.status(201).json(response)
    }

    update = (req, res) => {
        const { id } = req.params
        const { name } = req.body

        students[id] = name

        const response = {
            message: `Memperbarui data student id: ${id} dengan nama: ${name}`,
            data: students
        }

        res.json(response)
    }

    destroy = (req, res) => {
        const { id } = req.params
        const { name } = req.body

        students.splice(id, 1)

        const response = {
            message: `Menghapus data student id: ${id} dengan nama: ${name}`,
            data: students
        }

        res.json(response)
    }
}

const object = new StudentController()

module.exports = object