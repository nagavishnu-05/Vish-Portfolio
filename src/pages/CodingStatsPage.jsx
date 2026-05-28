import React, { useEffect, useState } from 'react';
import { Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const leetcodeUsername = 'nagavishnukarthikbs';
const leetcodeProfileUrl = `https://leetcode.com/u/${leetcodeUsername}/`;
const leetcodeApiUrl = `https://leetcode-stats-api.vercel.app/${leetcodeUsername}`;

const getDifficultyProgress = (count, total) => (total ? Math.round((count / total) * 100) : 0);



export default function CodingStatsPage() {
  const [leetcodeStats, setLeetCodeStats] = useState(null);
  const [leetcodeLoading, setLeetCodeLoading] = useState(true);
  const [leetcodeError, setLeetCodeError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    let mounted = true;

    const loadLeetCodeStats = async () => {
      try {
        const response = await fetch(leetcodeApiUrl, { signal: controller.signal });
        if (!response.ok) throw new Error('Failed to fetch LeetCode stats');
        const data = await response.json();
        if (mounted) setLeetCodeStats(data);
      } catch (error) {
        if (error.name !== 'AbortError' && mounted) setLeetCodeError(true);
      } finally {
        if (mounted) setLeetCodeLoading(false);
      }
    };

    loadLeetCodeStats();
    return () => { mounted = false; controller.abort(); };
  }, []);

  const easyCount = leetcodeStats?.easySolved ?? 0;
  const mediumCount = leetcodeStats?.mediumSolved ?? 0;
  const hardCount = leetcodeStats?.hardSolved ?? 0;
  const totalCount = leetcodeStats?.totalSolved ?? 0;

  return (
    <div className="flex flex-col gap-6 py-8 lg:py-12 max-w-6xl mx-auto px-4 md:px-8">
      <motion.header initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} className="space-y-2">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-wider">
          <Zap size={14} /> LeetCode
        </div>
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Coding Stats</h1>
        </div>
        {leetcodeError && (
          <div className="rounded-3xl border border-red-200 bg-red-50 dark:bg-red-950/80 dark:border-red-800 p-4 text-sm text-red-700 dark:text-red-300">
            Unable to load your LeetCode stats. Please refresh or try again later.
          </div>
        )}
      </motion.header>

      {leetcodeLoading && !leetcodeError ? (
        <div className="grid gap-6 xl:grid-cols-[1.4fr_1fr]">
          <motion.div animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 2, repeat: Infinity }} className="rounded-4xl bg-white/90 dark:bg-zinc-950/90 border border-zinc-200/70 dark:border-zinc-800/70 shadow-xl shadow-black/5 p-8">
            <div className="space-y-6">
              <div className="h-12 bg-linear-to-r from-zinc-200 to-zinc-100 dark:from-zinc-800 dark:to-zinc-900 rounded-2xl" />
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-4xl bg-linear-to-br from-zinc-200 to-zinc-100 dark:from-zinc-800 dark:to-zinc-900 h-40" />
                <div className="rounded-4xl bg-linear-to-br from-zinc-200 to-zinc-100 dark:from-zinc-800 dark:to-zinc-900 h-40" />
              </div>
            </div>
          </motion.div>
          <div className="space-y-6">
            <motion.div animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 2, repeat: Infinity, delay: 0.1 }} className="rounded-4xl bg-white/90 dark:bg-zinc-950/90 border border-zinc-200/70 dark:border-zinc-800/70 shadow-xl shadow-black/5 p-6">
              <div className="space-y-4">
                <div className="h-6 bg-linear-to-r from-zinc-200 to-zinc-100 dark:from-zinc-800 dark:to-zinc-900 rounded-lg w-1/2" />
                <div className="space-y-3">
                  <div className="space-y-2">
                    <div className="h-4 bg-linear-to-r from-zinc-200 to-zinc-100 dark:from-zinc-800 dark:to-zinc-900 rounded w-1/4" />
                    <div className="h-2 bg-linear-to-r from-zinc-200 to-zinc-100 dark:from-zinc-800 dark:to-zinc-900 rounded-full" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-linear-to-r from-zinc-200 to-zinc-100 dark:from-zinc-800 dark:to-zinc-900 rounded w-1/4" />
                    <div className="h-2 bg-linear-to-r from-zinc-200 to-zinc-100 dark:from-zinc-800 dark:to-zinc-900 rounded-full" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-linear-to-r from-zinc-200 to-zinc-100 dark:from-zinc-800 dark:to-zinc-900 rounded w-1/4" />
                    <div className="h-2 bg-linear-to-r from-zinc-200 to-zinc-100 dark:from-zinc-800 dark:to-zinc-900 rounded-full" />
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 2, repeat: Infinity, delay: 0.2 }} className="rounded-4xl bg-white/90 dark:bg-zinc-950/90 border border-zinc-200/70 dark:border-zinc-800/70 shadow-xl shadow-black/5 p-6">
              <div className="h-6 bg-linear-to-r from-zinc-200 to-zinc-100 dark:from-zinc-800 dark:to-zinc-900 rounded-lg mb-4 w-1/2" />
              <div className="flex gap-3">
                <div className="w-16 h-16 rounded-3xl bg-linear-to-br from-zinc-200 to-zinc-100 dark:from-zinc-800 dark:to-zinc-900" />
                <div className="w-16 h-16 rounded-3xl bg-linear-to-br from-zinc-200 to-zinc-100 dark:from-zinc-800 dark:to-zinc-900" />
                <div className="w-16 h-16 rounded-3xl bg-linear-to-br from-zinc-200 to-zinc-100 dark:from-zinc-800 dark:to-zinc-900" />
              </div>
            </motion.div>
          </div>
        </div>
      ) : (
        <div className="grid gap-6 xl:grid-cols-[1.4fr_1fr]">
        <motion.section
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-4xl bg-white/90 dark:bg-zinc-950/90 border border-zinc-200/70 dark:border-zinc-800/70 shadow-xl shadow-black/5 p-8"
        >
          <div className="flex flex-col gap-6">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-wider">
                <Zap size={14} /> LeetCode Overview
              </span>
              <h2 className="mt-6 text-4xl font-extrabold tracking-tight">Detailed LeetCode performance</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-4xl bg-zinc-100 p-6 dark:bg-zinc-900">
                <p className="text-xs uppercase tracking-[0.24em] text-zinc-500 font-semibold">Total</p>
                <p className="mt-5 text-5xl font-extrabold tracking-tight text-zinc-950 dark:text-white">{leetcodeStats ? totalCount : '—'}</p>
              </div>
              <div className="rounded-4xl bg-zinc-100 p-6 dark:bg-zinc-900">
                <p className="text-xs uppercase tracking-[0.24em] text-zinc-500 font-semibold">Ranking</p>
                <p className="mt-5 text-5xl font-extrabold tracking-tight text-emerald-600 dark:text-emerald-400">{leetcodeStats ? `#${new Intl.NumberFormat().format(leetcodeStats.ranking)}` : '—'}</p>
              </div>
            </div>
          </div>
        </motion.section>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-4xl bg-white/90 dark:bg-zinc-950/90 border border-zinc-200/70 dark:border-zinc-800/70 shadow-xl shadow-black/5 p-6"
          >
            <p className="text-xs uppercase tracking-[0.24em] text-zinc-500 font-semibold">Difficulty Breakdown</p>
            <div className="mt-6 space-y-5">
              <div>
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.24em] text-zinc-500 font-semibold mb-2">
                  <span>Easy</span>
                  <span>{leetcodeStats ? easyCount : '—'}</span>
                </div>
                <div className="h-2 rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
                  <div className="h-full rounded-full bg-emerald-500" style={{ width: `${getDifficultyProgress(easyCount, totalCount)}%` }} />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.24em] text-zinc-500 font-semibold mb-2">
                  <span>Medium</span>
                  <span>{leetcodeStats ? mediumCount : '—'}</span>
                </div>
                <div className="h-2 rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
                  <div className="h-full rounded-full bg-amber-500" style={{ width: `${getDifficultyProgress(mediumCount, totalCount)}%` }} />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.24em] text-zinc-500 font-semibold mb-2">
                  <span>Hard</span>
                  <span>{leetcodeStats ? hardCount : '—'}</span>
                </div>
                <div className="h-2 rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
                  <div className="h-full rounded-full bg-fuchsia-500" style={{ width: `${getDifficultyProgress(hardCount, totalCount)}%` }} />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-4xl bg-white/90 dark:bg-zinc-950/90 border border-zinc-200/70 dark:border-zinc-800/70 shadow-xl shadow-black/5 p-6"
          >
            <p className="text-xs uppercase tracking-[0.24em] text-zinc-500 font-semibold">Batch Achievements</p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <img src="/50days.png" alt="50 days" className="w-16 h-16 rounded-3xl border border-zinc-200 dark:border-zinc-800" />
              <img src="/100days.png" alt="100 days" className="w-16 h-16 rounded-3xl border border-zinc-200 dark:border-zinc-800" />
              <img src="/august.png" alt="august" className="w-16 h-16 rounded-3xl border border-zinc-200 dark:border-zinc-800" />
            </div>
            <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">Recent batch badges and progress highlights from your coding streaks.</p>
          </motion.div>
        </div>
        </div>
      )}
    </div>
  );
}
