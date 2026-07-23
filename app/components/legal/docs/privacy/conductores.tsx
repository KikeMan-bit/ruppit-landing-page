import { LegalDoc, Section, Subsection, Callout, Table } from "../../_ui";

export default function ConductoresPrivacyDoc() {
  return (
    <LegalDoc
      title="Datos de conductores"
      version="julio de 2026"
      appliesTo="Conductores independientes registrados en la Aplicación."
    >
      <Callout>
        Estas condiciones particulares <strong>complementan y no sustituyen</strong> la Política de Privacidad general,
        que prevalece en caso de contradicción.
      </Callout>

      <Section title="1. Datos que recopilamos del conductor">
        <Subsection title="1.1 Identidad y verificación">
          <ul>
            <li>Nombre completo, número de teléfono móvil y foto de perfil.</li>
            <li>
              <strong>Cédula de identidad boliviana</strong> — número y fotografía del documento, requerida para el
              registro y la verificación.
            </li>
            <li>
              <strong>Fotografía del vehículo</strong> con el que operará en la plataforma.
            </li>
            <li>Documentación vehicular aplicable, cuando corresponda.</li>
            <li>
              <strong>Ruppit Code</strong> asignado (formato AA##) para conductores en provincias. En este caso la
              verificación documental se realiza únicamente mediante la cédula de identidad.
            </li>
          </ul>
        </Subsection>
        <Subsection title="1.2 Actividad en la plataforma">
          <ul>
            <li>Historial de viajes completados, con origen, destino, tarifa y fecha.</li>
            <li>Calificaciones recibidas de pasajeros y reportes asociados.</li>
            <li>Cancelaciones, tiempos de respuesta y estado de conexión.</li>
            <li>Movimientos del saldo de Monedas Ruppit: recargas, débitos de comisión y ajustes.</li>
          </ul>
        </Subsection>
        <Subsection title="1.3 Datos técnicos">
          <p>Modelo del dispositivo, sistema operativo, versión de la Aplicación y datos de uso agregados.</p>
        </Subsection>
      </Section>

      <Section title="2. Datos que NO recopilamos">
        <ul>
          <li>Datos bancarios, números de cuenta, tarjetas ni credenciales financieras.</li>
          <li>Ubicación cuando la Aplicación está cerrada o en segundo plano fuera de un viaje activo.</li>
          <li>Información de contactos del dispositivo ni de otras aplicaciones instaladas.</li>
          <li>Datos de salud ni información clínica.</li>
        </ul>
      </Section>

      <Section title="3. Para qué usamos estos datos">
        <ul>
          <li>
            <strong>Verificar la identidad</strong> del conductor antes de habilitarlo en la plataforma.
          </li>
          <li>Conectarlo con pasajeros y gestionar las solicitudes de viaje.</li>
          <li>Registrar los viajes completados y calcular la comisión en Monedas Ruppit.</li>
          <li>Detectar y prevenir fraudes, incluida la manipulación del sistema de Monedas.</li>
          <li>Investigar y resolver disputas y reportes de seguridad.</li>
          <li>Cumplir obligaciones legales y responder requerimientos judiciales válidos.</li>
        </ul>
      </Section>

      <Section title="4. Qué ve el pasajero">
        <Table
          headers={["El pasajero recibe", "El pasajero NO recibe"]}
          rows={[
            ["Nombre y foto de perfil del conductor", "Cédula de identidad y documentos de verificación"],
            ["Datos del vehículo y Ruppit Code cuando aplique", "Domicilio o datos de contacto personales"],
            ["Calificación promedio del conductor", "Saldo de Monedas ni movimientos de la cuenta"],
            ["Ubicación en tiempo real durante el viaje", "Historial de viajes con otros pasajeros"],
          ]}
        />
      </Section>

      <Section title="5. Ubicación">
        <p>
          La Aplicación accede a la ubicación{" "}
          <strong>únicamente mientras está en primer plano o durante un viaje activo.</strong> Ruppit{" "}
          <strong>no rastrea la ubicación del conductor cuando no está en un viaje</strong>, ni cuando la Aplicación
          está cerrada o en segundo plano.
        </p>
        <p>
          La ubicación en tiempo real se comparte con el pasajero solo durante el viaje y{" "}
          <strong>se elimina de los sistemas activos al concluirlo.</strong> El historial registra únicamente origen y
          destino.
        </p>
      </Section>

      <Section title="6. Cámara">
        <p>El acceso a la cámara se activa solo cuando el conductor inicia voluntariamente una de estas acciones:</p>
        <Table
          headers={["Acción del conductor", "Uso de la cámara"]}
          rows={[
            ["Configurar o actualizar foto de perfil", "Tomar o seleccionar una fotografía."],
            ["Verificación de identidad al registrarse", "Fotografiar la cédula de identidad."],
            ["Registro de documentos del vehículo", "Fotografiar los documentos vehiculares aplicables."],
            ["Recarga de Monedas Ruppit", "Escanear el código QR de recarga."],
          ]}
        />
      </Section>

      <Section title="7. Recargas de Monedas y datos financieros">
        <p>
          Las recargas se realizan mediante <strong>QR Simple</strong>, generado desde la Aplicación a través del{" "}
          <strong>Banco Económico S.A.</strong> La transacción se procesa íntegramente entre la entidad financiera del
          conductor y el banco recaudador.
        </p>
        <p>
          <strong>
            Ruppit no almacena, no procesa ni tiene acceso a datos bancarios, números de cuenta, tarjetas ni
            credenciales.
          </strong>{" "}
          Únicamente recibe la confirmación de la operación necesaria para acreditar el saldo de Monedas.
        </p>
      </Section>

      <Section title="8. Conservación">
        <Table
          headers={["Dato", "Período"]}
          rows={[
            ["Datos de cuenta", "Mientras la cuenta esté activa."],
            [
              "Datos de verificación (cédula, documentos del vehículo)",
              "Mientras la cuenta esté activa y hasta 3 años después de su cierre, por razones legales.",
            ],
            ["Historial de viajes", "Hasta 3 años desde la fecha del viaje."],
            ["Movimientos de Monedas Ruppit", "Por el plazo legal aplicable al registro contable."],
            ["Ubicación en tiempo real", "Eliminada al concluir el viaje."],
          ]}
        />
      </Section>

      <Section title="9. Derechos del conductor">
        <p>
          Acceso, rectificación, cancelación, oposición, portabilidad y revocación del consentimiento, escribiendo a{" "}
          <a href="mailto:soporte@ruppit.com">soporte@ruppit.com</a> con su nombre completo y el teléfono asociado a la
          cuenta.
        </p>
        <p>
          Los datos de verificación necesarios para acreditar la identidad de quien prestó el servicio se conservan
          durante el plazo legal aun después de la baja, para atender eventuales reclamos o requerimientos de
          autoridad.
        </p>
      </Section>

      <Section title="10. Contacto">
        <p>
          <strong>Ruppit — Conductores</strong>
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
