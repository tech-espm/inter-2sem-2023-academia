function waitSwal() {
	Swal.fire({
		html: 'Por favor, aguarde...',
		allowOutsideClick: false,
		allowEscapeKey: false,
		allowEnterKey: false,
		didOpen: () => {
			Swal.showLoading()
		}
	});
}
