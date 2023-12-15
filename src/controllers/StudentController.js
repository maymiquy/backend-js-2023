const { request, response } = require('express')
const students = require('../data/students')

class StudentController {
    index = (req, res) => {
        const response = {
            message: 'Menampilkan semua data student',
            data: students
        }

        res.json(response)
    }

    store = (req, res) => {
        const { name } = req.body
        students.push(name)

        const response = {
            message: `Menambahkan data student dengan nama: ${name}`,
            data: students
        }

        res.json(response)
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