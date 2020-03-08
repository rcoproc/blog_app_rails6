// app/javascript/trix-editor-overrides.js
window.addEventListener("trix-file-accept", function(event) {
  const acceptedTypes = ['image/jpeg', 'image/png', 'image/svg+xml', 'application/pdf']
  if (!acceptedTypes.includes(event.file.type)) {
    event.preventDefault()
    alert("Only support attachment of jpeg or png files")
  }

  const maxFileSize = 2048 * 1024 // 1MB 
  if (event.file.size > maxFileSize) {
    event.preventDefault()
    alert("Only support attachment files upto size 2MB!")
  }
})
