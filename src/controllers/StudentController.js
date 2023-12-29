const Student = require('../models/Student')


class StudentController {
    index = async (req, res) => {
        const students = await Student.getAllData()

        if (students.length > 0) {
            const response = {
                message: 'Berhasil menampilkan semua data student',
                data: students
            }
            return res.status(200).json(response)
        } else {
            const response = {
                message: 'Gagal menampilkan, data student belum tersedia',
            }
            return res.status(200).json(response)
        }
    }

    store = async (req, res) => {
        const { nama, nim, email, jurusan } = req.body
        const student = await Student.createData(req.body)

        if (!nama || !nim || !email || !jurusan) {
            const response = {
                message: 'Gagal menambahkan data student. Input data tidak lengkap!',
            }

            return res.status(422).json(response)
        } else {
            const response = {
                message: 'Berhasil menambahkan data student',
                data: student
            }

            return res.status(201).json(response)
        }
    }

    update = async (req, res) => {
        const { id } = req.params
        const student = await Student.getDataById(id)

        if (student) {
            const studentUpdated = await Student.updateDataById(id, req.body)

            const response = {
                message: 'Berhasil mengupdate data student',
                data: studentUpdated
            }

            return res.status(200).json(response)
        } else {
            const error = {
                message: 'Gagal mengupdate, Data tidak ditemukan (not found)',
            }

            return res.status(404).json(error)
        }
    }

    destroy = async (req, res) => {
        const { id } = req.params
        const student = await Student.getDataById(id)

        if (student) {
            await Student.destroyDataById(id)

            const response = {
                message: 'Berhasil menghapus data student',
            }

            return res.status(200).json(response)
        } else {
            const error = {
                message: 'Gagal menghapus, Data tidak ditemukan (not found)',
            }

            return res.status(404).json(error)
        }
    }

    show = async (req, res) => {
        const { id } = req.params
        const student = await Student.getDataById(id)

        if (student) {
            const response = {
                message: 'Berhasil menampilkan data student berdasrkan id',
                data: student
            }

            return res.status(200).json(response)
        } else {
            const error = {
                message: 'Gagal menampilkan, Data tidak ditemukan (not found)',
            }

            return res.status(404).json(error)
        }
    }
}

const object = new StudentController()

module.exports = object