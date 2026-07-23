import { LegalDoc, Section, Subsection, Callout, Table } from "@/app/components/legal/_ui";

export default function TermsAndConditions() {
  return (
    <LegalDoc
      title="Términos y Condiciones"
      version="julio de 2026"
      appliesTo="Todas las personas y negocios que usan Ruppit."
    >

      <Section title="1. Aceptación de los términos">
        <p>
          Al descargar, instalar, acceder o utilizar la aplicación móvil Ruppit (en adelante, «la Aplicación») o el
          sitio web <strong>ruppit.com</strong>, usted (en adelante, «el Usuario») declara haber leído, comprendido y
          aceptado en su totalidad los presentes Términos y Condiciones de Uso, así como nuestra Política de
          Privacidad, la cual forma parte integral de este documento.
        </p>
        <p>
          Si usted no está de acuerdo con alguna de las disposiciones aquí establecidas, deberá abstenerse de utilizar
          la Aplicación y los servicios de Ruppit.
        </p>
        <p>
          Ruppit se reserva el derecho de modificar estos Términos en cualquier momento. Las modificaciones serán
          notificadas a través de la Aplicación o por correo electrónico, y entrarán en vigor a partir de su
          publicación. El uso continuado de la plataforma después de dicha notificación implica la aceptación de los
          cambios.
        </p>
      </Section>

      <Section title="2. Naturaleza del servicio">
        <Subsection title="2.1 Ruppit como intermediario tecnológico">
          <p>
            <strong>Ruppit es exclusivamente una plataforma tecnológica de intermediación.</strong> Ruppit no es una
            empresa de transporte, no presta servicios de transporte de personas y no emplea ni subcontrata a
            conductores.
          </p>
          <p>
            La función de Ruppit se limita a facilitar la conexión entre pasajeros que buscan un servicio de transporte
            y conductores independientes que ofrecen dicho servicio mediante sus propios vehículos. El contrato de
            transporte se celebra directamente entre el pasajero y el conductor, sin que Ruppit sea parte de dicha
            relación contractual.
          </p>
        </Subsection>
        <Subsection title="2.2 Conductores independientes">
          <p>
            Los conductores que operan en la plataforma son trabajadores independientes y actúan en su propio nombre y
            por su propia cuenta. No existe relación laboral, de dependencia, de agencia ni de representación entre
            Ruppit y los conductores. Los conductores son los únicos responsables del cumplimiento de la normativa de
            tránsito, transporte, tributaria y cualquier otra legislación aplicable en Bolivia.
          </p>
        </Subsection>
        <Subsection title="2.3 Alcance geográfico">
          <p>
            Ruppit opera en provincias de Bolivia, con Camiri, Santa Cruz, como ciudad piloto. La disponibilidad del
            servicio puede variar según la zona geográfica y la cantidad de conductores activos en cada área.
          </p>
        </Subsection>
        <Subsection title="2.4 Servicios informativos complementarios">
          <p>
            Además de la intermediación de transporte y delivery, Ruppit puede poner a disposición del Usuario
            contenidos de <strong>carácter meramente informativo y referencial</strong>, como el listado de{" "}
            <strong>farmacias de turno</strong>. Estos contenidos no constituyen una oferta comercial:{" "}
            <strong>
              Ruppit no vende, no dispensa, no distribuye ni intermedia la venta de productos, medicamentos ni bienes de
              ningún tipo.
            </strong>{" "}
            El régimen aplicable a estos servicios se detalla en la cláusula 9.
          </p>
        </Subsection>
      </Section>

      <Section title="3. Registro y gestión de cuenta">
        <Subsection title="3.1 Requisitos para el registro">
          <p>Para utilizar la Aplicación, el Usuario deberá:</p>
          <ul>
            <li>Ser mayor de dieciocho (18) años de edad.</li>
            <li>Proporcionar información veraz, completa y actualizada durante el proceso de registro.</li>
            <li>Disponer de un número de teléfono móvil válido en Bolivia.</li>
            <li>Aceptar los presentes Términos y la Política de Privacidad.</li>
          </ul>
        </Subsection>
        <Subsection title="3.2 Responsabilidad sobre la cuenta">
          <p>
            El Usuario es el único responsable de mantener la confidencialidad de sus credenciales de acceso.
            Cualquier actividad realizada desde su cuenta se considerará realizada por usted, salvo que notifique de
            inmediato a Ruppit sobre un uso no autorizado mediante el correo{" "}
            <a href="mailto:soporte@ruppit.com">soporte@ruppit.com</a>.
          </p>
        </Subsection>
        <Subsection title="3.3 Suspensión y cancelación de cuenta">
          <p>Ruppit podrá suspender, restringir o cancelar la cuenta de cualquier Usuario cuando existan indicios de:</p>
          <ul>
            <li>Violación de estos Términos.</li>
            <li>Conductas fraudulentas o abusivas.</li>
            <li>Riesgo para la seguridad de otros usuarios o conductores.</li>
            <li>Solicitud expresa del propio Usuario.</li>
          </ul>
        </Subsection>
      </Section>

      <Section title="4. Permisos del dispositivo">
        <Subsection title="4.1 Permiso de ubicación">
          <p>
            La Aplicación accede a la ubicación de su dispositivo{" "}
            <strong>únicamente cuando la Aplicación está activa en primer plano o durante un viaje activo.</strong>{" "}
            Ruppit <strong>no accede, no rastrea ni almacena</strong> la ubicación del Usuario cuando la Aplicación
            está cerrada, minimizada fuera de un viaje activo o en segundo plano.
          </p>
          <p>La ubicación se utiliza para:</p>
          <ul>
            <li>Mostrar conductores disponibles cercanos al pasajero.</li>
            <li>Facilitar al conductor la localización del punto de recogida.</li>
            <li>Rastrear el trayecto del viaje en tiempo real.</li>
            <li>Calcular la tarifa sugerida del viaje.</li>
          </ul>
        </Subsection>
        <Subsection title="4.2 Permiso de cámara">
          <p>El acceso a la cámara se utiliza exclusivamente para:</p>
          <ul>
            <li>
              <strong>Pasajeros:</strong> tomar o actualizar foto de perfil y escanear códigos QR para pagos.
            </li>
            <li>
              <strong>Conductores:</strong> foto de perfil, carga de documentos de verificación al registrarse y
              escaneo de códigos QR.
            </li>
          </ul>
          <p>
            La Aplicación <strong>nunca activa la cámara de manera automática</strong> ni en segundo plano. Solo se
            activa cuando el Usuario inicia voluntariamente una acción que lo requiere.
          </p>
        </Subsection>
        <Subsection title="4.3 Notificaciones push">
          <p>Con su autorización, la Aplicación envía notificaciones para:</p>
          <ul>
            <li>Informar sobre el estado de la solicitud de viaje.</li>
            <li>Notificar al conductor sobre nuevas solicitudes.</li>
            <li>Comunicar el inicio y fin del viaje.</li>
            <li>Enviar comunicaciones importantes sobre la cuenta.</li>
          </ul>
          <p>Puede desactivar las notificaciones en cualquier momento desde la configuración de su dispositivo.</p>
        </Subsection>
      </Section>

      <Section title="5. Tarifas y negociación de precios">
        <Subsection title="5.1 Sistema de tarifa propuesta por el pasajero">
          <p>
            Ruppit opera bajo un modelo de negociación libre de precios.{" "}
            <strong>El pasajero es quien propone la tarifa que está dispuesto a pagar por el viaje.</strong> La
            Aplicación podrá mostrar un precio recomendado como referencia orientativa, pero dicho precio es únicamente
            una sugerencia y no es vinculante.
          </p>
        </Subsection>
        <Subsection title="5.2 Aceptación por parte del conductor">
          <p>
            El conductor, al recibir la solicitud con la tarifa propuesta, tiene plena libertad de aceptarla o
            rechazarla sin ninguna consecuencia ni penalización. Ruppit{" "}
            <strong>no impone precios, no establece tarifas mínimas ni aplica tarifas dinámicas.</strong>
          </p>
        </Subsection>
        <Subsection title="5.3 Comisión de Ruppit">
          <p>
            Por cada viaje o pedido completado satisfactoriamente, Ruppit cobra al conductor o repartidor una comisión
            sobre el monto de la operación. Dicha comisión se paga <strong>exclusivamente mediante Monedas Ruppit</strong>,
            conforme al régimen establecido en la cláusula 6 de estos Términos. El porcentaje vigente está disponible en
            la sección de información para conductores dentro de la Aplicación.
          </p>
        </Subsection>
      </Section>

      <Section title="6. Monedas Ruppit">
        <Callout>
          Las Monedas Ruppit son una unidad de crédito interna, de uso exclusivo dentro de la Aplicación y destinada
          únicamente al pago de la comisión de servicio.{" "}
          <strong>
            No constituyen una billetera electrónica, no son dinero ni dinero electrónico, y no son retirables,
            transferibles ni convertibles en efectivo bajo ninguna circunstancia.
          </strong>
        </Callout>

        <Subsection title="6.1 Definición">
          <p>
            Las <strong>Monedas Ruppit</strong> (en adelante, «las Monedas») son una unidad de crédito interna y
            prepagada, registrada en la cuenta del conductor o del repartidor dentro de la Aplicación, cuya única
            función es servir como medio de pago de la comisión de servicio que Ruppit cobra por cada viaje o pedido
            completado a través de la plataforma.
          </p>
          <p>
            Para efectos de estos Términos, se entiende por <strong>repartidor</strong> a la persona natural
            independiente que, mediante la Aplicación, presta servicios de entrega o mensajería (delivery) por cuenta
            propia. Las disposiciones de esta cláusula aplican por igual a conductores y repartidores. Los pasajeros y
            usuarios solicitantes de servicios <strong>no requieren Monedas</strong> para utilizar la Aplicación.
          </p>
        </Subsection>

        <Subsection title="6.2 Naturaleza jurídica: lo que las Monedas no son">
          <p>El Usuario declara conocer y aceptar expresamente que las Monedas <strong>no constituyen</strong>:</p>
          <ul>
            <li>Dinero de curso legal ni sustituto del boliviano (Bs).</li>
            <li>
              Dinero electrónico, billetera móvil o electrónica, cuenta de pago, ni instrumento electrónico de pago
              frente a terceros.
            </li>
            <li>Un depósito, ahorro, crédito, título valor, instrumento de inversión ni promesa de rendimiento.</li>
            <li>
              Un activo virtual o criptoactivo, ni un bien susceptible de comercialización fuera de la plataforma.
            </li>
          </ul>
          <p>
            Las Monedas carecen de todo valor fuera de la Aplicación. Ruppit no es una entidad de intermediación
            financiera ni una empresa de servicios de pago, y no realiza actividades reservadas a entidades
            supervisadas por la Autoridad de Supervisión del Sistema Financiero (ASFI).
          </p>
        </Subsection>

        <Subsection title="6.3 Prohibición de retiro, conversión y transferencia">
          <p>De manera expresa e irrevocable, las Monedas:</p>
          <ul>
            <li>
              <strong>No son retirables.</strong> No pueden ser retiradas, cobradas ni convertidas en efectivo, ni
              abonadas a cuentas bancarias o billeteras móviles.
            </li>
            <li>
              <strong>No son transferibles.</strong> No pueden ser cedidas, vendidas, donadas ni traspasadas a otro
              usuario, cuenta o tercero, ni constituirse en garantía de obligación alguna.
            </li>
            <li>No pueden canjearse por bienes o servicios ajenos a la plataforma.</li>
            <li>No generan intereses, rendimientos, reajustes ni actualización de valor de ningún tipo.</li>
            <li>
              <strong>No son reembolsables</strong>, salvo en los supuestos de error previstos en la cláusula 6.7.
            </li>
          </ul>
          <p>
            En caso de cierre de la cuenta, sea a solicitud del propio Usuario o por decisión de Ruppit conforme a la
            cláusula 3.3, el saldo remanente de Monedas se extingue sin generar derecho a reembolso, compensación ni
            indemnización alguna.
          </p>
        </Subsection>

        <Subsection title="6.4 Recarga mediante QR Simple">
          <p>
            La adquisición de Monedas se realiza exclusivamente mediante <strong>QR Simple</strong>, el estándar
            interoperable de pagos con código QR vigente en Bolivia. El código es generado desde la Aplicación a través
            del <strong>Banco Económico S.A.</strong>, entidad financiera con la que Ruppit mantiene el servicio de
            recaudación, y puede ser pagado desde la aplicación de cualquier entidad financiera boliviana que admita
            pagos por QR Simple.
          </p>
          <ul>
            <li>
              El código QR generado es de <strong>uso único, personal e intransferible</strong>, y está asociado a la
              cuenta que lo solicitó. Ruppit no reconocerá pagos realizados a códigos QR distintos de los generados
              dentro de la Aplicación.
            </li>
            <li>
              El saldo se acredita una vez que el Banco Económico confirma la recepción del pago. Si transcurridas{" "}
              <strong>veinticuatro (24) horas</strong> el saldo no se hubiera acreditado, el Usuario deberá reportarlo
              a <a href="mailto:soporte@ruppit.com">soporte@ruppit.com</a> adjuntando el comprobante de pago.
            </li>
            <li>
              La transacción se procesa íntegramente entre la entidad financiera del Usuario y el Banco Económico.
              Conforme a la cláusula 12.2 y a la Política de Privacidad,{" "}
              <strong>Ruppit no interviene en el procesamiento del pago</strong> y no almacena, no procesa ni tiene
              acceso a datos bancarios: únicamente recibe la confirmación de la operación necesaria para acreditar el
              saldo de Monedas.
            </li>
            <li>
              Las comisiones, límites o cargos que la entidad financiera del Usuario aplique a la transacción son
              ajenos a Ruppit y de exclusiva responsabilidad del Usuario y de dicha entidad.
            </li>
            <li>
              Ruppit podrá sustituir o incorporar otras entidades financieras recaudadoras, informándolo previamente a
              través de la Aplicación, sin que ello altere las demás condiciones de esta cláusula.
            </li>
          </ul>
          <p>
            El valor de adquisición de cada Moneda y los paquetes de recarga disponibles se encuentran publicados de
            forma permanente en la Aplicación, en la sección de saldo del conductor o repartidor.
          </p>
        </Subsection>

        <Subsection title="6.5 Uso del saldo y débito de la comisión">
          <p>
            Por cada viaje o pedido completado satisfactoriamente, Ruppit debita del saldo del conductor o repartidor
            las Monedas equivalentes a la comisión de servicio aplicable, calculada como un porcentaje sobre el monto
            de la operación. Cada débito queda registrado en el historial de movimientos de la Aplicación, con detalle
            de la operación, el monto, el porcentaje aplicado y el saldo resultante.
          </p>
          <p>
            <strong>Mantener saldo positivo es condición para recibir y aceptar solicitudes.</strong> Cuando el saldo
            llegue a cero, la cuenta dejará temporalmente de recibir nuevas solicitudes hasta que se realice una
            recarga. Esta situación no constituye una sanción ni una suspensión de cuenta, y se revierte de forma
            automática al acreditarse el nuevo saldo.
          </p>
        </Subsection>

        <Subsection title="6.6 Programa de lanzamiento y comisión aplicable">
          <p>
            Con motivo del inicio de operaciones de Ruppit en cada ciudad, se aplicará el siguiente esquema:
          </p>
          <Table
            headers={["Período", "Asignación de Monedas", "Comisión aplicable"]}
            rows={[
              [
                "Primer mes de lanzamiento (30 días calendario desde el inicio de operaciones de Ruppit en la ciudad)",
                "20 Monedas Ruppit sin costo, por única vez y por cuenta verificada",
                "1% sobre el monto de cada viaje o pedido completado",
              ],
              [
                "A partir del segundo mes",
                "Sin asignación promocional; el saldo se adquiere por recarga",
                "Porcentaje ordinario determinado por Ruppit conforme al estudio operativo y de mercado",
              ],
            ]}
          />
          <p>
            La asignación de <strong>20 Monedas Ruppit</strong> es de carácter promocional y se otorga por única vez a
            cada cuenta de conductor o repartidor que se encuentre verificada y activa dentro del período de
            lanzamiento. Dichas Monedas son intransferibles, no son canjeables por dinero y no generan derecho a
            reembolso. Salvo que Ruppit indique lo contrario al momento del otorgamiento, las Monedas promocionales no
            utilizadas permanecerán disponibles en el saldo del Usuario y se consumirán con prelación a las Monedas
            adquiridas por recarga.
          </p>
          <p>
            A partir del segundo mes, la comisión será el porcentaje ordinario que Ruppit determine sobre la base de un
            estudio operativo y de mercado que considere, entre otros factores, los costos de operación, el volumen de
            viajes y pedidos, y las condiciones particulares de cada ciudad.{" "}
            <strong>
              Todo cambio en el porcentaje de comisión será comunicado a través de la Aplicación con una antelación
              mínima de siete (7) días calendario a su entrada en vigor.
            </strong>{" "}
            El conductor o repartidor que no esté de acuerdo con el nuevo porcentaje podrá dejar de utilizar la
            plataforma y solicitar el cierre de su cuenta; el uso continuado con posterioridad a la entrada en vigor
            implica su aceptación.
          </p>
          <p>
            Ruppit podrá establecer porcentajes de comisión diferenciados por ciudad, por tipo de servicio (transporte
            de pasajeros o delivery) o por programas promocionales específicos, informándolo siempre a través de la
            Aplicación.
          </p>
        </Subsection>

        <Subsection title="6.7 Errores, ajustes y uso indebido">
          <p>
            Ruppit podrá corregir el saldo de Monedas cuando verifique errores de acreditación, cobros duplicados,
            fallas técnicas o acreditaciones improcedentes. El Usuario que detecte un error deberá reportarlo dentro de
            los <strong>treinta (30) días calendario</strong> siguientes al movimiento observado; verificado el error,
            Ruppit repondrá en el saldo del Usuario las Monedas que correspondan.
          </p>
          <p>
            Constituyen usos indebidos del sistema de Monedas, entre otros, la creación de cuentas múltiples para
            obtener más de una asignación promocional, la simulación de viajes o pedidos, la manipulación de montos y
            cualquier maniobra dirigida a obtener saldo o beneficios de forma fraudulenta. Verificada la conducta,
            Ruppit podrá revocar el saldo promocional, revertir los movimientos indebidos y aplicar las medidas
            previstas en la cláusula 3.3.
          </p>
        </Subsection>
      </Section>

      <Section title="7. Sistema Ruppit Code">
        <Callout>
          El sistema Ruppit Code es exclusivo para la operación en provincias de Bolivia, iniciando en Camiri como
          ciudad piloto. Al solicitar un viaje con un conductor bajo este sistema, el pasajero acepta las condiciones
          descritas a continuación.
        </Callout>
        <Subsection title="7.1 Descripción">
          <p>
            El <strong>Ruppit Code</strong> es un sistema de identificación que permite incorporar conductores y
            vehículos en contextos donde la documentación vehicular oficial puede estar en trámite o no estar
            disponible. A cada conductor se le asigna un código único con el formato <strong>AA##</strong> (por
            ejemplo: AB12, CD34).
          </p>
        </Subsection>
        <Subsection title="7.2 Responsabilidad del conductor con Ruppit Code">
          <p>El conductor registrado bajo este sistema es el único y exclusivo responsable de:</p>
          <ul>
            <li>Cumplir con toda la normativa local, departamental y nacional de tránsito y transporte aplicable.</li>
            <li>
              Gestionar y obtener la documentación legal de su vehículo, incluyendo placa de circulación, SOAT,
              revisión técnica y cualquier otro documento exigido por las autoridades bolivianas.
            </li>
            <li>Cualquier infracción, multa o consecuencia legal derivada de operar sin la documentación requerida.</li>
          </ul>
        </Subsection>
        <Subsection title="7.3 Rol de Ruppit frente al sistema Ruppit Code">
          <p>
            Ruppit actúa exclusivamente como intermediario tecnológico y{" "}
            <strong>no verifica, no garantiza ni avala</strong> que los vehículos registrados bajo el sistema Ruppit
            Code cuenten con placa oficial, SOAT, revisión técnica u otros documentos legales.
          </p>
        </Subsection>
        <Subsection title="7.4 Aceptación expresa del pasajero">
          <p>
            <strong>
              Al solicitar un viaje con un conductor que opera bajo el sistema Ruppit Code, el pasajero declara
              expresamente que:
            </strong>
          </p>
          <ul>
            <li>
              Ha sido debidamente informado de que el vehículo puede no contar con placa oficial, SOAT u otros
              documentos legales vigentes.
            </li>
            <li>Acepta de manera consciente, libre e informada el uso de dicho vehículo.</li>
            <li>Exime a Ruppit de cualquier responsabilidad derivada de esta situación.</li>
          </ul>
        </Subsection>
      </Section>

      <Section title="8. Preferencias del viaje y cargos adicionales">
        <Subsection title="8.1 Preferencias opcionales">
          <p>
            Al solicitar un viaje, el pasajero podrá activar preferencias opcionales para personalizar el servicio.
            La mayoría de preferencias no tienen costo adicional; únicamente la preferencia de{" "}
            <strong>aire acondicionado</strong> suma <strong>Bs 1,00</strong> al precio recomendado del viaje.
          </p>
        </Subsection>
        <Subsection title="8.2 Preferencias disponibles">
          <Table
            headers={["Preferencia", "Descripción", "Cargo adicional"]}
            rows={[
              ["Asiento para bebé", "El pasajero requiere que el vehículo cuente con asiento para bebé o niño.", "Sin cargo"],
              ["Viaje con mascota", "El pasajero viajará acompañado de una mascota.", "Sin cargo"],
              ["Parrilla en el techo", "El pasajero necesita transportar equipaje o carga en parrilla exterior.", "Sin cargo"],
              ["Aire acondicionado", "El pasajero prefiere un vehículo con aire acondicionado activo.", "+ Bs 1,00"],
            ]}
          />
        </Subsection>
        <Subsection title="8.3 Precio final y responsabilidad">
          <p>
            El precio con preferencias incluidas es una sugerencia. El pasajero conserva la libertad de modificar el
            monto ofrecido, y el conductor es libre de aceptar o rechazar la oferta. Ruppit no garantiza que el
            conductor cuente con las condiciones correspondientes a la preferencia solicitada; el pasajero deberá
            verificarlo antes de iniciar el viaje.
          </p>
        </Subsection>
      </Section>

      <Section title="9. Farmacias de turno (servicio informativo)">
        <Callout>
          La sección «Farmacias de turno» es un servicio de{" "}
          <strong>información pública, gratuito y referencial</strong>.{" "}
          <strong>
            Ruppit no es una farmacia, no vende ni dispensa medicamentos ni productos farmacéuticos, y no participa en
            ninguna transacción entre el Usuario y la farmacia.
          </strong>
        </Callout>

        <Subsection title="9.1 Descripción y naturaleza del servicio">
          <p>
            La Aplicación puede mostrar al Usuario un listado de las farmacias que se encuentran de turno en su
            localidad, con datos tales como nombre comercial, dirección, ubicación aproximada en el mapa, horario de
            turno y, cuando esté disponible, número de contacto.
          </p>
          <p>
            Este servicio se presta <strong>exclusivamente con fines informativos y de orientación</strong>, sin costo
            alguno para el Usuario ni para la farmacia listada, y no genera derecho ni obligación contractual entre
            Ruppit y ninguna de las partes.
          </p>
        </Subsection>

        <Subsection title="9.2 Ruppit no comercializa productos farmacéuticos">
          <p>El Usuario declara conocer y aceptar expresamente que Ruppit:</p>
          <ul>
            <li>
              <strong>No vende, no dispensa, no distribuye ni almacena</strong> medicamentos, productos farmacéuticos,
              dispositivos médicos, insumos, suplementos ni sustancias controladas.
            </li>
            <li>
              <strong>No fija ni interviene en los precios</strong> de los productos ofrecidos por las farmacias, ni
              percibe comisión, participación o contraprestación alguna por las ventas que estas realicen.
            </li>
            <li>
              <strong>No mantiene relación laboral, societaria, de agencia ni de representación</strong> con las
              farmacias listadas, las cuales son establecimientos independientes y ajenos a Ruppit.
            </li>
            <li>
              No cuenta ni requiere contar con autorización sanitaria de funcionamiento como establecimiento
              farmacéutico, por no ejercer actividad farmacéutica alguna.
            </li>
          </ul>
          <p>
            La compraventa de cualquier producto se perfecciona{" "}
            <strong>directa y exclusivamente entre el Usuario y la farmacia</strong>, siendo esta última la única
            responsable frente al Usuario y frente a las autoridades sanitarias competentes.
          </p>
        </Subsection>

        <Subsection title="9.3 Origen y actualización de la información">
          <p>
            La información sobre roles de turno proviene de <strong>fuentes públicas o de terceros</strong>, tales como
            las disposiciones de la autoridad de salud competente, los colegios o asociaciones de profesionales
            farmacéuticos, los gobiernos municipales o la información facilitada por la propia farmacia.
          </p>
          <p>
            Los roles de turno son establecidos por la autoridad competente y pueden ser modificados, suspendidos o
            reasignados sin previo aviso.{" "}
            <strong>
              Ruppit no genera, no aprueba ni controla dicha información y no garantiza su exactitud, vigencia,
              integridad ni disponibilidad.
            </strong>
          </p>
          <p>
            <strong>
              Se recomienda al Usuario confirmar telefónicamente con la farmacia su apertura y la disponibilidad del
              producto antes de trasladarse.
            </strong>
          </p>
        </Subsection>

        <Subsection title="9.4 La información no constituye asesoramiento médico ni farmacéutico">
          <p>
            El contenido mostrado tiene carácter estrictamente logístico (qué establecimiento está abierto y dónde).{" "}
            <strong>
              Ruppit no recomienda medicamentos, no sugiere tratamientos, no indica dosis ni sustituye la consulta con
              un profesional médico o farmacéutico habilitado.
            </strong>
          </p>
          <p>
            Ante una emergencia de salud, el Usuario debe acudir de inmediato a un centro asistencial o comunicarse con
            los servicios de emergencia correspondientes.{" "}
            <strong>La Aplicación no es un servicio de emergencia ni de atención médica.</strong>
          </p>
        </Subsection>

        <Subsection title="9.5 Exclusión de responsabilidad">
          <p>Ruppit no será responsable, en ningún caso, por:</p>
          <ul>
            <li>
              Información desactualizada, incompleta o errónea respecto del rol de turno, la dirección, el horario o el
              teléfono de una farmacia.
            </li>
            <li>
              El cierre, traslado, cambio de turno o inexistencia del establecimiento al momento en que el Usuario
              acuda a él.
            </li>
            <li>La falta de existencias, el precio, la calidad, la autenticidad, el estado o la idoneidad de los productos.</li>
            <li>La atención, el trato o las condiciones de servicio brindadas por la farmacia o su personal.</li>
            <li>
              Cualquier consecuencia derivada del uso, consumo o adquisición de medicamentos o productos obtenidos de
              una farmacia listada.
            </li>
            <li>Los traslados que el Usuario realice hacia el establecimiento, por cualquier medio.</li>
          </ul>
        </Subsection>

        <Subsection title="9.6 Relación con el servicio de delivery">
          <p>
            Si el Usuario solicita el envío de una compra desde una farmacia mediante el servicio de delivery de la
            Aplicación, el <strong>repartidor actúa por cuenta y encargo exclusivo del Usuario</strong> para el recojo o
            la compra del producto. Ruppit continúa sin ser vendedor ni proveedor del producto y su intervención se
            limita a la intermediación tecnológica del envío.
          </p>
          <ul>
            <li>
              Cuando el producto requiera <strong>receta médica</strong>, el Usuario es el único responsable de contar
              con ella y de proporcionarla. La farmacia decide de forma autónoma si dispensa o no el producto conforme
              a la normativa sanitaria boliviana.
            </li>
            <li>
              El repartidor <strong>no está facultado para asesorar, sustituir productos ni tomar decisiones</strong>{" "}
              sobre la compra.
            </li>
            <li>
              Ruppit podrá restringir el envío de productos cuya distribución esté prohibida o sujeta a condiciones
              especiales por la legislación vigente.
            </li>
          </ul>
        </Subsection>

        <Subsection title="9.7 Ausencia de publicidad y orden del listado">
          <p>
            El listado se ordena conforme a criterios objetivos, como el rol de turno vigente y la cercanía respecto de
            la ubicación del Usuario. <strong>Ninguna farmacia paga por aparecer ni por ocupar una mejor posición.</strong>{" "}
            En caso de que en el futuro se incorpore contenido patrocinado, este será identificado de forma clara y
            visible como tal.
          </p>
        </Subsection>

        <Subsection title="9.8 Correcciones, inclusión y retiro">
          <p>
            Cualquier farmacia, autoridad o Usuario que detecte información inexacta puede solicitar su corrección
            escribiendo a <a href="mailto:soporte@ruppit.com">soporte@ruppit.com</a>. Del mismo modo, una farmacia
            puede solicitar su inclusión en el listado o su retiro del mismo, sin expresión de causa. Ruppit atenderá
            estas solicitudes en un plazo razonable desde su recepción.
          </p>
        </Subsection>
      </Section>

      <Section title="10. Selección de pasajeros">
        <p>
          Los conductores tienen plena libertad de aceptar o rechazar cualquier solicitud de viaje basándose en la
          tarifa propuesta y las preferencias del viaje.{" "}
          <strong>
            Queda expresamente prohibida la discriminación por motivos de raza, etnia, género, orientación sexual,
            religión, discapacidad, edad, apariencia física o cualquier otra condición protegida por la legislación
            boliviana.
          </strong>
        </p>
        <p>
          Ruppit podrá sancionar, suspender o dar de baja a conductores que incurran en conductas discriminatorias
          debidamente reportadas y verificadas.
        </p>
      </Section>

      <Section title="11. Cancelaciones">
        <Subsection title="11.1 Cancelación por el pasajero">
          <p>
            El pasajero podrá cancelar la solicitud de viaje antes de que el conductor haya llegado al punto de
            recogida dentro del tiempo indicado en la Aplicación sin consecuencias. Cancelaciones reiteradas o abusivas
            podrán dar lugar a restricciones temporales en la cuenta.
          </p>
        </Subsection>
        <Subsection title="11.2 Cancelación por el conductor">
          <p>
            El conductor podrá cancelar un viaje aceptado antes de iniciar el recorrido. Cancelaciones reiteradas sin
            causa justificada podrán ser causal de revisión del estado del conductor en la plataforma.
          </p>
        </Subsection>
        <Subsection title="11.3 No presentación del pasajero">
          <p>
            Si el pasajero no se presenta al punto de recogida dentro del tiempo razonable indicado en la Aplicación,
            el conductor podrá cancelar el viaje sin penalización.
          </p>
        </Subsection>
      </Section>

      <Section title="12. Métodos de pago">
        <Subsection title="12.1 Formas de pago aceptadas">
          <ul>
            <li>
              <strong>Efectivo:</strong> el pasajero paga al conductor directamente en efectivo al finalizar el viaje.
            </li>
            <li>
              <strong>Código QR:</strong> el pasajero puede realizar el pago mediante escaneo de código QR. Este
              método es compatible con cualquier entidad bancaria boliviana que admita pagos por QR.
            </li>
          </ul>
        </Subsection>
        <Subsection title="12.2 Datos bancarios y seguridad">
          <p>
            <strong>
              Ruppit no almacena, no procesa ni tiene acceso a datos bancarios, números de tarjeta, cuentas o
              información financiera sensible del Usuario.
            </strong>{" "}
            Los pagos por QR se procesan directamente a través de la entidad bancaria del Usuario, sujetos a los
            propios términos y condiciones de seguridad de dicha entidad. Lo anterior aplica igualmente a las recargas
            de Monedas Ruppit descritas en la cláusula 6.4.
          </p>
        </Subsection>
      </Section>

      <Section title="13. Conducta del usuario">
        <Subsection title="13.1 Obligaciones del pasajero">
          <p>El pasajero se compromete a:</p>
          <ul>
            <li>Tratar al conductor con respeto y dignidad.</li>
            <li>No solicitar al conductor que cometa infracciones de tránsito.</li>
            <li>No transportar sustancias ilegales, armas u objetos prohibidos.</li>
            <li>No dañar el vehículo del conductor. En caso de daños, el pasajero será responsable de su reparación.</li>
            <li>No fumar dentro del vehículo sin el consentimiento del conductor.</li>
          </ul>
        </Subsection>
        <Subsection title="13.2 Obligaciones del conductor">
          <p>El conductor se compromete a:</p>
          <ul>
            <li>Tratar al pasajero con respeto y profesionalismo.</li>
            <li>Mantener su vehículo en condiciones seguras e higiénicas.</li>
            <li>Respetar las normas de tránsito bolivianas.</li>
            <li>No conducir bajo los efectos del alcohol u otras sustancias.</li>
            <li>No desviar la ruta acordada sin consentimiento del pasajero.</li>
            <li>Respetar el precio acordado al inicio del viaje.</li>
          </ul>
        </Subsection>
        <Subsection title="13.3 Conductas prohibidas para todos los usuarios">
          <ul>
            <li>Utilizar la Aplicación con fines fraudulentos o para actividades ilícitas.</li>
            <li>Crear cuentas falsas o utilizar la identidad de terceros.</li>
            <li>Acosar, amenazar o intimidar a otros usuarios.</li>
            <li>Publicar reseñas falsas o calificaciones manipuladas.</li>
            <li>Intentar vulnerar la seguridad o el funcionamiento de la plataforma.</li>
            <li>
              Contactar a conductores o pasajeros fuera de la plataforma para evadir la comisión de Ruppit.
            </li>
          </ul>
        </Subsection>
      </Section>

      <Section title="14. Responsabilidades y limitaciones">
        <p>En la máxima medida permitida por la legislación boliviana vigente, Ruppit no será responsable por:</p>
        <ul>
          <li>
            Accidentes de tránsito, lesiones, muerte o daños materiales ocurridos durante el viaje, dado que la
            relación de transporte es exclusiva entre pasajero y conductor.
          </li>
          <li>
            El incumplimiento por parte de conductores de la normativa de tránsito, vehicular o de transporte.
          </li>
          <li>
            La falta de documentación legal del vehículo, incluyendo en los casos comprendidos por el sistema Ruppit
            Code.
          </li>
          <li>Pérdida, robo u olvido de objetos personales durante el viaje.</li>
          <li>
            La exactitud, vigencia o disponibilidad de la información de farmacias de turno, así como por los productos
            adquiridos en dichos establecimientos, conforme a la cláusula 9.
          </li>
          <li>Daños indirectos, incidentales, consecuentes o punitivos de cualquier naturaleza.</li>
          <li>
            Interrupciones, errores o indisponibilidad temporal del servicio por razones técnicas o causas de fuerza
            mayor.
          </li>
        </ul>
      </Section>

      <Section title="15. Menores de edad">
        <p>
          La Aplicación está dirigida exclusivamente a personas mayores de dieciocho (18) años.{" "}
          <strong>Queda prohibido el registro y uso independiente de la Aplicación por parte de menores de edad.</strong>
        </p>
        <p>
          Un menor de edad podrá utilizar el servicio únicamente cuando viaje acompañado por un adulto titular de la
          cuenta que asume plena responsabilidad por el menor durante el viaje, incluyendo el uso de sistemas de
          retención adecuados conforme a la normativa boliviana.
        </p>
      </Section>

      <Section title="16. Resolución de disputas">
        <Subsection title="16.1 Contacto directo como primera instancia">
          <p>
            Ante cualquier inconveniente, el Usuario deberá en primera instancia intentar resolverlo directamente con
            la otra parte.
          </p>
        </Subsection>
        <Subsection title="16.2 Mediación de Ruppit">
          <p>
            Si la disputa no puede resolverse directamente, el Usuario podrá reportarla a través de la sección
            «Soporte» en la Aplicación o al correo <a href="mailto:soporte@ruppit.com">soporte@ruppit.com</a>. Ruppit
            analizará el reporte y podrá actuar como mediador entre las partes, sin que ello implique asumir
            responsabilidad sobre el resultado.
          </p>
        </Subsection>
      </Section>

      <Section title="17. Historial de viajes y datos guardados">
        <ul>
          <li>
            Tu historial de viajes está disponible en la Aplicación mientras tu cuenta esté activa.
          </li>
          <li>
            Las ubicaciones guardadas (casa, trabajo u otras) permanecen en tu cuenta hasta que las elimines
            manualmente o cierres tu cuenta.
          </li>
          <li>
            El historial de viajes se conserva por <strong>3 años</strong> por motivos legales conforme a lo descrito
            en la Política de Privacidad.
          </li>
          <li>
            La ubicación en tiempo real durante el viaje se elimina al concluir el mismo. Solo se guarda el origen y
            destino del viaje.
          </li>
        </ul>
      </Section>

      <Section title="18. Ley aplicable y jurisdicción">
        <p>
          Los presentes Términos se rigen exclusivamente por las leyes vigentes del{" "}
          <strong>Estado Plurinacional de Bolivia</strong>, incluyendo la Ley N.° 164 — Ley General de
          Telecomunicaciones, Tecnologías de Información y Comunicación, la normativa civil boliviana en materia de
          contratos y responsabilidad, la normativa de protección al consumidor y la normativa de tránsito y transporte
          aplicable.
        </p>
        <p>
          Para controversias que no puedan resolverse por las vías descritas, las partes se someten a la jurisdicción
          de los juzgados y tribunales competentes con asiento en Bolivia.
        </p>
      </Section>

      <Section title="19. Contacto">
        <p>Para consultas, reclamos o reportes relacionados con estos Términos, contáctenos a través de:</p>
        <p>
          <strong>Ruppit</strong>
          <br />
          Correo:{" "}
          <a href="mailto:soporte@ruppit.com" className="text-primary underline underline-offset-4">
            soporte@ruppit.com
          </a>
          <br />
          Sitio web: ruppit.com
          <br />
          Operaciones: Camiri, Santa Cruz, Bolivia
        </p>
      </Section>
    </LegalDoc>
  );
}
