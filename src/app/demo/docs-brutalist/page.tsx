export const dynamic = "force-dynamic";
export default function DocsBrutalistDemo() {
  return (
    <div style={{ fontFamily: "'Fira Code', monospace", backgroundColor: "#1a1a2e", color: "#e5e5e5" }} className="min-h-screen">
      <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      {/* Flat Text Nav */}
      <header className="border-b px-6 py-4 flex items-center justify-between" style={{ borderColor: "#f97316" }}>
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold" style={{ color: "#f97316" }}>RAWAPI</span>
          <span className="text-xs" style={{ color: "#6b7280" }}>//docs</span>
        </div>
        <nav className="flex items-center gap-6 text-xs uppercase tracking-widest">
          <a style={{ color: "#f97316" }}>core</a>
          <a style={{ color: "#e5e5e5" }}>functions</a>
          <a style={{ color: "#e5e5e5" }}>errors</a>
          <a style={{ color: "#e5e5e5" }}>community</a>
          <a style={{ color: "#e5e5e5" }}>src</a>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Code-Block Hero */}
        <section className="mb-16">
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2" style={{ color: "#f97316" }}>$ man rawapi</h1>
            <p className="text-sm" style={{ color: "#6b7280" }}>Low-level systems programming interface. No abstractions. No magic.</p>
          </div>
          <div className="p-6 rounded-none border" style={{ backgroundColor: "#0f0f1e", borderColor: "#333" }}>
            <p className="text-xs mb-1" style={{ color: "#6b7280" }}>{"// rawapi_example.c"}</p>
            <p><span style={{ color: "#f97316" }}>#include</span> {"<rawapi/core.h>"}</p>
            <p><span style={{ color: "#f97316" }}>#include</span> {"<rawapi/mem.h>"}</p>
            <p className="mt-2"><span style={{ color: "#a78bfa" }}>int</span> <span style={{ color: "#e5e5e5" }}>main</span>(<span style={{ color: "#a78bfa" }}>void</span>) {"{"}</p>
            <p className="pl-4"><span style={{ color: "#a78bfa" }}>raw_ctx_t</span> *ctx = <span style={{ color: "#f97316" }}>raw_init</span>(RAW_DEFAULT);</p>
            <p className="pl-4"><span style={{ color: "#a78bfa" }}>raw_buf_t</span> *buf = <span style={{ color: "#f97316" }}>raw_alloc</span>(ctx, 4096);</p>
            <p className="pl-4"><span style={{ color: "#f97316" }}>raw_write</span>(buf, data, len);</p>
            <p className="pl-4"><span style={{ color: "#f97316" }}>raw_flush</span>(ctx);</p>
            <p className="pl-4"><span style={{ color: "#f97316" }}>raw_destroy</span>(ctx);</p>
            <p className="pl-4"><span style={{ color: "#a78bfa" }}>return</span> 0;</p>
            <p>{"}"}</p>
          </div>
        </section>

        {/* Core Concepts */}
        <section className="mb-16">
          <h2 className="text-xl font-bold mb-6 uppercase tracking-widest" style={{ color: "#f97316" }}>// Core Concepts</h2>
          <div className="space-y-6">
            <div className="border-l-2 pl-4" style={{ borderColor: "#f97316" }}>
              <h3 className="font-bold mb-1" style={{ color: "#e5e5e5" }}>Contexts</h3>
              <p className="text-sm" style={{ color: "#9ca3af" }}>
                Every RAWAPI operation requires a context. Contexts manage memory arenas, file descriptors, and signal handlers. A context is thread-local by default; use raw_ctx_share() for cross-thread access with explicit locking.
              </p>
            </div>
            <div className="border-l-2 pl-4" style={{ borderColor: "#f97316" }}>
              <h3 className="font-bold mb-1" style={{ color: "#e5e5e5" }}>Buffers</h3>
              <p className="text-sm" style={{ color: "#9ca3af" }}>
                Buffers are fixed-size memory regions allocated from the context arena. They support zero-copy reads, scatter-gather I/O, and automatic alignment to cache-line boundaries. Buffers cannot be resized after allocation.
              </p>
            </div>
            <div className="border-l-2 pl-4" style={{ borderColor: "#f97316" }}>
              <h3 className="font-bold mb-1" style={{ color: "#e5e5e5" }}>Pipelines</h3>
              <p className="text-sm" style={{ color: "#9ca3af" }}>
                Chain multiple operations into a pipeline for batch execution. The runtime fuses compatible operations and eliminates intermediate copies. Pipelines are submitted atomically to the kernel via io_uring.
              </p>
            </div>
            <div className="border-l-2 pl-4" style={{ borderColor: "#f97316" }}>
              <h3 className="font-bold mb-1" style={{ color: "#e5e5e5" }}>Arenas</h3>
              <p className="text-sm" style={{ color: "#9ca3af" }}>
                Memory arenas provide bump-pointer allocation with O(1) free. Each context owns one arena by default. Arena size is configurable at init time via RAW_ARENA_SIZE. When an arena is exhausted, raw_alloc returns NULL rather than falling back to malloc.
              </p>
            </div>
            <div className="border-l-2 pl-4" style={{ borderColor: "#f97316" }}>
              <h3 className="font-bold mb-1" style={{ color: "#e5e5e5" }}>Descriptors</h3>
              <p className="text-sm" style={{ color: "#9ca3af" }}>
                File descriptors are managed through the context. Use raw_open() and raw_close() instead of system calls directly. The context tracks descriptor lifetime and ensures cleanup on raw_destroy(), preventing resource leaks.
              </p>
            </div>
          </div>
        </section>

        {/* Function Reference Table */}
        <section className="mb-16">
          <h2 className="text-xl font-bold mb-6 uppercase tracking-widest" style={{ color: "#f97316" }}>// Function Reference</h2>
          <div className="border" style={{ borderColor: "#333" }}>
            <div className="grid grid-cols-3 text-xs uppercase tracking-widest p-3 border-b" style={{ borderColor: "#333", color: "#f97316", backgroundColor: "#0f0f1e" }}>
              <span>Function</span>
              <span>Signature</span>
              <span>Description</span>
            </div>
            {[
              { fn: "raw_init", sig: "(uint32_t flags) -> raw_ctx_t*", desc: "Initialize a new context with the given configuration flags" },
              { fn: "raw_alloc", sig: "(raw_ctx_t*, size_t) -> raw_buf_t*", desc: "Allocate a buffer from the context memory arena" },
              { fn: "raw_write", sig: "(raw_buf_t*, void*, size_t) -> ssize_t", desc: "Write data into buffer, returns bytes written or -1" },
              { fn: "raw_read", sig: "(raw_buf_t*, void*, size_t) -> ssize_t", desc: "Read data from buffer into destination, returns bytes read" },
              { fn: "raw_flush", sig: "(raw_ctx_t*) -> int", desc: "Flush all pending operations to their destinations" },
              { fn: "raw_pipe", sig: "(raw_ctx_t*, raw_op_t*, int) -> int", desc: "Submit a pipeline of operations for batch execution" },
              { fn: "raw_open", sig: "(raw_ctx_t*, char*, int) -> int", desc: "Open a file descriptor managed by the context" },
              { fn: "raw_close", sig: "(raw_ctx_t*, int) -> int", desc: "Close a managed file descriptor and release resources" },
              { fn: "raw_mmap", sig: "(raw_ctx_t*, size_t, int) -> void*", desc: "Memory-map a region tracked by the context arena" },
              { fn: "raw_destroy", sig: "(raw_ctx_t*) -> void", desc: "Tear down context and release all associated resources" },
            ].map((row) => (
              <div key={row.fn} className="grid grid-cols-3 text-xs p-3 border-b" style={{ borderColor: "#222" }}>
                <span style={{ color: "#f97316" }}>{row.fn}</span>
                <span style={{ color: "#a78bfa" }}>{row.sig}</span>
                <span style={{ color: "#9ca3af" }}>{row.desc}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Error Codes */}
        <section className="mb-16">
          <h2 className="text-xl font-bold mb-6 uppercase tracking-widest" style={{ color: "#f97316" }}>// Error Codes</h2>
          <div className="space-y-2 text-sm">
            {[
              { code: "RAW_OK (0)", desc: "Operation completed successfully" },
              { code: "RAW_ENOMEM (-1)", desc: "Arena out of memory, context cannot allocate" },
              { code: "RAW_EIO (-2)", desc: "I/O error on underlying file descriptor" },
              { code: "RAW_EINVAL (-3)", desc: "Invalid argument passed to function" },
              { code: "RAW_EBUSY (-4)", desc: "Resource is locked by another thread" },
              { code: "RAW_EPIPE (-5)", desc: "Pipeline submission failed, partial execution" },
              { code: "RAW_ENOSYS (-6)", desc: "Operation not supported on this platform" },
              { code: "RAW_ETIMEOUT (-7)", desc: "Operation exceeded the configured deadline" },
              { code: "RAW_EOVERFLOW (-8)", desc: "Buffer write would exceed allocated capacity" },
            ].map((err) => (
              <div key={err.code} className="flex gap-4 p-2" style={{ backgroundColor: "#0f0f1e" }}>
                <span className="w-52 shrink-0 font-bold" style={{ color: "#f97316" }}>{err.code}</span>
                <span style={{ color: "#9ca3af" }}>{err.desc}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Build & Platform Support */}
        <section className="mb-16">
          <h2 className="text-xl font-bold mb-6 uppercase tracking-widest" style={{ color: "#f97316" }}>// Platform Support</h2>
          <div className="p-5 border text-sm" style={{ borderColor: "#333", backgroundColor: "#0f0f1e" }}>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="font-bold mb-2" style={{ color: "#f97316" }}>Linux</p>
                <p style={{ color: "#9ca3af" }}>x86_64, aarch64</p>
                <p style={{ color: "#9ca3af" }}>Kernel 5.10+ (io_uring)</p>
                <p style={{ color: "#9ca3af" }}>glibc 2.31+, musl</p>
              </div>
              <div>
                <p className="font-bold mb-2" style={{ color: "#f97316" }}>macOS</p>
                <p style={{ color: "#9ca3af" }}>x86_64, arm64</p>
                <p style={{ color: "#9ca3af" }}>macOS 13+ (kqueue fallback)</p>
                <p style={{ color: "#9ca3af" }}>Xcode 14+ toolchain</p>
              </div>
              <div>
                <p className="font-bold mb-2" style={{ color: "#f97316" }}>FreeBSD</p>
                <p style={{ color: "#9ca3af" }}>x86_64, aarch64</p>
                <p style={{ color: "#9ca3af" }}>FreeBSD 13+ (kqueue)</p>
                <p style={{ color: "#9ca3af" }}>Clang 15+ or GCC 12+</p>
              </div>
            </div>
          </div>
        </section>

        {/* Community */}
        <section className="mb-16">
          <h2 className="text-xl font-bold mb-6 uppercase tracking-widest" style={{ color: "#f97316" }}>// Community</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border p-5" style={{ borderColor: "#333" }}>
              <h3 className="font-bold mb-2" style={{ color: "#e5e5e5" }}>IRC</h3>
              <p className="text-xs" style={{ color: "#9ca3af" }}>#rawapi on Libera.Chat. Core maintainers are active daily. Logs available at logs.rawapi.dev.</p>
            </div>
            <div className="border p-5" style={{ borderColor: "#333" }}>
              <h3 className="font-bold mb-2" style={{ color: "#e5e5e5" }}>Mailing List</h3>
              <p className="text-xs" style={{ color: "#9ca3af" }}>rawapi-dev@lists.rawapi.dev for patches and RFCs. rawapi-users@ for usage questions and discussion.</p>
            </div>
            <div className="border p-5" style={{ borderColor: "#333" }}>
              <h3 className="font-bold mb-2" style={{ color: "#e5e5e5" }}>Source</h3>
              <p className="text-xs" style={{ color: "#9ca3af" }}>git.rawapi.dev/rawapi/core. Mirror on GitHub. Contributions require signed-off-by and passing CI.</p>
            </div>
          </div>
          <div className="mt-6 p-4 border text-xs" style={{ borderColor: "#333", backgroundColor: "#0f0f1e" }}>
            <p style={{ color: "#6b7280" }}>{"$ git clone git://git.rawapi.dev/rawapi/core.git"}</p>
            <p style={{ color: "#6b7280" }}>{"$ cd core && make && make test"}</p>
            <p style={{ color: "#6b7280" }}>{"$ sudo make install PREFIX=/usr/local"}</p>
          </div>
        </section>
      </main>

      {/* Terminal Footer */}
      <footer className="border-t px-6 py-4 text-xs flex items-center justify-between" style={{ borderColor: "#333", color: "#6b7280" }}>
        <span style={{ color: "#f97316" }}>rawapi@docs:~$</span>
        <span>RAWAPI v0.9.3 | ISC License | Built with zero dependencies</span>
      </footer>
    </div>
  );
}
