const Helpers = {
    numberToCurrency: function (value) {
        return new Intl.NumberFormat('es-PE', {
            style: 'currency',
            currency: 'PEN'
        }).format(value)
    }
}

export default Helpers