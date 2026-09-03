export const formatCurrency = (amount) => {
  return `₹${Number(amount || 0).toLocaleString("en-IN")}`
}

export const formatDate = (date) => {
  return new Date(date).toLocaleDateString()
}