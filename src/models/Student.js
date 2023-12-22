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

    static createData(data) {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO students SET ?', data, (err, result) => {
                if (err) {
                    return reject(err)
                } else {
                    return resolve('id : ' + result.insertId)
                }
            })
        })
    }
}

module.exports = Student