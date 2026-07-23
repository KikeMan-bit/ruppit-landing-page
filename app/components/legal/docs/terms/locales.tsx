import { LegalDoc, Section, Subsection, Callout, Table } from "../../_ui";

export default function LocalesDoc() {
  return (
    <LegalDoc
      title="Locales y Negocios de Comida"
      version="julio de 2026"
      appliesTo="Restaurantes, cafeterías, pastelerías, comida rápida, food trucks, tiendas y emprendedores gastronómicos que venden a través de Ruppit."
    >
      <Callout>
        <strong>Ruppit no es el vendedor.</strong> El Local es el único productor y vendedor de sus productos y el único
        responsable de su calidad, inocuidad y de las autorizaciones sanitarias y municipales que su actividad requiera.
        Ruppit se limita a exhibir el catálogo y a conectar al Local con clientes y repartidores.
      </Callout>

      <Section title="1. Objeto y ámbito de aplicación">
        <p>
          Las presentes condiciones particulares regulan la relación entre Ruppit y las personas naturales o jurídicas
          que ofrecen productos de alimentación u otros bienes a través de la Aplicación (en adelante, «el Local», «el
          Negocio» o «el Comercio»).
        </p>
        <p>
          Aplican por igual a establecimientos con local físico y a{" "}
          <strong>emprendedores que operan desde su domicilio, por encargo o sin punto de venta al público</strong>,
          siempre que cumplan la normativa aplicable a su actividad.
        </p>
        <p>
          Estas condiciones <strong>complementan y no sustituyen</strong> los Términos y Condiciones ni la Política de
          Privacidad de Ruppit, que aplican en su integridad y prevalecen en caso de contradicción.
        </p>
      </Section>

      <Section title="2. Definiciones">
        <Table
          headers={["Término", "Significado"]}
          rows={[
            ["Local", "Persona natural o jurídica que ofrece productos a través de la Aplicación."],
            ["Titular", "Persona que registra el Local y responde por él frente a Ruppit."],
            ["Catálogo", "Conjunto de productos, descripciones, fotografías, precios y horarios cargados por el Local."],
            ["Pedido", "Solicitud de compra que un Cliente realiza al Local a través de la Aplicación."],
            ["Cliente", "Usuario que realiza el Pedido."],
            ["Repartidor", "Persona independiente que traslada el Pedido desde el Local hasta el Cliente."],
            ["Comisión", "Porcentaje que Ruppit cobra al Local por cada Pedido completado a través de la plataforma."],
          ]}
        />
      </Section>

      <Section title="3. Naturaleza de la relación">
        <Subsection title="3.1 Independencia de las partes">
          <p>
            El Local es un <strong>comerciante independiente</strong> que actúa en su propio nombre y por su propia
            cuenta. Entre Ruppit y el Local <strong>no existe</strong> relación laboral, de dependencia, de agencia, de
            franquicia, de sociedad ni de asociación accidental de ningún tipo.
          </p>
          <p>
            El Local conserva plena autonomía sobre su operación: qué vende, cómo lo produce, a qué precio, con qué
            personal, en qué horarios y bajo qué estándares internos.
          </p>
        </Subsection>
        <Subsection title="3.2 Ruppit no vende ni produce alimentos">
          <p>
            <strong>
              Ruppit no elabora, no manipula, no almacena, no envasa, no revende ni distribuye alimentos ni productos de
              ningún tipo.
            </strong>{" "}
            La compraventa se perfecciona directa y exclusivamente entre el Cliente y el Local. Ruppit no es
            comercializador, ni importador, ni proveedor solidario respecto de los productos ofrecidos.
          </p>
        </Subsection>
        <Subsection title="3.3 Sin exclusividad">
          <p>
            El Local <strong>no asume exclusividad alguna</strong> con Ruppit. Puede vender por sus propios canales, en
            su local físico y en otras plataformas, simultáneamente y sin restricción.
          </p>
        </Subsection>
      </Section>

      <Section title="4. Registro, verificación y activación">
        <Subsection title="4.1 Información requerida">
          <p>Para registrar un Local, el Titular deberá proporcionar:</p>
          <ul>
            <li>Nombre y datos de contacto del Titular, y su cédula de identidad boliviana.</li>
            <li>Nombre comercial del Local, dirección y ubicación en el mapa.</li>
            <li>Teléfono de contacto operativo para la gestión de Pedidos.</li>
            <li>Horarios de atención y días de operación.</li>
            <li>NIT o registro tributario, cuando su actividad lo exija conforme a la normativa boliviana.</li>
            <li>Catálogo inicial con productos, descripciones, fotografías y precios.</li>
          </ul>
        </Subsection>
        <Subsection title="4.2 Declaración de cumplimiento normativo">
          <p>
            Al registrarse, el Titular <strong>declara bajo su exclusiva responsabilidad</strong> que cuenta con las
            licencias, permisos, registros sanitarios y autorizaciones municipales, departamentales o nacionales
            exigibles para su actividad, y que los mantendrá vigentes mientras opere en la plataforma.
          </p>
          <p>
            Ruppit puede solicitar en cualquier momento copia de dicha documentación y{" "}
            <strong>suspender la publicación del Local mientras no sea presentada</strong>. La verificación que Ruppit
            realice es de carácter administrativo y{" "}
            <strong>
              no constituye certificación, aval ni garantía sanitaria alguna frente al Cliente ni frente a las
              autoridades.
            </strong>
          </p>
        </Subsection>
        <Subsection title="4.3 Emprendedores y cocinas domiciliarias">
          <p>
            Ruppit admite el registro de <strong>emprendedores gastronómicos sin local físico</strong> (cocinas
            domiciliarias, producción por encargo, repostería, comida casera). En estos casos el Titular declara que
            elabora los productos en condiciones higiénicas adecuadas y que asume íntegramente la responsabilidad
            sanitaria, civil y administrativa sobre lo que produce y vende.
          </p>
          <p>
            Ruppit podrá exigir requisitos adicionales o restringir determinadas categorías de producto cuando la
            normativa vigente así lo imponga.
          </p>
        </Subsection>
        <Subsection title="4.4 Activación">
          <p>
            Una vez completado el registro y revisada la información, Ruppit activará el Local en la Aplicación.{" "}
            <strong>Ruppit se reserva el derecho de no activar o de retirar</strong> un Local cuando la información sea
            incompleta, falsa, o cuando la actividad resulte incompatible con estas condiciones o con la ley.
          </p>
        </Subsection>
      </Section>

      <Section title="5. Catálogo, precios y disponibilidad">
        <Subsection title="5.1 Responsabilidad sobre el contenido">
          <p>
            El Local es el <strong>único responsable</strong> de la exactitud, veracidad y actualización de todo el
            contenido de su Catálogo: nombres de producto, descripciones, ingredientes, tamaños, porciones, fotografías
            y precios. Ruppit no revisa, no valida ni corrige dicho contenido.
          </p>
        </Subsection>
        <Subsection title="5.2 Precios">
          <ul>
            <li>
              El Local fija libremente sus precios.{" "}
              <strong>Ruppit no impone precios, ni mínimos, ni máximos, ni paridad con otros canales.</strong>
            </li>
            <li>
              El precio publicado debe ser <strong>el precio final que el Cliente pagará</strong> por el producto,
              expresado en bolivianos (Bs) e incluyendo los impuestos que correspondan.
            </li>
            <li>
              Está prohibido cobrar al Cliente un importe distinto del publicado, o exigir cargos no informados en la
              Aplicación.
            </li>
            <li>
              El <strong>costo del envío es independiente del precio del producto</strong> y se rige por las condiciones
              de delivery.
            </li>
          </ul>
        </Subsection>
        <Subsection title="5.3 Disponibilidad y horarios">
          <p>
            El Local debe mantener actualizados sus horarios y marcar como no disponibles los productos agotados. Si el
            Local no puede atender temporalmente, debe <strong>pausar su actividad desde la Aplicación</strong> en lugar
            de rechazar Pedidos de forma reiterada.
          </p>
          <p>
            El rechazo o la cancelación sistemática de Pedidos sin causa justificada puede dar lugar a una revisión del
            estado del Local en la plataforma.
          </p>
        </Subsection>
        <Subsection title="5.4 Fotografías">
          <p>
            Las fotografías deben corresponder a los productos realmente ofrecidos.{" "}
            <strong>Queda prohibido el uso de imágenes de terceros sin autorización</strong>, de bancos de imágenes que
            induzcan a error sobre el producto, o de material protegido por derechos de autor ajenos.
          </p>
        </Subsection>
      </Section>

      <Section title="6. Información obligatoria sobre alimentos">
        <Callout>
          La omisión de alérgenos o de la presencia de alcohol en un producto puede causar un daño grave a la salud del
          Cliente. <strong>Esta información es responsabilidad exclusiva e indelegable del Local.</strong>
        </Callout>
        <p>El Local se obliga a declarar de forma clara y visible en la descripción de cada producto:</p>
        <ul>
          <li>
            <strong>Alérgenos</strong> presentes o posibles por contacto cruzado: maní y frutos secos, leche y
            derivados, huevo, gluten, soya, pescado, mariscos, sésamo, sulfitos, entre otros.
          </li>
          <li>
            <strong>Presencia de alcohol</strong> en el producto, aun cuando sea en pequeñas cantidades o como
            ingrediente de preparación.
          </li>
          <li>Nivel de picante, cuando sea relevante.</li>
          <li>
            Cuando el producto se anuncie como <strong>vegetariano, vegano, sin gluten, sin azúcar o similar</strong>,
            el Local responde por la exactitud de esa afirmación.
          </li>
          <li>Peso, volumen o número de unidades cuando el precio dependa de ello.</li>
          <li>Fecha de vencimiento y condiciones de conservación en productos envasados.</li>
        </ul>
        <p>
          <strong>Ruppit no verifica esta información</strong> y no responde por su omisión, inexactitud o
          desactualización.
        </p>
      </Section>

      <Section title="7. Gestión del Pedido">
        <Subsection title="7.1 Aceptación y preparación">
          <p>
            Recibido un Pedido, el Local debe aceptarlo o rechazarlo dentro del tiempo indicado en la Aplicación e
            indicar un tiempo de preparación realista. El Local debe iniciar la preparación de inmediato tras aceptar.
          </p>
        </Subsection>
        <Subsection title="7.2 Empaque y entrega al Repartidor">
          <ul>
            <li>
              El Local debe <strong>empacar y sellar</strong> el Pedido de forma que resista el traslado y permita
              detectar cualquier apertura posterior.
            </li>
            <li>
              Los alimentos calientes, fríos y las bebidas deben acondicionarse por separado y de forma que se conserve
              su temperatura y no se derramen.
            </li>
            <li>
              El Local debe <strong>verificar que el Pedido esté completo</strong> antes de entregarlo al Repartidor.
              Una vez entregado y sellado, el Repartidor no está facultado para abrirlo ni para verificar su contenido.
            </li>
            <li>
              El Local debe entregar el Pedido al Repartidor identificado en la Aplicación, sin demoras injustificadas.
            </li>
          </ul>
        </Subsection>
        <Subsection title="7.3 Sustituciones">
          <p>
            El Local <strong>no puede sustituir productos por iniciativa propia.</strong> Si un producto no está
            disponible, debe comunicarlo a través de la Aplicación para que el Cliente decida entre aceptar una
            alternativa, retirar el producto del Pedido o cancelarlo.
          </p>
        </Subsection>
      </Section>

      <Section title="8. Productos prohibidos y restringidos">
        <p>
          <strong>Queda prohibido ofrecer a través de la Aplicación:</strong>
        </p>
        <ul>
          <li>Sustancias controladas, estupefacientes y cualquier producto de comercio ilícito.</li>
          <li>Medicamentos, productos farmacéuticos y dispositivos médicos.</li>
          <li>Armas, municiones, explosivos y material inflamable o peligroso.</li>
          <li>Productos falsificados, de contrabando, robados o que infrinjan derechos de terceros.</li>
          <li>Animales vivos.</li>
          <li>Productos que requieran registro sanitario y carezcan de él.</li>
          <li>Alimentos vencidos, en mal estado o cuya cadena de frío se haya interrumpido.</li>
        </ul>
        <p>
          La venta de <strong>bebidas alcohólicas y productos de tabaco</strong> constituye una categoría restringida:
          solo podrá ofrecerse cuando el Local cuente con la licencia municipal correspondiente, cuando la normativa
          local lo permita y respetando los horarios y restricciones vigentes.{" "}
          <strong>
            En ningún caso podrán venderse ni entregarse a personas menores de dieciocho (18) años, y el Local responde
            por la verificación de edad que la normativa le exija.
          </strong>
        </p>
      </Section>

      <Section title="9. Comisión, liquidación y pagos">
        <Subsection title="9.1 Comisión">
          <p>
            Por cada Pedido completado a través de la plataforma, Ruppit percibe una{" "}
            <strong>comisión porcentual sobre el valor de los productos</strong>. El porcentaje aplicable se comunica al
            Local antes de su activación y está disponible de forma permanente en el panel del Local.
          </p>
          <p>
            <strong>
              Todo cambio en el porcentaje de comisión será comunicado con una antelación mínima de siete (7) días
              calendario a su entrada en vigor.
            </strong>{" "}
            El Local que no esté de acuerdo podrá solicitar su baja; el uso continuado con posterioridad a la entrada en
            vigor implica su aceptación.
          </p>
          <p>
            Ruppit podrá establecer comisiones diferenciadas por ciudad, categoría o programa promocional, informándolo
            siempre a través de la Aplicación.
          </p>
        </Subsection>
        <Subsection title="9.2 Cobro al Cliente y liquidación">
          <Table
            headers={["Forma de pago del Cliente", "Cómo se liquida"]}
            rows={[
              [
                "Efectivo contra entrega",
                "El Local (o el Repartidor, según el flujo del Pedido) recibe el importe directamente. La comisión se liquida conforme al régimen informado en el panel del Local.",
              ],
              [
                "Código QR",
                "La transacción se procesa a través de la entidad financiera correspondiente. Ruppit no almacena, no procesa ni tiene acceso a datos bancarios del Local ni del Cliente.",
              ],
            ]}
          />
          <p className="mt-3">
            Las liquidaciones se realizan de forma periódica según el calendario publicado en el panel del Local, con
            detalle de los Pedidos, los importes y las comisiones aplicadas.
          </p>
        </Subsection>
        <Subsection title="9.3 Obligaciones tributarias">
          <p>
            <strong>
              El Local es el único responsable del cumplimiento de sus obligaciones tributarias en Bolivia
            </strong>
            , incluida la emisión de la factura o documento equivalente al Cliente cuando la normativa lo exija. Ruppit
            no emite documentos fiscales por cuenta del Local ni actúa como agente de retención respecto de las ventas
            de este.
          </p>
        </Subsection>
        <Subsection title="9.4 Ajustes y compensaciones">
          <p>
            Ruppit podrá efectuar ajustes en la liquidación por errores de cálculo, Pedidos duplicados, reembolsos
            atribuibles al Local o importes cobrados indebidamente. Todo ajuste quedará registrado y detallado en el
            panel del Local, que podrá observarlo dentro de los{" "}
            <strong>treinta (30) días calendario</strong> siguientes.
          </p>
        </Subsection>
      </Section>

      <Section title="10. Cancelaciones, incidencias y reembolsos">
        <Table
          headers={["Situación", "Consecuencia"]}
          rows={[
            [
              "El Cliente cancela antes de que el Local acepte",
              "Sin consecuencias para ninguna de las partes.",
            ],
            [
              "El Cliente cancela después de iniciada la preparación",
              "El Local puede solicitar el reconocimiento del costo de los productos ya preparados, aportando evidencia.",
            ],
            [
              "El Local cancela por falta de stock o cierre no informado",
              "El Pedido se reembolsa íntegramente al Cliente. Las cancelaciones reiteradas pueden derivar en revisión o suspensión del Local.",
            ],
            [
              "Pedido incompleto, incorrecto o en mal estado",
              "El costo del reembolso corresponde al Local cuando el error sea atribuible a la preparación o al empaque.",
            ],
            [
              "Incidencia durante el traslado",
              "Se resuelve conforme a las condiciones de delivery. El Local no responde por hechos posteriores a la entrega al Repartidor, salvo defecto de empaque.",
            ],
          ]}
        />
        <p className="mt-3">
          Ruppit podrá actuar como <strong>mediador</strong> entre el Local y el Cliente, analizando la evidencia
          disponible, sin que ello implique asumir responsabilidad sobre el resultado de la controversia.
        </p>
      </Section>

      <Section title="11. Responsabilidad del Local e indemnidad">
        <p>El Local es el único responsable frente al Cliente, frente a terceros y frente a las autoridades por:</p>
        <ul>
          <li>
            La <strong>inocuidad, calidad, frescura y aptitud para el consumo</strong> de los productos que elabora y
            vende.
          </li>
          <li>
            Intoxicaciones alimentarias, reacciones alérgicas, presencia de cuerpos extraños y cualquier daño a la salud
            derivado de sus productos.
          </li>
          <li>La exactitud de la información publicada, incluida la declaración de alérgenos.</li>
          <li>El cumplimiento de la normativa sanitaria, municipal, laboral y tributaria aplicable a su actividad.</li>
          <li>Las condiciones de su personal y de sus instalaciones.</li>
        </ul>
        <p>
          El Local <strong>mantendrá indemne a Ruppit</strong> frente a cualquier reclamo, denuncia, sanción o demanda
          de clientes, terceros o autoridades que tenga origen en los productos ofrecidos, en la información publicada o
          en el incumplimiento de la normativa que rige su actividad.
        </p>
      </Section>

      <Section title="12. Calificaciones y reseñas">
        <p>
          Los Clientes pueden calificar y reseñar al Local. Las calificaciones son{" "}
          <strong>expresiones de opinión de los Clientes</strong> y Ruppit no las edita ni las modifica a solicitud del
          Local.
        </p>
        <p>Ruppit podrá retirar reseñas que contengan insultos, datos personales, contenido discriminatorio, información manifiestamente falsa o que provengan de manipulación.</p>
        <p>
          Una calificación sostenidamente baja o un volumen elevado de incidencias verificadas puede dar lugar a la
          revisión, restricción o baja del Local en la plataforma.
        </p>
      </Section>

      <Section title="13. Marca, contenido y licencia de uso">
        <Subsection title="13.1 Licencia otorgada a Ruppit">
          <p>
            El Local otorga a Ruppit una <strong>licencia no exclusiva, gratuita y revocable</strong> para usar,
            reproducir y mostrar su nombre comercial, logotipo, fotografías y descripciones de producto, con la
            finalidad de publicar su Catálogo en la Aplicación y promocionarlo en canales propios de Ruppit.
          </p>
          <p>
            Esta licencia se extingue cuando el Local se da de baja, salvo respecto de materiales ya publicados en
            campañas cerradas, que serán retirados en un plazo razonable.
          </p>
        </Subsection>
        <Subsection title="13.2 Garantía de titularidad">
          <p>
            El Local declara y garantiza que <strong>es titular o cuenta con autorización</strong> sobre todo el
            contenido que carga, y responde frente a cualquier reclamo de terceros por derechos de autor, marcas o
            derechos de imagen.
          </p>
        </Subsection>
        <Subsection title="13.3 Marcas de Ruppit">
          <p>
            La marca, el logotipo y los elementos visuales de Ruppit son de su exclusiva propiedad. El Local puede
            indicar que opera con Ruppit utilizando los materiales que Ruppit ponga a su disposición, sin alterarlos y
            sin sugerir una relación societaria, de franquicia o de representación inexistente.
          </p>
        </Subsection>
      </Section>

      <Section title="14. Promociones y descuentos">
        <p>
          Las promociones que ofrezca el Local son <strong>voluntarias y costeadas por el propio Local</strong>. Las
          promociones que Ruppit lance por su cuenta son costeadas por Ruppit y no afectan el importe que el Local
          percibe por sus productos, salvo acuerdo expreso y previo entre las partes.
        </p>
        <p>Toda promoción debe estar vigente en los términos publicados y ser honrada durante su período de validez.</p>
      </Section>

      <Section title="15. Suspensión y terminación">
        <Subsection title="15.1 Baja voluntaria">
          <p>
            El Local puede solicitar su baja en cualquier momento escribiendo a{" "}
            <a href="mailto:soporte@ruppit.com">soporte@ruppit.com</a>, sin penalización, debiendo completar los Pedidos
            aceptados y pendientes de entrega.
          </p>
        </Subsection>
        <Subsection title="15.2 Suspensión por Ruppit">
          <p>Ruppit podrá suspender o dar de baja a un Local cuando verifique:</p>
          <ul>
            <li>Incumplimiento de estas condiciones o de los Términos y Condiciones generales.</li>
            <li>Riesgo sanitario, denuncias reiteradas o incidencias graves verificadas.</li>
            <li>Falta o pérdida de vigencia de las licencias exigibles.</li>
            <li>Información falsa en el registro o en el Catálogo.</li>
            <li>Venta de productos prohibidos o restringidos sin autorización.</li>
            <li>Conductas fraudulentas, manipulación de reseñas o evasión de la comisión.</li>
          </ul>
          <p>
            En casos de riesgo inminente para la salud de los Clientes, la suspensión podrá ser{" "}
            <strong>inmediata y sin aviso previo</strong>, notificándose la causa al Titular.
          </p>
        </Subsection>
      </Section>

      <Section title="16. Ley aplicable y contacto">
        <p>
          Estas condiciones se rigen por las leyes vigentes del <strong>Estado Plurinacional de Bolivia</strong>. Las
          partes se someten a la jurisdicción de los juzgados y tribunales competentes con asiento en Bolivia.
        </p>
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
