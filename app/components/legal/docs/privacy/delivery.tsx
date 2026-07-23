import { LegalDoc, Section, Subsection, Callout, Table } from "../../_ui";

export default function DeliveryPrivacyDoc() {
  return (
    <LegalDoc
      title="Datos en el delivery"
      version="julio de 2026"
      appliesTo="Usuarios que solicitan envíos o encargos, y repartidores independientes que los realizan."
    >
      <Callout>
        Los datos que se comparten en un Pedido son{" "}
        <strong>los mínimos indispensables para completarlo</strong>, y solo mientras el Pedido está activo. Ni el
        Repartidor ni el Local pueden conservarlos ni usarlos para otros fines.
      </Callout>

      <Section title="1. Qué ve cada parte">
        <Table
          headers={["Parte", "Datos que recibe"]}
          rows={[
            [
              "Repartidor",
              "Nombre de pila del Usuario, punto de recojo, punto de entrega, detalle e instrucciones del Pedido, y el medio de contacto que la Aplicación habilite mientras el Pedido está activo.",
            ],
            [
              "Local",
              "Nombre de pila del Usuario, detalle e instrucciones del Pedido, y la dirección de entrega solo cuando el flujo lo requiera.",
            ],
            [
              "Usuario",
              "Nombre y foto de perfil del Repartidor, y su ubicación en tiempo real mientras el Pedido está en curso.",
            ],
          ]}
        />
        <p className="mt-3">
          Ninguna de las partes recibe el documento de identidad, el correo electrónico ni el historial de Pedidos de
          las demás.
        </p>
      </Section>

      <Section title="2. Ubicación durante el Pedido">
        <p>
          La ubicación en tiempo real del Repartidor se comparte con el Usuario{" "}
          <strong>únicamente mientras el Pedido está activo</strong> y deja de compartirse al completarse la entrega.
        </p>
        <p>
          Ruppit <strong>no rastrea la ubicación de ningún usuario</strong> cuando la Aplicación está cerrada o en
          segundo plano fuera de un Pedido activo. La ubicación en tiempo real{" "}
          <strong>no se conserva</strong> una vez concluida la entrega; solo quedan registrados el punto de recojo y el
          punto de entrega.
        </p>
      </Section>

      <Section title="3. Instrucciones y contenido del Pedido">
        <p>
          El texto que el Usuario escriba en las instrucciones se conserva únicamente durante el tiempo necesario para
          completar la entrega y gestionar eventuales reclamos, y{" "}
          <strong>no se utiliza con fines publicitarios, de segmentación ni de análisis de comportamiento.</strong>
        </p>
        <p>
          Recomendamos <strong>no incluir información clínica, datos de salud ni datos de terceros</strong> que no sean
          estrictamente necesarios para la entrega. Cualquier dato de esa naturaleza que el Usuario proporcione
          voluntariamente será tratado con carácter estrictamente confidencial y eliminado una vez concluida la entrega
          y el plazo de reclamos.
        </p>
        <p>
          <strong>Ruppit no inspecciona el contenido de los pedidos sellados</strong> y no genera registro alguno sobre
          los productos concretos que el Usuario adquiere en comercios ajenos al catálogo.
        </p>
      </Section>

      <Section title="4. Datos del Repartidor">
        <Subsection title="4.1 Qué recopilamos">
          <ul>
            <li>Nombre completo, teléfono y foto de perfil.</li>
            <li>Cédula de identidad boliviana, para verificación.</li>
            <li>Datos del vehículo y documentación aplicable, cuando utilice vehículo motorizado.</li>
            <li>Historial de Pedidos completados, calificaciones y movimientos de Monedas Ruppit.</li>
          </ul>
        </Subsection>
        <Subsection title="4.2 Qué ve el Usuario">
          <p>
            El Usuario ve el nombre, la foto de perfil y la ubicación en tiempo real del Repartidor durante el Pedido.{" "}
            <strong>
              No accede a su cédula de identidad, domicilio, saldo de Monedas ni historial con otros usuarios.
            </strong>
          </p>
        </Subsection>
      </Section>

      <Section title="5. Uso prohibido de los datos">
        <p>
          El Repartidor y el Local se obligan a utilizar los datos del Usuario{" "}
          <strong>exclusivamente para ejecutar el Pedido</strong>. Queda prohibido:
        </p>
        <ul>
          <li>Conservar los datos una vez completada la entrega y el plazo de reclamos.</li>
          <li>Contactar al Usuario fuera de la Aplicación con fines comerciales o personales.</li>
          <li>Ceder, vender, publicar o incorporar los datos a bases propias o listas de difusión.</li>
          <li>Fotografiar o registrar la vivienda, el domicilio o a las personas presentes en la entrega.</li>
        </ul>
        <p>
          El incumplimiento habilita la <strong>suspensión inmediata de la cuenta</strong>, sin perjuicio de las
          acciones legales que correspondan.
        </p>
      </Section>

      <Section title="6. Conservación">
        <Table
          headers={["Dato", "Período"]}
          rows={[
            ["Ubicación en tiempo real", "No se conserva. Se elimina al completarse la entrega."],
            ["Puntos de recojo y entrega", "Hasta 3 años, por razones legales y de resolución de disputas."],
            [
              "Instrucciones del Pedido",
              "Durante la entrega y el plazo de gestión de reclamos; posteriormente se eliminan.",
            ],
            ["Historial de Pedidos y calificaciones", "Hasta 3 años desde la fecha del Pedido."],
            [
              "Datos de verificación del Repartidor",
              "Mientras la cuenta esté activa y hasta 3 años después de su cierre.",
            ],
          ]}
        />
      </Section>

      <Section title="7. Derechos">
        <p>
          Usuarios y repartidores pueden ejercer sus derechos de acceso, rectificación, cancelación, oposición,
          portabilidad y revocación del consentimiento escribiendo a{" "}
          <a href="mailto:soporte@ruppit.com">soporte@ruppit.com</a>, indicando su nombre completo y el teléfono
          asociado a la cuenta.
        </p>
      </Section>

      <Section title="8. Contacto">
        <p>
          <strong>Ruppit — Delivery</strong>
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
