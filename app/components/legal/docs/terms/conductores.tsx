import { LegalDoc, Section, Callout, Table } from "../../_ui";

export default function ConductoresDoc() {
  return (
    <LegalDoc
      title="Conductores"
      version="julio de 2026"
      appliesTo="Conductores independientes que ofrecen servicios de transporte a través de la Aplicación."
    >
      <Callout>
        El conductor es un <strong>trabajador independiente</strong>. No existe relación laboral, de dependencia, de
        agencia ni de representación con Ruppit. El contrato de transporte se celebra directamente entre el conductor y
        el pasajero.
      </Callout>

      <Section title="1. Ámbito">
        <p>
          Estas condiciones particulares desarrollan las obligaciones y derechos del conductor.{" "}
          <strong>Complementan y no sustituyen</strong> los Términos y Condiciones ni la Política de Privacidad, que
          aplican en su integridad y prevalecen en caso de contradicción.
        </p>
      </Section>

      <Section title="2. Independencia y responsabilidad">
        <p>
          El conductor actúa en su propio nombre y por su propia cuenta, con su propio vehículo, decidiendo libremente
          cuándo conectarse, qué solicitudes aceptar y qué rutas seguir. Es el{" "}
          <strong>único responsable</strong> del cumplimiento de la normativa de tránsito, transporte, tributaria y
          cualquier otra legislación aplicable en Bolivia.
        </p>
        <p>
          Ruppit no aporta el vehículo, no asigna turnos, no exige jornadas ni impone metas de viajes, y no responde por
          accidentes, lesiones o daños ocurridos durante el viaje.
        </p>
      </Section>

      <Section title="3. Registro y verificación">
        <ul>
          <li>Ser mayor de dieciocho (18) años.</li>
          <li>
            <strong>Cédula de identidad boliviana</strong> — número y fotografía del documento, requerida para el
            registro.
          </li>
          <li>Fotografía del vehículo con el que operará.</li>
          <li>Fotografía de perfil.</li>
          <li>Documentación vehicular exigible conforme a la normativa aplicable.</li>
        </ul>
        <p>
          Ruppit puede solicitar documentación adicional en cualquier momento y suspender la cuenta mientras no sea
          presentada.
        </p>
      </Section>

      <Section title="4. Sistema Ruppit Code">
        <p>
          El <strong>Ruppit Code</strong> es un sistema de identificación con formato <strong>AA##</strong> que permite
          incorporar conductores y vehículos en contextos donde la documentación vehicular oficial puede estar en
          trámite o no estar disponible.
        </p>
        <p>El conductor registrado bajo este sistema es el único y exclusivo responsable de:</p>
        <ul>
          <li>Cumplir toda la normativa local, departamental y nacional de tránsito y transporte.</li>
          <li>
            Gestionar y obtener la documentación legal de su vehículo: placa de circulación, SOAT, revisión técnica y
            cualquier otro documento exigido.
          </li>
          <li>Cualquier infracción, multa o consecuencia legal derivada de operar sin la documentación requerida.</li>
        </ul>
        <p>
          <strong>Ruppit no verifica, no garantiza ni avala</strong> que los vehículos bajo este sistema cuenten con
          placa oficial, SOAT o revisión técnica. El régimen completo consta en la cláusula 7 de los Términos y
          Condiciones.
        </p>
      </Section>

      <Section title="5. Monedas Ruppit y comisión">
        <Callout>
          Las Monedas Ruppit son una unidad de crédito interna destinada únicamente al pago de la comisión.{" "}
          <strong>No son dinero, no son retirables, no son transferibles ni convertibles en efectivo.</strong>
        </Callout>
        <ul>
          <li>
            La comisión por cada viaje completado se paga <strong>exclusivamente mediante Monedas Ruppit</strong>.
          </li>
          <li>
            La recarga se realiza mediante <strong>QR Simple</strong>, generado desde la Aplicación a través del{" "}
            <strong>Banco Económico S.A.</strong>
          </li>
          <li>
            <strong>Mantener saldo positivo es condición para recibir y aceptar solicitudes.</strong> Al llegar a cero,
            la cuenta deja temporalmente de recibir solicitudes hasta la siguiente recarga. Esto no es una sanción y se
            revierte automáticamente.
          </li>
          <li>
            En caso de cierre de cuenta, el saldo remanente se extingue sin derecho a reembolso ni compensación.
          </li>
        </ul>
        <Table
          headers={["Período", "Asignación", "Comisión"]}
          rows={[
            [
              "Primer mes de lanzamiento en la ciudad",
              "20 Monedas Ruppit sin costo, por única vez y por cuenta verificada",
              "1% sobre el monto de cada viaje completado",
            ],
            [
              "A partir del segundo mes",
              "Sin asignación promocional; el saldo se adquiere por recarga",
              "Porcentaje ordinario determinado por Ruppit",
            ],
          ]}
        />
        <p className="mt-3">
          <strong>
            Todo cambio en el porcentaje de comisión se comunica con una antelación mínima de siete (7) días
            calendario.
          </strong>{" "}
          El régimen completo consta en la cláusula 6 de los Términos y Condiciones.
        </p>
      </Section>

      <Section title="6. Libertad de aceptación y no discriminación">
        <p>
          El conductor tiene plena libertad de aceptar o rechazar cualquier solicitud según la tarifa propuesta y las
          preferencias del viaje, sin penalización.
        </p>
        <p>
          <strong>
            Queda expresamente prohibida la discriminación por motivos de raza, etnia, género, orientación sexual,
            religión, discapacidad, edad, apariencia física o cualquier otra condición protegida por la legislación
            boliviana.
          </strong>{" "}
          Ruppit puede sancionar, suspender o dar de baja a conductores que incurran en conductas discriminatorias
          verificadas.
        </p>
      </Section>

      <Section title="7. Obligaciones del conductor">
        <ul>
          <li>Tratar al pasajero con respeto y profesionalismo.</li>
          <li>Mantener su vehículo en condiciones seguras e higiénicas.</li>
          <li>Respetar las normas de tránsito bolivianas.</li>
          <li>No conducir bajo los efectos del alcohol u otras sustancias.</li>
          <li>No desviar la ruta acordada sin consentimiento del pasajero.</li>
          <li>Respetar el precio acordado al inicio del viaje.</li>
          <li>No contactar a los pasajeros fuera de la plataforma para evadir la comisión.</li>
        </ul>
      </Section>

      <Section title="8. Cancelaciones y suspensión de cuenta">
        <p>
          El conductor puede cancelar un viaje aceptado antes de iniciar el recorrido. Las cancelaciones reiteradas sin
          causa justificada pueden ser causal de revisión de su estado en la plataforma.
        </p>
        <p>Ruppit podrá suspender, restringir o cancelar la cuenta cuando existan indicios de:</p>
        <ul>
          <li>Violación de los Términos y Condiciones.</li>
          <li>Conductas fraudulentas o abusivas, incluida la manipulación del sistema de Monedas.</li>
          <li>Riesgo para la seguridad de pasajeros u otros usuarios.</li>
          <li>Solicitud expresa del propio conductor.</li>
        </ul>
      </Section>

      <Section title="9. Obligaciones tributarias">
        <p>
          El conductor es el <strong>único responsable</strong> del cumplimiento de sus obligaciones tributarias en
          Bolivia derivadas de su actividad independiente. Ruppit no actúa como agente de retención ni emite documentos
          fiscales por cuenta del conductor.
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
