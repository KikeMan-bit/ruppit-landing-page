import { LegalDoc, Section, Subsection, Callout, Table } from "../../_ui";

export default function PasajerosDoc() {
  return (
    <LegalDoc
      title="Pasajeros"
      version="julio de 2026"
      appliesTo="Usuarios que solicitan viajes a través de la Aplicación."
    >
      <Callout>
        El contrato de transporte se celebra <strong>directamente entre el pasajero y el conductor</strong>. Ruppit es
        una plataforma tecnológica de intermediación: no es una empresa de transporte y no emplea a los conductores.
      </Callout>

      <Section title="1. Ámbito">
        <p>
          Estas condiciones particulares desarrollan las obligaciones y derechos del pasajero.{" "}
          <strong>Complementan y no sustituyen</strong> los Términos y Condiciones ni la Política de Privacidad, que
          aplican en su integridad y prevalecen en caso de contradicción.
        </p>
      </Section>

      <Section title="2. Registro y cuenta">
        <ul>
          <li>Ser mayor de dieciocho (18) años.</li>
          <li>Proporcionar información veraz y un número de teléfono móvil válido en Bolivia.</li>
          <li>Mantener la confidencialidad de las credenciales de acceso.</li>
          <li>
            Reportar de inmediato cualquier uso no autorizado a{" "}
            <a href="mailto:soporte@ruppit.com">soporte@ruppit.com</a>.
          </li>
        </ul>
        <p>
          Toda actividad realizada desde la cuenta se considera realizada por su titular, salvo notificación previa de
          uso no autorizado.
        </p>
      </Section>

      <Section title="3. Solicitud de viaje y tarifa">
        <Subsection title="3.1 Tú propones el precio">
          <p>
            <strong>El pasajero propone la tarifa que está dispuesto a pagar.</strong> La Aplicación puede mostrar un
            precio recomendado como referencia orientativa, pero no es vinculante. El conductor tiene plena libertad de
            aceptar o rechazar la propuesta.
          </p>
          <p>
            <strong>Ruppit no impone precios, no establece tarifas mínimas ni aplica tarifas dinámicas.</strong>
          </p>
        </Subsection>
        <Subsection title="3.2 Preferencias del viaje">
          <p>
            El pasajero puede activar preferencias opcionales. La mayoría no tiene costo adicional; únicamente la
            preferencia de <strong>aire acondicionado</strong> suma <strong>Bs 1,00</strong> al precio recomendado.
          </p>
          <Table
            headers={["Preferencia", "Cargo adicional"]}
            rows={[
              ["Asiento para bebé", "Sin cargo"],
              ["Viaje con mascota", "Sin cargo"],
              ["Parrilla en el techo", "Sin cargo"],
              ["Aire acondicionado", "+ Bs 1,00"],
            ]}
          />
          <p className="mt-3">
            Ruppit no garantiza que el conductor cuente con las condiciones correspondientes a la preferencia
            solicitada; el pasajero deberá verificarlo antes de iniciar el viaje.
          </p>
        </Subsection>
        <Subsection title="3.3 Viajes bajo el sistema Ruppit Code">
          <p>
            Al solicitar un viaje con un conductor que opera bajo el sistema <strong>Ruppit Code</strong>, el pasajero
            declara haber sido informado de que{" "}
            <strong>el vehículo puede no contar con placa oficial, SOAT u otros documentos legales vigentes</strong>,
            acepta su uso de forma libre e informada y exime a Ruppit de responsabilidad por esa circunstancia. El
            régimen completo consta en la cláusula 7 de los Términos y Condiciones.
          </p>
        </Subsection>
      </Section>

      <Section title="4. Cancelaciones">
        <ul>
          <li>
            El pasajero puede cancelar antes de que el conductor llegue al punto de recogida, dentro del tiempo indicado
            en la Aplicación, sin consecuencias.
          </li>
          <li>Las cancelaciones reiteradas o abusivas pueden dar lugar a restricciones temporales en la cuenta.</li>
          <li>
            Si el pasajero no se presenta al punto de recogida dentro del tiempo razonable indicado, el conductor puede
            cancelar sin penalización.
          </li>
        </ul>
      </Section>

      <Section title="5. Pagos">
        <ul>
          <li>
            <strong>Efectivo:</strong> el pasajero paga directamente al conductor al finalizar el viaje.
          </li>
          <li>
            <strong>Código QR:</strong> compatible con cualquier entidad bancaria boliviana que admita pagos por QR.
          </li>
        </ul>
        <p>
          <strong>
            Ruppit no almacena, no procesa ni tiene acceso a datos bancarios, números de tarjeta, cuentas ni información
            financiera del pasajero.
          </strong>{" "}
          Los pasajeros <strong>no requieren Monedas Ruppit</strong> para utilizar la Aplicación.
        </p>
      </Section>

      <Section title="6. Conducta del pasajero">
        <ul>
          <li>Tratar al conductor con respeto y dignidad.</li>
          <li>No solicitar al conductor que cometa infracciones de tránsito.</li>
          <li>No transportar sustancias ilegales, armas ni objetos prohibidos.</li>
          <li>No dañar el vehículo. En caso de daños, el pasajero responde por su reparación.</li>
          <li>No fumar dentro del vehículo sin el consentimiento del conductor.</li>
        </ul>
      </Section>

      <Section title="7. Menores de edad">
        <p>
          <strong>Queda prohibido el registro y uso independiente de la Aplicación por parte de menores de edad.</strong>{" "}
          Un menor puede viajar únicamente acompañado por un adulto titular de la cuenta, que asume plena
          responsabilidad por él durante el viaje, incluido el uso de sistemas de retención adecuados conforme a la
          normativa boliviana.
        </p>
      </Section>

      <Section title="8. Objetos olvidados e incidencias">
        <p>
          Ruppit no responde por la pérdida, robo u olvido de objetos personales durante el viaje, pero puede facilitar
          el contacto entre las partes para intentar su recuperación. Cualquier incidencia debe reportarse desde la
          sección «Soporte» o a <a href="mailto:soporte@ruppit.com">soporte@ruppit.com</a>.
        </p>
      </Section>

      <Section title="9. Contacto">
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
