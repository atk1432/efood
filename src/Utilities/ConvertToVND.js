function ToVND(currency) {

	return new Intl.NumberFormat(
        'vi-VI', 
        { style: 'currency', currency: 'VND' }
    ).format( currency )
}

export default ToVND;