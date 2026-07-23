import { LegalDoc, Section, Subsection, Callout, Table } from "../../_ui";

export default function LocalesPrivacyDoc() {
  return (
    <LegalDoc
      title="Datos de locales y negocios"
      version="julio de 2026"
      appliesTo="Restaurantes, negocios de comida, tiendas y emprendedores registrados en Ruppit."
    >
      <Callout>
        Los datos de los Clientes que el Local recibe se entregan{" "}
        <strong>únicamente para ejecutar el Pedido</strong>. Usarlos para marketing propio, cederlos o conservarlos
        después de la entrega constituye una infracción grave y habilita la suspensión inmediata del Local.
      </Callout>

      <Section title="1. Datos del Local que Ruppit trata">
        <Subsection title="1.1 Datos del Titular">
          <ul>
            <li>Nombre completo, cédula de identidad, teléfono y correo electrónico.</li>
            <li>NIT o registro tributario, cuando la actividad lo exija.</li>
          </ul>
          <p>
            Estos datos se utilizan para verificar la identidad de quien responde por el negocio, para el contacto
            operativo y para las liquidaciones.{" "}
            <strong>No se muestran públicamente en la Aplicación.</strong>
          </p>
        </Subsection>
        <Subsection title="1.2 Datos del negocio">
          <ul>
            <li>Nombre comercial, dirección, ubicación en el mapa y zona de cobertura.</li>
            <li>Horarios de atención y estado de apertura.</li>
            <li>Catálogo: productos, descripciones, fotografías y precios.</li>
            <li>Teléfono de contacto operativo para la gestión de Pedidos.</li>
          </ul>
          <p>
            Estos datos <strong>sí se publican</strong> en la Aplicación, porque son los que permiten que los Clientes
            encuentren el Local y hagan Pedidos.
          </p>
        </Subsection>
        <Subsection title="1.3 Datos de actividad">
          <ul>
            <li>Pedidos recibidos, aceptados, rechazados y cancelados.</li>
            <li>Tiempos de preparación y de entrega al Repartidor.</li>
            <li>Calificaciones y reseñas recibidas de Clientes.</li>
            <li>Liquidaciones, comisiones aplicadas y ajustes.</li>
          </ul>
        </Subsection>
      </Section>

      <Section title="2. Datos de Clientes que el Local recibe">
        <p>Para ejecutar el Pedido, el Local recibe exclusivamente:</p>
        <ul>
          <li>Nombre de pila del Cliente.</li>
          <li>Detalle del Pedido y las instrucciones que el Cliente haya escrito.</li>
          <li>La dirección de entrega, únicamente cuando el flujo del Pedido lo requiera.</li>
        </ul>
        <p>El Local se obliga, de forma expresa, a:</p>
        <ul>
          <li>
            Utilizar esos datos <strong>solo para preparar y entregar el Pedido</strong>.
          </li>
          <li>
            <strong>No contactar al Cliente</strong> por canales ajenos a la Aplicación con fines comerciales,
            promocionales o de cualquier otra naturaleza.
          </li>
          <li>
            <strong>No ceder, vender, publicar ni incorporar</strong> esos datos a bases de datos, listas de difusión o
            sistemas propios.
          </li>
          <li>
            <strong>Eliminarlos</strong> una vez completada la entrega y transcurrido el plazo razonable de gestión de
            reclamos.
          </li>
          <li>Guardar confidencialidad sobre cualquier dato al que acceda con ocasión de un Pedido.</li>
        </ul>
      </Section>

      <Section title="3. Datos que Ruppit NO comparte con el Local">
        <Table
          headers={["El Local recibe", "El Local NO recibe"]}
          rows={[
            ["Nombre de pila del Cliente", "Teléfono personal, correo y documento de identidad"],
            ["Detalle e instrucciones del Pedido", "Ubicación en tiempo real del Cliente"],
            ["Dirección de entrega, cuando el flujo lo requiera", "Historial de Pedidos en otros locales"],
            ["Calificación y reseña del Pedido", "Datos bancarios o financieros de ningún tipo"],
          ]}
        />
      </Section>

      <Section title="4. Contenido e imágenes cargadas por el Local">
        <p>
          Las fotografías, logotipos y descripciones que el Local carga se publican en la Aplicación y pueden usarse en
          canales promocionales propios de Ruppit, conforme a la licencia no exclusiva y revocable descrita en las
          condiciones para Locales.
        </p>
        <p>
          El Local <strong>garantiza que es titular o cuenta con autorización</strong> sobre todo el contenido que
          carga, incluidas las imágenes en las que aparezcan personas identificables, y responde frente a cualquier
          reclamo de terceros por derechos de imagen, autor o marca.
        </p>
      </Section>

      <Section title="5. Datos bancarios y liquidaciones">
        <p>
          <strong>
            Ruppit no almacena, no procesa ni tiene acceso a números de cuenta, tarjetas ni credenciales bancarias del
            Local ni de los Clientes.
          </strong>{" "}
          Los pagos por código QR se procesan directamente a través de la entidad financiera correspondiente.
        </p>
        <p>
          Las liquidaciones registran importes, comisiones y ajustes, sin incluir datos financieros sensibles del
          Local.
        </p>
      </Section>

      <Section title="6. Conservación">
        <Table
          headers={["Dato", "Período"]}
          rows={[
            ["Datos del Titular", "Mientras el Local esté activo y por el plazo legal aplicable tras su baja."],
            ["Datos publicados del negocio y Catálogo", "Retirados de la Aplicación al darse de baja el Local."],
            [
              "Historial de Pedidos y liquidaciones",
              "Por el plazo legal aplicable al registro contable y tributario, y para resolución de disputas.",
            ],
            ["Calificaciones y reseñas", "Se retiran de la vista pública al darse de baja el Local."],
            [
              "Datos de Clientes en poder del Local",
              "El Local debe eliminarlos tras la entrega y el plazo de reclamos. Ruppit no controla los sistemas del Local.",
            ],
          ]}
        />
      </Section>

      <Section title="7. Consecuencias del uso indebido de datos">
        <p>
          El uso de datos de Clientes para fines distintos de la ejecución del Pedido —contacto comercial directo,
          cesión a terceros, incorporación a bases propias o publicación— habilita a Ruppit a{" "}
          <strong>suspender el Local de forma inmediata y sin aviso previo</strong>, sin perjuicio de las acciones
          legales que correspondan conforme a la normativa boliviana y de la responsabilidad del Local frente al titular
          de los datos.
        </p>
      </Section>

      <Section title="8. Derechos del Titular">
        <p>
          El Titular puede ejercer sus derechos de acceso, rectificación, cancelación, oposición, portabilidad y
          revocación del consentimiento sobre sus datos personales escribiendo a{" "}
          <a href="mailto:soporte@ruppit.com">soporte@ruppit.com</a>.
        </p>
        <p>
          La información del negocio necesaria para el registro contable, tributario y de resolución de disputas se
          conserva por el plazo legal aplicable aun después de la baja del Local.
        </p>
      </Section>

      <Section title="9. Contacto">
        <p>
          <strong>Ruppit — Negocios</strong>
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
