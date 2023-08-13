import excuteQuery from './db';

export async function authGoogle({ email, name, profile_img }: { email: string, name: string, profile_img: string }) {
  return new Promise((resolve, reject) => {
    excuteQuery(`SELECT email FROM users WHERE email = '${email}'`, (err: Error, result: Array<String>) => {
      if (err) {
        reject(err)
      } else {
        if (!result.length) {
          excuteQuery(`SELECT COUNT(email) as total FROM users;`, (err: Error, result: any) => {
            if (err) {
              reject(err)
            } else {
              let queryInsert = `INSERT INTO users (email, name, profile_img) VALUE ('${email}', '${name}', '${profile_img}');`
              if (+result[0].total < 20) {
                queryInsert = `INSERT INTO users (email, name, profile_img, credit) VALUE ('${email}', '${name}', '${profile_img}', 3);`
              }
              excuteQuery(queryInsert, (err: Error, result: null) => {
                if (err) {
                  reject(err)
                } else {
                  resolve("CREATE")
                }
              });
            }
          });
        } else {
          resolve("READ")
        }
      }
    })
  })
}

export async function infoLoggedUser(email: string) {
  return new Promise((resolve, reject) => {
    excuteQuery(`SELECT hint, credit FROM users WHERE email = '${email}'`, (err: Error, result: Array<String>) => {
      if (err) {
        reject(err)
      } else {
        if (!result.length) {
          reject("NOTFOUND")
        } else {
          resolve(result[0])
        }
      }
    })
  })
}