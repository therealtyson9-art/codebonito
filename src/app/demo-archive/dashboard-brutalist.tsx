export default function DashboardBrutalistDemo() {
  const systemStats = [
    { label: "CPU_LOAD", value: "47.3%", bar: 47 },
    { label: "MEM_USAGE", value: "12.8 GB / 32 GB", bar: 40 },
    { label: "DISK_IO", value: "284 MB/s", bar: 62 },
    { label: "NET_THROUGHPUT", value: "1.2 Gbps", bar: 78 },
  ];

  const servers = [
    { id: "SRV-001", name: "us-east-prod-01", status: "ONLINE", cpu: "32%", mem: "8.2 GB", uptime: "142d 07h" },
    { id: "SRV-002", name: "us-west-prod-01", status: "ONLINE", cpu: "58%", mem: "14.1 GB", uptime: "89d 14h" },
    { id: "SRV-003", name: "eu-central-prod-01", status: "WARNING", cpu: "87%", mem: "28.4 GB", uptime: "21d 03h" },
    { id: "SRV-004", name: "ap-south-prod-01", status: "ONLINE", cpu: "24%", mem: "6.7 GB", uptime: "204d 19h" },
    { id: "SRV-005", name: "us-east-staging-01", status: "OFFLINE", cpu: "0%", mem: "0 GB", uptime: "0d 00h" },
  ];

  const logs = [
    { time: "03:24:18", level: "INFO", msg: "[nginx] 200 GET /api/v2/metrics - 12ms" },
    { time: "03:24:17", level: "WARN", msg: "[redis] connection pool nearing capacity (87/100)" },
    { time: "03:24:15", level: "INFO", msg: "[postgres] query executed: SELECT * FROM events LIMIT 500 - 34ms" },
    { time: "03:24:12", level: "ERROR", msg: "[worker-3] timeout exceeded on job queue batch_process_42819" },
    { time: "03:24:09", level: "INFO", msg: "[k8s] pod nexus-api-7f4d8b scaled to 4 replicas" },
    { time: "03:24:05", level: "INFO", msg: "[cdn] cache purge completed for zone us-east (247 objects)" },
    { time: "03:24:01", level: "WARN", msg: "[ssl] certificate for *.nexus.io expires in 14 days" },
  ];

  const alerts = [
    { severity: "CRITICAL", msg: "SRV-003 CPU exceeding 85% threshold for 12 minutes", time: "03:12" },
    { severity: "WARNING", msg: "Redis connection pool at 87% capacity on us-east cluster", time: "03:18" },
    { severity: "INFO", msg: "Scheduled maintenance window begins in 4 hours", time: "02:45" },
    { severity: "WARNING", msg: "SSL certificate renewal required within 14 days", time: "01:30" },
  ];

  const uptimeGrid = [
    [1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  ];

  return (
    <div style={{ fontFamily: "'Share Tech Mono', monospace", backgroundColor: "#000000", color: "#4ade80" }} className="min-h-screen p-6">
      <link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap" rel="stylesheet" />

      {/* Command Nav */}
      <div className="mb-6" style={{ borderBottom: "1px solid #166534" }}>
        <div className="flex items-center gap-2 mb-3">
          <span style={{ color: "#4ade80" }} className="text-lg font-bold">NEXUS</span>
          <span style={{ color: "#166534" }} className="text-sm">// SERVER MONITORING TERMINAL v4.1.0</span>
        </div>
        <div className="flex gap-6 pb-3 text-sm">
          {["> DASHBOARD", "> SERVERS", "> LOGS", "> ALERTS", "> NETWORK", "> DEPLOY"].map((cmd, i) => (
            <span key={cmd} className="cursor-pointer" style={{ color: i === 0 ? "#4ade80" : "#166534" }}>{cmd}</span>
          ))}
        </div>
      </div>

      {/* System Stats Hero */}
      <div className="mb-6 p-4" style={{ border: "1px solid #166534" }}>
        <div className="text-xs mb-3" style={{ color: "#166534" }}>[ SYSTEM_OVERVIEW // {new Date().toISOString().split("T")[0]} ]</div>
        <div className="grid grid-cols-4 gap-4">
          {systemStats.map((stat) => (
            <div key={stat.label}>
              <div className="text-xs mb-1" style={{ color: "#166534" }}>{stat.label}</div>
              <div className="text-xl mb-2" style={{ color: "#4ade80" }}>{stat.value}</div>
              <div className="h-2 w-full" style={{ backgroundColor: "#0a0a0a", border: "1px solid #166534" }}>
                <div className="h-full" style={{ width: `${stat.bar}%`, backgroundColor: stat.bar > 80 ? "#ef4444" : stat.bar > 60 ? "#eab308" : "#4ade80" }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-6">
        {/* Server Status */}
        <div className="col-span-2 p-4" style={{ border: "1px solid #166534" }}>
          <div className="text-xs mb-3" style={{ color: "#166534" }}>[ SERVER_STATUS ]</div>
          <table className="w-full text-xs">
            <thead>
              <tr style={{ borderBottom: "1px solid #166534" }}>
                {["ID", "HOSTNAME", "STATUS", "CPU", "MEM", "UPTIME"].map((h) => (
                  <th key={h} className="text-left py-2 pr-4" style={{ color: "#166534" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {servers.map((srv) => (
                <tr key={srv.id} style={{ borderBottom: "1px solid #0a2010" }}>
                  <td className="py-2 pr-4" style={{ color: "#4ade80" }}>{srv.id}</td>
                  <td className="py-2 pr-4" style={{ color: "#4ade80" }}>{srv.name}</td>
                  <td className="py-2 pr-4" style={{ color: srv.status === "ONLINE" ? "#4ade80" : srv.status === "WARNING" ? "#eab308" : "#ef4444" }}>
                    [{srv.status}]
                  </td>
                  <td className="py-2 pr-4">{srv.cpu}</td>
                  <td className="py-2 pr-4">{srv.mem}</td>
                  <td className="py-2 pr-4">{srv.uptime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Alert Feed */}
        <div className="p-4" style={{ border: "1px solid #166534" }}>
          <div className="text-xs mb-3" style={{ color: "#166534" }}>[ ALERT_FEED ]</div>
          <div className="space-y-3">
            {alerts.map((alert, i) => (
              <div key={i} className="text-xs">
                <div className="flex items-center gap-2 mb-1">
                  <span style={{ color: alert.severity === "CRITICAL" ? "#ef4444" : alert.severity === "WARNING" ? "#eab308" : "#4ade80" }}>
                    [{alert.severity}]
                  </span>
                  <span style={{ color: "#166534" }}>{alert.time}</span>
                </div>
                <div style={{ color: "#4ade80" }}>{alert.msg}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Log Output */}
      <div className="mb-6 p-4" style={{ border: "1px solid #166534", backgroundColor: "#0a0a0a" }}>
        <div className="text-xs mb-3" style={{ color: "#166534" }}>[ LOG_OUTPUT // tail -f /var/log/nexus/combined.log ]</div>
        <div className="space-y-1">
          {logs.map((log, i) => (
            <div key={i} className="text-xs flex gap-3">
              <span style={{ color: "#166534" }}>{log.time}</span>
              <span style={{
                color: log.level === "ERROR" ? "#ef4444" : log.level === "WARN" ? "#eab308" : "#166534",
                minWidth: "3rem",
              }}>
                {log.level}
              </span>
              <span style={{ color: "#4ade80" }}>{log.msg}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 text-xs animate-pulse" style={{ color: "#4ade80" }}>
          {">"} _
        </div>
      </div>

      {/* Uptime Grid */}
      <div className="p-4 mb-6" style={{ border: "1px solid #166534" }}>
        <div className="text-xs mb-3" style={{ color: "#166534" }}>[ UPTIME_MATRIX // LAST 30 DAYS ]</div>
        <div className="flex items-center gap-4">
          {["SRV-001", "SRV-002", "SRV-003", "SRV-004"].map((srv, si) => (
            <div key={srv} className="flex-1">
              <div className="text-xs mb-2" style={{ color: "#166534" }}>{srv}</div>
              <div className="flex gap-0.5">
                {uptimeGrid[si].map((up, di) => (
                  <div
                    key={di}
                    className="h-4 flex-1"
                    style={{ backgroundColor: up ? "#166534" : "#ef4444", opacity: up ? 0.7 : 1 }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-2 text-xs" style={{ color: "#166534" }}>
          <span>30d ago</span>
          <span>today</span>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 text-xs" style={{ borderTop: "1px solid #166534", color: "#166534" }}>
        <span>nexus@monitoring:~$ uptime: 142d 07:23:41 | load: 0.47 | sessions: 3</span>
        <span>NEXUS TERMINAL v4.1.0 // ENCRYPTED CONNECTION // TLS 1.3</span>
      </div>
    </div>
  );
}
