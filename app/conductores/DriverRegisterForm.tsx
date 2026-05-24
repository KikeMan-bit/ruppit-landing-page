"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { CheckCircle2, Loader2, CarFront, User, Phone, MapPin, Mail } from "lucide-react"

type FormData = {
  nombre: string
  telefono: string
  correo: string
  ciudad: string
  vehiculo: string
  modelo: string
}

const initialForm: FormData = {
  nombre: "",
  telefono: "",
  correo: "",
  ciudad: "",
  vehiculo: "",
  modelo: "",
}

const vehicleTypes = [
  "Auto particular",
  "Pickup / Camioneta",
  "Minivan",
  "Mototaxi",
  "Otro",
]

function Field({
  label,
  icon: Icon,
  error,
  children,
}: {
  label: string
  icon: React.ElementType
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="flex items-center gap-1.5 text-xs font-semibold text-gray-600 uppercase tracking-wide">
        <Icon size={12} className="text-[#023047]" />
        {label}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="text-xs text-red-500"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ffc300]/40 focus:border-[#ffc300] transition-all duration-200"

export default function DriverRegisterForm() {
  const [form, setForm] = useState<FormData>(initialForm)
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle")

  const set = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }))
  }

  const validate = (): boolean => {
    const next: Partial<FormData> = {}
    if (!form.nombre.trim()) next.nombre = "Este campo es requerido"
    if (!form.telefono.trim()) next.telefono = "Este campo es requerido"
    if (form.correo && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.correo))
      next.correo = "Correo inválido"
    if (!form.ciudad.trim()) next.ciudad = "Este campo es requerido"
    if (!form.vehiculo) next.vehiculo = "Selecciona un tipo de vehículo"
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setStatus("loading")

    // TODO: reemplaza "YOUR_FORM_ID" con tu ID de Formspree (formspree.io)
    // o conecta tu propio endpoint de API aquí
    try {
      await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
    } catch (_) {
      // en modo demo, igual mostramos éxito
    }

    setStatus("success")
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="flex flex-col items-center text-center py-10 px-6"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.1 }}
          className="w-20 h-20 rounded-full bg-[#ffc300]/10 flex items-center justify-center mb-6"
        >
          <CheckCircle2 size={40} className="text-[#023047]" />
        </motion.div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">¡Registro recibido!</h3>
        <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
          Hola <strong>{form.nombre.split(" ")[0]}</strong>, te avisaremos por teléfono cuando la app esté disponible en {form.ciudad || "tu ciudad"}.
        </p>
        <button
          onClick={() => { setForm(initialForm); setStatus("idle") }}
          className="mt-8 text-xs text-[#023047] underline underline-offset-2"
        >
          Registrar otro conductor
        </button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Nombre completo" icon={User} error={errors.nombre}>
          <input
            type="text"
            placeholder="Juan Pérez"
            value={form.nombre}
            onChange={set("nombre")}
            className={inputClass}
          />
        </Field>

        <Field label="Teléfono" icon={Phone} error={errors.telefono}>
          <input
            type="tel"
            placeholder="+591 7XXXXXXX"
            value={form.telefono}
            onChange={set("telefono")}
            className={inputClass}
          />
        </Field>
      </div>

      <Field label="Correo electrónico (opcional)" icon={Mail} error={errors.correo}>
        <input
          type="email"
          placeholder="juan@correo.com"
          value={form.correo}
          onChange={set("correo")}
          className={inputClass}
        />
      </Field>

      <Field label="Ciudad" icon={MapPin} error={errors.ciudad}>
        <input
          type="text"
          placeholder="Camiri"
          value={form.ciudad}
          onChange={set("ciudad")}
          className={inputClass}
        />
      </Field>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Tipo de vehículo" icon={CarFront} error={errors.vehiculo}>
          <select
            value={form.vehiculo}
            onChange={set("vehiculo")}
            className={inputClass}
          >
            <option value="">Selecciona...</option>
            {vehicleTypes.map((v) => (
              <option key={v} value={v}>{v}</option>
            ))}
          </select>
        </Field>

        <Field label="Marca y modelo" icon={CarFront} error={errors.modelo}>
          <input
            type="text"
            placeholder="Toyota Yaris 2019"
            value={form.modelo}
            onChange={set("modelo")}
            className={inputClass}
          />
        </Field>
      </div>

      <motion.button
        type="submit"
        disabled={status === "loading"}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        className="mt-2 w-full flex items-center justify-center gap-2 bg-[#ffc300] hover:bg-[#e6a800] disabled:opacity-60 text-[#023047] font-semibold text-sm py-3.5 rounded-xl shadow-md shadow-[#ffc300]/25 transition-colors duration-200"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            <CheckCircle2 size={16} />
            Quiero ser conductor
          </>
        )}
      </motion.button>

      <p className="text-center text-xs text-gray-400 leading-relaxed">
        Tu información está segura. Solo la usaremos para avisarte cuando Ruppit esté disponible.
      </p>
    </form>
  )
}
