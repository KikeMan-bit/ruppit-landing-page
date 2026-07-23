import { LegalDoc, Section, Subsection, Callout, Table } from "../../_ui";

export default function DeliveryDoc() {
  return (
    <LegalDoc
      title="Servicio de Delivery"
      version="julio de 2026"
      appliesTo="Usuarios que solicitan envíos o encargos, y repartidores independientes que los realizan."
    >
      <Callout>
        <strong>Ruppit no vende los productos ni transporta los envíos.</strong> Los repartidores son trabajadores
        independientes que actúan por cuenta propia, y el encargo se celebra directamente entre el Usuario y el
        Repartidor. Ruppit se limita a la intermediación tecnológica.
      </Callout>

      <Section title="1. Objeto y ámbito de aplicación">
        <p>
          Estas condiciones particulares regulan el servicio de delivery de Ruppit: la conexión entre usuarios que
          necesitan que algo sea comprado, recogido o entregado, y repartidores independientes que ofrecen realizar ese
          encargo mediante sus propios medios de transporte.
        </p>
        <p>
          <strong>Complementan y no sustituyen</strong> los Términos y Condiciones ni la Política de Privacidad de
          Ruppit, que aplican en su integridad y prevalecen en caso de contradicción.
        </p>
      </Section>

      <Section title="2. Modalidades del servicio">
        <Table
          headers={["Modalidad", "En qué consiste", "Quién es el vendedor"]}
          rows={[
            [
              "Pedido a un Local",
              "El Usuario compra productos del catálogo de un Local registrado y un Repartidor los traslada.",
              "El Local. Ruppit no vende ni produce.",
            ],
            [
              "Encargo de compra",
              "El Usuario pide que el Repartidor compre algo en un comercio determinado y se lo lleve.",
              "El comercio elegido por el Usuario. El Repartidor actúa como mandatario del Usuario.",
            ],
            [
              "Envío de paquete",
              "El Usuario pide el traslado de un bien propio de un punto A a un punto B.",
              "No hay compraventa. Es únicamente un traslado.",
            ],
          ]}
        />
      </Section>

      <Section title="3. Naturaleza de la relación">
        <Subsection title="3.1 Repartidores independientes">
          <p>
            Los repartidores son <strong>trabajadores independientes</strong> que actúan en su propio nombre y por su
            propia cuenta. <strong>No existe</strong> relación laboral, de dependencia, de agencia ni de representación
            entre Ruppit y los repartidores. Cada Repartidor es responsable del cumplimiento de la normativa de
            tránsito, tributaria y de cualquier otra legislación aplicable en Bolivia.
          </p>
        </Subsection>
        <Subsection title="3.2 Ruppit no es empresa de mensajería">
          <p>
            <strong>
              Ruppit no presta servicios de transporte de carga, courier, mensajería ni almacenamiento, y no asume la
              custodia de los bienes trasladados.
            </strong>{" "}
            El contrato de encargo se celebra directamente entre el Usuario y el Repartidor.
          </p>
        </Subsection>
        <Subsection title="3.3 El encargo de compra">
          <p>
            En la modalidad de encargo de compra, el Repartidor actúa como{" "}
            <strong>mandatario del Usuario</strong>: compra en nombre y por cuenta de este, con los fondos que el
            Usuario le reembolsa. El Repartidor{" "}
            <strong>no es vendedor ni revendedor</strong> del producto y no responde por su calidad, precio ni
            características, que dependen del comercio elegido por el Usuario.
          </p>
        </Subsection>
      </Section>

      <Section title="4. Tarifa del envío y pagos">
        <Subsection title="4.1 Tarifa propuesta por el Usuario">
          <p>
            Al igual que en los viajes, el delivery de Ruppit funciona bajo un modelo de{" "}
            <strong>negociación libre de precios</strong>: el Usuario propone cuánto está dispuesto a pagar por el
            envío. La Aplicación puede mostrar un precio recomendado como referencia orientativa, no vinculante.
          </p>
          <p>
            El Repartidor tiene plena libertad de aceptar o rechazar la propuesta sin consecuencia ni penalización.{" "}
            <strong>Ruppit no impone precios, no establece tarifas mínimas ni aplica tarifas dinámicas.</strong>
          </p>
        </Subsection>
        <Subsection title="4.2 Importe de los productos">
          <p>
            <strong>El precio de los productos es independiente de la tarifa del envío.</strong> El Usuario paga al
            Local o al comercio el valor de los productos, y al Repartidor la tarifa del envío acordada.
          </p>
          <p>
            En los encargos de compra, el Usuario reembolsa al Repartidor el importe efectivamente pagado, contra
            entrega del comprobante correspondiente. Cuando el precio real difiera del estimado, se ajusta al importe
            del comprobante. El Repartidor puede rechazar encargos que superen el monto que esté dispuesto a anticipar.
          </p>
        </Subsection>
        <Subsection title="4.3 Comisión y Monedas Ruppit">
          <p>
            Por cada Pedido completado, Ruppit cobra al Repartidor una comisión que se paga{" "}
            <strong>exclusivamente mediante Monedas Ruppit</strong>, conforme al régimen de la cláusula 6 de los
            Términos y Condiciones. Mantener saldo positivo es condición para recibir nuevas solicitudes.
          </p>
        </Subsection>
        <Subsection title="4.4 Propinas">
          <p>
            Las propinas son <strong>enteramente voluntarias</strong> y corresponden{" "}
            <strong>íntegramente al Repartidor</strong>. Ruppit no percibe comisión alguna sobre ellas.
          </p>
        </Subsection>
      </Section>

      <Section title="5. Envíos y productos prohibidos">
        <Callout>
          El Usuario declara conocer el contenido de lo que envía y responde por él.{" "}
          <strong>Ruppit y el Repartidor no inspeccionan ni verifican el contenido de los pedidos sellados.</strong>
        </Callout>
        <p>
          <strong>Queda prohibido solicitar el envío, la compra o el traslado de:</strong>
        </p>
        <ul>
          <li>Sustancias controladas, estupefacientes y productos de comercio ilícito.</li>
          <li>Armas, municiones, explosivos, material inflamable, corrosivo, tóxico o radiactivo.</li>
          <li>Dinero en efectivo, cheques al portador, joyas y objetos de alto valor.</li>
          <li>Documentos de identidad ajenos, títulos valores y documentación sensible de terceros.</li>
          <li>Animales vivos, restos humanos, órganos, sangre o muestras biológicas.</li>
          <li>Bienes robados, falsificados, de contrabando o que infrinjan derechos de terceros.</li>
          <li>Medicamentos controlados y sustancias de venta restringida sin la receta exigible.</li>
          <li>
            Bebidas alcohólicas y tabaco <strong>con destino a personas menores de dieciocho (18) años</strong>.
          </li>
          <li>Cualquier bien cuya tenencia, circulación o comercialización esté prohibida por la ley boliviana.</li>
        </ul>
        <p>
          El Repartidor puede <strong>rechazar o interrumpir</strong> cualquier encargo cuando tenga motivos fundados
          para creer que el contenido es ilícito, peligroso o contrario a estas condiciones, sin penalización.
        </p>
        <p>
          El Usuario que solicite un envío prohibido asume la responsabilidad civil, administrativa y penal que
          corresponda, y <strong>mantendrá indemne a Ruppit y al Repartidor</strong> frente a cualquier consecuencia.
        </p>
      </Section>

      <Section title="6. Ejecución de la entrega">
        <Subsection title="6.1 Punto y persona de entrega">
          <p>
            El Usuario debe indicar una dirección exacta, con las referencias necesarias, y un teléfono de contacto
            operativo. El Repartidor entrega el Pedido al Usuario o a la persona que este designe en el punto indicado.
          </p>
        </Subsection>
        <Subsection title="6.2 Ausencia del destinatario">
          <p>
            Si el destinatario no se encuentra en el punto de entrega, el Repartidor intentará contactarlo a través de
            la Aplicación y esperará el tiempo razonable indicado en ella. Transcurrido ese plazo sin respuesta, el
            Repartidor podrá dar por concluido el encargo,{" "}
            <strong>conservando el derecho a la tarifa acordada</strong>, y el Usuario deberá coordinar la recuperación
            del Pedido a través de soporte.
          </p>
        </Subsection>
        <Subsection title="6.3 Integridad del Pedido">
          <p>
            El Repartidor <strong>no está facultado para abrir, consumir, manipular ni sustituir</strong> el contenido
            del Pedido, ni para asesorar sobre los productos. Debe entregarlo tal como lo recibió, en el menor tiempo
            razonable y conservando en lo posible su temperatura y presentación.
          </p>
        </Subsection>
        <Subsection title="6.4 Verificación al recibir">
          <p>
            Se recomienda al Usuario <strong>revisar el Pedido en el momento de la entrega</strong>. Los reclamos por
            producto faltante, incorrecto o dañado deben reportarse a través de la Aplicación dentro de las{" "}
            <strong>veinticuatro (24) horas</strong> siguientes, adjuntando fotografías y la descripción de la
            incidencia.
          </p>
        </Subsection>
      </Section>

      <Section title="7. Obligaciones del Repartidor">
        <ul>
          <li>Ser mayor de dieciocho (18) años y contar con cédula de identidad boliviana vigente.</li>
          <li>
            Cuando utilice vehículo motorizado, contar con licencia de conducir vigente y con la documentación exigible
            para dicho vehículo, y usar casco cuando corresponda.
          </li>
          <li>Respetar íntegramente las normas de tránsito bolivianas y no conducir bajo efectos del alcohol u otras sustancias.</li>
          <li>
            Utilizar <strong>mochila o contenedor térmico limpio</strong> para el traslado de alimentos, y mantener
            condiciones de higiene personal adecuadas.
          </li>
          <li>No abrir, consumir, alterar ni sustituir el contenido de los Pedidos.</li>
          <li>Tratar con respeto y sin discriminación a usuarios, locales y personal de comercios.</li>
          <li>No contactar al Usuario fuera de la Aplicación con fines ajenos al encargo.</li>
          <li>Entregar el comprobante de compra en los encargos y devolver el vuelto exacto cuando corresponda.</li>
          <li>Mantener saldo de Monedas Ruppit para operar.</li>
        </ul>
        <p>
          El incumplimiento reiterado o grave de estas obligaciones puede dar lugar a la restricción, suspensión o
          cancelación de la cuenta conforme a la cláusula 3.3 de los Términos y Condiciones.
        </p>
      </Section>

      <Section title="8. Obligaciones del Usuario">
        <ul>
          <li>Proporcionar direcciones exactas, referencias claras y un teléfono de contacto operativo.</li>
          <li>Declarar con veracidad el contenido y el valor aproximado de lo que envía.</li>
          <li>Empacar adecuadamente los bienes propios que solicite trasladar.</li>
          <li>Estar disponible en el punto de entrega dentro del tiempo previsto.</li>
          <li>Pagar la tarifa acordada y reembolsar el importe de las compras encargadas.</li>
          <li>Tratar al Repartidor con respeto y no solicitarle que cometa infracciones ni actos ilícitos.</li>
        </ul>
      </Section>

      <Section title="9. Cancelaciones">
        <Table
          headers={["Situación", "Consecuencia"]}
          rows={[
            [
              "El Usuario cancela antes de que el Repartidor acepte",
              "Sin costo ni consecuencias.",
            ],
            [
              "El Usuario cancela después de que el Repartidor inició el recojo",
              "El Usuario puede quedar obligado a cubrir el trayecto ya realizado y el importe de los productos ya comprados.",
            ],
            [
              "El Repartidor cancela antes de recoger",
              "Sin costo para el Usuario. El Pedido se reasigna. Las cancelaciones reiteradas sin causa se revisan.",
            ],
            [
              "El Local cancela por falta de stock",
              "Se reembolsa al Usuario el importe de los productos conforme a las condiciones para Locales.",
            ],
          ]}
        />
      </Section>

      <Section title="10. Pérdida, daño y límite de responsabilidad">
        <p>
          El Repartidor responde ante el Usuario por la pérdida o el daño del Pedido{" "}
          <strong>ocurridos por su culpa durante el traslado</strong>, hasta el valor acreditado de los bienes conforme
          al comprobante de compra.
        </p>
        <p>En la máxima medida permitida por la legislación boliviana, Ruppit no será responsable por:</p>
        <ul>
          <li>La calidad, cantidad, estado, autenticidad o idoneidad de los productos comprados.</li>
          <li>La pérdida o el daño de bienes cuyo envío esté prohibido conforme a la cláusula 5.</li>
          <li>La pérdida o el daño derivados de un empaque inadecuado provisto por el Usuario o por el Local.</li>
          <li>Los retrasos causados por tránsito, clima, cierres de vía, fallas del comercio o caso fortuito.</li>
          <li>Los daños indirectos, incidentales, consecuentes o punitivos de cualquier naturaleza.</li>
          <li>El valor no declarado o declarado de forma inexacta por el Usuario.</li>
        </ul>
        <p>
          Ruppit podrá actuar como <strong>mediador</strong> entre las partes analizando la evidencia disponible, sin
          que ello implique asumir responsabilidad sobre el resultado.
        </p>
      </Section>

      <Section title="11. Envíos desde farmacias">
        <p>
          Los envíos que tengan como origen una farmacia se rigen adicionalmente por la cláusula 9 de los Términos y
          Condiciones.{" "}
          <strong>
            Ruppit no vende ni dispensa medicamentos; el Usuario es responsable de contar con la receta cuando el
            producto la requiera, y la farmacia decide de forma autónoma si dispensa.
          </strong>{" "}
          El Repartidor no está facultado para asesorar ni para sustituir productos.
        </p>
      </Section>

      <Section title="12. Ley aplicable y contacto">
        <p>
          Estas condiciones se rigen por las leyes vigentes del <strong>Estado Plurinacional de Bolivia</strong>. Las
          partes se someten a la jurisdicción de los juzgados y tribunales competentes con asiento en Bolivia.
        </p>
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
