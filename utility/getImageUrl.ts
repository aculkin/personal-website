const AWS_BUCKET_BASE_URL =
  'https://culkin-website-images.s3.us-west-2.amazonaws.com'

export const getImageUrl = (awsKey: string) => {
  return `${AWS_BUCKET_BASE_URL}/${awsKey}`
}

export default getImageUrl
