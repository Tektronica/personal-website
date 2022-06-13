import { getImageSize } from "next/dist/server/image-optimizer"

export class B2 {
  // initializing an object instance of B2 class.
  constructor() {
    this.id = process.env.BACKBLAZE_KEY_ID
    this.key = process.env.BACKBLAZE_APP_KEY
    this.bucketId = process.env.BACKBLAZE_BUCKET_ID
    this.b2Path = process.env.BACKBLAZE_URL

    this.cachedClient = null
    this.apiURL = null
    this.authorizationToken = null
  }

  async connectToBackblaze() {
    // https://www.backblaze.com/b2/docs/calling.html
    // https://www.backblaze.com/b2/docs/b2_authorize_account.html

    // used to log in to the B2 API
    const id_and_key = `${this.id}:${this.key}`
    const basic_auth_string = 'Basic ' + Buffer.from(id_and_key, 'binary').toString('base64')
    const url = 'https://api.backblazeb2.com/b2api/v2/b2_authorize_account'

    // returns an authorization token that can be used for account-level operations
    // curl https://api.backblazeb2.com/b2api/v2/b2_authorize_account -u id:key
    const response = await fetch(url, {
      headers: {
        Authorization: basic_auth_string
      }
    })

    const response_data = await response.json()

    //  url used as the base URL for subsequent API calls
    this.apiURL = response_data.apiUrl
    this.authorizationToken = response_data.authorizationToken

    return { apiURL: this.apiURL, authorizationToken: this.authorizationToken }

  }

  async listBuckets() {
    // When an authorization token is restricted to a bucket,
    // you must include the bucketId or bucketName of that bucket in the request,
    // or the request will be denied.

    const url = `${this.apiURL}/b2api/v2/b2_list_buckets`

    // package HTTP Message Body Parameters
    const postParams = { "accountId": `${this.id}`, "bucketId": `${this.bucketId}`, "bucketTypes": ["allPrivate", "allPublic"] }
    const postStringified = JSON.stringify(postParams)
    const postData = new Uint8Array(new TextEncoder().encode(postStringified))

    // send request to api waiting for response (status 200)
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `${this.authorizationToken}`,
        "Content-Type": "application/x-www-form-urlencoded",
        "Charset": "UTF-8",
        "Content-Length": postData.length,
      },
      body: postData,
    })

    const response_data = await response.json()

    return response_data
  }

  // args:
  // - bucketId
  // - startFileName (optional)
  // - maxFileCount (optional)
  async listFileNames(prefix) {

    // Lists the names of all files in a bucket, starting at a given name. 
    const url = `${this.apiURL}/b2api/v2/b2_list_file_names`

    // package HTTP Message Body Parameters
    const postParams = { "bucketId": `${this.bucketId}`, "prefix": `${prefix}` }
    const postStringified = JSON.stringify(postParams)
    const postData = new Uint8Array(new TextEncoder().encode(postStringified))

    // send request to api waiting for response (status 200)
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `${this.authorizationToken}`,
        "Content-Type": "application/x-www-form-urlencoded",
        "Charset": "UTF-8",
        "Content-Length": postData.length,
      },
      body: postData,
    })

    const response_data = await response.json()

    return response_data
  }

}

