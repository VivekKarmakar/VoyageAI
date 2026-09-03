function Input({
  label,
  type = "text",
  placeholder = "",
  value,
  onChange,
}) {
  return (
    <div className="space-y-2">

      {label && (
        <label className="block text-sm font-medium">
          {label}
        </label>
      )}

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-blue-500"
      />

    </div>
  )
}

export default Input