function StatCard({ platform, handle, color, children, loading }) {
  return (
    <div className={`stat-card stat-card--static stat-card--${platform.toLowerCase()}`}>
      <div className="stat-card__header">
        <span className="stat-card__dot" style={{ background: color }} />
        <span className="stat-card__platform">{platform}</span>
        <span className="stat-card__handle mono">@{handle}</span>
      </div>
      {loading ? (
        <div className="stat-card__skeleton" />
      ) : (
        <div className="stat-card__body">{children}</div>
      )}
      <span className="stat-card__live">● Live data</span>
    </div>
  )
}

export default function Stats({ github, leetcode, codeforces, loading }) {
  const lcStats = leetcode?.submitStats?.acSubmissionNum ?? []
  const total = lcStats.find((s) => s.difficulty === 'All')?.count ?? 0
  const easy = lcStats.find((s) => s.difficulty === 'Easy')?.count ?? 0
  const medium = lcStats.find((s) => s.difficulty === 'Medium')?.count ?? 0
  const hard = lcStats.find((s) => s.difficulty === 'Hard')?.count ?? 0

  const lcTags = [
    ...(leetcode?.tagProblemCounts?.fundamental ?? []),
    ...(leetcode?.tagProblemCounts?.intermediate ?? []),
  ].slice(0, 4)

  return (
    <section id="stats" className="section stats">
      <div className="section__header">
        <span className="section__tag">Coding Profiles</span>
        <h2>Live platform statistics</h2>
        <p className="section__sub">Real-time data displayed on-site — no redirects needed</p>
      </div>

      <div className="stats__grid">
        <StatCard platform="GitHub" handle="Pk1823" color="#a78bfa" loading={loading}>
          <div className="stat-row">
            <div className="stat-item">
              <span className="stat-item__value">{github?.public_repos ?? '—'}</span>
              <span className="stat-item__label">Repositories</span>
            </div>
            <div className="stat-item">
              <span className="stat-item__value">{github?.followers ?? '—'}</span>
              <span className="stat-item__label">Followers</span>
            </div>
            <div className="stat-item">
              <span className="stat-item__value">{github?.following ?? '—'}</span>
              <span className="stat-item__label">Following</span>
            </div>
          </div>
        </StatCard>

        <StatCard platform="LeetCode" handle="pk2428" color="#fbbf24" loading={loading}>
          <div className="stat-item stat-item--large">
            <span className="stat-item__value">{total}</span>
            <span className="stat-item__label">Problems Solved</span>
          </div>
          <div className="stat-bars">
            <div className="stat-bar">
              <span>Easy</span>
              <div className="stat-bar__track"><div className="stat-bar__fill easy" style={{ width: total ? `${(easy / total) * 100}%` : '0%' }} /></div>
              <span className="mono">{easy}</span>
            </div>
            <div className="stat-bar">
              <span>Medium</span>
              <div className="stat-bar__track"><div className="stat-bar__fill medium" style={{ width: total ? `${(medium / total) * 100}%` : '0%' }} /></div>
              <span className="mono">{medium}</span>
            </div>
            <div className="stat-bar">
              <span>Hard</span>
              <div className="stat-bar__track"><div className="stat-bar__fill hard" style={{ width: total ? `${(hard / total) * 100}%` : '0%' }} /></div>
              <span className="mono">{hard}</span>
            </div>
          </div>
          {lcTags.length > 0 && (
            <div className="stat-tags">
              {lcTags.map((t) => (
                <span key={t.tagName} className="tag tag--sm">{t.tagName} ({t.problemsSolved})</span>
              ))}
            </div>
          )}
        </StatCard>

        <StatCard platform="Codeforces" handle="contri25" color="#3b82f6" loading={loading}>
          {codeforces ? (
            <>
              <div className="stat-row">
                <div className="stat-item">
                  <span className="stat-item__value">{codeforces.rating ?? '—'}</span>
                  <span className="stat-item__label">Rating</span>
                </div>
                <div className="stat-item">
                  <span className="stat-item__value">{codeforces.maxRating ?? '—'}</span>
                  <span className="stat-item__label">Max Rating</span>
                </div>
              </div>
              <p className="stat-rank">{codeforces.rank ?? 'Unrated'} · max {codeforces.maxRank ?? '—'}</p>
            </>
          ) : (
            <p className="stat-fallback">
              Competitive programming profile — stats load when Codeforces API is available.
            </p>
          )}
        </StatCard>
      </div>
    </section>
  )
}
