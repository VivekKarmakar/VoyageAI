function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center p-6">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-slate-700 border-t-blue-500" />
    </div>
  )
}

export default LoadingSpinner