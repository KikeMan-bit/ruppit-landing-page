/**
 * Primitivos compartidos de los documentos legales.
 * Usados por el centro legal (/legal/*) y por los documentos completos
 * (/terms-and-conditions, /privacy-policy) para que todos rendericen igual.
 */

export function LegalDoc({
  title,
  version,
  appliesTo,
  children,
}: {
  title: string;
  version: string;
  appliesTo?: string;
  children: React.ReactNode;
}) {
  return (
    <main className="w-full max-w-3xl pb-20">
      <h1 className="mb-2 text-4xl font-medium tracking-tight sm:text-5xl">{title}</h1>
      <p className="text-muted-foreground text-sm">Versión vigente: {version}</p>
      {appliesTo ? (
        <p className="text-muted-foreground mt-1 text-sm">
          <span className="text-foreground font-medium">Aplica a:</span> {appliesTo}
        </p>
      ) : null}
      <div className="mb-12" />
      {children}
    </main>
  );
}

export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="mb-4 text-xl font-semibold tracking-tight sm:text-2xl">{title}</h2>
      <div className="text-muted-foreground flex flex-col gap-3 text-sm leading-7 sm:text-base [&_a]:text-[#b38900] [&_a]:underline [&_a]:underline-offset-4 [&_li]:ml-4 [&_li]:list-disc [&_strong]:text-foreground">
        {children}
      </div>
    </section>
  );
}

export function Subsection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-4">
      <h3 className="text-foreground mb-2 font-medium">{title}</h3>
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  );
}

export function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-primary/40 bg-primary/5 mb-4 rounded-lg border-l-4 px-4 py-3 text-sm">
      <strong className="text-foreground">Aviso importante: </strong>
      {children}
    </div>
  );
}

export function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-muted/50">
            {headers.map((h) => (
              <th key={h} className="text-foreground px-4 py-2 text-left font-medium">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t border-border">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-2">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
