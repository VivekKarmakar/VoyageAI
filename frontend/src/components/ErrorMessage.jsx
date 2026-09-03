function ErrorMessage({
  message = "Something went wrong.",
  onRetry,
}) {
  return (
    <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-red-300">

      <p>{message}</p>

      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-3 underline"
        >
          Try Again
        </button>
      )}

    </div>
  )
}

export default ErrorMessage