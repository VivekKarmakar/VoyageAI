function Modal({ children, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 p-4">
      <div className="rounded-xl bg-slate-900 p-6">
        {children}

        <button
          onClick={onClose}
          className="mt-4 rounded-lg bg-slate-700 px-4 py-2"
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default Modal