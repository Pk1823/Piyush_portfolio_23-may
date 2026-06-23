import { useEffect, useState } from 'react'
import { HANDLES } from '../data/links'

const LEETCODE_QUERY = `
  query getUserProfile($username: String!) {
    matchedUser(username: $username) {
      username
      profile {
        ranking
        realName
        aboutMe
        userAvatar
        skillTags
      }
      submitStats {
        acSubmissionNum {
          difficulty
          count
        }
      }
      languageProblemCount {
        languageName
        problemsSolved
      }
      tagProblemCounts {
        fundamental { tagName problemsSolved }
        intermediate { tagName problemsSolved }
        advanced { tagName problemsSolved }
      }
    }
  }
`

async function fetchGitHub() {
  const [userRes, reposRes] = await Promise.all([
    fetch(`https://api.github.com/users/${HANDLES.github}`),
    fetch(`https://api.github.com/users/${HANDLES.github}/repos?sort=updated&per_page=12`),
  ])
  if (!userRes.ok) throw new Error('GitHub fetch failed')
  const user = await userRes.json()
  const repos = reposRes.ok ? await reposRes.json() : []
  return { user, repos }
}

async function fetchLeetCode() {
  const res = await fetch('https://leetcode.com/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: LEETCODE_QUERY,
      variables: { username: HANDLES.leetcode },
    }),
  })
  if (!res.ok) throw new Error('LeetCode fetch failed')
  const json = await res.json()
  return json.data?.matchedUser ?? null
}

async function fetchCodeforces() {
  const base = import.meta.env.DEV ? '/api/cf' : 'https://codeforces.com/api'
  const res = await fetch(`${base}/user.info?handles=${HANDLES.codeforces}`)
  if (!res.ok) return null
  const json = await res.json()
  if (json.status !== 'OK') return null
  return json.result?.[0] ?? null
}

export function useProfileData() {
  const [data, setData] = useState({
    github: null,
    repos: [],
    leetcode: null,
    codeforces: null,
    loading: true,
    error: null,
  })

  useEffect(() => {
    let cancelled = false

    async function load() {
      const results = await Promise.allSettled([
        fetchGitHub(),
        fetchLeetCode(),
        fetchCodeforces(),
      ])

      if (cancelled) return

      const [gh, lc, cf] = results
      setData({
        github: gh.status === 'fulfilled' ? gh.value.user : null,
        repos: gh.status === 'fulfilled' ? gh.value.repos : [],
        leetcode: lc.status === 'fulfilled' ? lc.value : null,
        codeforces: cf.status === 'fulfilled' ? cf.value : null,
        loading: false,
        error: results.every((r) => r.status === 'rejected')
          ? 'Unable to load profile data'
          : null,
      })
    }

    load()
    return () => { cancelled = true }
  }, [])

  return data
}
