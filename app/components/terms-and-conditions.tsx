export default function TermsAndConditions() {
  return (
    <main className="mx-auto mt-16 w-full max-w-3xl px-6 pb-24">
      <h1 className="mb-2 text-4xl font-medium tracking-tight sm:text-5xl">Términos y Condiciones</h1>
      <p className="text-muted-foreground mb-12 text-sm">Última actualización: 4 de mayo de 2026</p>

      <Section title="1. Aceptación de los términos">
        <p>
          Al descargar, instalar o usar la aplicación Ruppit («la app», «el servicio») aceptas estos Términos y
          Condiciones en su totalidad. Si no estás de acuerdo con alguno de ellos, por favor no uses el servicio.
        </p>
        <p>
          Ruppit se reserva el derecho de actualizar estos términos en cualquier momento. Los cambios significativos
          se comunicarán con al menos 15 días de anticipación a través de la app o por correo electrónico.
        </p>
      </Section>

      <Section title="2. Descripción del servicio">
        <p>
          Ruppit es una plataforma tecnológica que conecta pasajeros con conductores independientes. Ruppit{" "}
          <strong>no es una empresa de transporte</strong>; actúa como intermediario entre el pasajero y el
          conductor, quienes negocian directamente la tarifa del viaje.
        </p>
        <p>
          Entre las funciones principales del servicio se incluyen:
        </p>
        <ul>
          <li>Solicitar viajes indicando origen, destino y número de pasajeros.</li>
          <li>Proponer una tarifa y esperar aceptación del conductor.</li>
          <li>Guardar ubicaciones favoritas (casa, trabajo u otras).</li>
          <li>Consultar el historial completo de viajes realizados.</li>
          <li>Calificar conductores y reportar incidencias.</li>
        </ul>
      </Section>

      <Section title="3. Registro y cuenta">
        <ul>
          <li>Debes tener al menos 18 años para crear una cuenta como pasajero o conductor.</li>
          <li>
            La información que proporciones al registrarte (nombre, teléfono, correo) debe ser veraz y estar
            actualizada.
          </li>
          <li>
            Eres responsable de mantener la confidencialidad de tu contraseña. Cualquier actividad realizada
            desde tu cuenta es tu responsabilidad.
          </li>
          <li>
            Ruppit puede suspender o eliminar cuentas que incumplan estos términos o que sean utilizadas de forma
            fraudulenta.
          </li>
        </ul>
      </Section>

      <Section title="4. Permisos del dispositivo">
        <Callout>
          Antes de que el sistema operativo muestre la solicitud de permiso, Ruppit te explicará en pantalla por
          qué lo necesita y qué ocurre si lo denniegas. Tú decides.
        </Callout>

        <Subsection title="4.1 Permiso de ubicación">
          <p>
            Ruppit requiere acceso a tu ubicación para funcionar correctamente. Sin este permiso no es posible
            mostrar conductores cercanos ni establecer el punto de recogida automáticamente.
          </p>
          <ul>
            <li>
              <strong>Durante el viaje:</strong> la app rastrea tu posición en tiempo real para guiar al
              conductor y permitirte compartir la ruta con contactos de confianza.
            </li>
            <li>
              <strong>Fuera del viaje:</strong> la app accede a tu ubicación solo cuando la tienes en primer
              plano para sugerir puntos de recogida. No se rastrea en segundo plano.
            </li>
            <li>
              Puedes revocar este permiso en cualquier momento desde la configuración de tu dispositivo. En ese
              caso deberás ingresar las direcciones manualmente.
            </li>
          </ul>
        </Subsection>

        <Subsection title="4.2 Permiso de cámara">
          <p>
            El acceso a la cámara es <strong>opcional</strong> para pasajeros y necesario para conductores
            durante el proceso de registro.
          </p>
          <ul>
            <li>
              <strong>Pasajeros:</strong> puedes usar la cámara para tomar o actualizar tu foto de perfil. Si
              la denniegas puedes cargar una imagen desde tu galería o no usar foto.
            </li>
            <li>
              <strong>Conductores:</strong> se requiere para fotografiar la licencia de conducir y los
              documentos del vehículo durante el registro. Esto es obligatorio para verificar la identidad y
              habilitarte como conductor.
            </li>
            <li>
              La app <strong>nunca</strong> activa la cámara de forma automática ni en segundo plano. Solo se
              usa cuando tú presionas el botón correspondiente.
            </li>
          </ul>
        </Subsection>
      </Section>

      <Section title="5. Tarifas y negociación de precio">
        <ul>
          <li>
            Ruppit opera bajo un modelo de tarifa libre: el pasajero propone el precio y el conductor decide si
            acepta o no.
          </li>
          <li>
            La app puede mostrar una tarifa sugerida basada en la distancia, pero no está obligado a seguirla.
          </li>
          <li>
            Una vez que el conductor acepta la tarifa y comienza el viaje, el precio acordado{" "}
            <strong>no puede modificarse</strong> salvo que haya un cambio de ruta acordado entre ambas partes.
          </li>
          <li>
            Ruppit puede cobrar una comisión de servicio sobre la tarifa acordada, la cual se informará claramente
            antes de confirmar el viaje.
          </li>
          <li>
            En caso de disputa sobre el precio, el equipo de Ruppit revisará el historial de la solicitud y
            resolverá el caso en un plazo máximo de 5 días hábiles.
          </li>
        </ul>
      </Section>

      <Section title="6. Selección de pasajeros">
        <ul>
          <li>
            Al solicitar un viaje debes indicar el número real de pasajeros que viajarán. Esta información
            determina el tipo de vehículo que el conductor puede ofrecer.
          </li>
          <li>
            Ingresar un número menor al real para obtener una tarifa más baja constituye un incumplimiento de
            estos términos y puede resultar en la suspensión de la cuenta.
          </li>
          <li>
            El conductor tiene derecho a cancelar el viaje sin penalización si el número de pasajeros al
            momento del abordaje es mayor al indicado en la solicitud.
          </li>
        </ul>
      </Section>

      <Section title="7. Cancelaciones">
        <ul>
          <li>
            El pasajero puede cancelar el viaje de forma gratuita dentro de los{" "}
            <strong>2 minutos posteriores</strong> a la aceptación del conductor.
          </li>
          <li>
            Las cancelaciones frecuentes o abusivas pueden resultar en restricciones temporales o permanentes
            de la cuenta.
          </li>
          <li>
            El conductor puede cancelar el viaje si el pasajero no se presenta en el punto de recogida dentro
            de 5 minutos del tiempo estimado de llegada.
          </li>
        </ul>
      </Section>

      <Section title="8. Conducta del usuario">
        <p>Al usar Ruppit te comprometes a:</p>
        <ul>
          <li>Tratar a conductores y demás usuarios con respeto.</li>
          <li>No usar la app para actividades ilegales o fraudulentas.</li>
          <li>No crear múltiples cuentas para evadir restricciones.</li>
          <li>No compartir tu cuenta con terceros.</li>
          <li>Proporcionar información verídica en todo momento.</li>
        </ul>
        <p>
          El incumplimiento puede resultar en la suspensión inmediata de la cuenta sin derecho a reembolso de
          saldos pendientes.
        </p>
      </Section>

      <Section title="9. Responsabilidades y limitaciones">
        <ul>
          <li>
            Ruppit actúa como intermediario tecnológico. Los conductores son trabajadores independientes y{" "}
            <strong>no son empleados de Ruppit</strong>.
          </li>
          <li>
            Ruppit no garantiza la disponibilidad continua del servicio ni tiempos de espera específicos.
          </li>
          <li>
            En ningún caso Ruppit será responsable por daños indirectos, lucro cesante o daños consecuentes
            derivados del uso del servicio.
          </li>
          <li>
            Ruppit mantiene un proceso de verificación de conductores, pero no puede garantizar el comportamiento
            de terceros independientes.
          </li>
        </ul>
      </Section>

      <Section title="10. Historial de viajes y datos guardados">
        <ul>
          <li>
            Tu historial de viajes está disponible en la app por un período de 12 meses desde la fecha de
            cada viaje.
          </li>
          <li>
            Las ubicaciones guardadas (casa, trabajo u otras) permanecen en tu cuenta hasta que las elimines
            manualmente o cierres tu cuenta.
          </li>
          <li>
            Al eliminar tu cuenta se eliminarán también tus ubicaciones guardadas. El historial de viajes se
            conserva por 3 años por motivos legales conforme a lo descrito en la Política de Privacidad.
          </li>
        </ul>
      </Section>

      <Section title="11. Ley aplicable">
        <p>
          Estos Términos se rigen por las leyes de la República de Bolivia. Cualquier controversia que no pueda
          resolverse directamente con el equipo de Ruppit será sometida a los tribunales competentes conforme a
          la legislación vigente.
        </p>
      </Section>

      <Section title="12. Contacto">
        <p>Para cualquier consulta sobre estos Términos escríbenos a:</p>
        <p>
          <strong>Ruppit</strong>
          <br />
          Correo:{" "}
          <a href="mailto:carlosenriquecruzmendez@gmail.com" className="text-primary underline underline-offset-4">
            support@Ruppit.com.bo
          </a>
        </p>
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

function Subsection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-4">
      <h3 className="text-foreground mb-2 font-medium">{title}</h3>
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-primary/40 bg-primary/5 mb-4 rounded-lg border-l-4 px-4 py-3 text-sm">
      <strong className="text-foreground">Aviso importante:</strong> {children}
    </div>
  );
}
