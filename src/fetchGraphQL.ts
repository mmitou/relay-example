export async function fetchGraphQL<T>(
  text: string,
  variables: object
): Promise<T> {
  const GITHUB_AUTH_TOKEN = process.env['GITHUB_AUTH_TOKEN']
  if (GITHUB_AUTH_TOKEN == null) {
    throw new Error('GITHUB_AUTH_TOKEN not defined')
  }

  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `bearer ${GITHUB_AUTH_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  })

  const result = (await response.json()) as T
  return result
}
