const db = require('../config/dbconnection')

class Student {
    static getAllData() {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM students', (err, result) => {
                if (err) {
                    return reject(err)
                } else {
                    return resolve(result)
                }
            })
        })
    }

    static async createData(data) {
        const id = await new Promise((resolve, reject) => {
            db.query('INSERT INTO students SET ?', data, (err, result) => {
                if (err) {
                    return reject(err)
                } else {
                    return resolve('id : ' + result.insertId)
                }
            })
        })

        const student = await this.getDataById(id)
        return student
    }

    static async updateDataById(id, data) {
        await new Promise((resolve, reject) => {
            db.query('UPDATE students SET ? WHERE id = ?', [data, id], (err, result) => {
                if (err) {
                    return reject(err)
                } else {
                    return resolve(result)
                }
            })
        })

        const student = await this.getDataById(id)
        return student
    }

    static async destroyDataById(id) {
        return new Promise((resolve, reject) => {
            db.query('DELETE FROM students WHERE id = ?', id, (err, result) => {
                if (err) {
                    return reject(err)
                } else {
                    return resolve(result)
                }
            })
        })
    }

    static async getDataById(id) {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM students WHERE id = ?', id, (err, result) => {
                const [student] = result

                if (err) {
                    return reject(err)
                } else {
                    return resolve(student)
                }
            })
        })
    }
}

module.exports = Student