import { LegalDoc, Section, Callout } from "../../_ui";

export default function FarmaciasDoc() {
  return (
    <LegalDoc
      title="Farmacias de turno"
      version="julio de 2026"
      appliesTo="Usuarios que consultan el listado de farmacias de turno y farmacias que aparecen en él."
    >
      <Callout>
        La sección «Farmacias de turno» es un servicio de{" "}
        <strong>información pública, gratuito y referencial</strong>.{" "}
        <strong>
          Ruppit no es una farmacia, no vende ni dispensa medicamentos ni productos farmacéuticos, y no participa en
          ninguna transacción entre el Usuario y la farmacia.
        </strong>
      </Callout>

      <Section title="1. Descripción y naturaleza del servicio">
        <p>
          La Aplicación puede mostrar un listado de las farmacias que se encuentran de turno en la localidad del
          Usuario, con datos tales como nombre comercial, dirección, ubicación aproximada en el mapa, horario de turno
          y, cuando esté disponible, número de contacto.
        </p>
        <p>
          El servicio se presta <strong>exclusivamente con fines informativos y de orientación</strong>, sin costo para
          el Usuario ni para la farmacia listada, y no genera obligación contractual entre Ruppit y ninguna de las
          partes.
        </p>
        <p>
          Estas condiciones reproducen y desarrollan la <strong>cláusula 9</strong> de los Términos y Condiciones, que
          prevalece en caso de contradicción.
        </p>
      </Section>

      <Section title="2. Ruppit no comercializa productos farmacéuticos">
        <p>El Usuario declara conocer y aceptar expresamente que Ruppit:</p>
        <ul>
          <li>
            <strong>No vende, no dispensa, no distribuye ni almacena</strong> medicamentos, productos farmacéuticos,
            dispositivos médicos, insumos, suplementos ni sustancias controladas.
          </li>
          <li>
            <strong>No fija ni interviene en los precios</strong> de los productos ofrecidos por las farmacias, ni
            percibe comisión o contraprestación alguna por las ventas que estas realicen.
          </li>
          <li>
            <strong>No mantiene relación laboral, societaria, de agencia ni de representación</strong> con las farmacias
            listadas, que son establecimientos independientes y ajenos a Ruppit.
          </li>
          <li>
            No cuenta ni requiere contar con autorización sanitaria de funcionamiento como establecimiento
            farmacéutico, por no ejercer actividad farmacéutica alguna.
          </li>
        </ul>
        <p>
          La compraventa de cualquier producto se perfecciona{" "}
          <strong>directa y exclusivamente entre el Usuario y la farmacia</strong>, única responsable frente al Usuario
          y frente a las autoridades sanitarias competentes.
        </p>
      </Section>

      <Section title="3. Origen y actualización de la información">
        <p>
          La información sobre roles de turno proviene de <strong>fuentes públicas o de terceros</strong>: disposiciones
          de la autoridad de salud competente, colegios o asociaciones de profesionales farmacéuticos, gobiernos
          municipales o la información facilitada por la propia farmacia.
        </p>
        <p>
          Los roles de turno son establecidos por la autoridad competente y pueden modificarse, suspenderse o
          reasignarse sin previo aviso.{" "}
          <strong>
            Ruppit no genera, no aprueba ni controla dicha información y no garantiza su exactitud, vigencia, integridad
            ni disponibilidad.
          </strong>
        </p>
        <p>
          <strong>
            Se recomienda confirmar telefónicamente con la farmacia su apertura y la disponibilidad del producto antes
            de trasladarse.
          </strong>
        </p>
      </Section>

      <Section title="4. No constituye asesoramiento médico ni farmacéutico">
        <p>
          El contenido mostrado tiene carácter estrictamente logístico: qué establecimiento está abierto y dónde.{" "}
          <strong>
            Ruppit no recomienda medicamentos, no sugiere tratamientos, no indica dosis ni sustituye la consulta con un
            profesional médico o farmacéutico habilitado.
          </strong>
        </p>
        <p>
          Ante una emergencia de salud, acuda de inmediato a un centro asistencial o comuníquese con los servicios de
          emergencia. <strong>La Aplicación no es un servicio de emergencia ni de atención médica.</strong>
        </p>
      </Section>

      <Section title="5. Exclusión de responsabilidad">
        <p>Ruppit no será responsable, en ningún caso, por:</p>
        <ul>
          <li>Información desactualizada, incompleta o errónea sobre el turno, la dirección, el horario o el teléfono.</li>
          <li>El cierre, traslado, cambio de turno o inexistencia del establecimiento al momento de acudir a él.</li>
          <li>La falta de existencias, el precio, la calidad, la autenticidad o la idoneidad de los productos.</li>
          <li>La atención, el trato o las condiciones de servicio de la farmacia o su personal.</li>
          <li>Cualquier consecuencia derivada del uso, consumo o adquisición de medicamentos o productos.</li>
          <li>Los traslados que el Usuario realice hacia el establecimiento, por cualquier medio.</li>
        </ul>
      </Section>

      <Section title="6. Envíos desde farmacias">
        <p>
          Si el Usuario solicita el envío de una compra desde una farmacia mediante el servicio de delivery, el{" "}
          <strong>repartidor actúa por cuenta y encargo exclusivo del Usuario</strong>. Ruppit continúa sin ser vendedor
          ni proveedor del producto.
        </p>
        <ul>
          <li>
            Cuando el producto requiera <strong>receta médica</strong>, el Usuario es el único responsable de contar con
            ella y de proporcionarla. La farmacia decide de forma autónoma si dispensa, conforme a la normativa
            sanitaria boliviana.
          </li>
          <li>
            El repartidor <strong>no está facultado para asesorar, sustituir productos ni tomar decisiones</strong>{" "}
            sobre la compra.
          </li>
          <li>
            Ruppit podrá restringir el envío de productos cuya distribución esté prohibida o sujeta a condiciones
            especiales.
          </li>
        </ul>
      </Section>

      <Section title="7. Ausencia de publicidad y orden del listado">
        <p>
          El listado se ordena conforme a criterios objetivos, como el rol de turno vigente y la cercanía respecto de la
          ubicación del Usuario. <strong>Ninguna farmacia paga por aparecer ni por ocupar una mejor posición.</strong> Si
          en el futuro se incorpora contenido patrocinado, será identificado de forma clara y visible como tal.
        </p>
      </Section>

      <Section title="8. Información para farmacias: corrección, inclusión y retiro">
        <p>
          Cualquier farmacia, autoridad o Usuario que detecte información inexacta puede solicitar su corrección
          escribiendo a <a href="mailto:soporte@ruppit.com">soporte@ruppit.com</a>.
        </p>
        <ul>
          <li>
            <strong>Corrección:</strong> indicando el nombre del establecimiento y el dato a corregir.
          </li>
          <li>
            <strong>Inclusión:</strong> una farmacia puede solicitar aparecer en el listado aportando sus datos de
            contacto y su rol de turno.
          </li>
          <li>
            <strong>Retiro:</strong> una farmacia puede solicitar ser retirada del listado{" "}
            <strong>sin expresión de causa</strong> y sin costo.
          </li>
        </ul>
        <p>Ruppit atenderá estas solicitudes en un plazo razonable desde su recepción.</p>
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
