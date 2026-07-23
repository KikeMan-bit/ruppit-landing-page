import { LegalDoc, Section, Subsection, Callout, Table } from "@/app/components/legal/_ui";

export default function PrivacyPolicy() {
  return (
    <LegalDoc
      title="Política de Privacidad"
      version="julio de 2026"
      appliesTo="Todas las personas y negocios que usan Ruppit."
    >

      <Section title="1. Introducción">
        <p>
          Ruppit (en adelante, «Ruppit», «nosotros» o «la plataforma») es una plataforma tecnológica de intermediación
          que conecta pasajeros con conductores independientes en Bolivia. Operamos a través de la aplicación móvil
          Ruppit, disponible en iOS y Android, y del sitio web <strong>ruppit.com</strong>.
        </p>
        <p>
          Esta Política de Privacidad tiene como propósito informarle de manera clara y transparente sobre qué datos
          personales recopilamos, para qué los usamos, con quién los compartimos, cuánto tiempo los conservamos y
          cuáles son sus derechos sobre ellos.
        </p>
        <p>
          Al registrarse en la Aplicación o al continuar usándola, usted declara haber leído y comprendido esta
          Política de Privacidad y acepta el tratamiento de sus datos en los términos aquí descritos.
        </p>
        <Callout>Ruppit no vende datos personales de sus usuarios a terceros bajo ninguna circunstancia.</Callout>
      </Section>

      <Section title="2. Datos que recopilamos">
        <Subsection title="2.1 Datos de pasajeros">
          <p>
            <strong>Datos de registro e identidad:</strong>
          </p>
          <ul>
            <li>Nombre completo.</li>
            <li>Número de teléfono móvil.</li>
            <li>Foto de perfil (opcional, proporcionada voluntariamente).</li>
          </ul>
          <p>
            <strong>Datos de uso del servicio:</strong>
          </p>
          <ul>
            <li>
              Historial de viajes: punto de origen, punto de destino, tarifa acordada, fecha y hora, y conductor
              asignado.
            </li>
            <li>Ubicaciones guardadas por el Usuario, como «Casa», «Trabajo» u otras denominaciones personalizadas.</li>
            <li>Preferencias de viaje seleccionadas al momento de solicitar un servicio.</li>
          </ul>
          <p>
            <strong>Datos técnicos y de uso de la Aplicación:</strong>
          </p>
          <ul>
            <li>Modelo del dispositivo móvil y sistema operativo.</li>
            <li>Versión de la Aplicación instalada.</li>
            <li>
              Datos de uso: pantallas visitadas, botones utilizados y tiempos de sesión. Esta información se utiliza
              únicamente para mejorar el funcionamiento de la Aplicación.
            </li>
          </ul>
        </Subsection>

        <Subsection title="2.2 Datos adicionales de conductores">
          <p>Adicionalmente a los datos indicados en la sección 2.1, los conductores proporcionan:</p>
          <ul>
            <li>
              <strong>Cédula de identidad boliviana</strong> — número y fotografía del documento, requerida para el
              registro.
            </li>
            <li>
              <strong>Fotografía del vehículo</strong> con el que operará en la plataforma.
            </li>
            <li>
              <strong>Ruppit Code</strong> — para conductores en provincias de Bolivia bajo el sistema Ruppit Code, se asigna un
              código alfanumérico único (formato AA##). En este caso la verificación documental se realiza únicamente
              mediante la cédula de identidad del conductor.
            </li>
            <li>Historial de viajes completados como conductor.</li>
            <li>Calificaciones recibidas de pasajeros.</li>
          </ul>
        </Subsection>

        <Subsection title="2.3 Datos que NO recopilamos">
          <p>Ruppit no recopila:</p>
          <ul>
            <li>Datos bancarios, números de tarjeta de crédito o débito, ni cuentas bancarias.</li>
            <li>Ubicación del Usuario cuando la Aplicación está cerrada o en segundo plano.</li>
            <li>Información de contactos del dispositivo.</li>
            <li>Datos de otras aplicaciones instaladas en el dispositivo.</li>
            <li>
              <strong>
                Datos de salud, historial clínico, diagnósticos, recetas médicas ni información sobre medicamentos
                consumidos por el Usuario.
              </strong>
            </li>
          </ul>
        </Subsection>
      </Section>

      <Section title="3. Permisos de ubicación">
        <Subsection title="3.1 Cuándo accedemos a su ubicación">
          <p>La Aplicación accede a la ubicación del dispositivo únicamente:</p>
          <ul>
            <li>Mientras la Aplicación está activa en primer plano (abierta y visible en pantalla).</li>
            <li>Durante el transcurso de un viaje activo, aunque la Aplicación no esté en primer plano.</li>
          </ul>
          <Callout>
            Ruppit no rastrea, no registra ni tiene acceso a la ubicación del Usuario cuando la Aplicación está
            cerrada, minimizada fuera de un viaje activo o en segundo plano.
          </Callout>
        </Subsection>
        <Subsection title="3.2 Para qué usamos su ubicación">
          <ul>
            <li>Mostrar conductores disponibles en las cercanías del pasajero.</li>
            <li>Establecer y confirmar el punto de recogida del pasajero.</li>
            <li>Permitir al conductor navegar hacia el punto de recogida y el destino.</li>
            <li>Rastrear el trayecto del viaje en tiempo real.</li>
            <li>Calcular la tarifa sugerida en función de la distancia y el recorrido estimado.</li>
            <li>
              Ordenar por cercanía el listado informativo de farmacias de turno, conforme a la sección 6 de esta
              Política.
            </li>
          </ul>
        </Subsection>
        <Subsection title="3.3 Cómo gestionamos los datos de ubicación">
          <p>
            La ubicación en tiempo real durante un viaje se utiliza exclusivamente para la prestación del servicio y{" "}
            <strong>se elimina de nuestros sistemas activos al concluir el viaje.</strong> El historial de viajes
            registra únicamente el origen y destino, no la ruta completa.
          </p>
          <p>
            Puede revocar el permiso de ubicación en cualquier momento desde la configuración de su dispositivo.
            Tenga en cuenta que esto impedirá el uso de las funciones principales de la Aplicación.
          </p>
        </Subsection>
      </Section>

      <Section title="4. Permisos de cámara">
        <Callout>
          La Aplicación nunca activa la cámara de manera automática ni en segundo plano. El acceso ocurre únicamente
          cuando el Usuario inicia de forma activa y voluntaria una acción que lo requiere.
        </Callout>

        <Subsection title="4.1 Usos para pasajeros">
          <Table
            headers={["Acción del usuario", "Uso de la cámara"]}
            rows={[
              [
                "Configurar o actualizar foto de perfil",
                "Permite tomar una fotografía o seleccionar una imagen de la galería.",
              ],
            ]}
          />
        </Subsection>

        <Subsection title="4.2 Usos para conductores">
          <Table
            headers={["Acción del usuario", "Uso de la cámara"]}
            rows={[
              ["Configurar o actualizar foto de perfil", "Permite tomar o seleccionar una fotografía de perfil."],
              [
                "Verificación de identidad al registrarse",
                "Permite fotografiar la cédula de identidad para el proceso de verificación.",
              ],
              [
                "Registro de documentos del vehículo",
                "Permite fotografiar los documentos vehiculares aplicables.",
              ],
              [
                "Recarga de Monedas Ruppit",
                "Activa el escáner para leer el código QR y recargar el saldo de Monedas del conductor o repartidor.",
              ],
            ]}
          />
        </Subsection>
      </Section>

      <Section title="5. Notificaciones push">
        <p>Con su autorización, la Aplicación puede enviarle notificaciones push para:</p>
        <ul>
          <li>Informarle que un conductor ha aceptado su solicitud de viaje.</li>
          <li>Notificarle que el conductor está en camino y el tiempo estimado de llegada.</li>
          <li>Avisar el inicio y la finalización del viaje.</li>
          <li>Comunicar actualizaciones importantes sobre el servicio o su cuenta.</li>
        </ul>
        <p>
          Puede desactivar las notificaciones en cualquier momento desde la configuración de notificaciones de la
          Aplicación o desde los ajustes de su dispositivo móvil.
        </p>
      </Section>

      <Section title="6. Farmacias de turno y datos de salud">
        <Callout>
          La consulta de farmacias de turno es un servicio meramente informativo.{" "}
          <strong>
            Ruppit no recopila datos de salud, no elabora perfiles médicos y no comparte sus consultas con farmacias,
            aseguradoras, laboratorios ni anunciantes.
          </strong>
        </Callout>

        <Subsection title="6.1 Qué datos se tratan al consultar farmacias de turno">
          <p>Al abrir la sección de farmacias de turno, la Aplicación trata únicamente:</p>
          <ul>
            <li>
              <strong>Su ubicación aproximada en ese momento</strong>, con el único fin de ordenar por cercanía las
              farmacias de turno de su localidad. Se procesa en tiempo real y no se asocia a su historial de viajes.
            </li>
            <li>
              <strong>Datos técnicos agregados de uso</strong>, como el número de veces que se abre la sección, para
              medir el interés en la funcionalidad.
            </li>
          </ul>
          <p>
            Si el Usuario no concede el permiso de ubicación, la sección seguirá siendo utilizable mostrando las
            farmacias de turno de la localidad seleccionada manualmente.
          </p>
        </Subsection>

        <Subsection title="6.2 Datos que NO se tratan en esta sección">
          <p>Ruppit no recopila, no infiere ni almacena:</p>
          <ul>
            <li>Medicamentos buscados, consultados, adquiridos o consumidos por el Usuario.</li>
            <li>Recetas médicas, diagnósticos, síntomas, patologías o cualquier información clínica.</li>
            <li>Perfiles de salud, categorías sensibles o segmentaciones basadas en condiciones médicas.</li>
          </ul>
          <p>
            La información mostrada corresponde a establecimientos comerciales (nombre, dirección, horario de turno y
            teléfono) obtenida de fuentes públicas o de la propia farmacia;{" "}
            <strong>no se trata de datos personales del Usuario.</strong>
          </p>
        </Subsection>

        <Subsection title="6.3 Ruppit no comercializa productos farmacéuticos">
          <p>
            Ruppit no vende ni dispensa medicamentos ni productos farmacéuticos, y no participa en ninguna transacción
            entre el Usuario y la farmacia.{" "}
            <strong>
              Ruppit no recibe de las farmacias información sobre las compras, consultas o productos adquiridos por el
              Usuario.
            </strong>{" "}
            El régimen completo de este servicio se detalla en la cláusula 9 de los Términos y Condiciones.
          </p>
        </Subsection>

        <Subsection title="6.4 Envíos desde farmacias mediante el servicio de delivery">
          <p>
            Si el Usuario solicita un envío desde una farmacia a través del servicio de delivery, se aplican las
            siguientes reglas:
          </p>
          <ul>
            <li>
              El repartidor recibe únicamente los datos operativos indispensables para el encargo: el punto de recojo,
              el punto de entrega, el nombre del Usuario y las instrucciones que este haya escrito.
            </li>
            <li>
              El contenido que el Usuario escriba en la descripción del pedido se conserva únicamente durante el tiempo
              necesario para completar la entrega y resolver eventuales reclamos, y{" "}
              <strong>no se utiliza para publicidad, segmentación ni análisis de comportamiento.</strong>
            </li>
            <li>
              Recomendamos <strong>no incluir información clínica ni datos de salud</strong> en las instrucciones del
              pedido. Cualquier dato de esa naturaleza que el Usuario proporcione voluntariamente será tratado con
              carácter estrictamente confidencial y eliminado una vez concluida la entrega y el plazo de reclamos.
            </li>
          </ul>
        </Subsection>
      </Section>

      <Section title="7. Cómo usamos sus datos">
        <Subsection title="7.1 Prestación del servicio">
          <ul>
            <li>Gestionar y mantener su cuenta de usuario.</li>
            <li>Conectar pasajeros con conductores disponibles.</li>
            <li>Facilitar la comunicación entre pasajero y conductor durante el viaje.</li>
            <li>Procesar y registrar los viajes completados.</li>
          </ul>
        </Subsection>
        <Subsection title="7.2 Seguridad y verificación">
          <ul>
            <li>Verificar la identidad de los conductores registrados.</li>
            <li>Detectar y prevenir fraudes, abusos o conductas que violen nuestros Términos.</li>
            <li>Investigar y resolver disputas reportadas entre usuarios.</li>
          </ul>
        </Subsection>
        <Subsection title="7.3 Mejora del servicio">
          <ul>
            <li>Analizar datos de uso agregados y anonimizados para mejorar el funcionamiento de la Aplicación.</li>
            <li>Identificar y corregir errores técnicos.</li>
            <li>Desarrollar nuevas funcionalidades.</li>
          </ul>
        </Subsection>
        <Subsection title="7.4 Cumplimiento legal">
          <ul>
            <li>Cumplir con obligaciones legales, reglamentarias o judiciales aplicables en Bolivia.</li>
            <li>Conservar registros que puedan ser requeridos por autoridades competentes mediante orden judicial.</li>
          </ul>
        </Subsection>
      </Section>

      <Section title="8. Datos que compartimos con terceros">
        <Callout>
          Ruppit no vende, no alquila ni cede datos personales a terceros con fines publicitarios o comerciales.
        </Callout>

        <Subsection title="8.1 Con conductores">
          <p>Durante el transcurso de un viaje, el conductor recibe:</p>
          <ul>
            <li>Nombre del pasajero.</li>
            <li>Foto de perfil del pasajero (si el pasajero ha configurado una).</li>
            <li>Ubicación del punto de recogida.</li>
          </ul>
        </Subsection>

        <Subsection title="8.2 Con proveedores de servicios de mapas">
          <p>
            Para calcular rutas y rastrear el trayecto del viaje, la Aplicación utiliza servicios de mapas de terceros.
            A estos proveedores se les comparten <strong>únicamente los datos de ubicación estrictamente necesarios</strong>{" "}
            para la ruta activa. No se comparte información de identidad del usuario.
          </p>
        </Subsection>

        <Subsection title="8.3 Con Banco Económico (pagos por QR)">
          <p>
            Cuando el Usuario elige el pago por código QR, se comparten con el Banco Económico{" "}
            <strong>únicamente los datos indispensables para procesar la transacción.</strong> Ruppit no interviene en
            el procesamiento del pago ni almacena datos de la transacción bancaria.
          </p>
        </Subsection>

        <Subsection title="8.4 Con autoridades competentes">
          <p>
            Ruppit podrá divulgar datos personales a autoridades judiciales, fiscales o administrativas bolivianas{" "}
            <strong>únicamente ante una orden judicial válida</strong> y en los términos exactos que dicha orden
            establezca.
          </p>
        </Subsection>

        <Subsection title="8.5 Con farmacias de turno">
          <p>
            <strong>Ruppit no comparte ningún dato personal del Usuario con las farmacias listadas.</strong> La consulta
            del listado es unidireccional: el Usuario ve la información del establecimiento, pero la farmacia no recibe
            de Ruppit su identidad, su ubicación ni el hecho de que haya realizado la consulta.
          </p>
          <p>
            Únicamente cuando el Usuario solicite de forma expresa un envío desde una farmacia mediante el servicio de
            delivery, el repartidor recibirá los datos operativos indispensables descritos en la sección 6.4.
          </p>
        </Subsection>
      </Section>

      <Section title="9. Pagos y datos bancarios">
        <Subsection title="9.1 Pago en efectivo">
          <p>
            Los pagos en efectivo se realizan directamente entre pasajero y conductor al finalizar el viaje. Este
            método no genera ningún dato digital procesado o almacenado por Ruppit.
          </p>
        </Subsection>
        <Subsection title="9.2 Pago por código QR">
          <p>
            Los pagos mediante código QR son compatibles con cualquier entidad bancaria boliviana que admita este
            método. La transacción se procesa directamente a través de la entidad bancaria del Usuario.
          </p>
          <p>
            <strong>Ruppit no almacena, no procesa ni tiene acceso a:</strong>
          </p>
          <ul>
            <li>Números de cuenta bancaria.</li>
            <li>Números de tarjeta de débito o crédito.</li>
            <li>Claves o credenciales bancarias.</li>
            <li>Información financiera sensible de ningún tipo.</li>
          </ul>
        </Subsection>
      </Section>

      <Section title="10. Seguridad de los datos">
        <p>Ruppit aplica medidas técnicas y organizativas razonables para proteger sus datos personales, incluyendo:</p>
        <ul>
          <li>Transmisión de datos mediante protocolos de cifrado (HTTPS/TLS).</li>
          <li>Almacenamiento de contraseñas mediante técnicas de hash seguro.</li>
          <li>Acceso restringido a datos personales solo al personal autorizado de Ruppit.</li>
          <li>Revisiones periódicas de nuestras prácticas de seguridad.</li>
        </ul>
        <p>
          En caso de que Ruppit tome conocimiento de una brecha de seguridad que afecte significativamente sus datos
          personales, le notificaremos a través de la Aplicación o por correo electrónico en el menor tiempo posible.
        </p>
      </Section>

      <Section title="11. Retención de datos">
        <Table
          headers={["Tipo de dato", "Período de retención"]}
          rows={[
            [
              "Datos de cuenta (nombre, teléfono, correo, foto de perfil)",
              "Mientras la cuenta esté activa. Eliminados o anonimizados a solicitud del Usuario o tras el cierre de cuenta.",
            ],
            [
              "Historial de viajes",
              "Hasta 3 años desde la fecha del viaje, por razones legales y de resolución de disputas.",
            ],
            [
              "Ubicación en tiempo real durante el viaje",
              "Eliminada al concluir el viaje. No se conserva historial de rutas detalladas.",
            ],
            [
              "Datos de verificación de conductores (CI, documentos)",
              "Mientras la cuenta esté activa y hasta 3 años después del cierre de la cuenta del conductor.",
            ],
            [
              "Datos técnicos y de uso de la Aplicación",
              "Hasta 12 meses, en formato agregado y anonimizado para análisis de mejora.",
            ],
            [
              "Consultas de farmacias de turno",
              "No se conserva registro individual. La ubicación se procesa en el momento de la consulta y no se almacena; solo se guardan métricas agregadas y anonimizadas de uso.",
            ],
          ]}
        />
        <p className="mt-3">
          Transcurridos los plazos indicados, los datos serán eliminados de manera segura o anonimizados de forma
          irreversible.
        </p>
      </Section>

      <Section title="12. Cookies y seguimiento en la web">
        <p>
          El sitio web <strong>ruppit.com</strong> utiliza exclusivamente{" "}
          <strong>cookies técnicas esenciales</strong>, es decir, aquellas estrictamente necesarias para el
          funcionamiento básico del sitio, como mantener la sesión iniciada o recordar preferencias.
        </p>
        <p>Ruppit:</p>
        <ul>
          <li>No utiliza cookies de seguimiento publicitario ni de retargeting.</li>
          <li>No instala cookies de terceros con fines de análisis de comportamiento comercial.</li>
          <li>No comparte datos de navegación con plataformas publicitarias ni intermediarios de datos.</li>
        </ul>
        <p>
          El Usuario puede gestionar o eliminar las cookies desde la configuración de su navegador web. La eliminación
          de cookies técnicas puede afectar el funcionamiento de algunas secciones del sitio.
        </p>
      </Section>

      <Section title="13. Derechos del usuario sobre sus datos">
        <p>El Usuario tiene los siguientes derechos sobre sus datos personales:</p>
        <ul>
          <li>
            <strong>Acceso:</strong> solicitar y obtener una copia de los datos personales que tratamos sobre usted.
          </li>
          <li>
            <strong>Rectificación:</strong> solicitar la corrección de datos inexactos, incompletos o desactualizados.
          </li>
          <li>
            <strong>Cancelación o eliminación:</strong> solicitar la eliminación de sus datos cuando ya no sean
            necesarios para los fines para los que fueron recopilados.
          </li>
          <li>
            <strong>Oposición:</strong> oponerse al tratamiento de sus datos para determinadas finalidades.
          </li>
          <li>
            <strong>Portabilidad:</strong> solicitar sus datos en un formato estructurado y de uso común.
          </li>
          <li>
            <strong>Revocación del consentimiento:</strong> retirar su consentimiento en cualquier momento, sin que
            ello afecte la licitud del tratamiento realizado previamente.
          </li>
        </ul>
        <p>
          Para ejercer cualquiera de estos derechos, envíe una solicitud escrita a{" "}
          <a href="mailto:soporte@ruppit.com">soporte@ruppit.com</a> indicando su nombre completo, el teléfono
          asociado a la cuenta y el derecho que desea ejercer.
        </p>
      </Section>

      <Section title="14. Menores de edad">
        <p>
          La Aplicación está dirigida a personas mayores de dieciocho (18) años. Ruppit no recopila de manera
          intencional datos personales de menores de edad.
        </p>
        <p>
          Si usted es padre, madre o tutor legal y tiene conocimiento de que un menor ha proporcionado datos personales
          a Ruppit sin su consentimiento, contáctenos de inmediato en{" "}
          <a href="mailto:soporte@ruppit.com">soporte@ruppit.com</a> para proceder a la eliminación de dicha
          información.
        </p>
      </Section>

      <Section title="15. Cambios a esta política">
        <p>
          Ruppit podrá modificar esta Política de Privacidad cuando sea necesario, por ejemplo, ante cambios en el
          servicio, nuevas funcionalidades o modificaciones legales. Cuando se realicen cambios sustanciales, le
          notificaremos mediante:
        </p>
        <ul>
          <li>Una notificación push en la Aplicación.</li>
          <li>Un aviso destacado en la pantalla de inicio de la Aplicación al ingresar.</li>
          <li>Un correo electrónico a la dirección registrada en su cuenta, cuando lo consideremos necesario.</li>
        </ul>
        <p>
          La fecha de la versión vigente se indica al inicio de este documento. El uso continuado de la Aplicación
          tras la notificación de cambios implicará su aceptación de la versión actualizada.
        </p>
      </Section>

      <Section title="16. Contacto">
        <p>
          Si tiene preguntas, dudas o desea ejercer alguno de sus derechos sobre sus datos personales, puede
          comunicarse con nosotros:
        </p>
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
          Operaciones: Camiri, Santa Cruz, Estado Plurinacional de Bolivia
        </p>
      </Section>
    </LegalDoc>
  );
}
