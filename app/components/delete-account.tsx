import Image from "next/image";

export default function DeleteAccount() {
  return (
    <main className="mx-auto mt-16 w-full max-w-3xl px-6 pb-24">
      <h1 className="mb-2 text-4xl font-medium tracking-tight sm:text-5xl">Eliminar cuenta</h1>
      <p className="text-muted-foreground mb-12 text-sm">Última actualización: 28 de mayo de 2026</p>

      <Section title="¿Qué ocurre al eliminar tu cuenta?">
        <p>
          Cuando solicitas la eliminación de tu cuenta en Ruppit, tu perfil se desactiva de inmediato y ya no
          podrás iniciar sesión ni realizar viajes. Tus datos permanecen en nuestros sistemas durante{" "}
          <strong>60 días</strong> antes de ser eliminados de forma permanente.
        </p>
        <p>
          Este período de gracia existe para darte la oportunidad de arrepentirte: si cambias de opinión,
          puedes contactarnos antes de que se cumpla el plazo y restauraremos tu cuenta sin pérdida de datos.
        </p>
        <Callout>
          Una vez eliminados permanentemente, tus datos no podrán recuperarse. El historial de viajes
          y configuración se borrarán de forma definitiva.
        </Callout>
      </Section>

      <Section title="Cómo eliminar tu cuenta desde la app">
        <p>Sigue estos pasos dentro de la aplicación Ruppit:</p>

        <div className="mt-4 flex flex-col gap-10">
          {/* Paso 1 */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-8">
            <div className="flex flex-col gap-2 sm:flex-1">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">1</span>
                <p className="font-medium text-foreground">Abre el menú de la app</p>
              </div>
              <p className="text-muted-foreground ml-10 text-sm leading-6">
                Inicia sesión y toca el ícono de perfil en la esquina superior derecha para abrir el menú.
                Desplázate hacia abajo y toca <strong>Configuración</strong>.
              </p>
            </div>
            <div className="mx-auto sm:mx-0 sm:w-40">
              <Image
                src="/paso-1.png"
                alt="Paso 1: tocar Configuración en el menú"
                width={160}
                height={320}
                className="rounded-2xl border border-gray-200 shadow-sm"
              />
            </div>
          </div>

          {/* Paso 2 */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-8">
            <div className="flex flex-col gap-2 sm:flex-1">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">2</span>
                <p className="font-medium text-foreground">Toca «Eliminar mi cuenta»</p>
              </div>
              <p className="text-muted-foreground ml-10 text-sm leading-6">
                Dentro de <strong>Configuración</strong>, desplázate hasta el final y toca{" "}
                <strong className="text-red-500">Eliminar mi cuenta</strong>. Lee el resumen de lo
                que ocurrirá y confirma la acción.
              </p>
            </div>
            <div className="mx-auto sm:mx-0 sm:w-40">
              <Image
                src="/paso-2.png"
                alt="Paso 2: tocar Eliminar mi cuenta en Configuración"
                width={160}
                height={320}
                className="rounded-2xl border border-gray-200 shadow-sm"
              />
            </div>
          </div>
        </div>

        <p className="mt-4">
          Recibirás un correo de confirmación indicando que la solicitud fue recibida y la fecha en
          que la eliminación será permanente.
        </p>
      </Section>

      <Section title="Qué datos se eliminan">
        <ul>
          <li>Nombre y número de teléfono.</li>
          <li>Foto de perfil.</li>
          <li>Ubicaciones guardadas (Casa, Trabajo, etc.).</li>
          <li>Historial de viajes y calificaciones.</li>
          <li>Preferencias y configuración de la app.</li>
        </ul>
      </Section>

      <Section title="Qué datos se conservan">
        <p>
          Ciertos datos pueden conservarse más allá del período de gracia por obligaciones legales o
          comerciales legítimas:
        </p>
        <ul>
          <li>
            <strong>Registros de transacciones:</strong> por hasta 5 años conforme a la normativa fiscal
            aplicable en Bolivia.
          </li>
          <li>
            <strong>Información de disputas o incidentes:</strong> mientras exista un proceso activo o
            reclamación pendiente.
          </li>
          <li>
            <strong>Datos anonimizados</strong> que ya no puedan vincularse a tu identidad; estos pueden
            usarse para análisis estadísticos.
          </li>
        </ul>
      </Section>

      <Section title="¿Cambias de opinión?">
        <p>
          Durante los <strong>60 días</strong> posteriores a tu solicitud, tu cuenta puede recuperarse.
          Escríbenos antes de que se cumpla el plazo a{" "}
          <a href="mailto:soporte@ruppit.com" className="text-primary underline underline-offset-4">
            soporte@ruppit.com
          </a>{" "}
          con el asunto <strong>«Restaurar cuenta»</strong> y te la reactivaremos sin pérdida de
          información.
        </p>
        <p>
          Una vez transcurridos los 60 días y eliminados los datos permanentemente, no será posible
          restaurar la cuenta ni recuperar el historial.
        </p>
      </Section>

      <Section title="Alternativa: desactivar la cuenta temporalmente">
        <p>
          Si no deseas eliminar tu cuenta de forma permanente pero quieres pausar el uso de la app,
          puedes contactarnos para desactivarla temporalmente. Tu cuenta y datos se conservarán y podrás
          reactivarla cuando lo desees.
        </p>
        <p>
          Escríbenos a{" "}
          <a href="mailto:soporte@ruppit.com" className="text-primary underline underline-offset-4">
            soporte@ruppit.com
          </a>{" "}
          indicando que deseas una desactivación temporal.
        </p>
      </Section>

      <Section title="¿Necesitas ayuda?">
        <p>
          Si tienes problemas para eliminar tu cuenta desde la app o tienes preguntas sobre el proceso,
          contáctanos:
        </p>
        <p>
          <strong>Ruppit</strong>
          <br />
          Correo:{" "}
          <a href="mailto:soporte@ruppit.com" className="text-primary underline underline-offset-4">
            soporte@ruppit.com
          </a>
          <br />
          Asunto sugerido: <strong>«Eliminar cuenta»</strong>
        </p>
        <p>Respondemos en un plazo máximo de 48 horas hábiles.</p>
      </Section>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="mb-4 text-xl font-semibold tracking-tight sm:text-2xl">{title}</h2>
      <div className="text-muted-foreground flex flex-col gap-3 text-sm leading-7 sm:text-base [&_a]:text-primary [&_li]:ml-4 [&_li]:list-disc [&_strong]:text-foreground">
        {children}
      </div>
    </section>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-destructive/40 bg-destructive/5 mb-4 rounded-lg border-l-4 px-4 py-3 text-sm">
      <strong className="text-foreground">Importante:</strong> {children}
    </div>
  );
}
