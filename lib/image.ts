import excuteQuery from './db';

interface Image {
  id: string,
  title: string,
  image: string,
  feature: string,
  email: string,
}

export async function createImage({ id, title, image, feature, email }: Image) {
  let date = new Date().toISOString().split("T")[0]
  let queryText = `INSERT INTO images (id, title, image, feature, email, created)
  VALUES ('${id}', '${title}', '${image}','${feature}','${email}', '${date}')`
  return new Promise((resolve, reject) => {
    excuteQuery(queryText, (err: Error, result: Array<String>) => {
      if (err) {
        reject(err)
      } else {
        let queryIncrement = `UPDATE users SET hint = hint + 1 WHERE email = '${email}'`
        excuteQuery(queryIncrement, (err: Error, res: Array<String>) => {
          if (err) {
            reject(err)
          } else {
            resolve(result)
          }
        })

      }
    })
  })

}

export async function resultImageOne(id: string, email: string) {
  let queryText = `SELECT * FROM images WHERE id = '${id}' AND email = '${email}'`
  return new Promise((resolve, reject) => {
    excuteQuery(queryText, (err: Error, result: Array<String>) => {
      if (err) {
        reject(err)
      } else {
        resolve(result)
      }
    })
  })
}


export async function myImageCollection(email: string) {
  let queryText = `SELECT * FROM images WHERE email = '${email}'`
  return new Promise((resolve, reject) => {
    excuteQuery(queryText, (err: Error, result: Array<String>) => {
      if (err) {
        reject(err)
      } else {
        resolve(result)
      }
    })
  })

}