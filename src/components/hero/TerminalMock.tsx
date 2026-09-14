export function TerminalMock() {
  return (
    <div className="bg-ink-900 light:bg-ink-100 border-ink-700 light:border-ink-200 w-full max-w-md overflow-hidden rounded-xl border shadow-2xl shadow-black/30">
      <div className="border-ink-700 light:border-ink-200 flex items-center gap-1.5 border-b px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
        <span className="text-ink-400 ml-3 font-mono text-xs">engineer.ts</span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-sm leading-relaxed">
        <code>
          <span className="text-ink-500">{'// senior full-stack, ai-curious'}</span>
          {'\n'}
          <span className="text-accent-400">const</span> engineer = {'{'}
          {'\n  '}name: <span className="text-signal-400">'Moses Akash J'</span>,
          {'\n  '}role: <span className="text-signal-400">'Senior Full-Stack Developer'</span>,
          {'\n  '}experience: <span className="text-signal-400">'5+ years'</span>,
          {'\n  '}stack: [
          <span className="text-signal-400">'React'</span>,{' '}
          <span className="text-signal-400">'Vue'</span>,{' '}
          <span className="text-signal-400">'.NET'</span>,{' '}
          <span className="text-signal-400">'Laravel'</span>,{' '}
          <span className="text-signal-400">'Node'</span>],
          {'\n  '}exploring: [
          <span className="text-signal-400">'AI Agents'</span>,{' '}
          <span className="text-signal-400">'MCP'</span>,{' '}
          <span className="text-signal-400">'Claude Code'</span>],
          {'\n'}
          {'}'}
        </code>
      </pre>
    </div>
  )
}
