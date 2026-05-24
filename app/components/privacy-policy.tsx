export default function PrivacyPolicy() {
  return (
    <main className="mx-auto mt-16 w-full max-w-3xl px-6 pb-24">
      <h1 className="mb-2 text-4xl font-medium tracking-tight sm:text-5xl">Política de Privacidad</h1>
      <p className="text-muted-foreground mb-12 text-sm">Última actualización: 4 de mayo de 2026</p>

      <Section title="1. Introducción">
        <p>
          Ruppit («nosotros», «la app») es una plataforma de transporte que conecta pasajeros con conductores
          independientes. Esta Política de Privacidad explica qué datos personales recopilamos, por qué los
          recopilamos y cómo los usamos cuando utilizas nuestra aplicación móvil o sitio web.
        </p>
        <p>
          Al crear una cuenta en Ruppit aceptas las prácticas descritas en este documento. Si no estás de acuerdo,
          por favor no uses la aplicación.
        </p>
      </Section>

      <Section title="2. Datos que recopilamos">
        <Subsection title="2.1 Datos que nos proporcionas directamente">
          <ul>
            <li>
              <strong>Nombre y apellido</strong> — para identificarte dentro de la plataforma.
            </li>
            <li>
              <strong>Número de teléfono</strong> — para verificar tu cuenta y contactarte en caso necesario.
            </li>
            <li>
              <strong>Correo electrónico</strong> — para el acceso a tu cuenta y comunicaciones importantes.
            </li>
            <li>
              <strong>Foto de perfil</strong> — opcional; puede tomarse desde la cámara o cargarse desde tu galería.
            </li>
          </ul>
        </Subsection>

        <Subsection title="2.2 Datos generados al usar el servicio">
          <ul>
            <li>
              <strong>Historial de viajes</strong> — origen, destino, tarifa acordada, fecha y hora, conductor
              asignado.
            </li>
            <li>
              <strong>Ubicaciones guardadas</strong> — las direcciones que marques como «Casa», «Trabajo» u otras.
            </li>
            <li>
              <strong>Información del dispositivo</strong> — modelo, sistema operativo y versión de la app (usados
              para soporte técnico).
            </li>
            <li>
              <strong>Datos de uso</strong> — pantallas visitadas, botones presionados y tiempos de sesión
              (análisis interno de la app).
            </li>
          </ul>
        </Subsection>
      </Section>

      <Section title="3. Por qué pedimos acceso a tu ubicación">
        <Callout>
          Ruppit te pedirá permiso de acceso a tu ubicación antes de solicitarlo al sistema operativo. Siempre puedes
          denegarlo, aunque esto limitará las funciones principales de la app.
        </Callout>
        <p>Usamos tu ubicación para:</p>
        <ul>
          <li>
            <strong>Mostrar conductores cercanos</strong> y calcular el tiempo estimado de llegada.
          </li>
          <li>
            <strong>Establecer el punto de recogida</strong> sin que tengas que escribir la dirección manualmente.
          </li>
          <li>
            <strong>Rastrear el trayecto en tiempo real</strong> para que tú y tus contactos de confianza puedan
            seguir la ruta.
          </li>
          <li>
            <strong>Calcular la tarifa sugerida</strong> con base en la distancia entre origen y destino.
          </li>
        </ul>
        <p>
          <strong>Ubicación en segundo plano:</strong> Ruppit accede a tu ubicación únicamente mientras tienes la app
          abierta y un viaje activo. No rastreamos tu posición cuando la app está cerrada ni fuera de un viaje.
        </p>
      </Section>

      <Section title="4. Por qué pedimos acceso a tu cámara">
        <Callout>
          Ruppit te mostrará una explicación clara antes de solicitar acceso a tu cámara. El permiso es opcional y
          puedes usar la app sin él.
        </Callout>
        <p>Solicitamos acceso a la cámara exclusivamente para:</p>
        <ul>
          <li>
            <strong>Foto de perfil</strong> — para que conductores y pasajeros puedan identificarse mutuamente
            antes del viaje.
          </li>
          <li>
            <strong>Verificación de documentos</strong> (solo para conductores) — fotografía de licencia de
            conducir y documentos del vehículo al momento del registro.
          </li>
        </ul>
        <p>
          Las imágenes capturadas se almacenan de forma segura y <strong>nunca</strong> se accede a la cámara sin
          que tú hayas iniciado la acción (tomar foto o escanear documento). La app no graba video ni toma fotos
          en segundo plano.
        </p>
      </Section>

      <Section title="5. Cómo usamos tus datos">
        <ul>
          <li>Prestar el servicio de transporte y conectarte con conductores disponibles.</li>
          <li>Procesar y registrar los pagos de cada viaje.</li>
          <li>Enviar notificaciones relacionadas con tu viaje (conductor en camino, llegada, etc.).</li>
          <li>Mejorar la experiencia de la app mediante análisis de uso anónimo.</li>
          <li>Resolver disputas, fraudes o problemas de seguridad.</li>
          <li>Cumplir con obligaciones legales aplicables.</li>
        </ul>
        <p>
          <strong>No vendemos</strong> tus datos personales a terceros con fines publicitarios.
        </p>
      </Section>

      <Section title="6. Datos que compartimos con terceros">
        <ul>
          <li>
            <strong>Conductores:</strong> reciben tu nombre, foto de perfil y ubicación de recogida durante el
            viaje. No reciben tu número de teléfono completo ni correo electrónico.
          </li>
          <li>
            <strong>Proveedores de mapas:</strong> usamos servicios de mapas externos para calcular rutas. Solo
            comparten los datos de ubicación necesarios para la ruta activa.
          </li>
          <li>
            <strong>Procesadores de pago:</strong> si realizas pagos en la app, los datos de pago se gestionan a
            través de proveedores certificados (PCI-DSS). Ruppit no almacena datos de tarjeta.
          </li>
          <li>
            <strong>Autoridades:</strong> podemos compartir información cuando exista una orden judicial o
            requerimiento legal válido.
          </li>
        </ul>
      </Section>

      <Section title="7. Seguridad de los datos">
        <p>
          Protegemos tu información mediante cifrado en tránsito (TLS) y en reposo. El acceso a los datos está
          restringido a los empleados y sistemas que lo necesiten para operar el servicio. Sin embargo, ningún
          sistema es 100 % seguro. En caso de una brecha de seguridad que afecte tus datos, te notificaremos
          conforme a la ley aplicable.
        </p>
      </Section>

      <Section title="8. Retención de datos">
        <ul>
          <li>
            <strong>Datos de cuenta:</strong> se conservan mientras tu cuenta esté activa o hasta que solicites
            su eliminación.
          </li>
          <li>
            <strong>Historial de viajes:</strong> se conserva por 3 años por motivos legales y de soporte.
          </li>
          <li>
            <strong>Datos de ubicación en tiempo real:</strong> se eliminan al concluir el viaje; solo guardamos
            el origen y destino final.
          </li>
        </ul>
      </Section>

      <Section title="9. Tus derechos">
        <p>Tienes derecho a:</p>
        <ul>
          <li>
            <strong>Acceder</strong> a los datos personales que tenemos sobre ti.
          </li>
          <li>
            <strong>Corregir</strong> datos incorrectos o desactualizados.
          </li>
          <li>
            <strong>Eliminar</strong> tu cuenta y los datos asociados.
          </li>
          <li>
            <strong>Retirar el permiso</strong> de cámara o ubicación en cualquier momento desde la configuración
            de tu dispositivo.
          </li>
          <li>
            <strong>Oponerte</strong> al procesamiento de tus datos en ciertos casos.
          </li>
        </ul>
        <p>
          Para ejercer cualquiera de estos derechos escríbenos a{" "}
          <a href="mailto:soporte@ruppit.com" className="text-primary underline underline-offset-4">
            soporte@ruppit.com
          </a>
          .
        </p>
      </Section>

      <Section title="10. Cambios a esta política">
        <p>
          Podemos actualizar esta Política de Privacidad. Cuando hagamos cambios importantes te notificaremos por
          correo electrónico o mediante un aviso en la app antes de que entren en vigor.
        </p>
      </Section>

      <Section title="11. Contacto">
        <p>
          Si tienes preguntas sobre esta política o sobre el manejo de tus datos personales, contáctanos en:
        </p>
        <p>
          <strong>Ruppit</strong>
          <br />
          Correo:{" "}
          <a href="mailto:soporte@ruppit.com" className="text-primary underline underline-offset-4">
            soporte@ruppit.com
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
      <strong className="text-foreground">Aviso de permiso:</strong> {children}
    </div>
  );
}
