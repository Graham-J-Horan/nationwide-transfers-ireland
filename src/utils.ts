const formatDate = (date: Date | string) => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(new Date(date))
}


function capitalize (str: string): string {
  if (typeof str !== 'string' || str.length === 0){
    return str;

}

return str.charAt(0).toUpperCase() + str.slice(1)
}

export {formatDate, capitalize}