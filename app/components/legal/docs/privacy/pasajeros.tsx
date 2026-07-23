import { LegalDoc, Section, Subsection, Callout, Table } from "../../_ui";

export default function PasajerosPrivacyDoc() {
  return (
    <LegalDoc
      title="Datos de pasajeros"
      version="julio de 2026"
      appliesTo="Usuarios que solicitan viajes a través de la Aplicación."
    >
      <Callout>
        Estas condiciones particulares <strong>complementan y no sustituyen</strong> la Política de Privacidad general,
        que prevalece en caso de contradicción.
      </Callout>

      <Section title="1. Datos que recopilamos del pasajero">
        <Subsection title="1.1 Registro e identidad">
          <ul>
            <li>Nombre completo.</li>
            <li>Número de teléfono móvil.</li>
            <li>Foto de perfil (opcional, proporcionada voluntariamente).</li>
          </ul>
        </Subsection>
        <Subsection title="1.2 Uso del servicio">
          <ul>
            <li>
              Historial de viajes: punto de origen, punto de destino, tarifa acordada, fecha y hora, y conductor
              asignado.
            </li>
            <li>Ubicaciones guardadas, como «Casa», «Trabajo» u otras denominaciones personalizadas.</li>
            <li>Preferencias de viaje seleccionadas al solicitar un servicio.</li>
            <li>Calificaciones y reportes que el pasajero emite o recibe.</li>
          </ul>
        </Subsection>
        <Subsection title="1.3 Datos técnicos">
          <ul>
            <li>Modelo del dispositivo y sistema operativo.</li>
            <li>Versión de la Aplicación instalada.</li>
            <li>Pantallas visitadas y tiempos de sesión, únicamente para mejorar el funcionamiento.</li>
          </ul>
        </Subsection>
      </Section>

      <Section title="2. Datos que NO recopilamos">
        <ul>
          <li>Datos bancarios, números de tarjeta de crédito o débito, ni cuentas bancarias.</li>
          <li>Ubicación cuando la Aplicación está cerrada o en segundo plano fuera de un viaje activo.</li>
          <li>Información de contactos del dispositivo.</li>
          <li>Datos de otras aplicaciones instaladas.</li>
          <li>Datos de salud, historial clínico, diagnósticos ni recetas médicas.</li>
        </ul>
      </Section>

      <Section title="3. Permisos del dispositivo">
        <Subsection title="3.1 Ubicación">
          <p>
            La Aplicación accede a la ubicación{" "}
            <strong>únicamente cuando está activa en primer plano o durante un viaje activo.</strong> Ruppit{" "}
            <strong>no rastrea, no registra ni almacena</strong> la ubicación cuando la Aplicación está cerrada,
            minimizada fuera de un viaje o en segundo plano.
          </p>
          <p>Se utiliza para mostrar conductores cercanos, confirmar el punto de recogida, rastrear el trayecto en tiempo real, calcular la tarifa sugerida y ordenar el listado de farmacias de turno.</p>
          <p>
            <strong>La ubicación en tiempo real se elimina al concluir el viaje.</strong> El historial guarda únicamente
            origen y destino, no la ruta completa.
          </p>
        </Subsection>
        <Subsection title="3.2 Cámara">
          <p>
            Se activa <strong>solo cuando el pasajero inicia voluntariamente</strong> una acción que lo requiere: tomar
            o actualizar la foto de perfil y escanear códigos QR para pagos. La Aplicación{" "}
            <strong>nunca activa la cámara de forma automática ni en segundo plano.</strong>
          </p>
        </Subsection>
        <Subsection title="3.3 Notificaciones">
          <p>
            Con su autorización, para informar que un conductor aceptó la solicitud, que está en camino, el inicio y fin
            del viaje y comunicaciones sobre la cuenta. Pueden desactivarse desde los ajustes del dispositivo.
          </p>
        </Subsection>
      </Section>

      <Section title="4. Qué ve el conductor">
        <Table
          headers={["El conductor recibe", "El conductor NO recibe"]}
          rows={[
            ["Nombre del pasajero", "Teléfono personal y correo electrónico"],
            ["Foto de perfil, si la ha configurado", "Documento de identidad"],
            ["Ubicación del punto de recogida", "Historial de viajes del pasajero"],
            ["Preferencias del viaje solicitadas", "Ubicaciones guardadas («Casa», «Trabajo»)"],
          ]}
        />
      </Section>

      <Section title="5. Con quién compartimos">
        <ul>
          <li>
            <strong>Conductores:</strong> únicamente los datos de la tabla anterior y solo durante el viaje.
          </li>
          <li>
            <strong>Proveedores de mapas:</strong> solo los datos de ubicación estrictamente necesarios para la ruta
            activa. No se comparte información de identidad.
          </li>
          <li>
            <strong>Entidad financiera, en pagos por QR:</strong> únicamente los datos indispensables para procesar la
            transacción. Ruppit no interviene en el procesamiento del pago.
          </li>
          <li>
            <strong>Autoridades competentes:</strong> únicamente ante orden judicial válida y en los términos exactos
            que esta establezca.
          </li>
        </ul>
        <p>
          <strong>Ruppit no vende, no alquila ni cede datos personales con fines publicitarios o comerciales.</strong>
        </p>
      </Section>

      <Section title="6. Conservación">
        <Table
          headers={["Dato", "Período"]}
          rows={[
            ["Datos de cuenta", "Mientras la cuenta esté activa; eliminados o anonimizados tras su cierre."],
            ["Historial de viajes", "Hasta 3 años, por razones legales y de resolución de disputas."],
            ["Ubicación en tiempo real", "Eliminada al concluir el viaje."],
            ["Ubicaciones guardadas", "Hasta que el pasajero las elimine o cierre su cuenta."],
            ["Datos técnicos de uso", "Hasta 12 meses, agregados y anonimizados."],
          ]}
        />
      </Section>

      <Section title="7. Derechos del pasajero">
        <p>
          Acceso, rectificación, cancelación, oposición, portabilidad y revocación del consentimiento. Para ejercerlos,
          envíe una solicitud a <a href="mailto:soporte@ruppit.com">soporte@ruppit.com</a> indicando su nombre completo,
          el teléfono asociado a la cuenta y el derecho que desea ejercer.
        </p>
        <p>
          El pasajero puede además eliminar su cuenta desde la propia Aplicación, conforme al procedimiento publicado en
          la página de eliminación de cuenta.
        </p>
      </Section>

      <Section title="8. Contacto">
        <p>
          <strong>Ruppit</strong>
          <br />
          Correo: <a href="mailto:soporte@ruppit.com">soporte@ruppit.com</a>
          <br />
          Sitio web: ruppit.com
          <br />
          Operaciones: Camiri, Santa Cruz, Estado Plurinacional de Bolivia
        </p>
      </Section>
    </LegalDoc>
  );
}
