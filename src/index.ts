export const sum = async (event, context) => {
  console.log(event)
  return JSON.stringify({ message: 'hi from serverless' })
}
