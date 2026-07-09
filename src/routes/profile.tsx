import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { Camera, LogOut, Trash2, Download, Shield, Bell } from "lucide-react";
import { useState } from "react";
import logoAsset from "@/assets/vibe-campus-logo.png.asset.json";

export const Route = createFileRoute("/profile")({ component: Profile });

function Profile() {
  const [name, setName] = useState("Student");
  const [bio, setBio] = useState("Chasing CA Foundation · early riser · caffeine.");
  const [career, setCareer] = useState("CA");
  const [level, setLevel] = useState("Foundation");
  const [date, setDate] = useState("2026-11-01");
  const [notif, setNotif] = useState(true);
  const [tfa, setTfa] = useState(false);
  const [reminder, setReminder] = useState("18:00");
  const [confirmDel, setConfirmDel] = useState(false);
  const nav = useNavigate();

  return (
    <AppShell title="Profile">
      <h1 className="mb-6 text-2xl font-bold text-white sm:text-3xl">Profile & Settings</h1>

      <div className="grid gap-4 lg:grid-cols-3">
        {/* Profile info */}
        <div className="glass-strong rounded-2xl p-6 lg:col-span-2">
          <div className="flex flex-wrap items-center gap-5">
            <div className="relative">
              <img src={logoAsset.url} className="h-20 w-20 rounded-full object-cover ring-2 ring-white/20" alt="avatar" />
              <button className="absolute -bottom-1 -right-1 grid h-7 w-7 place-items-center rounded-full bg-cyan-400 text-slate-900 ring-2 ring-slate-950"><Camera size={14} /></button>
            </div>
            <div className="min-w-0">
              <input value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded-lg bg-transparent text-xl font-bold text-white outline-none focus:bg-white/5 px-2 py-1" />
              <div className="text-sm text-white/50 px-2">student@vibecampus.com</div>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <FieldSelect label="Career Goal" value={career} onChange={setCareer} options={["CA","Engineering","Freelancing","PM","Designer","Other"]} />
            <FieldSelect label="Level" value={level} onChange={setLevel} options={["Foundation","Intermediate","Advanced","Year 1","Year 2","Year 3","Year 4"]} />
            <Field label="Exam Date" type="date" value={date} onChange={setDate} />
            <Field label="Reminder time" type="time" value={reminder} onChange={setReminder} />
          </div>

          <div className="mt-4">
            <label className="mb-1 block text-xs text-white/60">Bio</label>
            <textarea value={bio} onChange={(e) => setBio(e.target.value)} rows={3}
              className="w-full rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-white outline-none focus:border-cyan-400/60" />
          </div>

          {/* Glow up meter */}
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="mb-2 flex items-center justify-between text-xs text-white/70">
              <span>Glow Up Meter</span><span className="text-cyan-300">Level 4 · 62%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/10">
              <div className="h-full bg-gradient-to-r from-cyan-400 to-indigo-500" style={{ width: "62%" }} />
            </div>
            <div className="mt-2 grid grid-cols-3 gap-2 text-center text-xs text-white/60">
              <div>🔥 12-day streak</div><div>📝 14 tests</div><div>🎯 18 milestones</div>
            </div>
          </div>

          <button className="mt-6 rounded-xl bg-cyan-400 px-5 py-2 text-sm font-semibold text-slate-900 hover:bg-cyan-300">Save changes</button>
        </div>

        {/* Settings sidebar */}
        <div className="space-y-4">
          <Card title="Account" icon={Shield}>
            <button className="w-full rounded-lg border border-white/10 px-3 py-2 text-left text-sm text-white/80 hover:bg-white/5">Change password</button>
            <Toggle label="Two-factor auth" checked={tfa} onChange={setTfa} />
            <div className="text-xs text-white/50">Last login · today, 09:12</div>
          </Card>

          <Card title="Preferences" icon={Bell}>
            <Toggle label="Email notifications" checked={notif} onChange={setNotif} />
            <div>
              <div className="mb-1 text-xs text-white/60">Theme</div>
              <div className="grid grid-cols-4 gap-2">
                {[
                  ["from-cyan-400","to-indigo-500"],
                  ["from-fuchsia-400","to-violet-600"],
                  ["from-emerald-400","to-teal-600"],
                  ["from-amber-400","to-rose-500"],
                ].map(([a,b], i) => <div key={i} className={`h-8 rounded-lg bg-gradient-to-br ${a} ${b}`} />)}
              </div>
            </div>
          </Card>

          <Card title="Data & Privacy" icon={Download}>
            <button className="inline-flex w-full items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-left text-sm text-white/80 hover:bg-white/5">
              <Download size={14} /> Export my data
            </button>
            <Link to="/legal" className="block text-xs text-cyan-300 hover:underline">Privacy Policy</Link>
            <Link to="/legal" className="block text-xs text-cyan-300 hover:underline">Terms of Service</Link>
          </Card>

          <Card title="Danger zone" icon={LogOut} danger>
            <button onClick={() => nav({ to: "/" })} className="inline-flex w-full items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-left text-sm text-white hover:bg-white/5">
              <LogOut size={14} /> Sign out
            </button>
            {!confirmDel ? (
              <button onClick={() => setConfirmDel(true)} className="inline-flex w-full items-center gap-2 rounded-lg border border-rose-400/30 px-3 py-2 text-left text-sm text-rose-300 hover:bg-rose-400/10">
                <Trash2 size={14} /> Delete account
              </button>
            ) : (
              <div className="rounded-lg border border-rose-400/40 bg-rose-400/10 p-3 text-xs text-rose-200">
                Are you sure? This is permanent.
                <div className="mt-2 flex gap-2">
                  <button className="rounded bg-rose-500 px-3 py-1 text-white">Delete</button>
                  <button onClick={() => setConfirmDel(false)} className="rounded border border-white/15 px-3 py-1">Cancel</button>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </AppShell>
  );
}

function Field({ label, value, onChange, type = "text" }: { label: string; value: string; onChange: (v: string) => void; type?: string }) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs text-white/60">{label}</span>
      <input type={type} value={value} onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none focus:border-cyan-400/60" />
    </label>
  );
}
function FieldSelect({ label, value, onChange, options }: any) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs text-white/60">{label}</span>
      <select value={value} onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-white/10 bg-slate-900/70 px-3 py-2 text-sm text-white outline-none focus:border-cyan-400/60">
        {options.map((o: string) => <option key={o}>{o}</option>)}
      </select>
    </label>
  );
}
function Toggle({ label, checked, onChange }: { label: string; checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <label className="flex items-center justify-between text-sm text-white/80">
      {label}
      <button type="button" onClick={() => onChange(!checked)}
        className={`relative h-5 w-9 rounded-full transition ${checked ? "bg-cyan-400" : "bg-white/15"}`}>
        <span className={`absolute top-0.5 h-4 w-4 rounded-full bg-white transition ${checked ? "left-4" : "left-0.5"}`} />
      </button>
    </label>
  );
}
function Card({ title, icon: Icon, children, danger }: any) {
  return (
    <div className={`glass rounded-2xl p-5 ${danger ? "ring-1 ring-rose-400/20" : ""}`}>
      <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-white"><Icon size={16} /> {title}</div>
      <div className="space-y-3">{children}</div>
    </div>
  );
}
