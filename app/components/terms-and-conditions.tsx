export default function TermsAndConditions() {
  return (
    <main className="mx-auto mt-16 w-full max-w-3xl px-6 pb-24">
      <h1 className="mb-2 text-4xl font-medium tracking-tight sm:text-5xl">Términos y Condiciones</h1>
      <p className="text-muted-foreground mb-12 text-sm">Versión vigente: junio de 2026</p>

      <Section title="1. Aceptación de los términos">
        <p>
          Al descargar, instalar, acceder o utilizar la aplicación móvil Ruppit (en adelante, «la Aplicación») o el
          sitio web <strong>ruppit.com</strong>, usted (en adelante, «el Usuario») declara haber leído, comprendido y
          aceptado en su totalidad los presentes Términos y Condiciones de Uso, así como nuestra Política de
          Privacidad, la cual forma parte integral de este documento.
        </p>
        <p>
          Si usted no está de acuerdo con alguna de las disposiciones aquí establecidas, deberá abstenerse de utilizar
          la Aplicación y los servicios de Ruppit.
        </p>
        <p>
          Ruppit se reserva el derecho de modificar estos Términos en cualquier momento. Las modificaciones serán
          notificadas a través de la Aplicación o por correo electrónico, y entrarán en vigor a partir de su
          publicación. El uso continuado de la plataforma después de dicha notificación implica la aceptación de los
          cambios.
        </p>
      </Section>

      <Section title="2. Naturaleza del servicio">
        <Subsection title="2.1 Ruppit como intermediario tecnológico">
          <p>
            <strong>Ruppit es exclusivamente una plataforma tecnológica de intermediación.</strong> Ruppit no es una
            empresa de transporte, no presta servicios de transporte de personas y no emplea ni subcontrata a
            conductores.
          </p>
          <p>
            La función de Ruppit se limita a facilitar la conexión entre pasajeros que buscan un servicio de transporte
            y conductores independientes que ofrecen dicho servicio mediante sus propios vehículos. El contrato de
            transporte se celebra directamente entre el pasajero y el conductor, sin que Ruppit sea parte de dicha
            relación contractual.
          </p>
        </Subsection>
        <Subsection title="2.2 Conductores independientes">
          <p>
            Los conductores que operan en la plataforma son trabajadores independientes y actúan en su propio nombre y
            por su propia cuenta. No existe relación laboral, de dependencia, de agencia ni de representación entre
            Ruppit y los conductores. Los conductores son los únicos responsables del cumplimiento de la normativa de
            tránsito, transporte, tributaria y cualquier otra legislación aplicable en Bolivia.
          </p>
        </Subsection>
        <Subsection title="2.3 Alcance geográfico">
          <p>
            Ruppit opera en provincias de Bolivia, con Camiri, Santa Cruz, como ciudad piloto. La disponibilidad del
            servicio puede variar según la zona geográfica y la cantidad de conductores activos en cada área.
          </p>
        </Subsection>
      </Section>

      <Section title="3. Registro y gestión de cuenta">
        <Subsection title="3.1 Requisitos para el registro">
          <p>Para utilizar la Aplicación, el Usuario deberá:</p>
          <ul>
            <li>Ser mayor de dieciocho (18) años de edad.</li>
            <li>Proporcionar información veraz, completa y actualizada durante el proceso de registro.</li>
            <li>Disponer de un número de teléfono móvil válido en Bolivia.</li>
            <li>Aceptar los presentes Términos y la Política de Privacidad.</li>
          </ul>
        </Subsection>
        <Subsection title="3.2 Responsabilidad sobre la cuenta">
          <p>
            El Usuario es el único responsable de mantener la confidencialidad de sus credenciales de acceso.
            Cualquier actividad realizada desde su cuenta se considerará realizada por usted, salvo que notifique de
            inmediato a Ruppit sobre un uso no autorizado mediante el correo{" "}
            <a href="mailto:soporte@ruppit.com">soporte@ruppit.com</a>.
          </p>
        </Subsection>
        <Subsection title="3.3 Suspensión y cancelación de cuenta">
          <p>Ruppit podrá suspender, restringir o cancelar la cuenta de cualquier Usuario cuando existan indicios de:</p>
          <ul>
            <li>Violación de estos Términos.</li>
            <li>Conductas fraudulentas o abusivas.</li>
            <li>Riesgo para la seguridad de otros usuarios o conductores.</li>
            <li>Solicitud expresa del propio Usuario.</li>
          </ul>
        </Subsection>
      </Section>

      <Section title="4. Permisos del dispositivo">
        <Subsection title="4.1 Permiso de ubicación">
          <p>
            La Aplicación accede a la ubicación de su dispositivo{" "}
            <strong>únicamente cuando la Aplicación está activa en primer plano o durante un viaje activo.</strong>{" "}
            Ruppit <strong>no accede, no rastrea ni almacena</strong> la ubicación del Usuario cuando la Aplicación
            está cerrada, minimizada fuera de un viaje activo o en segundo plano.
          </p>
          <p>La ubicación se utiliza para:</p>
          <ul>
            <li>Mostrar conductores disponibles cercanos al pasajero.</li>
            <li>Facilitar al conductor la localización del punto de recogida.</li>
            <li>Rastrear el trayecto del viaje en tiempo real.</li>
            <li>Calcular la tarifa sugerida del viaje.</li>
          </ul>
        </Subsection>
        <Subsection title="4.2 Permiso de cámara">
          <p>El acceso a la cámara se utiliza exclusivamente para:</p>
          <ul>
            <li>
              <strong>Pasajeros:</strong> tomar o actualizar foto de perfil y escanear códigos QR para pagos.
            </li>
            <li>
              <strong>Conductores:</strong> foto de perfil, carga de documentos de verificación al registrarse y
              escaneo de códigos QR.
            </li>
          </ul>
          <p>
            La Aplicación <strong>nunca activa la cámara de manera automática</strong> ni en segundo plano. Solo se
            activa cuando el Usuario inicia voluntariamente una acción que lo requiere.
          </p>
        </Subsection>
        <Subsection title="4.3 Notificaciones push">
          <p>Con su autorización, la Aplicación envía notificaciones para:</p>
          <ul>
            <li>Informar sobre el estado de la solicitud de viaje.</li>
            <li>Notificar al conductor sobre nuevas solicitudes.</li>
            <li>Comunicar el inicio y fin del viaje.</li>
            <li>Enviar comunicaciones importantes sobre la cuenta.</li>
          </ul>
          <p>Puede desactivar las notificaciones en cualquier momento desde la configuración de su dispositivo.</p>
        </Subsection>
      </Section>

      <Section title="5. Tarifas y negociación de precios">
        <Subsection title="5.1 Sistema de tarifa propuesta por el pasajero">
          <p>
            Ruppit opera bajo un modelo de negociación libre de precios.{" "}
            <strong>El pasajero es quien propone la tarifa que está dispuesto a pagar por el viaje.</strong> La
            Aplicación podrá mostrar un precio recomendado como referencia orientativa, pero dicho precio es únicamente
            una sugerencia y no es vinculante.
          </p>
        </Subsection>
        <Subsection title="5.2 Aceptación por parte del conductor">
          <p>
            El conductor, al recibir la solicitud con la tarifa propuesta, tiene plena libertad de aceptarla o
            rechazarla sin ninguna consecuencia ni penalización. Ruppit{" "}
            <strong>no impone precios, no establece tarifas mínimas ni aplica tarifas dinámicas.</strong>
          </p>
        </Subsection>
        <Subsection title="5.3 Comisión de Ruppit">
          <p>
            Por cada viaje completado satisfactoriamente, Ruppit cobra al conductor una comisión sobre el monto del
            viaje. El porcentaje vigente estará disponible en la sección de información para conductores dentro de la
            Aplicación.
          </p>
        </Subsection>
      </Section>

      <Section title="6. Sistema Ruppit Code">
        <Callout>
          El sistema Ruppit Code es exclusivo para la operación en provincias de Bolivia, iniciando en Camiri como
          ciudad piloto. Al solicitar un viaje con un conductor bajo este sistema, el pasajero acepta las condiciones
          descritas a continuación.
        </Callout>
        <Subsection title="6.1 Descripción">
          <p>
            El <strong>Ruppit Code</strong> es un sistema de identificación que permite incorporar conductores y
            vehículos en contextos donde la documentación vehicular oficial puede estar en trámite o no estar
            disponible. A cada conductor se le asigna un código único con el formato <strong>AA##</strong> (por
            ejemplo: AB12, CD34).
          </p>
        </Subsection>
        <Subsection title="6.2 Responsabilidad del conductor con Ruppit Code">
          <p>El conductor registrado bajo este sistema es el único y exclusivo responsable de:</p>
          <ul>
            <li>Cumplir con toda la normativa local, departamental y nacional de tránsito y transporte aplicable.</li>
            <li>
              Gestionar y obtener la documentación legal de su vehículo, incluyendo placa de circulación, SOAT,
              revisión técnica y cualquier otro documento exigido por las autoridades bolivianas.
            </li>
            <li>Cualquier infracción, multa o consecuencia legal derivada de operar sin la documentación requerida.</li>
          </ul>
        </Subsection>
        <Subsection title="6.3 Rol de Ruppit frente al sistema Ruppit Code">
          <p>
            Ruppit actúa exclusivamente como intermediario tecnológico y{" "}
            <strong>no verifica, no garantiza ni avala</strong> que los vehículos registrados bajo el sistema Ruppit
            Code cuenten con placa oficial, SOAT, revisión técnica u otros documentos legales.
          </p>
        </Subsection>
        <Subsection title="6.4 Aceptación expresa del pasajero">
          <p>
            <strong>
              Al solicitar un viaje con un conductor que opera bajo el sistema Ruppit Code, el pasajero declara
              expresamente que:
            </strong>
          </p>
          <ul>
            <li>
              Ha sido debidamente informado de que el vehículo puede no contar con placa oficial, SOAT u otros
              documentos legales vigentes.
            </li>
            <li>Acepta de manera consciente, libre e informada el uso de dicho vehículo.</li>
            <li>Exime a Ruppit de cualquier responsabilidad derivada de esta situación.</li>
          </ul>
        </Subsection>
      </Section>

      <Section title="7. Preferencias del viaje y cargos adicionales">
        <Subsection title="7.1 Preferencias opcionales">
          <p>
            Al solicitar un viaje, el pasajero podrá activar preferencias opcionales para personalizar el servicio.
            La mayoría de preferencias no tienen costo adicional; únicamente la preferencia de{" "}
            <strong>aire acondicionado</strong> suma <strong>Bs 1,00</strong> al precio recomendado del viaje.
          </p>
        </Subsection>
        <Subsection title="7.2 Preferencias disponibles">
          <Table
            headers={["Preferencia", "Descripción", "Cargo adicional"]}
            rows={[
              ["Asiento para bebé", "El pasajero requiere que el vehículo cuente con asiento para bebé o niño.", "Sin cargo"],
              ["Viaje con mascota", "El pasajero viajará acompañado de una mascota.", "Sin cargo"],
              ["Parrilla en el techo", "El pasajero necesita transportar equipaje o carga en parrilla exterior.", "Sin cargo"],
              ["Aire acondicionado", "El pasajero prefiere un vehículo con aire acondicionado activo.", "+ Bs 1,00"],
            ]}
          />
        </Subsection>
        <Subsection title="7.3 Precio final y responsabilidad">
          <p>
            El precio con preferencias incluidas es una sugerencia. El pasajero conserva la libertad de modificar el
            monto ofrecido, y el conductor es libre de aceptar o rechazar la oferta. Ruppit no garantiza que el
            conductor cuente con las condiciones correspondientes a la preferencia solicitada; el pasajero deberá
            verificarlo antes de iniciar el viaje.
          </p>
        </Subsection>
      </Section>

      <Section title="8. Selección de pasajeros">
        <p>
          Los conductores tienen plena libertad de aceptar o rechazar cualquier solicitud de viaje basándose en la
          tarifa propuesta y las preferencias del viaje.{" "}
          <strong>
            Queda expresamente prohibida la discriminación por motivos de raza, etnia, género, orientación sexual,
            religión, discapacidad, edad, apariencia física o cualquier otra condición protegida por la legislación
            boliviana.
          </strong>
        </p>
        <p>
          Ruppit podrá sancionar, suspender o dar de baja a conductores que incurran en conductas discriminatorias
          debidamente reportadas y verificadas.
        </p>
      </Section>

      <Section title="9. Cancelaciones">
        <Subsection title="9.1 Cancelación por el pasajero">
          <p>
            El pasajero podrá cancelar la solicitud de viaje antes de que el conductor haya llegado al punto de
            recogida dentro del tiempo indicado en la Aplicación sin consecuencias. Cancelaciones reiteradas o abusivas
            podrán dar lugar a restricciones temporales en la cuenta.
          </p>
        </Subsection>
        <Subsection title="9.2 Cancelación por el conductor">
          <p>
            El conductor podrá cancelar un viaje aceptado antes de iniciar el recorrido. Cancelaciones reiteradas sin
            causa justificada podrán ser causal de revisión del estado del conductor en la plataforma.
          </p>
        </Subsection>
        <Subsection title="9.3 No presentación del pasajero">
          <p>
            Si el pasajero no se presenta al punto de recogida dentro del tiempo razonable indicado en la Aplicación,
            el conductor podrá cancelar el viaje sin penalización.
          </p>
        </Subsection>
      </Section>

      <Section title="10. Métodos de pago">
        <Subsection title="10.1 Formas de pago aceptadas">
          <ul>
            <li>
              <strong>Efectivo:</strong> el pasajero paga al conductor directamente en efectivo al finalizar el viaje.
            </li>
            <li>
              <strong>Código QR:</strong> el pasajero puede realizar el pago mediante escaneo de código QR. Este
              método es compatible con cualquier entidad bancaria boliviana que admita pagos por QR.
            </li>
          </ul>
        </Subsection>
        <Subsection title="10.2 Datos bancarios y seguridad">
          <p>
            <strong>
              Ruppit no almacena, no procesa ni tiene acceso a datos bancarios, números de tarjeta, cuentas o
              información financiera sensible del Usuario.
            </strong>{" "}
            Los pagos por QR se procesan directamente a través de la entidad bancaria del Usuario, sujetos a los
            propios términos y condiciones de seguridad de dicha entidad.
          </p>
        </Subsection>
      </Section>

      <Section title="11. Conducta del usuario">
        <Subsection title="11.1 Obligaciones del pasajero">
          <p>El pasajero se compromete a:</p>
          <ul>
            <li>Tratar al conductor con respeto y dignidad.</li>
            <li>No solicitar al conductor que cometa infracciones de tránsito.</li>
            <li>No transportar sustancias ilegales, armas u objetos prohibidos.</li>
            <li>No dañar el vehículo del conductor. En caso de daños, el pasajero será responsable de su reparación.</li>
            <li>No fumar dentro del vehículo sin el consentimiento del conductor.</li>
          </ul>
        </Subsection>
        <Subsection title="11.2 Obligaciones del conductor">
          <p>El conductor se compromete a:</p>
          <ul>
            <li>Tratar al pasajero con respeto y profesionalismo.</li>
            <li>Mantener su vehículo en condiciones seguras e higiénicas.</li>
            <li>Respetar las normas de tránsito bolivianas.</li>
            <li>No conducir bajo los efectos del alcohol u otras sustancias.</li>
            <li>No desviar la ruta acordada sin consentimiento del pasajero.</li>
            <li>Respetar el precio acordado al inicio del viaje.</li>
          </ul>
        </Subsection>
        <Subsection title="11.3 Conductas prohibidas para todos los usuarios">
          <ul>
            <li>Utilizar la Aplicación con fines fraudulentos o para actividades ilícitas.</li>
            <li>Crear cuentas falsas o utilizar la identidad de terceros.</li>
            <li>Acosar, amenazar o intimidar a otros usuarios.</li>
            <li>Publicar reseñas falsas o calificaciones manipuladas.</li>
            <li>Intentar vulnerar la seguridad o el funcionamiento de la plataforma.</li>
            <li>
              Contactar a conductores o pasajeros fuera de la plataforma para evadir la comisión de Ruppit.
            </li>
          </ul>
        </Subsection>
      </Section>

      <Section title="12. Responsabilidades y limitaciones">
        <p>En la máxima medida permitida por la legislación boliviana vigente, Ruppit no será responsable por:</p>
        <ul>
          <li>
            Accidentes de tránsito, lesiones, muerte o daños materiales ocurridos durante el viaje, dado que la
            relación de transporte es exclusiva entre pasajero y conductor.
          </li>
          <li>
            El incumplimiento por parte de conductores de la normativa de tránsito, vehicular o de transporte.
          </li>
          <li>
            La falta de documentación legal del vehículo, incluyendo en los casos comprendidos por el sistema Ruppit
            Code.
          </li>
          <li>Pérdida, robo u olvido de objetos personales durante el viaje.</li>
          <li>Daños indirectos, incidentales, consecuentes o punitivos de cualquier naturaleza.</li>
          <li>
            Interrupciones, errores o indisponibilidad temporal del servicio por razones técnicas o causas de fuerza
            mayor.
          </li>
        </ul>
      </Section>

      <Section title="13. Menores de edad">
        <p>
          La Aplicación está dirigida exclusivamente a personas mayores de dieciocho (18) años.{" "}
          <strong>Queda prohibido el registro y uso independiente de la Aplicación por parte de menores de edad.</strong>
        </p>
        <p>
          Un menor de edad podrá utilizar el servicio únicamente cuando viaje acompañado por un adulto titular de la
          cuenta que asume plena responsabilidad por el menor durante el viaje, incluyendo el uso de sistemas de
          retención adecuados conforme a la normativa boliviana.
        </p>
      </Section>

      <Section title="14. Resolución de disputas">
        <Subsection title="14.1 Contacto directo como primera instancia">
          <p>
            Ante cualquier inconveniente, el Usuario deberá en primera instancia intentar resolverlo directamente con
            la otra parte.
          </p>
        </Subsection>
        <Subsection title="14.2 Mediación de Ruppit">
          <p>
            Si la disputa no puede resolverse directamente, el Usuario podrá reportarla a través de la sección
            «Soporte» en la Aplicación o al correo <a href="mailto:soporte@ruppit.com">soporte@ruppit.com</a>. Ruppit
            analizará el reporte y podrá actuar como mediador entre las partes, sin que ello implique asumir
            responsabilidad sobre el resultado.
          </p>
        </Subsection>
      </Section>

      <Section title="15. Historial de viajes y datos guardados">
        <ul>
          <li>
            Tu historial de viajes está disponible en la Aplicación mientras tu cuenta esté activa.
          </li>
          <li>
            Las ubicaciones guardadas (casa, trabajo u otras) permanecen en tu cuenta hasta que las elimines
            manualmente o cierres tu cuenta.
          </li>
          <li>
            El historial de viajes se conserva por <strong>3 años</strong> por motivos legales conforme a lo descrito
            en la Política de Privacidad.
          </li>
          <li>
            La ubicación en tiempo real durante el viaje se elimina al concluir el mismo. Solo se guarda el origen y
            destino del viaje.
          </li>
        </ul>
      </Section>

      <Section title="16. Ley aplicable y jurisdicción">
        <p>
          Los presentes Términos se rigen exclusivamente por las leyes vigentes del{" "}
          <strong>Estado Plurinacional de Bolivia</strong>, incluyendo la Ley N.° 164 — Ley General de
          Telecomunicaciones, Tecnologías de Información y Comunicación, la normativa civil boliviana en materia de
          contratos y responsabilidad, la normativa de protección al consumidor y la normativa de tránsito y transporte
          aplicable.
        </p>
        <p>
          Para controversias que no puedan resolverse por las vías descritas, las partes se someten a la jurisdicción
          de los juzgados y tribunales competentes con asiento en Bolivia.
        </p>
      </Section>

      <Section title="17. Contacto">
        <p>Para consultas, reclamos o reportes relacionados con estos Términos, contáctenos a través de:</p>
        <p>
          <strong>Ruppit</strong>
          <br />
          Correo:{" "}
          <a href="mailto:soporte@ruppit.com" className="text-primary underline underline-offset-4">
            soporte@ruppit.com
          </a>
          <br />
          Sitio web: ruppit.com
          <br />
          Operaciones: Camiri, Santa Cruz, Bolivia
        </p>
      </Section>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="mb-4 text-xl font-semibold tracking-tight sm:text-2xl">{title}</h2>
      <div className="text-muted-foreground flex flex-col gap-3 text-sm leading-7 sm:text-base [&_a]:text-[#b38900] [&_a]:underline [&_a]:underline-offset-4 [&_li]:ml-4 [&_li]:list-disc [&_strong]:text-foreground">
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
      <strong className="text-foreground">Aviso importante: </strong>
      {children}
    </div>
  );
}

function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
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
