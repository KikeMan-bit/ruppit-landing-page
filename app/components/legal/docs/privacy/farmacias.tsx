import { LegalDoc, Section, Subsection, Callout, Table } from "../../_ui";

export default function FarmaciasPrivacyDoc() {
  return (
    <LegalDoc
      title="Datos en farmacias de turno"
      version="julio de 2026"
      appliesTo="Usuarios que consultan el listado informativo de farmacias de turno."
    >
      <Callout>
        La consulta de farmacias de turno es un servicio meramente informativo.{" "}
        <strong>
          Ruppit no recopila datos de salud, no elabora perfiles médicos y no comparte sus consultas con farmacias,
          aseguradoras, laboratorios ni anunciantes.
        </strong>
      </Callout>

      <Section title="1. Qué datos se tratan al consultar farmacias de turno">
        <p>Al abrir la sección de farmacias de turno, la Aplicación trata únicamente:</p>
        <ul>
          <li>
            <strong>Su ubicación aproximada en ese momento</strong>, con el único fin de ordenar por cercanía las
            farmacias de turno de su localidad. Se procesa en tiempo real,{" "}
            <strong>no se almacena</strong> y no se asocia a su historial de viajes ni a su perfil.
          </li>
          <li>
            <strong>Métricas agregadas y anonimizadas de uso</strong>, como el número de veces que se abre la sección,
            para medir el interés en la funcionalidad.
          </li>
        </ul>
        <p>
          Si no concede el permiso de ubicación, la sección sigue siendo utilizable seleccionando la localidad
          manualmente.
        </p>
      </Section>

      <Section title="2. Datos que NO se tratan">
        <p>Ruppit no recopila, no infiere y no almacena:</p>
        <ul>
          <li>Medicamentos buscados, consultados, adquiridos o consumidos por el Usuario.</li>
          <li>Recetas médicas, diagnósticos, síntomas, patologías ni ninguna información clínica.</li>
          <li>Perfiles de salud, categorías sensibles ni segmentaciones basadas en condiciones médicas.</li>
          <li>Un registro individual de qué usuario consultó qué farmacia, ni cuándo.</li>
        </ul>
        <p>
          La información mostrada corresponde a <strong>establecimientos comerciales</strong> —nombre, dirección,
          horario de turno y teléfono— obtenida de fuentes públicas o de la propia farmacia;{" "}
          <strong>no se trata de datos personales del Usuario.</strong>
        </p>
      </Section>

      <Section title="3. La consulta es unidireccional">
        <p>
          <strong>Ruppit no comparte ningún dato personal del Usuario con las farmacias listadas.</strong> El Usuario ve
          la información del establecimiento, pero la farmacia{" "}
          <strong>no recibe de Ruppit su identidad, su ubicación ni el hecho de que haya realizado la consulta.</strong>
        </p>
        <Table
          headers={["El Usuario ve", "La farmacia recibe"]}
          rows={[
            ["Nombre comercial y dirección", "Nada"],
            ["Ubicación aproximada en el mapa", "Nada"],
            ["Horario de turno", "Nada"],
            ["Teléfono de contacto, si está disponible", "Nada"],
          ]}
        />
      </Section>

      <Section title="4. Envíos desde una farmacia">
        <p>
          Si el Usuario solicita de forma expresa un envío desde una farmacia mediante el servicio de delivery, aplican
          adicionalmente las reglas de privacidad del delivery:
        </p>
        <ul>
          <li>
            El repartidor recibe únicamente los datos operativos indispensables: punto de recojo, punto de entrega,
            nombre de pila del Usuario y las instrucciones escritas.
          </li>
          <li>
            El contenido de las instrucciones se conserva solo durante la entrega y el plazo de reclamos, y{" "}
            <strong>no se usa para publicidad, segmentación ni análisis de comportamiento.</strong>
          </li>
          <li>
            Recomendamos <strong>no incluir información clínica ni datos de salud</strong> en las instrucciones. Todo
            dato de esa naturaleza que el Usuario proporcione voluntariamente se trata con carácter estrictamente
            confidencial y se elimina una vez concluida la entrega y el plazo de reclamos.
          </li>
          <li>
            <strong>Ruppit no recibe de la farmacia</strong> información sobre las compras, consultas o productos
            adquiridos por el Usuario.
          </li>
        </ul>
      </Section>

      <Section title="5. Conservación">
        <Table
          headers={["Dato", "Período"]}
          rows={[
            [
              "Consultas de farmacias de turno",
              "No se conserva registro individual. La ubicación se procesa en el momento de la consulta y no se almacena.",
            ],
            ["Métricas de uso de la sección", "Hasta 12 meses, en formato agregado y anonimizado."],
            [
              "Envíos desde farmacia",
              "Se rigen por los plazos de conservación del delivery: hasta 3 años para los puntos de recojo y entrega.",
            ],
          ]}
        />
      </Section>

      <Section title="6. Derechos del Usuario">
        <Subsection title="6.1 Sobre sus datos personales">
          <p>
            Acceso, rectificación, cancelación, oposición, portabilidad y revocación del consentimiento, escribiendo a{" "}
            <a href="mailto:soporte@ruppit.com">soporte@ruppit.com</a>. Puede además revocar el permiso de ubicación en
            cualquier momento desde la configuración de su dispositivo, sin perder el acceso a la sección.
          </p>
        </Subsection>
        <Subsection title="6.2 Corrección de la información de una farmacia">
          <p>
            Cualquier farmacia, autoridad o Usuario que detecte información inexacta puede solicitar su corrección,
            inclusión o retiro del listado escribiendo a{" "}
            <a href="mailto:soporte@ruppit.com">soporte@ruppit.com</a>. Una farmacia puede pedir ser retirada{" "}
            <strong>sin expresión de causa</strong> y sin costo.
          </p>
        </Subsection>
      </Section>

      <Section title="7. Contacto">
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
